const cards = require("./cards.json")
let personalInventory = []

module.exports ={
    getInventory: (req, res) => {
        console.log("hello", req)
        return res.status(200).send(personalInventory)
    },
    
    getCardInv: (req, res) => {
        return res.status(200).send(cards)
    },
    addToInv: (req, res) => {
        const {id} = req.params;
        const item = cards.find((card) => card.id === +id)

        personalInventory.push(item)

        return res.status(200).send(personalInventory)
    },
    upgradeCard: (req, res) => {
        ///FIGURE OUT WHAT SHOULD GO HERE
        
        
        ///FIGURE OUT WHAT SHOULD GO HERE
        return res.status(200).send(personalInventory)
    },
    sellCard: (req,res) => {
        const {id} = req.params;
        const item = cards.find((card) => card.id === +id)

        personalInventory.splice(item, 1)

        return res.status(200).send(personalInventory)
    }
}