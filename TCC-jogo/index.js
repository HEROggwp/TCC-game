const player = document.getElementById("player");
const janela = document.querySelector(".janela");

let x = (janela.clientWidth - player.clientWidth) / 2;
let y = (janela.clientHeight - player.clientHeight) / 2;

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

    requestAnimationFrame(gameLoop);
}

gameLoop();
