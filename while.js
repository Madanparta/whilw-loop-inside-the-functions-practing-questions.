// 1.PRINTNTING ALL THE EVEN GIVEN THE RANGES.
// ANSWER.
function evenSum (num1){
    let sum = 0
    while(num1 != 0){
        let rem = num1%10;
        sum+=rem;
        num1 = Math.floor(num1/10)
    }
    console.log(sum)
}
evenSum(12300)