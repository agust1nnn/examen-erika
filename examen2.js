const usuarios = [
    "Sofía", "Mateo", "Valentina", "Diego", "Camila", 
    "Sebastián", "Lucía", "Tomás", "Isabela", "Joaquín", 
    "Mariana", "Alejandro", "Martina", "Gabriel", "Ana"
];
function mostrarUsuarios() {
    const inicio = parseInt(prompt("Ingresa la posición inicial (x):"));
    const final = parseInt(prompt("Ingresa la posición final (y):"));
    if (inicio >= 1 && final <= usuarios.length && inicio < final) {
        const seleccionados = usuarios.slice(inicio - 1, final);
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";  
        seleccionados.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = usuario;
            resultado.appendChild(li);
        });
    } else {
        alert("Por favor, ingresa posiciones válidas.");
    }
}

