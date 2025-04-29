import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
const Backdrop = () => {

  const shadows = useRef()

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.20}
      scale={3}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >

      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />


    </AccumulativeShadows>
  )
}

// const Backdrop = () => {
//   const shadows = useRef()

//   return (
//     <AccumulativeShadows
//       ref={shadows}
//       temporal
//       frames={60}
//       alphaTest={0.09} // Increased to make shadows less opaque
//       scale={2} // Reduced scale to focus shadows on the T-shirt
//       rotation={[Math.PI / 2, 0, 0]}
//       position={[0, -0.5, 0]} // Adjusted position to align with the T-shirt
//     >
//       <RandomizedLight
//         amount={4}
//         radius={6} // Reduced radius for more focused light
//         intensity={0.4} // Reduced intensity to soften shadows
//         ambient={0.4} // Increased ambient light for a brighter scene
//         position={[5, 5, -5]} // Adjusted position to focus on the T-shirt
//       />

//       <RandomizedLight
//         amount={4}
//         radius={4} // Reduced radius for the second light
//         intensity={0.3} // Reduced intensity for softer shadows
//         ambient={0.5} // Increased ambient light for balance
//         position={[-5, 5, -5]} // Adjusted position for symmetry
//       />
//     </AccumulativeShadows>
//   )
// }

export default Backdrop