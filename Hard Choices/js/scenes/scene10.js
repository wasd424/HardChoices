//You're FIRED
var scene10 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene10'});
    },

    preload: function ()
    {
        this.load.image('background2', 'assets/backgorund46.png');
        this.load.image('fired', 'assets/fired.png');
    },

    create: function ()
    {
        currentScene = 10;
        
        strikes = 0;

        console.log("scene10");

        this.officebg = this.add.sprite(0,0, 'officebg');
        this.officebg.setOrigin(0,0);
        this.officebg.setScale(0.5);

        this.fired = this.add.sprite(500, 200, 'fired');	
        this.fired.setScale(0.7);

        var bossConfig1 = {
            key: 'point',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 1, first: 0}),
            frameRate: 2
        };

        this.anims.create(bossConfig1);

        this.boss = this.add.sprite(270, 183, 'boss');
        this.boss.setScale(0.7);

        this.friend = false;

        this.isStart = true;

        this.startTime = 0;
    },

    update: function (time, delta) {
        if (this.isStart) {
            this.startTime = time;
            this.boss.anims.play('point');
            this.isStart = false;
            highPayJob = false;
        }

        if (!this.isStart && (time - this.startTime) > 3000) {

            nextScene = 'scene1';
            this.scene.start('rentScene');
        }
    }
});
