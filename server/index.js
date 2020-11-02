const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./controller.js')
const port = 5000

app.use(express.json())
app.use(cors())

app.get('/api/cards', ctrl.getCardInv)//get CARD inventory
app.get('/api/inventory', ctrl.getInventory)//get YOUR inventory
app.post(`/api/inventory/:id`, ctrl.addToInv)//add to YOUR inventory
app.put('/api/inventory/:index', ctrl.upgradeCard)//double click to upgrade
app.delete('/api/inventory/:index', ctrl.sellCard)//one click to sell the card




app.listen(port, () => console.log(`Server running on ${port}`))

