const darkThemeOn = document.querySelector('.dark-theme-on');
const darkThemeOff = document.querySelector('.dark-theme-off');
const container = document.querySelector('.container')
const containerTextArea = document.querySelectorAll('.container textarea');
const containerButtons = document.querySelectorAll('.container input');

darkThemeOn.addEventListener('click', () => {

    // Styles for apperance and alignment of darktheme buttons
    darkThemeOn.style.display = "none";
    darkThemeOn.style.float = "none";
    darkThemeOff.style.display = "block";
    darkThemeOff.style.float = "right";

    // Dark theme enabled styles
    document.body.style.background =  '#121212';
    container.style.background =  '#121212';
    container.style.color =  '#fff';
    containerTextArea[0].style.background = '#2c2c2c';
    containerTextArea[0].style.color = '#fff';
    containerTextArea[1].style.background = '#2c2c2c';
    containerTextArea[1].style.color = '#fff';
    containerButtons[0].style.background = '#2c2c2c';
    containerButtons[0].style.color = '#fff';
    containerButtons[1].style.background = '#2c2c2c';
    containerButtons[1].style.color = '#fff';

    // Fix for button hover effects
    containerButtons[0].classList.remove('light-btn')
    containerButtons[1].classList.remove('light-btn')
    containerButtons[0].classList.add('dark-btn')
    containerButtons[1].classList.add('dark-btn')

});

darkThemeOff.addEventListener('click', () => {

    // Styles for apperance and alignment of darktheme buttons
    darkThemeOff.style.display = "none";
    darkThemeOff.style.float = "none";
    darkThemeOn.style.display = "block";
    darkThemeOn.style.float = "right";

    // Dark theme disabled styles
    document.body.style.background =  '#fff';
    container.style.background =  '#fff';
    container.style.color =  'black';
    containerTextArea[0].style.background = '#fff';
    containerTextArea[0].style.color = 'black';
    containerTextArea[1].style.background = '#fff';
    containerTextArea[1].style.color = 'black';
    containerButtons[0].style.background = 'grey';
    containerButtons[0].style.color = 'black';
    containerButtons[1].style.background = 'grey';
    containerButtons[1].style.color = 'black';

    // Fix for button hover effects
    containerButtons[0].classList.remove('dark-btn')
    containerButtons[1].classList.remove('dark-btn')
    containerButtons[0].classList.add('light-btn')
    containerButtons[1].classList.add('light-btn')
});