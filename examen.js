function modificarContenido() {
    if (confirm("¿queres cambiar el título de la página?")) {
        let seleccion = prompt("Elegi un titulo:\n1. Talleres\n2.Belgrano\n3. instituto");
        if (seleccion === "1") {
            document.getElementById('titulo').innerText = "Talleres";
        } 
        else if (seleccion === "2") {
            document.getElementById('titulo').innerText = "Belgrano";
        } 
        else if (seleccion === "3") {
            document.getElementById('titulo').innerText = "Instituto";
        } 
        else {
            alert("pone un numero del 1 al 3.");
        }
    }
    {
    if(confirm("¿queres cambiar el subtitulo de la pagina?")){
        let seleccion = prompt("Elegi un subtitulo:\n1. el mas grande de \n2.el mas chico de\n3.blablabla");
        if (seleccion === "1") {
            document.getElementById('subtitulo').innerText = "el mas grande de";
        }
        else if (seleccion === "2") {
            document.getElementById('subtitulo').innerText = "el mas chico de";
        }
        else if (seleccion === "3") {
            document.getElementById('subtitulo').innerText = "blablabla";
        }
    }
    {
        if(confirm("¿queres cambiar el parrafo de la pagina?")){
            let seleccion = prompt("Elegi un parrafo:\n1. argetina \n2.brasil\n3.españa");
            if(seleccion === "1"){
                document.getElementById('parrafo').innerText = "argentina";
            }
            else if(seleccion === "2"){
                document.getElementById("parrafo").innerText = "brasil"
            }
            else if(seleccion === "3"){
                document.getElementById("parrafo").innerText = "españa"
            }
    }
    }
}
}
