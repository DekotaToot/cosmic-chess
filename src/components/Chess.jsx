import { useGLTF } from '@react-three/drei'
import Piece from './Piece.jsx'
import { RigidBody } from '@react-three/rapier'

export function Chess(props) {
	const { nodes, materials } = useGLTF('/chess-model/chess_set_1k.gltf')



	return (
		<group {...props} dispose={null}>
			<RigidBody type='fixed' colliders='trimesh'>
				<mesh geometry={nodes.board.geometry} material={materials.chess_set_board} />
			</RigidBody>
			<Piece>
				<mesh geometry={nodes.piece_rook_white_01.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, 0.202]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_01.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, 0.202]} />
			</Piece>
			<group position={[0.202, 0.017, 0.086]}>
				<Piece>
					<mesh geometry={nodes.Cylinder003.geometry} material={materials.chess_set_pieces_white} />
				</Piece>
			</group>
			<Piece>
				<mesh geometry={nodes.piece_queen_white.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, 0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_king_white.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, -0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_knight_white_01.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, 0.144]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_knight_white_02.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, -0.145]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_rook_white_02.geometry} material={materials.chess_set_pieces_white} position={[0.202, 0.017, -0.203]} />
			</Piece>
			<group position={[0.202, 0.017, -0.087]}>
				<Piece>
					<mesh geometry={nodes.Cylinder001.geometry} material={materials.chess_set_pieces_white} />
				</Piece>
			</group>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_02.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, 0.144]} />
			</Piece>
			<Piece >
				<mesh geometry={nodes.piece_pawn_white_03.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, 0.086]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_04.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, 0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_05.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, -0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_06.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, -0.087]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_07.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, -0.145]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_white_08.geometry} material={materials.chess_set_pieces_white} position={[0.144, 0.017, -0.203]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_rook_black_01.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, -0.203]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_01.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, -0.203]} />
			</Piece>
			<group position={[-0.202, 0.017, -0.087]}>
				<Piece>
					<mesh geometry={nodes.Cylinder022.geometry} material={materials.chess_set_pieces_black} />
				</Piece>
			</group>
			<Piece>
				<mesh geometry={nodes.piece_queen_black.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, 0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_king_black.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, -0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_knight_black_01.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, -0.145]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_knight_black_02.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, 0.144]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_rook_black_02.geometry} material={materials.chess_set_pieces_black} position={[-0.202, 0.017, 0.202]} />
			</Piece>
			<group position={[-0.202, 0.017, 0.086]}>
				<Piece>
					<mesh geometry={nodes.Cylinder025.geometry} material={materials.chess_set_pieces_black} />
				</Piece>
			</group>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_02.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, -0.145]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_03.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, -0.087]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_04.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, -0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_05.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, 0.029]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_06.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, 0.086]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_07.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, 0.144]} />
			</Piece>
			<Piece>
				<mesh geometry={nodes.piece_pawn_black_08.geometry} material={materials.chess_set_pieces_black} position={[-0.144, 0.017, 0.202]} />
			</Piece>
		</group>
	)
}

useGLTF.preload('/chess_set_1k.gltf')
