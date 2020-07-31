const germanikusObj = {
    G: 0, 
    E: 1,
    R: 2, 
    M: 3,
    A: 4,
    N: 5,
    I: 6,
    K: 7,
    U: 8, 
    S: 9
}
// Rest of the letters in a sentence are normal letters.

const encryptBtn = document.querySelector('.encrypt-btn');
const encryptInput = document.querySelector('.encrypt-input');
const copyBtn = document.querySelector('.copy-btn');
const copyOutput = document.querySelector('.copy-text');


// Main content START
encryptBtn.addEventListener('click', () => {

    let content = encryptInput.value.toUpperCase();
    content = content.replace(/G|E|R|M|A|N|I|K|U|S/gi,  char => germanikusObj[char]);
    copyOutput.innerHTML = content;
    
});

copyBtn.addEventListener('click', () => {

    if(copyOutput.value.match(/[^\s+$]/)) {
        copyOutput.select();
        copyOutput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        copySuccess();
    }

    else {
        copyFailed();
    }
});
// Main content END

// Dialog box script START
const dialogBox = document.querySelector('.dialog-box');
const closeBox = document.querySelector('.close');
const boxText = document.querySelector('.box-content-text')

function copySuccess() {

    dialogBox.style.display = "block";
    boxText.innerHTML = "Text copied to clipboard!"
    closeBox.onclick = function() {
        dialogBox.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == dialogBox) {
          dialogBox.style.display = "none";
        }
      }

}

function copyFailed() {

    dialogBox.style.display = "block";
    boxText.innerHTML = "Nothing to copy, encrypt a message first."
    closeBox.onclick = function() {
        dialogBox.style.display = "none";

    }
    
    window.onclick = function(event) {
        if (event.target == dialogBox) {
          dialogBox.style.display = "none";
        }
      }
      
}
// Dialog box script END

