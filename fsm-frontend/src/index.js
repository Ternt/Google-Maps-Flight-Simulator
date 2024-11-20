import { 
	Map, 
	SimpleElevationLayer,
	SingleImageElevationLayer,
	SingleImageImageryLayer, 
	GoogleMap3DTileLayer,
	RandomCloudsLayer,
	ObjectLayer
} from '@jdultra/ultra-globe';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

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
		atmosphereDensity: 0.5,
		sun: true,
		rings:false,
		space: true,
	});
	map.ultraClock.setDate(new Date());

	// let earthElevation = new SingleImageElevationLayer({
	// 	id: 0,
	// 	name: "singleImageEarthElevation",
	// 	bounds: [-180, -90, 180, 90],
	// 	url: earthElevationImage,
	// 	layer: "1",
	// 	visible: true,
	// 	min: -100,
	// 	max: 8800
	// });
	// map.setLayer(earthElevation, 0);
	//
	// let imageLayer = new SingleImageImageryLayer({
	// 	id: 1,
	// 	name: "earth texture",
	// 	bounds: [-180, -90, 180, 90],
	// 	url: earthTexture,
	// 	visible: true,
	// });
	// map.setLayer(imageLayer, 1);

	let googleMaps3DTiles = new GoogleMap3DTileLayer({
		id: 3,
		name: "Google Maps 3D Tiles",
		visible: true,
		apiKey: "@@API_KEY",
		loadOutsideView: false,
		geometricErrorMultiplier: 0.1,
		loadingStrategy: "IMMEDIATE",
		displayCopyright: true,
	});
	map.setLayer(googleMaps3DTiles, 0);

	const cityLocations = [
		{
			name:"Paris",
			planePosition: { x: 2.3514, y: 48.8575, z: 200 },
			cameraStart: { x: 2.3514, y: 48.8575, z: 1000 }
		},
		{
			name: "Brussels",
			planePosition: { x: 4.354989, y: 50.844681, z: 200 },
			cameraStart: { x: 4.354989, y: 50.844681, z: 1000 }
		},
		{
			name:"Tokyo",
			planePosition: { x: 139.756193, y: 35.678942, z: 200 },
			cameraStart: { x: 139.756193, y: 35.678942, z: 1000 }
		},
		{
			name:"Cape-Town",
			planePosition: { x: 18.596782, y: -33.971668, z: 200 },
			cameraStart: { x: 18.596782, y: -33.971668, z: 1000 }
		},
		{
			name:"Grand Canyon",
			planePosition: { x: -112.111246, y: 36.098287, z: 1500 },
			cameraStart: { x: -112.111246, y: 36.098287, z: 2000 }
		},
		{
			name:"Rio",
			planePosition: { x: -43.313679, y: -22.916812, z: 500 },
			cameraStart: { x: -43.313679, y: -22.916812, z: 1000 }
		}
	];
	
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

			map.controller.append(new PlaneController(map.camera, map.domContainer, map, planeLayer.object3D, _isMobileDevice()));
		},
		function (xhr) {console.log("loading...");},
		function(err) {console.error(err)}
	);

	const stats = initStats();

	animate();
	function animate() {
		stats.update();
		requestAnimationFrame(animate);
	}
}

function _isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function initStats() {
	const stats = new Stats();
	document.body.appendChild(stats.dom);
	return stats;
}
