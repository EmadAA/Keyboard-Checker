let key = document.getElementsByClassName('key');
let bgColor = 'green'; // Variable to store the background color
window.addEventListener('keydown', function(e) {
    if (e.key === 'CapsLock') {
        let capsLockKey = document.querySelector('.capslock');
        capsLockKey.style.backgroundColor = bgColor;
    } else if (e.key === 'Backspace') {
        let backspaceKey = document.querySelector('.backspace');
        backspaceKey.style.backgroundColor = bgColor;
    } else if (e.key === 'Tab') {
        let tabKey = document.querySelector('.tab');
        tabKey.style.backgroundColor = bgColor;
    } else if (e.key === 'Enter') {
        let enterKey = document.querySelector('.enter');
        enterKey.style.backgroundColor = bgColor;
    } else if (e.key === 'Shift') {
        let shiftKeys = document.querySelectorAll('.lshift, .rshift');
        shiftKeys.forEach(key => key.style.backgroundColor = bgColor);
        console.log('Shift is pressed');
    } else if (e.key === 'Control') {
        let ctrlKeys = document.querySelectorAll('.lctrl, .rctrl');
        ctrlKeys.forEach(key => key.style.backgroundColor = bgColor);
        console.log('Ctrl is pressed');
    } else if (e.key === 'Alt') {
        let altKeys = document.querySelectorAll('.lalt, .ralt');
        altKeys.forEach(key => key.style.backgroundColor = bgColor);
        console.log('Alt is pressed');
    } else if (e.key === 'Meta') {
        let winKeys = document.querySelectorAll('.win');
        winKeys.forEach(key => key.style.backgroundColor = bgColor);
        console.log('Windows key is pressed');
    } else if (e.key === 'Fn') {
        let fnKey = document.querySelector('.Fn');
        fnKey.style.backgroundColor = bgColor;
        console.log('Fn is pressed');
    }


});

window.addEventListener('keydown', function(e) {
    switch (e.key){
    case 'Insert':
        document.querySelector('.ins').style.backgroundColor = bgColor;
        console.log('Insert is pressed');
        break;
    case 'Delete':
        document.querySelector('.del').style.backgroundColor = bgColor;
        console.log('Delete is pressed');
        break;
    case 'Home':
        document.querySelector('.home').style.backgroundColor = bgColor;
        console.log('Home is pressed');
        break;
    case 'End':
        document.querySelector('.end').style.backgroundColor = bgColor;
        console.log('End is pressed');
        break;
    case 'PageUp':
        document.querySelector('.pageup').style.backgroundColor = bgColor;
        console.log('Page Up is pressed');
        break;
    case 'PageDown':
        document.querySelector('.pagedown').style.backgroundColor = bgColor;
        console.log('Page Down is pressed');
        break;
    case 'ArrowUp':
        document.querySelector('.up').style.backgroundColor = bgColor;
        console.log('Arrow Up is pressed');
        break;
    case 'ArrowDown':
        document.querySelector('.down').style.backgroundColor = bgColor;
        console.log('Arrow Down is pressed');
        break;
    case 'ArrowLeft':
        document.querySelector('.left').style.backgroundColor = bgColor;
        console.log('Arrow Left is pressed');
        break;
    case 'ArrowRight':
        document.querySelector('.right').style.backgroundColor = bgColor;
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
            break;
        case '1':
            key[1].style.backgroundColor = bgColor;
            break;
        case '2':
            key[2].style.backgroundColor = bgColor;
            break;
        case '3':
            key[3].style.backgroundColor = bgColor;
            break;
        case '4':
            key[4].style.backgroundColor = bgColor;
            break;
        case '5':
            key[5].style.backgroundColor = bgColor;
            break;
        case '6':
            key[6].style.backgroundColor = bgColor;
            break;
        case '7':
            key[7].style.backgroundColor = bgColor;
            break;
        case '8':
            key[8].style.backgroundColor = bgColor;
            break;
        case '9':
            key[9].style.backgroundColor = bgColor;
            break;
        case '0':
            key[10].style.backgroundColor = bgColor;
            break;
        case '-':
            key[11].style.backgroundColor = bgColor;
            break;
        case '=':
            key[12].style.backgroundColor = bgColor;
            break;
        case 'q':
        case 'Q':
            key[15].style.backgroundColor = bgColor;
            break;
        case 'w':
        case 'W':
            key[16].style.backgroundColor = bgColor;
            break;
        case 'e':
        case 'E':
            key[17].style.backgroundColor = bgColor;
            break;
        case 'r':
        case 'R':
            key[18].style.backgroundColor = bgColor;
            break;
        case 't':
        case 'T':
            key[19].style.backgroundColor = bgColor;
            break;
        case 'y':
        case 'Y':
            key[20].style.backgroundColor = bgColor;
            break;
        case 'u':
        case 'U':
            key[21].style.backgroundColor = bgColor;
            break;
        case 'i':
        case 'I':
            key[22].style.backgroundColor = bgColor;
            break;
        case 'o':
        case 'O':
            key[23].style.backgroundColor = bgColor;
            break;
        case 'p':
        case 'P':
            key[24].style.backgroundColor = bgColor;
            break;
        case '[':
            key[25].style.backgroundColor = bgColor;
            break;
        case ']':
            key[26].style.backgroundColor = bgColor;
            break;
        case '\\':
            key[27].style.backgroundColor = bgColor;
            break;
        case 'a':
        case 'A':
            key[29].style.backgroundColor = bgColor;
            break;
        case 's':
        case 'S':
            key[30].style.backgroundColor = bgColor;
            break;
        case 'd':
        case 'D':
            key[31].style.backgroundColor = bgColor;
            break;
        case 'f':
        case 'F':
            key[32].style.backgroundColor = bgColor;
            break;
        case 'g':
        case 'G':
            key[33].style.backgroundColor = bgColor;
            break;
        case 'h':
        case 'H':
            key[34].style.backgroundColor = bgColor;
            break;
        case 'j':
        case 'J':
            key[35].style.backgroundColor = bgColor;
            break;
        case 'k':
        case 'K':
            key[36].style.backgroundColor = bgColor;
            break;
        case 'l':
        case 'L':
            key[37].style.backgroundColor = bgColor;
            break;
        case ';':
            key[38].style.backgroundColor = bgColor;
            break;
        case `'`:
            key[39].style.backgroundColor = bgColor;
            break;
        case 'z':
        case 'Z':
            key[42].style.backgroundColor = bgColor;
            break;
        case 'x':
        case 'X':
            key[43].style.backgroundColor = bgColor;
            break;
        case 'c':
        case 'C':
            key[44].style.backgroundColor = bgColor;
            break;
        case 'v':
        case 'V':
            key[45].style.backgroundColor = bgColor;
            break;
        case 'b':
        case 'B':
            key[46].style.backgroundColor = bgColor;
            break;
        case 'n':
        case 'N':
            key[47].style.backgroundColor = bgColor;
            break;
        case 'm':
        case 'M':
            key[48].style.backgroundColor = bgColor;
            break;
        case ',':
            key[49].style.backgroundColor = bgColor;
            break;
        case '.':
            key[50].style.backgroundColor = bgColor;
            break;
        case '/':
            key[51].style.backgroundColor = bgColor;
            break;
        case ' ':
            key[56].style.backgroundColor = bgColor;
            break;
        default:
            console.log('Invalid Key');
    }
});
