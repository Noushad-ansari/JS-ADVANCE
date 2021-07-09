// 2.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '(Expected time: 15min)


let firstUpperCase=(str)=>{
// covert the string into an array
 let array  =  str.split(' ')
 
//  create a new Array
let newArray = []

for(let i = 0; i<array.length; i++){
   newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1)) 
}

return newArray.join(' ')

}


console.log(firstUpperCase('the quick brown fox'))