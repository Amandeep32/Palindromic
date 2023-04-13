
// Question Palindromic substring, Check string are palindrome or not?

let string="racecar"
let bag=""

    
    for(let j=string.length-1; j>=0;j--){
        bag+=string[j]
        }
        
if(bag==string){
    console.log(string,"is a substring")
   }
   else{
    console.log(string, "is not a substring")
   }

// Write a program that returns length of the longest palindromic substring of that string?

let S="thisracecarisgood"
 
let max=-Infinity
for(let i=0;i<S.length;i++){
    let bag=""
    for(let j=i;j<S.length;j++){
        bag+=S[j]
        let tag=""
        for(let k=bag.length-1;k>=0;k--){
            tag+=bag[k]
        }
         if(bag==tag){
            if(bag.length>max){
                max=bag.length
            }
         }
    }

}    console.log(max)
