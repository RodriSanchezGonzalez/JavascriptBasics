let name = 'Rodrigo';
let name2 = 'Pedro'; 

console.log(name + ' ' + name2);
console.log(`${name} ${name2}`);

function getConcat(){
    return `${name} ${name2}`;
}

console.log(`The contact is: ${getConcat()}`);