import "./App.css";

import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-500">
          🎉 Tailwind CSS is working!
        </h1>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Hello Tailwind + Vite + React!</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
