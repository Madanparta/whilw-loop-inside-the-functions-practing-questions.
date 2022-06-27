// 1.PRINTNTING ALL THE EVEN GIVEN THE RANGES.
// ANSWER.
// function evenSum (num1){
//     let sum = 0
//     while(num1 != 0){
//         let rem = num1%10;
//         sum+=rem;
//         num1 = Math.floor(num1/10)
//     }
//     console.log(sum)
// }
// evenSum(12300)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.EVEN DIGIT NUMBERS.
// ANSWER.
// let evenDigitNumber = (num)=>{
//     while(num!=0){
//         let rem = num%10;
//         if(rem%2==0){
//             console.log (rem);
//         }
//         num=Math.floor(num/10)
//     }
// }
// evenDigitNumber(1234)      //in this case we using reverse number its get an ordr.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.PALINDRAM OR NOT CONSDITION IS TRUE PRINT YES ORTHER WISE NO
// ANSWER.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>not solving>>>>>>>>>>>>>>>>>>>>
// function palindramNum (num){
//     let rem = 0;
//     while(num!=0){
//         rem = ((rem*10)+(num%10));
//         num = Math.floor(num/10);
//     }
//     if(rem == num){
//         return "YES";
//     }else{
//         return "NO";
//     }
// }
// console.log(palindramNum(1346))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4.RETURN THE ZEROO'S
// ANSWER.

// function decimalZero (num){
//     let count = 0;
//     while(num!=0){
//         let rem = num%10
//         if(rem == 0){
//             count++;
//         }
//         num=Math.floor(num/10)
//     }
//     return count;
// }
// console.log(decimalZero(1200000))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.EVEN PRIME NUMBER GIVEN THE RANGES.
// ANSWER.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>not getting..

// function primeEvenGivenRang (num){
//     while(num!=0){
//         for(var i=2; i<=num; i++){
//             for(var j=2; j<i; j++){
//                 if(i%j==0){
//                     break;
//                 }
//             }
//             if(j==i){
//                 console.log(i)
//             }
//         }
//     }
// }
// primeEvenGivenRang(10)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6.