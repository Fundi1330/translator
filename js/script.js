
window.onload = () => { 
    document.getElementById('submit-btn').addEventListener('click', (event) => {
        let text = document.getElementById('text').value;
        let new_text = ''
        for(let char of text) {
            char = char.toLowerCase();
            if(char == 'g') {
                new_text += '𐌲'
            } else if (char == 'o') {
                new_text += '𐍉'
            } else if (char == 't') {
                new_text += '𐍊'
            } else if (char == 'l') {
                new_text += '𐌻'
            } else if (char == 'z') {
                new_text += '𐌶'
            }
            else {
                new_text += char
            }
        }
        document.getElementById('result').value = new_text;
    });
}