function echo(msg) {
    return msg
}
function sum(...nums){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
}
const MAX_VALUE = 100

// export { sum, echo, MAX_VALUE} 
export {sum as default,echo,MAX_VALUE}