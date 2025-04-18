import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Globe = ({ className }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [1, 1, 1],
      markerColor: [0.00, 0.37, 0.80],
      glowColor: [1, 1, 1],
      markers: [
        { location: [27.1536, -13.2033], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: 1 }}
      className={className}
    />
  );
};

export default Globe;
