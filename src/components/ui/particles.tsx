import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
}

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  color = "#ffffff",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseSize = 50;
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current && canvasContainerRef.current) {
      context.current = canvasRef.current.getContext("2d");
      window.addEventListener("resize", initCanvas);
      window.addEventListener("mousemove", onMouseMove);
      initCanvas();
      animate();
    }
    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const initCanvas = () => {
    if (canvasRef.current && canvasContainerRef.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      if (context.current) {
        context.current.scale(dpr, dpr);
      }
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        circles.current.push(circleParams());
      }
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside = x >= 0 && x <= w && y >= 0 && y <= h;
      if (inside) {
        mousePosition.current.x = x;
        mousePosition.current.y = y;
      }
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const hexToRgb = (hex: string) => {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex.split("").map((char) => char + char).join("");
    }
    const hexInt = parseInt(hex, 16);
    const red = (hexInt >> 16) & 255;
    const green = (hexInt >> 8) & 255;
    const blue = hexInt & 255;
    return [red, green, blue];
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      const rgb = hexToRgb(color);
      context.current.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = circles.current.length;
    for (let i = 0; i < particleCount; i++) {
      const circle = circles.current[i];

      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const isOut = edge.some((e) => e < 0);

      if (isOut) {
        circle.x = Math.floor(Math.random() * canvasSize.current.w);
        circle.y = Math.floor(Math.random() * canvasSize.current.h);
        circle.translateX = 0;
        circle.translateY = 0;
      }

      const dx = mousePosition.current.x - (circle.x + circle.translateX);
      const dy = mousePosition.current.y - (circle.y + circle.translateY);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseSize) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouseSize - distance) / mouseSize;
        const directionX = forceDirectionX * force * staticity;
        const directionY = forceDirectionY * force * staticity;
        circle.translateX += directionX;
        circle.translateY += directionY;
      } else {
        circle.translateX -= circle.translateX / ease;
        circle.translateY -= circle.translateY / ease;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.alpha += (circle.targetAlpha - circle.alpha) * 0.02;

      drawCircle(circle, true);
    }
    window.requestAnimationFrame(drawParticles);
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle) => drawCircle(circle));
    window.requestAnimationFrame(drawParticles);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true" style={{pointerEvents: 'none'}}>
      <canvas ref={canvasRef} style={{width: '100%', height: '100%'}}/>
    </div>
  );
}
