let arr = [0,1,2,3,4,5,6,7,8,9]
let reduce_arr = arr.reduce((sum,number) => {
    return sum + number
},0)
console.log(reduce_arr);