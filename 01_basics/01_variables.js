const accountId = 144554
let accountEmail = "adhar123@gmail.com" 
var accountPassword = "12345"   
/* Not used anymore, as it had scope problem. If there are more than places this variable is used, and
   some other person comes and uses this variable and changes its, change will be reflected everywhere.
   That's why 'let' was introduced 
It has issue in block scope and functional scope.*/

accountCity = "Pune"
let accountState;

// accountId = 2 // When a variable is a const type, you cannot change its value
accountEmail = "adhar1@google.com"
accountPassword = "11123"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])