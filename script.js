const textarea = document.getElementById("textarea");
const words_count = document.getElementById("words_count")
const letters_count = document.getElementById("letters_count")
const spaces_count = document.getElementById("spaces_count");


textarea.addEventListener("input", () => {

    if (textarea.value === "") {
        words_count.innerText = 0;      
        letters_count.innerText = 0; 
        spaces_count.innerText = 0;
    }

    // logic for words counting

    var words = textarea.value.split(" ");
    words = words.filter((value) => {
        return value !== ""
    })
    words_count.innerText = words.length;


    // logic for letters counting with no spaces

    var letters = textarea.value.split(" ");
    for (const lete of letters) {
        console.log(lete)
    }
    letters = letters.filter((value) => {
        return value !== "";
    })
    for (let i = 1; i < letters.length; i++) {
        letters[0] += letters[i];
    }
    console.log(letters[0].toString());
    letters_count.innerText = letters[0].length;

    // logic for letters counting with spaces

    let allChars = textarea.value.split(" ")
    allChars = allChars.toString()
    spaces_count.innerText = allChars.length;
    console.log(allChars);
})