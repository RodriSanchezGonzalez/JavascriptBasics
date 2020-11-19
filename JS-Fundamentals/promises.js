let employees =[{id: 1, name: 'Rodrigo'},
                {id: 2, name: 'Pedro'},
                {id: 3, name: 'Juan'}];

let wages= [{ id: 1, amount: 1000},
            { id: 2, amount: 1500}
        ];


const getEmployee = (id) => {
    //Resolve: Callback function to succesfully end promise and throws then on return promise
    //Reject:  Callback function to throw unsuccesfully end promise and throws catch on return promise
    return new Promise((resolve, reject )=>{
        let employeeDB = employees.find(employee => employee.id === id);

        if(!employeeDB){
            reject(`User with id: ${id}, not exists in database`);
        }
        else{
            resolve(employeeDB);
        }
    });
}

const getWage = (employee) =>{
    return new Promise((resolve, reject )=>
    {
        let wageDB = wages.find(wage => wage.id === employee.id);
        if(!wageDB){
            reject(`Wage with id: ${employee.id}, not exists in database`);
        }
        else {
            resolve({name: employee.name, wage: wageDB.amount});
        }
    });
};

getEmployee(1).then(employee =>  getWage(employee).then(response => console.log(response))
                                                  .catch(err => console.log(err)))
              .catch(err => console.log(err));

getEmployee(10).then(employee =>  getWage(employee).then(response => console.log(response)))
               .catch(err => console.log(err));         

getEmployee(3).then(employee =>  getWage(employee).then(response => console.log(response))
               .catch(err => console.log(err)))
.catch(err => console.log(err));            

// ¿How to chain promises? - Clean code to resolve that - Bests practices

getEmployee(2).then(employee=>{
    return getWage(employee);
})
.then(response => console.log(response))
.catch(err => console.log(err))
;
