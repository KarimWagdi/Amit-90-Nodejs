// // function

// let x = Math.random() * 10 + 1

// let y = Math.trunc(x)

// console.log(y);

// function calcAge(...birthday) {
//     // console.log(2025 - birthday);
//     let x = []
//     birthday.forEach((obj) => {
//        x.push( new Date().getFullYear() - obj)
//     })
//     return x
// }

// const x = calcAge(1995, 2929, 1999, 2000);

// console.log(x);


function calcTip(...data){
    let tip = []
    let total = []
    data.forEach((bill) => {
        if(bill > 50 && bill <300 ){
            tip.push(bill * .15)
            total.push(bill + bill * 0.15)
        }else{
            tip.push(bill *.20)
            total.push(bill + bill * 0.20)
        }
    })
    return tip / total
}


















// function calcAge(...data){
//     console.log(data);
// }

// console.log(calcAge(20, 21, 22, 23, 24))
// console.log( calcAge())
// console.log( calcAge(20, 21, 22))