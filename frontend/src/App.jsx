import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/db-test")
    .then((response)=>response.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error)=>{
      console.error(error);
    })
  }, []);

  return (
    <div>
      <h1>FASTAPI + REACT</h1>
      {
        data && (
          <div>
            <p>{data.message}</p>
            <p>Resultado: {data.result}</p>
          </div>
        )
      }
    </div>
  );
}

export default App
