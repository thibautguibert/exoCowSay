const myInformation = require('./information.js');
const cowsay = require('./node_modules/cowsay');


console.log(cowsay.say({
    text: `Hello, I'm ${myInformation.name} from ${myInformation.campus} campus!`,
    e: "oO",
    T: "UU "
}));