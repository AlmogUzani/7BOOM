import EventEmitter from 'events'

class game extends EventEmitter {
    constructor(limitNumber) {
        super()
        this._firstNumber = 1
        this._limitNumber = limitNumber
    }
    startCount() {
        for (let i = this._firstNumber ; i <= this._limitNumber ; i++){
            (this.emit('count', i))
        }
    }
    
}

export default game