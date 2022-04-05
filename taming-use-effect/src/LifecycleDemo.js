import { useEffect } from "react";

function LifecycleDemo() {
    // Pass useEffect a function
    useEffect(() => {
      // This gets called after every render, by default
      // (the first one, and every one after that)
      console.log('render!');
      console.log('render2!');
  
      // If you want to implement componentWillUnmount,
      // return a function from here, and React will call
      // it prior to unmounting.
      return () => console.log('unmounting...');
    })
  
    return "I'm a lifecycle demo";
  }

  export default LifecycleDemo;
  