const brain      = require('brain.js')
const trainData  = require('./src/data-training')
const serializer = require('./src/serializar')
const net        = new brain.NeuralNetwork()

net.train(serializer.serialize(trainData), {log: true})

const output = net.run(serializer.encode('estou muito triste'))

console.log(output);
