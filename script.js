// configurações básicas do jogo
var config = {
    // navegador escolhe automaticamente o tipo de renderizador da página web
    type: Phaser.AUTO,

    // largura
    width: 800,

    // altura
    height: 600,

    // funções que serão executadas durante o ciclo de vida do jogo
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
// criando uma variável game e guardando nela um "novo jogo phaser"
var game = new Phaser.Game(config);

// criando variável para guardar o passarinho e usá-lo diretamente
var passarinho;

// carregar funções do jogo
function preload() {
    this.load.image('cloud', 'assets/cloud.png');
    this.load.image('bg', 'assets/bg_space.png');
    this.load.spritesheet('bird', 'assets/bird-purple.png', { frameWidth: 75, frameHeight: 75 });
}

// usar as funções carregadas para criar/configurá-las no jogo
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

// definir lógica de atualização em tempo real do jogo. exemplo: movimento do personagem
function update() {
    if (!passarinho.directionX) {
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

    if (!passarinho.directionY) {
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

