
async function init() {
	const { Map3DElement } = await google.maps.importLibrary("maps3d");

	const map3DElement = new Map3DElement({
		center: { lat: 43.6425, lng: -79.3871, altitude: 400 },
		range: 1000,
		tilt: 60,
		disableDefaultUI: true,
	});

	document.body.append(map3DElement);
}

init();
