import React, { Component } from 'react';
import './App.css';

class MyButton extends Component {
  render(){
    return <button 
              //onclick chama a propriedade handleclick do mybutton passando o proprio label do mybutton
              onClick={() => { this.props.handleClick(this.props.label); }}>
                {this.props.label}
           </button>    
  }
}

class MyLabel extends Component {
  render(){
    return <p>Cliquei no: {this.props.text}</p>    
  }
}

class MyLogo extends Component {
  render(){
    return <img src={require('./logo.png')} width="100" height="50" />   
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: '',
    };
  }
  setLabelText = (labelText) => {
    //função assícrona, o segundo parâmetro da função setState é um callback
    //this.setState({labelText: labelText}, () => { //executa quando terminar a setar o state } );
    this.setState({labelText: labelText});
  }   
  render() {
    return (
      <div className="App">
          <div className="logo">
            <MyLogo />
        </div>
        <MyLabel text={this.state.labelText} />        
        <MyButton handleClick={this.setLabelText} label="Botão 1" />
        <MyButton handleClick={this.setLabelText} label="Botão 2" />
        <MyButton handleClick={this.setLabelText} label="Botão 3" />
        <MyButton handleClick={this.setLabelText} label="Botão 4" />
      </div>
    );
  }
}

export default App;
