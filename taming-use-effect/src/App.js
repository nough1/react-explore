import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LifecycleDemo from './LifecycleDemo';
import Top from './Top';
import ThreeCounts from './ThreeCounts';
import PropChangeWatch from './PropChangeWatch';
import Demo from './PropChangeWatch';
import UseRefTest from './UseRef';
import FetchDataTest from './FetchData';

function App() {
   // Set up a piece of state, so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
      <Top/>
      <ThreeCounts/>
      <Demo/>
      <UseRefTest/>
      <FetchDataTest/>
    </>
  );
}

export default App;
