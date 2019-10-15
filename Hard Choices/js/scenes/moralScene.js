//You are homeless now
var moralScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'moralScene'});
    },

    preload: function ()
    {
        this.load.image('bg_1', 'assets/bg_1.png');
        this.load.image('text21', 'assets/text21.png');
        this.load.image('text43', 'assets/text43.png');
        this.load.image('text44', 'assets/text44.png');

    },

    create: function ()
    {


        console.log("moralScene");
        currentScene = 101;
        this.background = this.add.sprite(0,0, 'bg_1');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.moral1 = this.add.sprite(300, 200, 'text43');	
        this.moral1.setScale(0.7);

    },

    update: function (time, delta)
    {
        if (!timeStarted){
            this.startTime=time;
            timeStarted = true;
        }
        if ((time - this.startTime) > 5000) {
            timeStarted = false;
            this.moral1.visible=false;
            this.moral2 = this.add.sprite(300, 200, 'text44');	
            this.moral2.setScale(0.7);
        }
    },
});
