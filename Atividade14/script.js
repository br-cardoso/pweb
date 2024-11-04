function transformarTexto() {
    const textoInput = document.getElementById("texto").value;
    const upperCase = document.getElementById("maiusculo").checked;
    const saida = upperCase ? textoInput.toUpperCase() : textoInput.toLowerCase();
    document.getElementById("saida").textContent = saida;
}
