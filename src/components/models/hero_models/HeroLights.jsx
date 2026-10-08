// fileName: HeroLights.jsx

import { DirectionalLightHelper } from "three";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";

const HeroLights = () => {
  const lightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    // Pour le debug : visualisation du faisceau
    // const helper = new DirectionalLightHelper(lightRef.current, 3, 0xffcc88);
    // scene.add(helper);
    // return () => scene.remove(helper);
  }, [scene]);

  return (
    <>
      {/* Lumière principale simulant le spot en haut à droite */}
      <directionalLight
        ref={lightRef}
        position={[10, 15, 5]} // Vient du coin supérieur droit
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Légère lumière ambiante bleutée pour adoucir les ombres */}
      <ambientLight intensity={0.3} color="#bcd2f6" />

      {/* Rappel de lumière rebondie en bas à gauche (réflexion) */}
      <directionalLight position={[-5, -3, 3]} intensity={0.4} color="#8cbcff" />

      {/* ✅ MODIFICATION : Lumière ciblée pour le texte "Atlantique"
        On la place en bas (Y=-2) et devant (Z=5) pour qu'elle
        "débouche" le texte noir sans brûler le logo bleu.
      */}
      <pointLight
        position={[0, -2, 5]} // Centrée, en bas, et devant le logo
        intensity={1.0}        // Intensité modérée
        color="#FFFFFF"        // Lumière blanche neutre
        distance={10}          // La lumière s'arrête après 10 unités
        decay={2}              // Atténuation physique correcte
      />
    </>
  );
};

export default HeroLights;