import EndWithSeven from "./endWithSeven.js"
import MulOfSeven from "./mulOfSeven.js"
const multi = new MulOfSeven
const endWith = new EndWithSeven

function BOOM(args) {
    if (multi.mulOfSeven(args[1])) console.log(`${args[0]} - BOOM`) 
    else if (endWith.endWithSeven(args[1])) console.log(`${args[0]} - BOOM`)
    else console.log(`${args[0]} - ${args[1]}`)
}
export default BOOM