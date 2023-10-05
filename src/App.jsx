import { Boton } from './componentes/boton.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState("Verdadero")
  return (
  <><div>
    <h1>
       {estado}
    </h1>
    <button onClick={()=>{
      if(estado == "Verdadero"){
        setEstado("Falso");
      }else{
        setEstado("Verdadero");
      }
    }}
    >
      Cambiar estado
    </button>
    <Boton texto={'Ayuda'}></Boton>
    </div>
    </>
  );
}

export default App;
