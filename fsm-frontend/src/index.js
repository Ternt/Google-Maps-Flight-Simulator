import { 
	Map, 
	GoogleMap3DTileLayer,
	ObjectLayer
} from '@jdultra/ultra-globe';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import earthElevationImage from './assets/earth_elevation.jpg'
import earthTexture from './assets/catstare.jpg'

import { PlaneController } from './planeController'
import plane_glbmodel from './assets/stylized_ww1_plane.glb'

main();
function main() {

	let map = new Map({
		divID: 'screen',
		clock: false,
		shadows: false,
		debug: false,
		detailMultiplier: 0.001,
		ocean: false,
		atmosphere: true,
		atmosphereDensity: 1.0,
		sun: false,
		rings:false,
		space: true,
	});
	map.ultraClock.setDate(new Date());

	let googleMaps3DTiles = new GoogleMap3DTileLayer({
		id: 3,
		name: "Google Maps 3D Tiles",
		visible: true,
		apiKey: "@@API_KEY", // put your api key here
		loadOutsideView: false,
		geometricErrorMultiplier: 1.0,
		loadingStrategy: "INCREMENT",
		displayCopyright: true,
	});
	map.setLayer(googleMaps3DTiles, 0);

	console.log(map);

	const loader = new GLTFLoader();
	loader.load(
		plane_glbmodel,
		function(gltf) {
			const mixer = new THREE.AnimationMixer(gltf.scene);
			mixer.clipAction(gltf.animations[0]).play();
			const clock = new THREE.Clock();
			function animate() {
				requestAnimationFrame(animate);
				mixer.update(clock.getDelta());
			}
			animate();

			const planeLayer = new ObjectLayer({
				id: 2,
				name: "plane",
				object: gltf.scene,
				longitude: 0,
				latitude: 0,
				height: 0,
				yaw: 0,
				pitch: 0,
				roll: 0,
				scaleX: 15.0,
				scaleY: 15.0,
				scaleZ: 15.0,
			})
			map.setLayer(planeLayer, 2);

			map.controller.clear();

			planeLayer.move(139.756193,  35.678942, 200, 0,0,0, 15.0, 15.0, 15.0);
			map.moveAndLookAt({ x: 139.756193, y: 35.678942, z: 1000 }, { x: 139.756193, y: 35.678942, z: 200 });

			map.controller.append(new PlaneController(map.camera, map.domContainer, map, planeLayer.object3D));
		},
		function (xhr) {console.log("loading...");},
		function(err) {console.error(err)}
	);
}
