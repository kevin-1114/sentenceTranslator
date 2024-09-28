let inputSN;
let inputNS;
const btn = document.getElementById("s-n")
const btn2 = document.getElementById("n-s")

//main function to translate the sentence to the code. 
function translateSN() {
    inputSN = document.getElementById("s-nInput").value;
    const translated = translate(inputSN);
    document.getElementById("s-nResult").innerText = translated;
}

//translate the sentence to code. 
function translate(input) {
    const translationMap = {
        'a': '92-', 'A': '92-', 'b': '63-', 'B': '63-',
        'c': '35-', 'C': '35-', 'd': '11-', 'D': '11-',
        'e': '19-', 'E': '19-', 'f': '43-', 'F': '43-',
        'g': '70-', 'G': '70-', 'h': '52-', 'H': '52-',
        'i': '99-', 'I': '99-', 'j': '22-', 'J': '22-',
        'k': '58-', 'K': '58-', 'l': '45-', 'L': '45-',
        'm': '17-', 'M': '17-', 'n': '15-', 'N': '15-',
        'o': '24-', 'O': '24-', 'p': '37-', 'P': '37-',
        'q': '36-', 'Q': '36-', 'r': '31-', 'R': '31-',
        's': '32-', 'S': '32-', 't': '49-', 'T': '49-',
        'u': '56-', 'U': '56-', 'v': '83-', 'V': '83-',
        'w': '20-', 'W': '20-', 'x': '30-', 'X': '30-',
        'y': '90-', 'Y': '90-', 'z': '98-', 'Z': '98-',
        ' ': '0-' // 0 means space    
    };

    return input.split('').map(char => translationMap[char] || '').join('');
}

btn.addEventListener("click", translateSN)

// the funciton for translate the code back to the text. 
function translateNS(input) {
    const translationMap = {
        '92': 'a', '63': 'b',
        '35': 'c', '11': 'd',
        '19': 'e', '43': 'f',
        '70': 'g', '52': 'h',
        '99': 'i', '22': 'j',
        '58': 'k', '45': 'l',
        '17': 'm', '15': 'n',
        '24': 'o', '37': 'p',
        '36': 'q', '31': 'r',
        '32': 's', '49': 't',
        '56': 'u', '83': 'v',
        '20': 'w', '30': 'x',
        '90': 'y', '98': 'z',
        '0': ' ' // 0 means space    
    };

    return input.split('-').map(num => translationMap[num] || '').join('');
}

//the main function for translate back to the number
function translateNSMain() {
    inputNS = document.getElementById("n-sInput").value;
    const translated = translateNS(inputNS);
    document.getElementById("n-sResult").innerText = translated;
}

btn2.addEventListener("click", translateNSMain);

//copy button for the code so the user doens't have to ctrl + c and ctrl + v the code
document.getElementById('copyButton1').addEventListener('click', function () {
    const textToCopy = document.getElementById('s-nResult').innerText;

    navigator.clipboard.writeText(textToCopy);
});

//copy button for the translated text
document.getElementById('copyButton2').addEventListener('click', function () {
    const textToCopy = document.getElementById('n-sResult').innerText;

    navigator.clipboard.writeText(textToCopy);
});

// paste button
document.getElementById("pasteButton").addEventListener("click", async () => {
    document.getElementById("n-sInput").value = '';
    const text = await navigator.clipboard.readText();
    document.getElementById("n-sInput").value += text;
})
