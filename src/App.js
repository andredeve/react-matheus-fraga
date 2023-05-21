import React, {Component} from "react";


class Equipe extends Component{
  render(){
    return(
      <div>
        
        <h1>{this.props.nome}</h1>

      </div>
    );
  };
}

function App(){
  return(
    <div>
      <h1>Bem Vindo Ao Sistema</h1>
      <Equipe nome="André"/>
    </div>
  );
}

export default App;