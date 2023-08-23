var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria
function getPasswordCriteria() {
  var length = parseInt(prompt("Enter the password length (between 8 and 128):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return null;
  }

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected.");
    return null;
  }

  return {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
  };
}

// Function to generate a random character from a string
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// Function to generate the password
function generatePassword() {
  var criteria = getPasswordCriteria();

  if (!criteria) {
    return "Generated password: No criteria selected.";
  }

  var characterSet = "";
  if (criteria.lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (criteria.uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (criteria.numeric) characterSet += "0123456789";
  if (criteria.special) characterSet += "!@#$%^&*()_-+=<>?";

  var password = "";
  for (var i = 0; i < criteria.length; i++) {
    password += getRandomCharacter(characterSet);
  }

  return "Generated password: " + password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);