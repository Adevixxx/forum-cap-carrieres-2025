// fileName: HeroExperience.jsx

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import { Room } from "./Room";
import HeroLights from "./HeroLights";


const HeroExperience = () => {
  // Uniquement chargé sur desktop/tablette (voir Hero.jsx)
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Lumière d’ambiance bleutée. RÉDUIRE L'INTENSITÉ CAR LA HDR VA ÉCLAIRER. */}
      <ambientLight intensity={0.05} color="#1a1a40" />

      {/* Contrôles : rotation limitée, pas de zoom */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        {/* CORRECTION : L'ENVIRONNEMENT DOIT ÊTRE DANS LE SUSPENSE (car il charge un fichier HDR asynchrone) */}
        <Environment 
          files="/models/neutral2.hdr" // Le chemin de votre fichier HDR
          background={false}
        />


        <HeroLights />
        
        <group
          scale={0.8}
          position={[0, -3, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          

          <Room/>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;