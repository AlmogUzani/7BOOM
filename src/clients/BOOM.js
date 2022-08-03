import EndWithSeven from "./endWithSeven.js"
import MulOfSeven from "./mulOfSeven.js"
const multi = new MulOfSeven
const endWith = new EndWithSeven

function BOOM(player, number) {
    if (multi.mulOfSeven(number)) console.log(`${player} - BOOM`) 
    else if (endWith.endWithSeven(number)) console.log(`${player} - BOOM`)
    else console.log(`${player} - ${number}`)
}
export default BOOM