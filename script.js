// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// declare varaibles from dom after load to make sure they are current 
const results = document.querySelector("#textarea");
const UNInum = [48, 57];
const UNIupper = [65, 90];
const UNIlower = [97, 122];
const UNIsym = [33, 47];



document.querySelector("#generate").addEventListener('click', () => {
    const length = document.querySelector("#length").value;
    const upper = document.querySelector("#uppercase").checked;
    const lower = document.querySelector("#lowercase").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;

    const randSelector = [];
    const password = [];
  
//String.fromCharCode();
    if (upper === true) {
        for (let i = UNIupper[0]; i <= UNIupper[1]; i++) {
            randSelector.push(i);
        }
    
// console.log(randSelector[6]);
    }
    if (numbers === true) {
        for (let i = UNInum[0]; i <= UNInum[1]; i++) {
            randSelector.push(i);
        }
    
// console.log(randSelector);
    }
    if (symbols === true) {
        for (let i = UNIsym[0]; i <= UNIsym[1]; i++) {
            randSelector.push(i);
        }
    }
    if (lower === true) {
        for (let i = UNIlower[0]; i <= UNIlower[1]; i++) {
            randSelector.push(i);
        }
    }

    for (let i = 0; i < length; i++) {
        password.push(String.fromCharCode(randSelector[Math.floor(Math.random() * randSelector.length)]))
    }
    results.textContent = password.join("");
})

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Copy to Clipboard
function copy() {
  let textarea = document.getElementById("textarea");
  textarea.select();
  document.execCommand("copy");
}

//Background Rain
var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
  $('body').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});



$('.single-toggle.toggle').on('click', function() {
  $('body').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
});

makeItRain();