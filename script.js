
document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');
    const clickSound = new Audio('audio/click.mp3');



let key = document.getElementsByClassName('key');
let bgColor = 'green'; // Variable to store the background color
window.addEventListener('keydown', function(e) {
    if (e.key === 'CapsLock') {
        let capsLockKey = document.querySelector('.capslock');
        capsLockKey.style.backgroundColor = bgColor;
        clickSound.play();
    } else if (e.key === 'Backspace') {
        let backspaceKey = document.querySelector('.backspace');
        backspaceKey.style.backgroundColor = bgColor;
        clickSound.play();
    } else if (e.key === 'Tab') {
        let tabKey = document.querySelector('.tab');
        tabKey.style.backgroundColor = bgColor;
          clickSound.play();
    } else if (e.key === 'Enter') {
        let enterKey = document.querySelector('.enter');
        enterKey.style.backgroundColor = bgColor;
          clickSound.play();
    } else if (e.key === 'Shift') {
        let shiftKeys = document.querySelectorAll('.lshift, .rshift');
        shiftKeys.forEach(key => key.style.backgroundColor = bgColor);
          clickSound.play();
        console.log('Shift is pressed');
    } else if (e.key === 'Control') {
        let ctrlKeys = document.querySelectorAll('.lctrl, .rctrl');
        ctrlKeys.forEach(key => key.style.backgroundColor = bgColor);
          clickSound.play();
        console.log('Ctrl is pressed');
    } else if (e.key === 'Alt') {
        let altKeys = document.querySelectorAll('.lalt, .ralt');
        altKeys.forEach(key => key.style.backgroundColor = bgColor);
          clickSound.play();
        console.log('Alt is pressed');
    } else if (e.key === 'Meta') {
        let winKeys = document.querySelectorAll('.win');
        winKeys.forEach(key => key.style.backgroundColor = bgColor);
          clickSound.play();
        console.log('Windows key is pressed');
    } else if (e.key === 'Fn') {
        let fnKey = document.querySelector('.Fn');
        fnKey.style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Fn is pressed');
    }


});

window.addEventListener('keydown', function(e) {
    switch (e.key){
    case 'Insert':
        document.querySelector('.ins').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Insert is pressed');
        clickSound.play();
        break;
    case 'Delete':
        document.querySelector('.del').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Delete is pressed');
        break;
    case 'Home':
        document.querySelector('.home').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Home is pressed');
        break;
    case 'End':
        document.querySelector('.end').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('End is pressed');
        break;
    case 'PageUp':
        document.querySelector('.pageup').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Page Up is pressed');
        break;
    case 'PageDown':
        document.querySelector('.pagedown').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Page Down is pressed');
        break;
    case 'ArrowUp':
        document.querySelector('.up').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Arrow Up is pressed');
        break;
    case 'ArrowDown':
        document.querySelector('.down').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Arrow Down is pressed');
        break;
    case 'ArrowLeft':
        document.querySelector('.left').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Arrow Left is pressed');
        break;
    case 'ArrowRight':
        document.querySelector('.right').style.backgroundColor = bgColor;
          clickSound.play();
        console.log('Arrow Right is pressed');
        break;
}
});
// Event listener for keypress to change background color of other keys
window.addEventListener('keypress', function(e) {
    console.log(e.key + " is pressed");
    switch (e.key) {
        case '`':
            key[0].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '1':
            key[1].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '2':
            key[2].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '3':
            key[3].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '4':
            key[4].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '5':
            key[5].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '6':
            key[6].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '7':
            key[7].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '8':
            key[8].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '9':
            key[9].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '0':
            key[10].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '-':
            key[11].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '=':
            key[12].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'q':
        case 'Q':
            key[15].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'w':
        case 'W':
            key[16].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'e':
        case 'E':
            key[17].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'r':
        case 'R':
            key[18].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 't':
        case 'T':
            key[19].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'y':
        case 'Y':
            key[20].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'u':
        case 'U':
            key[21].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'i':
        case 'I':
            key[22].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'o':
        case 'O':
            key[23].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'p':
        case 'P':
            key[24].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '[':
            key[25].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case ']':
            key[26].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '\\':
            key[27].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'a':
        case 'A':
            key[29].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 's':
        case 'S':
            key[30].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'd':
        case 'D':
            key[31].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'f':
        case 'F':
            key[32].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'g':
        case 'G':
            key[33].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'h':
        case 'H':
            key[34].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'j':
        case 'J':
            key[35].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'k':
        case 'K':
            key[36].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'l':
        case 'L':
            key[37].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case ';':
            key[38].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case `'`:
            key[39].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'z':
        case 'Z':
            key[42].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'x':
        case 'X':
            key[43].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'c':
        case 'C':
            key[44].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'v':
        case 'V':
            key[45].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'b':
        case 'B':
            key[46].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'n':
        case 'N':
            key[47].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case 'm':
        case 'M':
            key[48].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case ',':
            key[49].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '.':
            key[50].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case '/':
            key[51].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        case ' ':
            key[56].style.backgroundColor = bgColor;
              clickSound.play();
            break;
        default:
            console.log('Invalid Key');
    }
});


});



document.addEventListener('DOMContentLoaded', function () {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');

    fullscreenBtn.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fullscreenBtn.style.display = 'none';
            exitFullscreenBtn.style.display = 'block';
        }
    });

    exitFullscreenBtn.addEventListener('click', function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            exitFullscreenBtn.style.display = 'none';
            fullscreenBtn.style.display = 'block';
        }
    });
})