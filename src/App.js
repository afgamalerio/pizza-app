import React from 'react';
import './App.css';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "",
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getOrder()
    }, 2000)
  }

  componentDidUpdate() {
    console.log("El componente se actualizó")
  }  
  
  toggleOrder = () => {
    if (this.state.show) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
      this.getOrder();
    }
  }

  getOrder = () => {
    let newOrder;
    newOrder = prompt("Ingrese su pedido");
    this.setState({order: newOrder})
  }

  render() {
    let myOrder;
    let textoBoton = "Tomar Pedido";

    if (this.state.show) {
      myOrder = <Child food = {this.state.order}/>
      textoBoton = "Cancelar Pedido";
    };

    return (
      <div>
        {myOrder}
        <button type="button" onClick={this.toggleOrder}>{textoBoton}</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Tu pedido ha sido cancelado.")
  }

  render() {
    return (
      <h1>Tu pedido: {this.props.food}</h1>
    )
  }
}



