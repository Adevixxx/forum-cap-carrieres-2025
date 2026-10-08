import React from "react";
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export function Room(props) {
  const { scene } = useGLTF("/models/logo-optimized.glb");

  // ✅ Détecte la taille de l’écran
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // ✅ Ajuste position / échelle selon la taille d’écran
  const scale = 0.5;
  const position = isMobile ? [0, 1.5, 0] : isTablet ? [1, 2.5, 0] : [2, 3, -2];
  const rotation = [0, 1.2, 0];

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      {...props}
    />
  );
}

useGLTF.preload("/models/logo-optimized.glb");
