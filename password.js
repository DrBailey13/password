
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num =  '0123456789'
var schar = '!"#$%&()*+,-./<>=?@_`~|^'

var howMany = prompt("how many charcters would you like? must have at least 8")
var upper = prompt("would you like uppercase letters")
var lower = prompt("would you like lowercase letters")
var numbers = prompt("would you like numbers")
var special = prompt("would you like special characters")























function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("text");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
}

