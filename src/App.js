import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import Chicago from './components/Chicago';
//import Met from './components/Met';
//import Header from './components/Header';
//import Footer from './components/Footer';
import Model from './models/Model';

function App() {	
  return (
	<>
		<Canvas camera={{ position: [30, 20, 45], fov: 25 }}>
			<Suspense fallback={null}>
			<Model />
			</Suspense>
		</Canvas>
		
	</>
)
}	
export default App;
