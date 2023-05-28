import React, {Component} from "react";


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Matheus"
    };
  }


  render(){
    return(
      <div>
        {this.state.nome}
      </div>
    );
  }
}

export default App;