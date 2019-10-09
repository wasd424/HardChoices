var waitScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'waitScene'});
    },

    preload: function ()
    {
        this.load.image('wait', 'assets/wait.png');
        this.load.image('background', 'assets/BackgroundStreet.png');
    },

    create: function ()
    {
        currentScene = 102;
        this.bg = this.add.sprite(0,0, 'background');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        console.log("waitScene")
        this.wait = this.add.sprite(320, 180, 'wait');
        this.wait.setScale(0.7);

        this.startTime = 0;
        this.isStart = true;

    },

    update: function (time, delta) {

        if (this.isStart) {
            this.startTime = time;
            this.isStart = false;
        }

        if (!this.isStart && (time - this.startTime) > 3000) {
            monthsToWait--;
            if (monthsToWait==0){
                nextScene='scene1';
            }
            else
            {
                nextScene= 'waitScene'
            }
            this.scene.start('rentScene');
        }

    }
});
