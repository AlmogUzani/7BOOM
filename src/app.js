import Game from "./publisher/sevenBoom.js"
import MulOfSeven from "./clients/mulOfSeven.js"
import EndWithSeven from "./clients/endWithSeven.js"
import getName from "./common/playersDetails.js"
import getMaxNumber from "./common/playersDetails.js"

function sevenBoomService() {
    const player1 = new Player(getName())
    const player2 = new Player(getName())
    const player3 = new Player(getName())
    const mulOfSeven = new MulOfSeven()
    const endWithseven = new EndWithSeven()
    const game = new Game(getMaxNumber())

    game.on('start', mulOfSeven.mulOfSeven)
    game.on('start', endWithseven.endWithSeven)

    
}



export default sevenBoomService