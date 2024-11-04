document.addEventListener('DOMContentLoaded', () => {
    const janela = document.getElementById('janela');
    const posicao = document.getElementById('posicao');

    janela.addEventListener('mouseover', () => {
        janela.style.backgroundImage = "url('janela-aberta.png')"; // Imagem da janela aberta
        posicao.textContent = "Janela Aberta";
    });

    janela.addEventListener('mouseout', () => {
        janela.style.backgroundImage = "url('janela-fechada.png')"; // Imagem da janela fechada
        posicao.textContent = "Janela Fechada";
    });

    janela.addEventListener('click', () => {
        janela.style.backgroundImage = "url('janela-quebrada.jpg')"; // Imagem da janela quebrada
        posicao.textContent = "Janela Quebrada";
    });
});
