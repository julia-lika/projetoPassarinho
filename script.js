// Configurações básicas do jogo
var config = {
    // O navegador escolhe automaticamente o tipo de renderizador da página web
    type: Phaser.AUTO,
    // Largura
    width: 800,
    // Altura
    height: 600,
    // Funções que serão executadas durante o ciclo de vida do jogo
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
// Criando uma variável game e guardando nela um "novo jogo Phaser"
var game = new Phaser.Game(config);

// Criando variável para guardar o passarinho e usá-lo diretamente
var passarinho;

// Carregar funções do jogo
function preload() {
    this.load.image('cloud', 'assets/cloud.png');
    this.load.image('bg', 'assets/bg_space.png');
    this.load.spritesheet('bird', 'assets/bird-purple.png', { frameWidth: 75, frameHeight: 75 });
}

// Usar as funções carregadas para criar/configurá-las no jogo
function create() {
    this.add.image(400, 300, 'bg').setScale(1.2);
    passarinho = this.add.sprite(100, 300, 'bird').setScale(1.3);

    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    passarinho.anims.play('fly', true);
}

// Definir lógica de atualização em tempo real do jogo. Exemplo: movimento do personagem
function update() {
    // Movimento horizontal
    while (!passarinho.directionX) {
        passarinho.directionX = 'right';
    }

    if (passarinho.directionX === 'right' && passarinho.x < 700) {
        passarinho.x += 5;
        passarinho.setFlip(false, false);
    } else if (passarinho.directionX === 'right' && passarinho.x === 700) {
        passarinho.directionX = 'left';
        passarinho.setFlip(true, false);
    }

    if (passarinho.directionX === 'left' && passarinho.x > 100) {
        passarinho.x -= 5;
        passarinho.setFlip(true, false);
    } else if (passarinho.directionX === 'left' && passarinho.x === 100) {
        passarinho.directionX = 'right';
        passarinho.setFlip(true, false);
    }

    // Movimento vertical
    while (!passarinho.directionY) {
        passarinho.directionY = 'down';
    }

    if (passarinho.directionY === 'down' && passarinho.y < 500) {
        passarinho.y += 5;
    } else if (passarinho.directionY === 'down' && passarinho.y === 500) {
        passarinho.directionY = 'up';
    }

    if (passarinho.directionY === 'up' && passarinho.y > 100) {
        passarinho.y -= 5;
    } else if (passarinho.directionY === 'up' && passarinho.y === 100) {
        passarinho.directionY = 'down';
    }
}