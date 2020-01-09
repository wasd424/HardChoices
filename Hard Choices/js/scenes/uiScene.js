//ui scene is parallel with all others
var uiScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'uiScene', active: true});
    },

    preload: function ()
    {
        //this.load.image('noMoney', 'assets/nomoney.png');
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
        this.optionChosen.visible = false; */

        this.diceRoll = this.add.text(480, 100, 'Months to wait ' + lastRoll, {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.diceRoll.visible = true;

        this.countdown = this.add.text(480, 150, 'Countdown: ' + timeUntilChoice + 's', {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.countdown.visible = false;

        scene1Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        scene2Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        scene3Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        scene4Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        scene5Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        scene6Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        scene7Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        scene8Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        scene9Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        scene10Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        scene11Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        introSceneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        loseSceneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        moralSceneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        rentSceneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
        waitSceneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    },

    update: function (time, delta) {
        this.scene.bringToTop();

        if(scene1Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene1');
        } else if(scene2Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene2');
        } else if(scene3Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene3');
        } else if(scene4Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene4');
        } else if(scene5Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene5');
        } else if(scene6Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene6');
        } else if(scene7Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene7');
        } else if(scene8Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene8');
        } else if(scene9Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene9');
        } else if(scene10Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene10');
        } else if(scene11Key.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('scene11');
        } else if(introSceneKey.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('introScene');
        } else if(loseSceneKey.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('loseScene');
        } else if(moralSceneKey.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('moralScene');
        } else if(rentSceneKey.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('rentScene');
        } else if(waitSceneKey.isDown) {
            this.scene.stop(currentScene);
            this.scene.launch('waitScene');
        }

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
        this.diceRoll.setText("Months to wait " + monthsToWait);
        this.countdown.setText("Countdown: " + timeUntilChoice + 's');
        this.strikesUI.setText("Strikes: " + strikes + '/3');
    }
});

