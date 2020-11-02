import React, {Component} from 'react'
import Cards from './Cards'
import axios from 'axios'

class CardInv extends Component {
    constructor(){
        super()
        this.state= {
            cardDisplay: [],
        }
    }

    componentDidMount(){
        axios
        .get('/api/cards')
        .then((res) => {
            this.setState({
                cardDisplay: res.data
            })
        })
        .catch((err) => console.log("HERE", err))
    }

   
    render(){
        const visCards = this.state.cardDisplay.map((cards) => <Cards key={cards.id} cards={cards} />)
        let {random} = this.props
        return(
            <div className="cardInv">
                <div className="cardInventory">{visCards}</div>
            </div>
       )
    }
 }
export default CardInv