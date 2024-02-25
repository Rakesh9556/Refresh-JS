const obj = {
    name: "Rakesh",
    pass: 348992,
    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website 1st`);
        console.log(this)
    } 
}


// obj.name
// obj.welcomeMessage()

// console.log(this)

// function print(){
//     let a = 45
//     console.log(this.a)
// }

// print()

// const  myObj = {
//     a: 6,
//     printNum: function(){
//         console.log(this.a + "okay good");
//     }
// }

// myObj.printNum()

// var myObject = {
//     a: 10,
//     b: 45,
//     printNum: function(){
//         console.log(this)
//     }
    
    
// };

// myObject.printNum()

const add = function () {
    let a = 56
    let b = 67
    console.log(this.a + this.b);
}

// add()



const add1 = () => {
    let a = 56
    let b = 67
    console.log(this);
}

// add1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (a,b) => a+b;

const addTwo = (a,b) => ({username: "Rakesh"});



console.log(addTwo(7,8));




