//ui scene is parallel with all others
var uiScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'uiScene', active: true});
    },

    preload: function ()
    {
        this.load.image('noMoney', 'assets/noMoney.png');
    },

    create: function ()
    {
        console.log("ui");

        //Text boxes
        this.monthUI = this.add.text(480, 75, 'Month: ' + month, {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.monthUI.visible = false;

        this.savingsUI = this.add.text(480, 125, 'Savings: $' + savings, {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.noMoney = this.add.sprite(320, 200, 'noMoney');	
        this.noMoney.setScale(0.9);
        this.noMoney.visible = false;

        this.savingsUI.visible = false;

        this.strikesUI = this.add.text(480, 100, 'Strikes: ' + strikes + '/3', {
            font: '20px Calibri',
            fill: '#000000'
        });


        this.strikesUI.visible = false;

        /* Debugging

        this.optionChosen = this.add.text(480, 50, 'Option Chosen: ' + whichOption, {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.optionChosen.visible = false; 

        this.diceRoll = this.add.text(480, 100, 'Months to wait ' + lastRoll, {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.diceRoll.visible = false;*/

        this.countdown = this.add.text(480, 150, 'Countdown: ' + timeUntilChoice + 's', {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.countdown.visible = false;
    },

    update: function (time, delta) {
        this.scene.bringToTop();
        if (!isIntro) {
            this.monthUI.visible = true;
            this.savingsUI.visible = true;
            //this.optionChosen.visible = true;
            this.countdown.visible = true;
        }

        if (currentScene > 5 && hasJob) {
            this.strikesUI.visible = true;
        } else {
            this.strikesUI.visible = false;
        }

        if (savings <= 0 && !timeStarted) { //You become homeless once you reach $0
            this.noMoney.visible= true;
            this.startTime=time;
            timeStarted = true;
        }
         if (savings <= 0 && (time - this.startTime) > 2000) {
             timeStarted = false;
            this.scene.start('loseScene');
        }

        this.monthUI.setText("Month: " + month);
        this.savingsUI.setText("Savings: $" + savings);
        //this.optionChosen.setText("Option Chosen: " + whichOption);
        //this.diceRoll.setText("Months to wait " + lastRoll);
        this.countdown.setText("Countdown: " + timeUntilChoice + 's');
        this.strikesUI.setText("Strikes: " + strikes + '/3');
    }
});

