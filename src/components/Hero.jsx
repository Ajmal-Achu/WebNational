import React, { useState, useEffect, Suspense, lazy } from 'react';

const LazySpline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Suspense fallback={<LoadingFallback />}>
        <div className={`w-full h-full ${isMobile ? 'scale-[0.7] origin-center' : ''}`}>
          <LazySpline
            scene="https://prod.spline.design/4Wp4shAuXKM2Nv8z/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </Suspense>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our 3D World</h1>
          <p className="text-xl md:text-2xl">Explore the interactive experience</p>
        </div>
      </div>
    </div>
  );
};

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
    <p className="text-2xl">Loading 3D scene...</p>
  </div>
);

export default Hero;

