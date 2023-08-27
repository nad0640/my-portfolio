import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Prince = () => {
  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/scene.gltf`);

  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.1 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef}
          position={[0, -10, -5 ]}
          rotation={[0,-1.8, 0]}
          scale={[4.5, 4.5, 4.5]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Prince;
