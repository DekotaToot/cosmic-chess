import { Box, DragControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody, vec3 } from '@react-three/rapier'
import { useEffect, useRef, useState } from 'react'
import { Matrix4, Vector3 } from 'three'
import { ModifiedDragControls } from './ModifiedDragControls.jsx'


export default function Piece({children, ...props}) {

	const ref = useRef()

	const [bodyType, setBodyType] = useState('dynamic')

	return <>
		<RigidBody
			ref={ref}
			canSleep={false}
			colliders='hull'
			type={bodyType}
		>
			<ModifiedDragControls
				axisLock='y'
				physicsBody={ref}
				autoTransform={true}
				onDragStart={() => {
					setBodyType('kinematicPosition')
				}}
				onDragEnd={() => {
					setBodyType('dynamic')
				}}
				onDrag={(localMatrix) => {
					let vec = new Vector3()
					vec.setFromMatrixPosition(localMatrix)
					ref.current.setNextKinematicTranslation(vec)
				}}
			>
				{children}
			</ModifiedDragControls>
		</RigidBody>
	</>
}