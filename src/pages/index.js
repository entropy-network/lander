import * as React from 'react';
import '../styles/stripes.css';
const IndexPage = () => {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-stripes opacity-60"></div>
      <div className="text-center z-10">
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
