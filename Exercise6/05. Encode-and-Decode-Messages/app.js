function encodeAndDecodeMessages() {

    let encodeTextBox = document.getElementsByTagName('textarea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];

    let decodeTextBox = document.getElementsByTagName('textarea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = encodeTextBox.value;
        let newMassage = '';

        for (let index = 0; index < message.length; index++) {
            let newText = String.fromCodePoint(message[index].charCodeAt(0) + 1);
            newMassage += newText;

        }
        decodeTextBox.value = newMassage;
        encodeTextBox.value = '';
        document.getElementsByTagName('button')[1].disabled = false;

    }

    function decodeMessage() {
        let message = decodeTextBox.value;
        let newMassage = '';

        for (let index = 0; index < message.length; index++) {
            let newText = String.fromCodePoint(message[index].charCodeAt(0) - 1);
            newMassage += newText;

        }
        decodeTextBox.value = newMassage;
        document.getElementsByTagName('button')[1].disabled = true;
    }
}
