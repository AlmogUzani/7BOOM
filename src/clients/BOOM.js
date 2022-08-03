import EndWithSeven from "./endWithSeven.js"
import MulOfSeven from "./mulOfSeven.js"
const multi = new MulOfSeven
const endWith = new EndWithSeven

function BOOM(number) {
    if (multi.mulOfSeven(number)) console.log('BOOM') 
    else if (endWith.endWithSeven(number)) console.log('BOOM')
    else console.log(number)
}
export default BOOM