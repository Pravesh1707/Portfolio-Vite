import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion'

const CanvasLoader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span>
        <p style={{fontsize:14, color:"#f1f1f1", fontWeight:800, marginTop:40}}>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;