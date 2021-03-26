// Assignment Code
var specialCharacter = ['@', '!', '#', '$', '%', '^', '&', '*', '<', '?', '+', '~', '_', '-', '/', '|', '{', '}', '[', ']']

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var numericalValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// push and concat will help for array
// function numericalVal () {
//  console.log(String.numericalValue(Math.floor(Math.random() * 10) + 3));
// } may need for later

// array to push things to. once character set determined set for loop. combine loop with math.random function
var characterSet = [];

// concat this



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("Put the length of your password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Not sufficent")
    return;
  }
  else {
    var hasNumbers = confirm("Include Numbers?");
    var hasSpecialCharacters = confirm("Includes Special Characters");
    var hasUpperCase = confirm("Includes Uppercase");
    var hasLowerCase = confirm("Include Lowercase");

    if (hasNumbers) {
      characterSet = characterSet.concat(numericalValue)
    }
    if (hasSpecialCharacters) {
      characterSet = characterSet.concat(specialCharacter)
    }
    if (hasUpperCase) {
      characterSet = characterSet.concat(upperCase)
    }
    if (hasLowerCase) {
      characterSet = characterSet.concat(lowerCase)
    }
  }

  var newString = "";

  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characterSet.length);
    newString += characterSet[index];
  }


  return newString;
}




