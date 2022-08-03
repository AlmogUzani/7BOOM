import EventEmitter from 'events'
import EndWithSeven from '../clients/endWithSeven.js'
import MulOfSeven from '../clients/mulOfSeven.js'
import BOOM from '../clients/BOOM.js'
const multi = new MulOfSeven()
const endWith = new EndWithSeven()

class Game extends EventEmitter {
    constructor(limitNumber) {
        super()
        this._firstNumber = 1
        this._players = []
        this._limitNumber = limitNumber
    }
    startCount() {
        for (let i = this._firstNumber ; i <= this._limitNumber ; i++){
            BOOM(i)
            this.emit('count', i)
        }
    }
}

export default Game