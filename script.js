const input = document.querySelector(".input");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowercase = "abcdefghijklmnopqrstuvxyz";
const nums = "1234567890";
const symbols = "!@#$%^&*()_+-?></\=";
const all = uppercase + lowercase + nums + symbols;
let length =12;

function setpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(length > password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }
    input.value = password;
    
}
function copypassword(){
   input.select();
   document.execCommand("copy");
}

