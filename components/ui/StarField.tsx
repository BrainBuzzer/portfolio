import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  color: string;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars: Star[] = [];
    const numStars = 200;
    const colors = ["#ffffff", "#00f3ff", "#bd00ff", "#0aff00"];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width - width / 2,
            y: Math.random() * height - height / 2,
            z: Math.random() * width,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    const animate = () => {
        if (!ctx || !canvas) return;
        
        // Fill with deep space black but with slight trail effect
        ctx.fillStyle = "rgba(3, 3, 3, 0.4)";
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;

        stars.forEach((star) => {
            // Move star closer
            star.z -= 0.5; // speed

            if (star.z <= 0) {
                star.z = width;
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
            }

            const x = (star.x / star.z) * width + cx;
            const y = (star.y / star.z) * height + cy;
            const radius = Math.max(0.1, 1.5 * (1 - star.z / width));

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-space-950"
    />
  );
}
