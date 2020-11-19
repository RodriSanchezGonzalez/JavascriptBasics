let sampleObject ={
    name: 'Rodrigo',
    secondName: 'Sánchez',
    power: 'Fly',
    getName: function(){
        return `${this.name} ${this.secondName}`
    }
}

console.log(sampleObject.getName());


// Atributes of sample Object, Name of the new variable on right
 let  { name, secondName: lastName  } = sampleObject;

 console.log(name, lastName);

