
function normalizeText(text) {
    return text
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/[^a-z\s]/g, '') 
        .toLowerCase();
}


function btnEncrypt() {
    let inputText = document.getElementById('input').value;
    
   
    if (/[^a-z\s]/.test(inputText)) {
        alert("El texto introducido no puede tener letras mayusculas o caracteres especiales .");
        return; 
    }
    
    let normalizedText = normalizeText(inputText);
    
    let encryptedText = normalizedText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('output').value = encryptedText;
}

// Función para desencriptar el texto
function btnDecrypt() {
    let inputText = document.getElementById('input').value;
    
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('output').value = decryptedText;
}

// Función para copiar el texto encriptado o desencriptado 
function copyText() {
    let outputText = document.getElementById('output');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

// Función para limpiar ambos campos de texto
function clearText() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}
