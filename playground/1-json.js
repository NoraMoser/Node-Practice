const fs = require('fs')

const me = {
    name: 'Nora',
    planet: 'Earth',
    age: '38'
}

const meJson = JSON.stringify(me)
// console.log(bookJson)

// // const bookParse = JSON.parse(bookJson)
// // console.log(bookParse)

fs.writeFileSync('1-json.json', meJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
console.log(data.name)