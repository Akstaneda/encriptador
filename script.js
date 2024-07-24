function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    

    let textoCifrado = texto 
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (document.getElementById("texto").value.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/Logo.png";
    } else {

        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado"
        
        alert("Debes ingresar texto");
    }

}
    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");


        if (texto.length !=0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado";
            parrafo.textContent ="";
            muñeco.src = "./img/Logo.png";
        } else {

        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado"
        
        alert("Debes ingresar texto");
    }

    }
    
    function copiar(){
        const texto_out = document.querySelector("texto");
        navigator.clipboard.writeText(texto.value);
    }

    