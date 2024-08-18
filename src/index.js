const verifyText = (text) => {
    // const regex = /^[a-z]+$/;
    // const regex = /^[a-z\s]+$/;
    const regex = /^[a-z\s.!?]*$/;
    return regex.test(text);
}

/** @param {string} text */
const encryptText = (text) => {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

/** @param {string} text */
const decryptText = (text) => {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

const showMessage = (message_empty, input_message, input_text, btn_copy, result) => {
    message_empty.style.display = "none";
    input_message.style.display = "block";
    input_message.value = result;
    input_text.value = "";
    btn_copy.style.display = "block";
}

const hideMessage = (message_empty, input_message, btn_copy) => {
    message_empty.style.display = "block";
    input_message.style.display = "none";
    btn_copy.style.display = "none";
}

window.addEventListener('load', () => {
    console.log('Documento carregado');

    let input_text = document.querySelector('#input_text');
    let input_message = document.querySelector('#message_one');
    let btn_crypt = document.querySelector('#btn_crypt');
    let btn_decrypt = document.querySelector('#btn_decrypt');
    let btn_copy = document.querySelector('#copy_message');
    let message_empty = document.querySelector('#message_empty');


    btn_crypt.addEventListener('click', () => {
        let value = input_text.value;

        if (!verifyText(value) || value == "") {
            alert('Formato de texto inválido. Tente novamente!');
        } else {
            let result = encryptText(value);
            showMessage(message_empty, input_message, input_text, btn_copy, result);
        }
    });

    btn_copy.addEventListener('click', (e) => {
        let value = input_message.value;
        console.log('COPIAR TEXTO CRIPTOGRAFADO "' + value + "\"");

        navigator.clipboard.writeText(value).then(() => {
            hideMessage(message_empty, input_message, btn_copy);
        }).catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
    });


    btn_decrypt.addEventListener('click', () => {
        let value = input_text.value;
        if (value != "") {
            let result = decryptText(value);
            showMessage(message_empty, input_message, input_text, btn_copy, result);
        }

    });

});