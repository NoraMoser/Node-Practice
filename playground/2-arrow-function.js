const square = (x) => x * x


console.log(square(2))

const event = {
    name: 'Arthur party',
    guestList: ['Arthur', 'Lachlan'],
    printGuestList() {
        console.log(`event for ${this.name}.`)

        this.guestList.forEach(guest => {
            console.log(`Yo, ${guest} is attending ${this.name}`)
        });
    }
}

event.printGuestList()