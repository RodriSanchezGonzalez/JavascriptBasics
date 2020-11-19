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

/*Employees exercise */
let employees =[{id: 1, name: 'Rodrigo'},
                {id: 2, name: 'Pedro'},
                {id: 3, name: 'Juan'}];

let wages= [{ id: 1, amount: 1000},
            { id: 2, amount: 1500}
        ];


const getEmployee = async (id) => {
        let employeeDB = employees.find(employee => employee.id === id);
        if(!employeeDB){
            //Reject
            throw new Error(`User with id: ${id}, not exists in database`);
        }
        else{
            //Resolve
            return(employeeDB);
        };
}

const getWage = async (employee) =>{
        let wageDB = wages.find(wage => wage.id === employee.id);
        if(!wageDB){
            //Reject
            throw new Error(`Wage with id: ${employee.id}, not exists in database`);
        }
        else {
             //Resolve
            return({name: employee.name, wage: wageDB.amount});
        };
}

const getInformation = async (id) => {
    let employee = await getEmployee(id);
    let response = await getWage(employee);
    return 'Get information: ' + JSON.stringify(response);
}

getInformation(1).then(response => console.log(response))
                 .catch(err => console.log('ERROR Get Information |' + err));