import { useRef } from 'react';
export default function LogButtonClicks() {
  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  return <button onClick={handle}>Click me</button>;
}