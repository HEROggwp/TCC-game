const player = document.getElementById("player");
const janela = document.querySelector('.janela');
const janelaWidth = janela.offsetWidth;
const janelaHeight = janela.offsetHeight;

function createEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');

    const randomX = Math.floor(Math.random() * (janelaWidth - 30));
    const randomY = Math.floor(Math.random() * (janelaHeight - 30));

    enemy.style.left = `${randomX}px`;
    enemy.style.top = `${randomY}px`;

    // Adiciona o inimigo à área do jogo
    janela.appendChild(enemy);

    // Opcional: Remove o inimigo após alguns segundos
    setTimeout(() => {
        enemy.remove();
    }, 500); // Inimigo desaparece após 3 segundos
}


let x = (janela.clientWidth - player.clientWidth) ;
let y = (janela.clientHeight - player.clientHeight) ;

let speed = 4;
let keys = {};

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function gameLoop() {

    if (keys["w"]) y -= speed;
    if (keys["s"]) y += speed;
    if (keys["a"]) x -= speed;
    if (keys["d"]) x += speed;

    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > janela.clientWidth - player.clientWidth)
        x = janela.clientWidth - player.clientWidth;

    if (y > janela.clientHeight - player.clientHeight)
        y = janela.clientHeight - player.clientHeight;

    // Atualizar posição real
    player.style.left = x + "px";
    player.style.top = y + "px";

    // inimigo de gelo// 
    setInterval(createEnemy, 9000);

    requestAnimationFrame(gameLoop);
}

gameLoop();
