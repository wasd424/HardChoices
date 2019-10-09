// interview
var scene5 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene5'});
    },

    preload: function ()
    {
        this.load.image('officebg', 'assets/officebg.png');
        this.load.image('text15', 'assets/text15.png');
        this.load.image('text18', 'assets/text18.png');
        this.load.image('text14', 'assets/text14.png');
        this.load.spritesheet('boss', 'assets/bossman.png', { frameWidth: 274, frameHeight: 256, endFrame: 2});
        this.load.spritesheet('boss2', 'assets/bossman.png', { frameWidth: 274, frameHeight: 256, endFrame: 2});
    },

    create: function ()
    {
        currentScene = 5;

        console.log("scene5");

        this.officebg = this.add.sprite(0,0, 'officebg');
        this.officebg.setOrigin(0,0);
        this.officebg.setScale(0.5);

        this.text15 = this.add.sprite(500, 200, 'text15');
        this.text15.setScale(0.7);


        var bossConfig1 = {
            key: 'point',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 1, first: 0}),
            frameRate: 2
        };

        var bossConfig2 = {
            key: 'good',
            frames: this.anims.generateFrameNumbers('boss2', { frames: [ 0, 2] }),
            frameRate: 2
        };

        this.anims.create(bossConfig1);
        this.anims.create(bossConfig2)

        this.boss = this.add.sprite(270, 183, 'boss');
        this.boss.setScale(0.7);

        this.boss2 = this.add.sprite(270, 183, 'boss2');
        this.boss2.setScale(0.7);
        this.boss2.visible = false;

        console.log(this.boss);

        this.isScene5Start = true;
        this.text15Showing = true;
        this.startTime = 0xFFFFFFF;

        this.text18 = this.add.sprite(400, 200, 'text18');
        this.text18.setScale(0.7);
        this.text18.visible = false;
        this.text18Showing = false;

        this.text14 = this.add.sprite(400, 200, 'text14');
        this.text14.setScale(0.7);
        this.text14.visible = false;
        this.text14Showing = false;

    },

    update: function (time, delta) {

        if (this.text14Showing && (time - this.startTime) / 1000 > 3) {
            whichOption = 0;
            nextScene = 'scene6';
            this.scene.start('rentScene');
        } else if (this.text18Showing && (time - this.startTime) / 1000 > 3) {
            whichOption = 0;
            nextScene = 'scene1';
            this.scene.start('rentScene');
        }

        if (this.isScene5Start) {
            this.startTime = time;
            this.isScene5Start = false;
        }

        if (this.text15Showing && (time - this.startTime) / 1000 > 3) {
            this.text15Showing = false;
            this.text15.visible = false;
            if (dice.roll() > 1) {
                //you get the job
                this.boss.visible = false;
                this.boss2.visible = true;
                this.boss2.anims.play('good');
                this.text14.visible = true;
                hasJob = true;
                this.text14Showing = true;
                this.startTime = time;
            } else {
                //you did not get the job
                this.boss.anims.play('point');
                this.text18.visible = true;
                this.text18Showing = true;
                this.startTime = time;
            }
        }


    }
});
