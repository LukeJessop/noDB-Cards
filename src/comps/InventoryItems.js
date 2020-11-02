import React from 'react'

const InventoryItems = (props) =>{
    const {color} = props.cards
    const colorInv = () =>{
        if(color === "white"){
            return "white"
        }else if(color === "lightBlue"){
            return "LB"
        }else if(color === "Blue"){
            return "blue"
        }else if(color === "Red"){
            return "red"
        }else if(color === "Yellow"){
            return "yellow"
        }
    }

    

    return(
        <div className={`card ${colorInv()}`}>
            <h2 className="price">${props.cards.price}</h2>
        </div>
    )
}

export default InventoryItems