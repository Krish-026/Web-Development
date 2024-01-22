const EvenEmitter = require('node:events')

const emitter = new EvenEmitter();

emitter.on('order-pizza', () => {
    console.log('Ordered received! Baking pizza...')
})

emitter.on('order-pizza', (size, topping) => {
    console.log(`Ordered recieved! Baking a ${size} pizza with ${topping}...`)
})

emitter.on('order-pizza', (topping) => { 
    if(topping === 'large')
        console.log(`Ordered recieved! Baking a ${topping} pizza...`)
})

emitter.emit('order-pizza', 'large', 'mushrooms')