import React, { useEffect, useRef } from 'react';
import './ParticlesBg.css';

const ParticlesBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ============================
    // 1. PARTÍCULAS REDONDAS
    // ============================
    class CircleParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1.5;          // más grandes: 1.5–5.5px
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.55 + 0.15;     // más visibles
        this.opacityDir = (Math.random() > 0.5 ? 1 : -1) * 0.005;
        // 60% naranjas, 40% blancas
        this.isOrange = Math.random() < 0.6;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.opacityDir;
        if (this.opacity > 0.7 || this.opacity < 0.1) this.opacityDir *= -1;
        if (
          this.x < -20 || this.x > canvas.width + 20 ||
          this.y < -20 || this.y > canvas.height + 20
        ) { this.reset(); }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isOrange
          ? `rgba(255, 95, 10, ${this.opacity})`
          : `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();

        // Halo naranja suave en las redondas grandes
        if (this.isOrange && this.radius > 3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            this.x, this.y, this.radius * 0.5,
            this.x, this.y, this.radius * 2.2
          );
          grad.addColorStop(0, `rgba(255, 85, 0, 0.18)`);
          grad.addColorStop(1, `rgba(255, 85, 0, 0)`);
          ctx.fillStyle = grad;
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // ============================
    // 2. PARTÍCULAS LINEALES URBANAS
    // ============================
    class UrbanParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.type = Math.floor(Math.random() * 4);
        this.length = Math.random() * 40 + 14;          // más grandes: 14–54px
        this.width = Math.random() * 1.8 + 0.6;
        this.angle = Math.random() * Math.PI * 2;
        this.speedX = (Math.random() - 0.5) * 0.55;
        this.speedY = (Math.random() - 0.5) * 0.55;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.opacity = Math.random() * 0.5 + 0.1;      // más visibles
        this.opacityDir = (Math.random() > 0.5 ? 1 : -1) * 0.003;
        // 50% naranjas, 50% blancas
        this.isOrange = Math.random() < 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;
        this.opacity += this.opacityDir;
        if (this.opacity > 0.6 || this.opacity < 0.07) this.opacityDir *= -1;
        if (
          this.x < -60 || this.x > canvas.width + 60 ||
          this.y < -60 || this.y > canvas.height + 60
        ) { this.reset(); }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.isOrange
          ? `rgba(255, 90, 5, ${this.opacity})`
          : `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'square';
        ctx.beginPath();

        switch (this.type) {
          case 0: // Línea larga — spray
            ctx.moveTo(-this.length / 2, 0);
            ctx.lineTo(this.length / 2, 0);
            ctx.stroke();
            break;
          case 1: // Guión doble — aerosol
            ctx.moveTo(-this.length / 2, -2.5);
            ctx.lineTo(this.length / 2, -2.5);
            ctx.moveTo(-this.length / 4, 2.5);
            ctx.lineTo(this.length / 4, 2.5);
            ctx.stroke();
            break;
          case 2: // Cruz urbana — graffiti
            ctx.moveTo(-this.length / 2, 0);
            ctx.lineTo(this.length / 2, 0);
            ctx.moveTo(0, -this.length / 2);
            ctx.lineTo(0, this.length / 2);
            ctx.stroke();
            break;
          case 3: // Segmento roto — streetwear
            ctx.moveTo(-this.length / 2, -this.length / 4);
            ctx.lineTo(0, this.length / 4);
            ctx.moveTo(0, this.length / 4);
            ctx.lineTo(this.length / 2, -this.length / 4);
            ctx.stroke();
            break;
        }
        ctx.restore();
      }
    }

    // ============================
    // INSTANCIAS
    // ============================
    const circles = Array.from({ length: 50 }, () => new CircleParticle());
    const urbans  = Array.from({ length: 55 }, () => new UrbanParticle());
    const all = [...circles, ...urbans];

    // ============================
    // LÍNEAS DE CONEXIÓN NARANJA
    // ============================
    const drawConnections = () => {
      const MAX_DIST = 130;
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const dx = all[i].x - all[j].x;
          const dy = all[i].y - all[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12;
            ctx.strokeStyle = `rgba(255, 85, 0, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.moveTo(all[i].x, all[i].y);
            ctx.lineTo(all[j].x, all[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      for (const p of all) {
        p.update();
        p.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default ParticlesBg;
