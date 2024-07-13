class OpenScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OpenScene' });
    }

    preload() {
        // Load assets
        this.load.image('title', 'assets/png/TitleTxt.png');
        this.load.image('startButton', 'assets/png/start.png');
        this.load.image('quitButton', 'assets/png/quit.png');
        this.load.image('background', 'assets/png/space background.png');
        this.load.audio('buttonClick', 'assets/mp3/buttonclick.mp3');
    }

    create() {
        this.background = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'background').setOrigin(0, 0);

        this.title = this.add.image(this.game.config.width / 2, this.game.config.height / 2 - 100, 'title').setOrigin(0.5);
        this.title.setScale(0.35);

        // Start Button
        this.startButton = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'startButton').setOrigin(0.5).setInteractive();
        this.startButton.setScale(0.5);
        this.startButton.on('pointerdown', () => {
            this.sound.play('buttonClick', { volume: 0.5 });
            this.scene.stop('GameScene');
            this.scene.start('GameScene', { reset: true });
        });
        this.startButton.on('pointerover', () => this.startButton.setTint(0xaaaaaa));
        this.startButton.on('pointerout', () => this.startButton.clearTint());

        // Quit Button
        this.quitButton = this.add.image(this.game.config.width / 2, this.game.config.height / 2 + 100, 'quitButton').setOrigin(0.51, 0.39).setInteractive();
        this.quitButton.setScale(0.5);
        this.quitButton.on('pointerdown', () => {
            this.sound.play('buttonClick', { volume: 0.5 });
            alert('Thank you for playing!');
        });
        this.quitButton.on('pointerover', () => this.quitButton.setTint(0xaaaaaa));
        this.quitButton.on('pointerout', () => this.quitButton.clearTint());

        this.add.text(this.game.config.width / 2, this.game.config.height - 50, 'Game By: Mike Juri P. Rubino - Section A223', { fontSize: '20px', fill: '#ffffff' }).setOrigin(0.5, -1.5);
    }
}