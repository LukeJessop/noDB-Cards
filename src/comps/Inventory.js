import React, {Component} from 'react'
import axios from 'axios'
import InventoryItems from "./InventoryItems";


class Inventory extends Component {
    constructor(){
        super()
        this.state={
            displayInv: [],
            money: 10
        }
    }

    componentDidMount(){
        axios
        .get('/api/inventory')
        .then((res) => {
            this.setState({
                displayInv: []
            })
        })
        .catch((err) => console.log("HERE", err))
    }

    addToInv(id){
        axios.post(`/api/inventory/${id}`).then((res) => {
            this.setState({
                displayInv: res.data
            })
        })
    }

    updateMoney(){
        this.state.money -= 10
    }

    render(){
        const visCards = this.state.displayInv.map((cards) => <InventoryItems key={cards.id} cards={cards} />)
        const {random} = this.props
        return(
            <div className="inventory">
                <header>
                    <h1>INVENTORY</h1>
                    <div className="button" 
                        onClick={() => {
                            let i = Math.floor(Math.random() * 13)
                            if(i === 0){
                                i += 1
                            }
                            random.push(i)
                            console.log(random)
                            this.addToInv(i)
                            this.updateMoney()
                        }}>TRY YOUR LUCK! price: $10</div>
                    <h1>Money:${this.state.money}</h1>
                </header>
                <div className="item">{visCards}</div>
            </div>
        )
    }
}

export default Inventory