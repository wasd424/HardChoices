// go to work.
var scene11 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'scene11'});
    },

    preload: function ()
    {
        this.load.image('background', 'assets/backgorund46.png');
        this.load.image('highpay', 'assets/highpay.png');
        this.load.image('lowpay', 'assets/lowpay.png');
    },

    create: function ()
    {
        currentScene = 11;
        console.log("scene11");

        this.background = this.add.sprite(0,0, 'background');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.highpay = this.add.sprite(300, 200, 'highpay');	
        this.highpay.setScale(0.7);
        this.highpay.visible = false;

        this.lowpay = this.add.sprite(300, 200, 'lowpay');	
        this.lowpay.setScale(0.7);
        this.lowpay.visible = false;

        this.isStart = true;

        this.startTime = 0;
    },

    update: function (time, delta) {
        if (this.isStart) {
            this.isStart = false;
            if (highPayJob) {
                this.highpay.visible = true;
                savings += 700;
                this.startTime = time;
            } else {
                this.lowpay.visible = true;
                savings += 600;
                this.startTime = time;
            }

            this.startTime = time;
        }

        if (!this.isStart && (time - this.startTime) > 3000) {
            nextScene = 'scene6';
            this.scene.start('rentScene');
        }
    }
});

