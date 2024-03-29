// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
        customerName = customerName.toUpperCase();
        return customerName
    
}

let  setBestCustomer = ()=>{
    let bestCustomer = 'not bob';
    return bestCustomer
    
}
let bestCustomer = setBestCustomer()
let overwriteBestCustomer = ()=>{
    let bestCustomer = 'not bob';
    bestCustomer = 'maybe bob'
    return bestCustomer
}
bestCustomer = overwriteBestCustomer()




const leastFavoriteCustomer = 'Lee';

function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer; 
}