import { Environment, Lightformer, OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Chess } from './Chess.jsx'

export default function Setting() {

	return (
		<>
			<OrbitControls 
				makeDefault
				enablePan={false}
				minDistance={.45}
				maxDistance={.6}
				maxPolarAngle={1.3}
			/>
			<Environment>
				<Lightformer
					position={[-.1, 1, .1]}
					rotation={[Math.PI / 2, 0, 0]}
					form='ring'
					intensity={2}
				/>
				<Lightformer
					position={[1, .1, .1]}
					rotation={[0, Math.PI / 2, 0]}
					scale={.5}
					form='circle'
				/>
				<Lightformer
					position={[-1, .1, .1]}
					rotation={[0, Math.PI / 2, 0]}
					scale={.5}
					form='circle'
				/>
				<Lightformer />
			</Environment>
			<Stars count={1000} factor={2} />
			<Physics>
				<Chess />
			</Physics>
		</>
	)
}