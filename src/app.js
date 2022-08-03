import fs from 'fs'
import Game from "./publisher/sevenBoom.js"
import getFunctions from "./common/playersDetails.js"
import Player from "./common/players.js"
import BOOM from "./clients/BOOM.js"

function sevenBoomService() {

    const array = fs.readFileSync('data.txt', 'utf8')
    const data = JSON.parse(array)
    if (data.length>0){
        return
    }

    const maxNumber = getFunctions.getMaxNumber()
    const game = new Game(maxNumber)
    let playerDetails = getFunctions.getNameAndAge()
    const player1 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player1)
    playerDetails = getFunctions.getNameAndAge()
    const player2 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player2)
    playerDetails = getFunctions.getNameAndAge()
    const player3 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player3)

    /* fs.writeFile('data.txt',JSON.stringify([
        maxNumber,
        game._players
    ]), {flag: 'w+'}, err => {
        if (err) console.error(err)
    }) */


    for(let player of game._players){
        console.log(`Player Name: ${player._name}, Age: ${player._age}`);
    }

    game.on('count', BOOM)

    game.startCount()
}



export default sevenBoomService