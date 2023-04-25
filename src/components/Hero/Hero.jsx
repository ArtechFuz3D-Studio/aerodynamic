import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Spline scene="https://prod.spline.design/Js8UmetWsMYMzKXZ/scene.splinecode" />
    </Suspense>
  );
}
