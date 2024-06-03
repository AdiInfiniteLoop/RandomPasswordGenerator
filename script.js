const passwd = document.getElementById("password");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()-_+=";

function generatePassword() {
  var allChars = lowercaseChars + uppercaseChars + numbers + specialChars;
  let password = "";

  for (var i = 0; i < 12; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwd.value = password;
}

/* exec command is depreciated */
