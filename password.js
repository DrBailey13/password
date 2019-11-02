
var char = 'abcdefghijklmnopqrstuvwxyz'
var uchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '0123456789'
var schar = '!"#$%&()*+,-./<>=?@_`~|^'
var password = ""


// var upper = confirm("would you like uppercase letters")
// var lower = confirm("would you like lowercase letters")
// var numbers = confirm("would you like numbers")
// var special = confirm("would you like special characters")

var howMany = prompt("how many charcters would you like? must be between 8-128")

if (howMany >= 8 && howMany <= 128) {

    var upper = confirm("would you like uppercase letters");
    if (upper === true) {
        password += uchar;
    }

    var lower = confirm("would you like lowercase letters");
    if (lower === true) {
        password += char;
    }

    var numbers = confirm("would you like numbers");
    if (numbers === true) {
        password += num;
    }

    var special = confirm("would you like special characters");
    if (special === true) {
        password += schar;
    }
    // console.log(password)

console.log(password)
function generate() {
    var answer = "";
    for (i = 1; i <= howMany; i++) {
        answer += password.charAt(Math.floor(Math.random() * (password.length)));
    }
    document.getElementById("text1").value = answer;
   
}

console.log(generate());















































function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("text1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

}
}
