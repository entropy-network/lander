import React, { useEffect } from 'react';
import * as THREE from 'three';
import '../styles/stripes.css'; // Ensure your CSS is properly imported

const IndexPage = () => {
  useEffect(() => {
    let scene, camera, renderer;
    let lineGroup = new THREE.Group(); // Use a Group to hold lines

    function initThree() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('three-canvas').appendChild(renderer.domElement);

      // Create lines
      for (let i = 0; i < 50; i++) {
        let material = new THREE.LineBasicMaterial({ color: 0xffffff });
        let geometry = new THREE.BufferGeometry();

        // Create a line with random start and end points
        const vertices = new Float32Array([
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200, // Vertex 1 (x, y, z)
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200, // Vertex 2 (x, y, z)
        ]);
        geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(vertices, 3)
        );

        let line = new THREE.Line(geometry, material);
        lineGroup.add(line); // Add each line to the group
      }

      scene.add(lineGroup); // Add the group to the scene

      window.addEventListener('resize', onWindowResize, false);
    }

    function animate() {
      requestAnimationFrame(animate);

      // Simple animation: rotate the group of lines
      lineGroup.rotation.x += 0.005;
      lineGroup.rotation.y += 0.005;

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    initThree();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.remove(); // Cleanup
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-sans relative overflow-hidden">
      <div
        id="three-canvas"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.62,
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-stripes opacity-60"
        style={{ zIndex: 2 }}
      ></div>
      <div className="text-center z-10 relative" style={{ zIndex: 3 }}>
        <h1 className="text-4xl font-light mb-0">
          ENTROPY<span className="text-red-500 italic">{'{'}</span>
          <span className="text-red-500 italic">labs</span>
          <span className="text-red-500 italic">{'}'}</span>
        </h1>
        <p className="text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
          Verifying AI models with our novel ZkML rollup network
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <title>
    ENTROPY{'{'}labs{'}'}
  </title>
);
