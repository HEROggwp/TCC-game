const player = document.getElementById("player");
const janela = document.querySelector('.janela');

let x, y;
let speed = 4;
let keys = {};

// controle de teclas
document.addEventListener("keydown", (e) => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", (e) => keys[e.key.toLowerCase()] = false);

// função para criar inimigos
function createEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');

    // pega tamanho atual da janela
    const maxX = janela.clientWidth - 30;  // 30 = tamanho da bolinha
    const maxY = janela.clientHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    enemy.style.left = `${randomX}px`;
    enemy.style.top = `${randomY}px`;

    janela.appendChild(enemy);

    // remove depois de um tempo
    setTimeout(() => {
        enemy.remove();
    }, 1500); // 1,5s na tela
}

function gameLoop() {
    // movimento do player
    if (keys["w"]) y -= speed;
    if (keys["s"]) y += speed;
    if (keys["a"]) x -= speed;
    if (keys["d"]) x += speed;

    // limites
    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > janela.clientWidth - player.clientWidth)
        x = janela.clientWidth - player.clientWidth;

    if (y > janela.clientHeight - player.clientHeight)
        y = janela.clientHeight - player.clientHeight;

    // aplica no CSS
    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(gameLoop);
}

function init() {
    // centraliza o pinguim na janela
    x = (janela.clientWidth - player.clientWidth) / 2;
    y = (janela.clientHeight - player.clientHeight) / 2;

    player.style.left = x + "px";
    player.style.top = y + "px";

    // cria inimigos de tempos em tempos (aqui a cada 900ms)
    setInterval(createEnemy, 900);

    // começa o loop do jogo
    requestAnimationFrame(gameLoop);
}

// garante que tudo (incluindo imagem do player) carregou
window.addEventListener('load', init);
