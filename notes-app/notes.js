const fs = require('fs')
const chalk = require('chalk')

function getNotes() {
    return 'Nora Notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(item => item.title !== title)

    duplicateNotes.push({
        title: title, 
        body: body
    })

    saveNotes(duplicateNotes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const filteredArray = notes.filter(item => item.title !== title)

    saveNotes(filteredArray)

    if (notes.length === filteredArray.length) {
        console.log(chalk.green('Note not found'))
    } else {
        console.log(chalk.red('note removed!'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}