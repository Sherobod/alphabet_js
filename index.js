let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
let alphabet_reversed = ""


let new_alphabet = []

for (let i = 0; i < alphabet.length; i++) {
    let item = {
        idx: i + 1,
        letter: alphabet[i]
    };
   new_alphabet.push(item)
}


for (let i = alphabet.length - 1; i >= 0; i--) {
    alphabet_reversed += alphabet[i]
}


console.log(new_alphabet)
console.log(alphabet_reversed)