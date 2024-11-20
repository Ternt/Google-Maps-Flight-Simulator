import * as THREE from 'three';
import { Controller } from '@jdultra/ultra-globe';

const rotation180 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

// https://github.com/ebeaufay/ultraglobedemos/blob/main/demos/customController/src/planeController.js
class PlaneController extends Controller {
    constructor(camera, domElement, map, object3D) {
        super(camera, domElement, map);

        this.forward = new THREE.Vector3();
        this.up = new THREE.Vector3();
        this.right = new THREE.Vector3();

        this.speed = new THREE.Vector3();
        this.acceleration = 0.1;

        this.maxRollSpeed = 0.02;
        this.maxPitchSpeed = 0.01;
        this.maxYawSpeed = 0.01;

        this.rollSpeed = 0;
        this.rollStrength = 0.92;
        this.rollAcceleration = 0;

        this.pitchSpeed = 0;
        this.pitchStrength = 1.0;
        this.pitchAcceleration = 0;

        this.yawSpeed = 0;
        this.yawStrength = 1.0;
        this.yawAcceleration = 0;

		this.rollDecelerationModifier = 1.0;
		this.pitchDecelerationModifier = 0.95;
		this.yawDecelerationModifier = 0.85;

        this.roll = new THREE.Quaternion();
        this.pitch = new THREE.Quaternion();
        this.yaw = new THREE.Quaternion();
        this.horizonUp = new THREE.Quaternion();
        this.horizonRight = new THREE.Quaternion();

        this.cameraOffset = new THREE.Vector3(0, 7, -30);
        this.targetCameraPosition = new THREE.Vector3();
        this.targetCameraQuaternion = new THREE.Quaternion();

        this.object3D = object3D;
        this.clock = new THREE.Clock();

		this.controller = { };

		console.log(this.object3D);
    }

    _handleEvent(eventName, e) {
		switch (eventName) {
            case 'keydown': this._keyDown(e); break;
            case 'keyup': this._keyUp(e); break;
        }
		this._controlHandler();
        super._handleEvent(eventName, e);
    }

	_controlHandler() {
		// 87: KeyW
		// 83: KeyS
		// 68: KeyD
		// 65: KeyA
		// 69: KeyE
		// 81: KeyQ
		// 38: ArrowUp
		// 40: ArrowDown
		// 39: ArrowLeft
		// 37: ArrowRight

		if (this.controller[68] && this.controller[65]) {
			this.rollSpeed = 0;
		}
		else if (!(this.controller[68] || this.controller[65])) {
			if (!(this.controller[87] || this.controller[38] || 
				this.controller[83] || this.controller[40] ||
				this.controller[69] || this.controller[81])) 
			{
				this.rollAcceleration = this.rollDecelerationModifier * -this.rollAcceleration;
			}
		}
		else if (this.controller[68]) {
			this.rollAcceleration = 0.0018;
		}
		else if (this.controller[65]) {
			this.rollAcceleration = -0.0018;
		}


		if (this.controller[87] && this.controller[83]) {
			this.pitchSpeed = 0;
		}
		else if (!(this.controller[87] || this.controller[38] || this.controller[83] || this.controller[40])) {
			if (!(this.controller[68] || this.controller[37] || 
				this.controller[65] || this.controller[39] ||
				this.controller[69] || this.controller[81])) 
			{
				this.pitchAcceleration = this.pitchDecelerationModifier * -this.pitchAcceleration;
			}
		}
		else if (this.controller[87]) {
			this.pitchAcceleration = 0.00075;
		}
		else if (this.controller[83]) {
			this.pitchAcceleration = -0.00075;
		}


		if (this.controller[69] && this.controller[81]) {
			this.yawSpeed = 0;
		}
		else if (!(this.controller[69] || this.controller[81])) {
			if (!(this.controller[68] || this.controller[37] || 
				this.controller[65] || this.controller[39] || 
				this.controller[87] || this.controller[38] || 
				this.controller[83] || this.controller[40])) 
			{
				this.yawAcceleration = this.yawDecelerationModifier * -this.yawAcceleration;
			}
		}
		else if (this.controller[81]) {
			this.yawAcceleration = 0.0004;
		}
		else if (this.controller[69]) {
			this.yawAcceleration = -0.0004;
		}
	}
	
    _keyDown(event) {
		this.controller[event.keyCode] = {};
    }

    _keyUp(event) {
		this.controller[event.keyCode] = false;
    }

    _update() {
        this.speed.multiplyScalar(0.85);
        this.rollSpeed
            = THREE.MathUtils.clamp(
                this.rollSpeed * this.rollStrength + this.rollAcceleration, -this.maxRollSpeed, this.maxRollSpeed);
        if (this.rollSpeed > -0.001 && this.rollSpeed < 0.001) { this.rollAcceleration = 0 ; this.rollSpeed = 0; }

        this.pitchSpeed
            = THREE.MathUtils.clamp(
                this.pitchSpeed * this.pitchStrength + this.pitchAcceleration, -this.maxPitchSpeed, this.maxPitchSpeed);
        if (this.pitchSpeed > -0.00045 && this.pitchSpeed < 0.00045) { this.pitchAcceleration = 0 ; this.pitchSpeed = 0; }

        this.yawSpeed
            = THREE.MathUtils.clamp(
                this.yawSpeed * this.yawStrength + this.yawAcceleration, -this.maxYawSpeed, this.maxYawSpeed);
        if (this.yawSpeed > -0.0004 && this.yawSpeed < 0.0004) { this.yawAcceleration = 0 ; this.yawSpeed = 0; }

        this.forward.set(0, 0, 1).applyQuaternion(this.object3D.quaternion).normalize();
		this.right.set(1, 0, 0).applyQuaternion(this.object3D.quaternion).normalize();
		this.up.set(0, 1, 0).applyQuaternion(this.object3D.quaternion).normalize();

        this.roll.setFromAxisAngle(this.forward, this.rollSpeed);
        this.pitch.setFromAxisAngle(this.right, this.pitchSpeed);
        this.yaw.setFromAxisAngle(this.up, this.yawSpeed);

        this.yaw.multiply(this.pitch).multiply(this.roll);

        this.object3D.quaternion.multiplyQuaternions(this.yaw, this.object3D.quaternion);

        this.forward.multiplyScalar(this.acceleration);
        this.speed.add(this.forward);
        this.object3D.position.add(this.speed);

        this.object3D.updateMatrix();

        this.targetCameraPosition.copy(this.cameraOffset);
        this.targetCameraPosition.applyQuaternion(this.object3D.quaternion);
        this.targetCameraPosition.add(this.object3D.position);
        this.camera.position.lerp(this.targetCameraPosition, 0.1);

        this.targetCameraQuaternion.multiplyQuaternions(this.object3D.quaternion, rotation180);
        this.camera.quaternion.slerp(this.targetCameraQuaternion, 0.035);
        this.camera.up.set(0,1,0).applyQuaternion(this.camera.quaternion).normalize();
    }

    _dispose(){
        if(this.uiContainer){
            this.uiContainer.parentElement.removeChild(this.uiContainer);
        }
        super._dispose();
    }
} export { PlaneController }
