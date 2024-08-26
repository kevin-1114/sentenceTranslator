//sentence to number
const btnSn = document.getElementById("s-n")
let valueOfInputSn = document.getElementById("s-nInput")
let resultSn = document.getElementById("s-nResult")

//number to sentence button
const btnNs = document.getElementById("n-s")
let valueOfInputNs = document.getElementById("n-sInput")
let resultNs = document.getElementById("n-sResult")

//functions
function snTranslation() { //s-n function. 
    /* So in this funciton. I split the sentence that the user typed. 

    Example: user typed: "hello there" result: "h","e","l","l","o"," ","t","h","e","r","e"
    
    And then I tired to convert them into numbers. 
    */
    const myArray = valueOfInputSn.split("");
    for (let i of myArray) {
        if (i == 'a' || 'A') {
            i = '92-' // every hyphen is used to split numbers to sentences later
        }
        else if (i == 'b' || 'b') {
            i = '63-'
        }
        else if (i == 'c' || 'C') {
            i = '35-'
        }
        else if (i == 'd' || 'D') {
            i = '11-'
        }
        else if (i == 'e' || 'E') {
            i = '19-'
        }
        else if (i == 'f' || 'F') {
            i = '43-'
        }
        else if (i == 'g' || 'G') {
            i = '70-'
        }
        else if (i == 'h' || 'H') {
            i = '52-'
        }
        else if (i == 'i' || 'I') {
            i = '99-'
        }
        else if (i == 'j' || 'J') {
            i = '22-'
        }
        else if (i == 'k' || 'K') {
            i = '58-'
        }
        else if (i == 'l' || 'L') {
            i = '45-'
        }
        else if (i == 'm' || 'M') {
            i = '17-'
        }
        else if (i == 'n' || 'N') {
            i = '15-'
        }
        else if (i == 'o' || 'O') {
            i = '24-'
        }
        else if (i == 'p' || 'P') {
            i = '37-'
        }
        else if (i == 'q' || 'Q') {
            i = '36-'
        }
        else if (i == 'r' || 'R') {
            i = '31-'
        }
        else if (i == 's' || 'S') {
            i = '32-'
        }
        else if (i == 't' || 'T') {
            i = '49-'
        }
        else if (i == 'u' || 'U') {
            i = '56-'
        }
        else if (i == 'v' || 'V') {
            i = '83-'
        }
        else if (i == 'w' || 'W') {
            i = '20-'
        }
        else if (i == 'x' || 'X') {
            i = '30-'
        }
        else if (i == 'y' || 'Y') {
            i = '90-'
        }
        else if (i == 'z' || 'Z') {
            i = '98-'
        }
        else if (i == ' ') {
            i = '0-' // 0 means space
        }
    }
}