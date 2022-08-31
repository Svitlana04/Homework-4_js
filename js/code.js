function checkAge(){
    const age = prompt("Сколька вам лет");
    age > 18 || age >=18 ? true : confirm("Родители разрешили?");
}
checkAge();

function map(fn,arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
 function fn(x) {return x*12.5;}
 console.log(map(fn,[1,2,3,4,5]));
