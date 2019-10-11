var rentScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'rentScene'});
    },

    preload: function ()
    {
        //this.load.image('bg_1', 'assets/bg_1.png');
        //this.load.image('dontPayRent', 'assets/text41.png');
        //this.load.image('payRent', 'assets/text40.png');
        //this.load.image('eviction', 'assets/text42.png');
    },

    create: function ()
    {
        whichOption = 0;
        month++;
        savings -= 150;
        if (hasLoan){
            savings -= 100;
        }
        console.log("rentScene");
        console.log(hasLoan);
        currentScene = 100; 
        this.background = this.add.sprite(0,0, 'bg_1');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.payRent = this.add.sprite(130, 200, 'payRent');	
        this.payRent.setScale(0.9);
        this.dontPayRent = this.add.sprite(500, 200, 'dontPayRent');	
        this.dontPayRent.setScale(0.7);
        this.eviction = this.add.sprite(320, 200, 'eviction');	
        this.eviction.setScale(0.7);
        this.eviction.visible = false;
        this.startTime = 1;
        this.evictionShowing = false;
    },
    update: function (time, delta) {

        if (this.evictionShowing && (time - this.startTime) > 2000) {
            this.scene.start('loseScene');
        }

        if (whichOption == 1 ) {
            savings -= 400;
            whichOption = 0;
            this.scene.start(nextScene);
        } else if (whichOption == 2) {
            evictionProb ++;
            if (dice.roll() < evictionProb) {
                whichOption = 0;
                this.startTime = time;          //eviction
                this.dontPayRent.visible = false;
                this.payRent.visible = false;
                this.evictionShowing = true;
                this.eviction.visible = true;
            } else {
                whichOption = 0;
                this.scene.start(nextScene); //not interview scene
            }

        }
    }

});
