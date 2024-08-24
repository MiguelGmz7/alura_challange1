//Desabilitamos el boton de desencriptar al principio
const btn_decrypt = document.querySelector(".main__input__botones__desencriptar");
btn_decrypt.disabled = true;
btn_decrypt.style["background-color"] = "#D8DFE8";

//hacemos la funcion de si se da un click, se borre la informacion
const input = document.querySelector(".main__input__text");
input.onclick = function() {
    input.value = "";
}

// funcion script del boton encriptar
const btn_encrypt = document.querySelector(".main__input__botones__encriptar");
btn_encrypt.onclick = function() {
    const selector = document.querySelector(".main__output");

    const image = document.querySelector(".main__output__image");
    image.style.display = 'none';
    
    const titulo = document.querySelector(".main__output__titulo");
    titulo.innerHTML = "";

    const texto = document.querySelector(".main__output__texto");
    texto.innerHTML = "";

    let input_t = document.querySelector(".main__input__text").value;
    let string = "";

    for (let i = 0; i < input_t.length; i++) {
        switch (input_t[i]) {
            case 'e':
                string += "enter";
                break;
            
            case 'i':
                string += "imes";
                break;
            
            case 'a':
                string += "ai";
                break;
            
            case 'o':
                string += "ober";
                break;
            
            case 'u':
                string += "ufat";
                break;

            default:
                string += input_t[i];
                break;
        }
        
    }

    texto.style["font-size"] = "2rem";

    /*Hacemos que el texto que se muestre abarque todo el output y que haga un salto de linea*/
    texto.style["width"] = "100%";
    texto.style["overflow-wrap"] = "break-word";
    /*--------------------------------------------------------------------------------------*/
    /*Usamos la flexbox para acomodar el texto arriba a la izquierda*/
    selector.style["justify-content"] = "flex-start";
    selector.style["align-items"] = "flex-start";
    /*--------------------------------------------------------------------------------------*/
    texto.innerHTML = string;

    const copiar_btn = document.querySelector(".main__output__copiar");
    copiar_btn.innerHTML = "Copiar";
    copiar_btn.style.display = "block";
}

const copiar_btn = document.querySelector(".main__output__copiar");
// copiar_btn.onclick = function() {
//     texto.select();
//     Document.execCommand("copy");
//     alert("Texto copiado al portapapeles");
// }