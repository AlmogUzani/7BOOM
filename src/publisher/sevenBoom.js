import EventEmitter from 'events'

class Game extends EventEmitter {
    constructor(limitNumber) {
        super()
        this._firstNumber = 1
        this._players = []
        this._limitNumber = limitNumber
    }
    startCount() {
        let counter = 0
        for (let i = this._firstNumber ; i <= this._limitNumber ; i++){
            counter++
            if (counter===3) counter=0
            this.emit('count', [this._players[counter]._name, i])
        }
    }
}

export default Game