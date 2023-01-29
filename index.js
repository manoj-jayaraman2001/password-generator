const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

function generatePasswords() {
    let num = characters.length;
    
    let includeSymbolsandNumbers = document.getElementById("check-box").checked;
    if(includeSymbolsandNumbers === false){num = 52}
    let password = ""
    let passwordLength = parseInt(document.getElementById("text-box").value)
    if (passwordLength) {
        if (passwordLength >= 8 && passwordLength <= 30) {
            document.getElementById("msg").textContent = "";
            for (let i = 0; i < passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * num);
                password += characters[randomIndex];
            }
            return password;
        }else{
            document.getElementById("msg").textContent = "Length should be from 8 to 30";
        }
    }else{
        document.getElementById("msg").textContent = "Not a valid length";
    }

}

function setPasswords() {
    pass1.textContent = generatePasswords()
    pass2.textContent = generatePasswords()
    

}
function copy(){
  let pass = pass1.textContent;
//   pass.select();
if(pass !== ""){
  navigator.clipboard.writeText(pass);
  alert("Password Copied");
}else{
    alert("Noating to copy");
}
}