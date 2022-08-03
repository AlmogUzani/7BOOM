import RL from 'prompt-sync'

const readline = RL()

function getNameAndAge() {
    const name = readline('Name: ')
    const age = readline('Age: ')
    return [name,age]
}

function getMaxNumber() {
    const max = readline('Max Number: ')
    return max
}

export default {
    getNameAndAge,
    getMaxNumber
}