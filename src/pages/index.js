import React, { useEffect } from 'react';
import * as THREE from 'three';
import '../styles/stripes.css'; // Ensure your CSS is properly imported

const IndexPage = () => {
  useEffect(() => {
    // Three.js setup
    let scene, camera, renderer, lines;
    init();
    animate();

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true }); // Make background transparent
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('three-canvas').appendChild(renderer.domElement); // Attach to a div element

      lines = new Array(50).fill().map(() => createLine());
      lines.forEach(line => scene.add(line));

      window.addEventListener('resize', onWindowResize, false);
    }

    function createLine() {
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const points = [];
      points.push(new THREE.Vector3(-1, 0, 0));
      points.push(new THREE.Vector3(0, 1, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.Line(geometry, material);
    }

    function animate() {
      requestAnimationFrame(animate);
      lines.forEach(line => {
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.remove();
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-sans relative overflow-hidden">
      <div id="three-canvas" className="absolute inset-0"></div>{' '}
      {/* Three.js canvas container */}
      <div className="absolute inset-0 bg-stripes opacity-60"></div>{' '}
      {/* Stripes background */}
      <div className="text-center z-10 relative">
        {' '}
        {/* Ensure content is positioned above both backgrounds */}
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
