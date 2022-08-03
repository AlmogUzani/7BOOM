import EventEmitter from 'events'


class game extends EventEmitter {
    constructor(limitNumber) {
        super()
        this._firstNumber = 1
        this._limitNumber = limitNumber
    }
    startCount() {
        for (let i = this._firstNumber ; i <= this._limitNumber ; i++){
            if (this.mulOfSeven(i)) {this.emit('x7', i)}
            if (this.endWithSeven(i)) {this.emit('with7', i)}
        }
    }
    mulOfSeven(num) {
        return (!(num % 7))
    }
    endWithSeven(num) {
        return (num % 10 === 7)
    }
}

export default game