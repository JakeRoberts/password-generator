// Assignment Code
var specChar = ['@', '!', '#', '$', '%', '^', '&', '*', '<', '?', '+', '~', '_', '-', '/', '|', '{', '}', '[', ']']

var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var numerials = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


// array to push things to.
var newSet = [];




// Going into HTML to select ID.
var generateBtn = document.querySelector("#generate");

// Creating a function for developing your password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Stating the value of passwordText.
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Created a function to generate password
function generatePassword() {

  // Creates a window to display message
  var passwordLength = prompt("Put the length of your password");
  // Conditional stating if the password is less than 8 or more than 128 you will get an alert telling you it's not correct.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Not sufficent")
    return;
  }
  
  //Conditional stating if the previous condition is false and not a number, will then create a new statement to alert the user of their mistake.
  else if (isNaN(parseInt(passwordLength))) {
      alert("Enter number between 8 and 128");
      return;
  }

  // If the condition above is false, will create a new code.
  else {
    var hasNumbers = confirm("Include Numbers?");
    var hasspecChars = confirm("Includes Special Characters");
    var hascapitalLetters = confirm("Includes capitalLetters");
    var haslowerLetters = confirm("Include lowerLetters");
 
    // Confirm statement
    if (hasNumbers) {
      newSet = newSet.concat(numerials)
    }
    if (hasspecChars) {
      newSet = newSet.concat(specChar)
    }
    if (hascapitalLetters) {
      newSet = newSet.concat(capitalLetters)
    }
    if (haslowerLetters) {
      newSet = newSet.concat(lowerLetters)
    }
  }

  // Creating a new string :)
  var newString = "";

  //Constantly looping to encompass all global variables to generate a random character
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * newSet.length);
    newString += newSet[index];
  }

  //Telling the String to Stop.
  return newString;
}

