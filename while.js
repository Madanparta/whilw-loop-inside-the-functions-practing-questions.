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
// evenDigitNumber(1234)      
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.PALINDRAM OR NOT CONSDITION IS TRUE PRINT YES ORTHER WISE NO
// ANSWER.
// function palindramNum (num){
//     let sum = 0;
//     let find = num;
//     while(find!=0){
//         rem = (find%10);
//         sum = (sum*10)+rem
//         find = Math.floor(find/10);
//     }
//     if(num == sum){
//         return "YES";
//     }else{
//         return "NO";
//     }
// }
// console.log(palindramNum(1221))

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

// function primeEvenGivenRang (num1,num2){
//     while(num1<=num2){
//         for(var i=num1; i<=num2; i++){ 
//             for(var j=2; j<i; j++){
//                 if(i%j==0){
//                     break;
//                 }
//             }
//             if(j==i){
//                 console.log(i) ;            
//         }
//     }
//         return
//     }
// }
// primeEvenGivenRang(10,20)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6.PRINTING ARMSTRONG NUMBERS.
// ANSWER.
// function armStrongNum (num){
//     let sum = 0;
//     let n = num;
//     while(n!=0){ 
//         let rem = n%10
//         sum = ((sum*10)+(rem**3))
//         n=Math.floor(n/10)  
//     }
//     if(sum == num){
//         return "yes";

//     }else{
//         return "no"
//     }
// }
// console.log(armStrongNum(150))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7. SPECIAL NUMBERS.
// ANSWER.
// function spacialNumb (num){
//     let  sum = 0;
//     let produ = 1;
//     let n=num;
//     while(n>9){
//       while(n!=0){
//         rem = n%10;
//         div = Math.floor(n/10);
//         divsum = rem +div;
//         produ = rem*div;
//         n=Math.floor(n/10)
//         sum= divsum+produ;
//       }
      
//       if(sum==num){
//         return 'yes';

//       }else{
//         return "no";
//       }
//     }
// }
// console.log(spacialNumb(59))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.PRINTING HELLO WORLD USING WHILE LOOP.
// ANSWER.

// function numberDiv (num1){
//     while(num1!=0){
//         if(num1%3==0  && num1%5==0){
//             return "HELLO WORLD";
//         }else if(num1%3==0){
//             return "HELLO";
//         }else if(num1%5==0){
//             return "WOLRD"
//         }else{
//             return"enter another number";
//         }
//     }
// }
// console.log(numberDiv(9))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>