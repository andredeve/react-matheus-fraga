import React from "react";


const BemVindo = (prop) =>{
  return(
    <div>
      <h1>Bem Vindo {prop.nome}</h1>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>Bem Vindo Ao Sistema</h1>
      <BemVindo nome="Teste"/>
    </div>
  );
}

export default App;