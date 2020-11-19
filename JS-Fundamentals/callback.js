setTimeout(
function(){console.log('Hello I´m a callback function');} //Callback
,3000
)

const getUserById = (id, callback) => {
    let user = {
        name: 'Rodrigo',
        id: id  // You can set id  without : id
    }

    if(id === 20){
        callback(`User with id: ${id}, not exists in database`);
    }
    else{
        callback(null, user);
    }};


getUserById(10, (err, user) =>{
if(err){
        return console.log(err);
}
console.log('User fetched from database', user );
});

getUserById(20, (err, user) =>{
    if(err){
        return console.log(err);
    }
    console.log('User fetched from database', user );
    });

let employees =[{id: 1, name: 'Rodrigo'},
                {id: 2, name: 'Pedro'},
                {id: 3, name: 'Juan'}];

let wages= [{ id: 1, amount: 1000},
            { id: 2, amount: 1500},
        //  { id: 3, amount: 2000}
        ];
    
const getEmployee = (id, callback) =>{
    let employeeDB = employees.find(employee => employee.id === id);

    if(!employeeDB){
        callback(`User with id: ${id}, not exists in database`);
    }
    else{
        callback(null, employeeDB);
    }
}

const getWage = (employee, callback) =>{
    let wageDB = wages.find(wage => wage.id === employee.id);

    if(!wageDB){
        callback(`Wage with id: ${employee.id}, not exists in database`);
    }
    else {
        callback(null, {name: employee.name, wage: wageDB.amount});
    }

}

getEmployee(1, (err, employee)=>{
    if(err){
        return console.log(err);
    }
    getWage({id:1, name: 'Rodrigo'}, (err, response) =>{
        if(err){
            return console.log(err);
        }
        console.log(response);
    });
});




