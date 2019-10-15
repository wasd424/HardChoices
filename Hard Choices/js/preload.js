var preload = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'preload'});
    },

    preload: function ()
    {
        alert("Preloader starting");
        /*
        //Setup and play loading animation
        var bgConfig = {
            key: 'load',
            frames: this.anims.generateFrameNumbers('loading', { start: 0, end: 2, first: 0}),
            repeat: -1,
            frameRate: 5
        };
        this.anims.create(bgConfig);
        this.bg = this.add.sprite(0,0, 'loading');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        this.bg.anims.play('load');
        */
        //Load text boxes
        for (var i = 1; i < 46; i++) {
            this.load.image('text'+i, 'assets/text'+ i + '.png');
        }
        
        //Load backgrounds
        for (var i = 1; i < 4; i++) {
            this.load.image('bg_'+i, 'assets/bg_'+ i + '.png');
        }
        
        //Load intro and title
        this.load.image('intro', 'intro.png');
        this.load.image('title', 'title.png');
    
        //Load spritesheets
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});
        this.load.spritesheet('boss', 'assets/bossman.png', { frameWidth: 274, frameHeight: 256, endFrame: 2});
        this.load.spritesheet('boss2', 'assets/bossman.png', { frameWidth: 274, frameHeight: 256, endFrame: 2});
        
    },

    create: function ()
    {
        console.log('Preloader Complete');
        this.scene.start('titleScreen');
    }
});