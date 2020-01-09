var waitScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'waitScene'});
    },

    preload: function ()
    {
        currentScene = 'waitScene';
        this.load.image('text45', 'assets/text45.png');
        this.load.image('bg_1', 'assets/bg_1.png');
    },

    create: function ()
    {
        this.bg = this.add.sprite(0,0, 'bg_1');
        this.bg.setOrigin(0,0);
        this.bg.setScale(0.65);
        console.log("waitScene")
        this.wait = this.add.sprite(320, 180, 'text45');
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
            if (monthsToWait == 0){
                nextScene = 'scene1';
            }
            else
            {
                nextScene = 'waitScene';
            }
            this.scene.start('rentScene');
        }

    }
});
