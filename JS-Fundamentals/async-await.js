//The next 2 functions are axactly the same but in two differents ways.
// throw new Error('Error messagee') fires the reject callback
const getName = async () =>{
    return 'Rodrigo';
}

const getNameEquals = () =>{
   return new Promise((resolve, reject)=>{
       resolve('Rodrigo');
   });
}

getName().then(name => console.log(name))
         .catch( err => console.log(`ERROR en Async | ${err}` ));
getNameEquals().then(name => console.log(name));