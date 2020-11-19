/* 01-VAR */
var name= 'Wolverine';
// Var can be initialized as many times as you want


if(true){
    var name= ' Magneto';
}

var name= ' Wolverine1';

/* 02-LET */
let nameLet= 'Wolverine';
// You can only initialize 1 time for scope a let variable

if(true){
    let nameLet= ' Magneto';
}

// ERROR let nameLet= ' Wolverine1';
let nameLet2= ' Wolverine1';

console.log(`var: ${name}`);
console.log(`let: ${nameLet}`);


for (var i = 0; i<= 5; i++){
    console.log(`i: ${i}`);
}

console.log(i);

for (let i = 0; i<= 5; i++){
    console.log(`i: ${i}`);
}

// ERROR console.log(i);