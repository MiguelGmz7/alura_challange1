const code = {
    "decrypt": function(text) {
        return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            switch (match) {
                case 'enter':
                    return 'e';
                case 'imes':
                    return 'i';
                case 'ai':
                    return 'a';
                case 'ober':
                    return 'o';
                case 'ufat':
                    return 'u';
                default:
                    return match;
            }
        });
    },

    "encrypt": function(text) {
        return text.replace(/e|i|a|o|u/g, function(match){
            switch(match) {
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'a':
                    return 'ai';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
                default:
                    return match;
            }
        });
    }
}

const variable = {
    selector_output: document.querySelector(".main__output"),
    image_output: document.querySelector(".main__output__image"),
    titulo_output: document.querySelector(".main__output__titulo"),
    texto_output: document.querySelector(".main__output__texto"),

    input: document.querySelector(".main__input__text"),

    copiar_btn: document.querySelector(".main__output__copiar"),
    input_area: document.querySelector(".main__input__text"),
    btn_encrypt: document.querySelector(".main__input__botones__encriptar"),
    btn_decrypt: document.querySelector(".main__input__botones__desencriptar")
}

const output_display = {
    off:function() {
        variable.image_output.style.display = "none";
        variable.titulo_output.innerHTML = "";
        variable.texto_output.innerHTML = "";
        variable.texto_output.style["font-size"] = "2rem";

        /*Hacemos que el texto que se muestre abarque todo el output y que haga un salto de linea*/
        variable.texto_output.style["width"] = "100%";

        variable.texto_output.style["overflow-wrap"] = "break-word";
        /*--------------------------------------------------------------------------------------*/
        /*Usamos la flexbox para acomodar el texto arriba a la izquierda*/
        variable.selector_output.style["justify-content"] = "flex-start";
        variable.selector_output.style["align-items"] = "flex-start";
        /*--------------------------------------------------------------------------------------*/
        variable.copiar_btn.innerHTML = "Copiar";
        variable.copiar_btn.style.display = "block";

        if(window.innerWidth <= 768){
            variable.texto_output.style.width = "80%";
            variable.texto_output.style.margin = "5%";
        }
    },
    
    on: function() {
        variable["selector_output"].style["justify-content"] = "center";
        variable["selector_output"].style["align-items"] = "center";
        variable["image_output"].style.display = "block";
        variable["titulo_output"].innerHTML = "Ningún mensaje fue encontrado";
        variable["texto_output"].innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
        variable["texto_output"].style["font-size"] = "1rem";
        variable.copiar_btn.style.display = "none";
        
        if(window.innerWidth <= 768){
            variable.image_output.style.display = "none";
        }
    }
}

//hacemos la funcion de si se da un click, se borre la informacion
variable.input_area.onclick = function() {
    variable.input_area.value = "";
}

// funcion script del boton encriptar
variable.btn_encrypt.onclick = function() {

    if (variable.input.value == ""){
        output_display.on();
    } else {
        output_display.off();
        let string = code["encrypt"](variable.input.value.toLowerCase());
        variable.texto_output.innerHTML = string;
    }
}

variable.copiar_btn.onclick = function() {
    let copy_text = document.querySelector(".main__output__texto");
    navigator.clipboard.writeText(copy_text.innerHTML);
    alert("Texto copiado al portapapeles");
}

variable.btn_decrypt.onclick = function() {
    if (variable.input.value == ""){
        output_display.on();
    } else {
        output_display.off();
        let string = code["decrypt"](variable.input.value.toLowerCase());
        variable.texto_output.innerHTML = string;
    }
} 