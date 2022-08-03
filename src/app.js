import Game from "./publisher/sevenBoom.js"
import getFunctions from "./common/playersDetails.js"
import Player from "./common/players.js"

function sevenBoomService() {
    const game = new Game(100)
    let playerDetails = getFunctions.getNameAndAge()
    const player1 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player1)
    playerDetails = getFunctions.getNameAndAge()
    const player2 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player2)
    playerDetails = getFunctions.getNameAndAge()
    const player3 = new Player(playerDetails[0], playerDetails[1])
    game._players.push(player3)



    game.startCount()
}



export default sevenBoomService