import './App.css';
import React, {Component} from 'react'
import CardInv from './comps/CardInv'
import Inventory from './comps/Inventory'
import axios from "axios";


class App extends Component {
  constructor(){
    super()
    this.state = {
      randomNum: []
    }
  }

  componentDidMount(){
    axios
    .get('/api/cards')
    .then((res) => {
      this.setState({team: res.data})
    })
    .catch((err) => console.log(err))
  }
  

  render(){
    return (
      <div className="App">
        <Inventory money={this.state.money} random={this.state.randomNum}/>
        <CardInv random={this.state.randomNum}/>
      </div>
    );
  }
}

export default App;
