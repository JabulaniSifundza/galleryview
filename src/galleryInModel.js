import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import {useGLTF, PerspectiveCamera, OrbitControls, Loader, Html} from '@react-three/drei';
import Chicago from './components/Chicago';
//import Met from './components/Met';
//import Header from './components/Header';
//import Footer from './components/Footer';
//import Model from './models/Model';

export function Model(props) {
	const { nodes, materials } = useGLTF('/model.gltf')
	return (
	  <group {...props} dispose={null}>
		<mesh geometry={nodes.Cove_Lights.geometry} material={materials.Spot_Lights} position={[0.05, 3.4, 6.54]} scale={0.1} />
		<mesh geometry={nodes.Room.geometry} material={materials['Material.001']} />
		<Html className="gallerWrapper" position={[0, 1, 0]} transform occlude>
		<div>
			<Chicago />
		</div>
		</Html>
	  </group>
	)
  }

function App() {	
  return (
	<div className="container">	
		<Canvas camera={{ position: [0, 0.90, 5.50], fov: 50 }}>
			<Suspense fallback={null}>
				<ambientLight intensity={0.1} />
				<pointLight position={[10, 10, 50]} />
				<Model />
				<OrbitControls />
			</Suspense>
		</Canvas>
		<Loader />
	</div>
	)
}	
export default App;
