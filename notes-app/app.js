const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

// console.log(getNotes())
// console.log(chalk.red.inverse.bold('Oh NO!'))
// console.log(chalk.inverse('Nora'))
// console.log(chalk.bold('YAY!'))

// console.log(process.argv[2])

// const command = process.argv[2]

// if (command === 'add'){
//     console.log('add notes')
// } else if (command === 'remove') {
//     console.log('remove notes')
// }

// console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler() {
        console.log('listing a new note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler() {
        console.log('reading a new note!')
    }
})

yargs.parse()
// console.log(yargs.argv)