// How are you going to get to the interview 
var scene4 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene4'});
    },

    preload: function ()
    {
        this.load.image('callfriend', 'assets/text23.png');
        this.load.image('text10', 'assets/text10.png');
        this.load.image('background', 'assets/bg_1.png');
        this.load.image('text16', 'assets/text16.png');
        this.load.image('text19', 'assets/text19.png');
    },

    create: function ()
    {
        currentScene = 4;
        console.log("scene4");
        this.bg = this.add.sprite(0,0, 'background');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);

        this.text11 = this.add.sprite(100, 200, 'callfriend');
        this.text11.setScale(0.7);

        this.text12 = this.add.sprite(500, 200, 'text10');
        this.text12.setScale(0.7);

        this.text16 = this.add.sprite(500, 200, 'text16');
        this.text16.setScale(0.7);
        this.text16.visible = false;

        this.text19 = this.add.sprite(500, 200, 'text19');
        this.text19.setScale(0.7);
        this.text19.visible = false;

        this.text16Showing = false;
        this.text19Showing = false;
        this.startTime = 0xFFFFFFF;
    },

    update: function (time, delta) {


        if (this.text16Showing && (time - this.startTime) > 3000) {
            this.scene.start('scene1');
        } else if (this.text19Showing && (time - this.startTime) / 1000 > 3) {
            savings -= 500;
            this.scene.start('scene5');
        }

        if (whichOption == 1) {
            if (dice.roll(1) < 5) {
                //youre friend didn't show
                console.log("friend didn't show");
                highPayJob = false;
                this.text16.visible = true;
                this.text11.visible = false;
                this.text12.visible = false;
                this.startTime = time;
                this.text16Showing = true;
                whichOption = 0;
            } else {
                //youre friend showed up
                this.scene.start('scene5');
            }

        } else if (whichOption == 2) {
            savings -= 20;
            if (dice.roll() > 4) {
                //child broke arm
                console.log("child broke arm");
                this.text19.visible = true;
                this.text11.visible = false;
                this.text12.visible = false;
                this.text19Showing = true;
                this.startTime = time;
                whichOption = 0;
            } else {
                this.scene.start('scene5'); //interview scene
            }
        }
    }
});
