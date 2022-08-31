// Задача 1
function map(fn,arr){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
 function fn(a) {return a*12.5;}
 console.log(map(fn,[1,2,3,4,5]));
 
// Задача 2
function checkAge(){
    const age = prompt("Сколька вам лет");
    age > 18 || age >=18 ? true : confirm("Родители разрешили?");
}
checkAge();

