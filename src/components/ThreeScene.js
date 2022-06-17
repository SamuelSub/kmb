import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import modelContext from '../context/ModelContext';

const ThreeScene = () => {

  const { objectRotationRight, objectRotationLeft, objectMovementRight, objectMovementLeft } = useContext(modelContext)
  const sceneRef = useRef(null)
  const scene = useRef(null);

  useEffect(() => {
    if(!scene.current && sceneRef.current) {
      scene.current = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0x78C091, 1)
      renderer.setSize( window.innerWidth, window.innerHeight );
      // scene.background = new THREE.Color();
      sceneRef.current.appendChild( renderer.domElement );
      
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.current.add(ambientLight)
      const directionalLight = new THREE.DirectionalLight(0x404040);
      scene.current.add(directionalLight)

      let objectModel;
      const loader = new GLTFLoader();
      loader.load('car.glb', (gltf) => {
        objectModel = gltf.scene
        scene.current.add(objectModel)
        objectModel.position.x = -2
        objectModel.position.y = -1
      })
      
      camera.position.z = 5;
      const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene.current, camera );
      };
      animate();
    }
    
  }, [sceneRef.current])


  useEffect(() => {
    const car = scene.current.getObjectByName('Sketchfab_Scene')
    if(car) {
      car.rotation.y = car.rotation.y - 0.1
    }
    
  }, [objectRotationLeft])

  useEffect(() => {
    const car = scene.current.getObjectByName('Sketchfab_Scene')
    if(car) {
      car.rotation.y = car.rotation.y + 0.1
    }
    
  }, [objectRotationRight])

  useEffect(() => {
    const car = scene.current.getObjectByName('Sketchfab_Scene')
    if(car) {
      car.position.x = car.position.x + 0.1
    }
    
  }, [objectMovementRight])

  useEffect(() => {
    const car = scene.current.getObjectByName('Sketchfab_Scene')
    if(car) {
      car.position.x = car.position.x - 0.1
    }
    
  }, [objectMovementLeft])

  return (
    <Box ref={sceneRef} id='canvas'/>
  )
}

export default ThreeScene
