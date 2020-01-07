var playerScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'playerScene', active: true});
    },

    preload: function ()
    {
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});
    },

    create: function ()
    {
        console.log("playerScene");
        //the time will not be bigger that the start unless we want it to
        this.startTime = 0xFFFFFFF;
        this.startCountdown = false;

        var playerConfig = {
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3, first: 0}),
            repeat: -1,
            frameRate: 7
            
        };

        this.anims.create(playerConfig);


        this.player = this.add.sprite(320, 307, 'player');
        this.player.setScale(1);
        this.player.visible = false;
        this.player.anims.play('walk');

        this.cursors = this.input.keyboard.createCursorKeys();


    },

    update: function (time, delta) {
        if (currentScene == 5 || currentScene == 10) {
            this.player.visible = false;
        } else if (!isIntro) {
            this.player.visible = true;
        }

        if(this.cursors.right.isDown) {
            this.player.anims.resume();
            this.player.flipX = false;
            this.player.x += 4;
        } else if (this.cursors.left.isDown) {
            this.player.anims.resume();
            this.player.flipX = true;
            this.player.x -= 4;
        } else {
            this.player.anims.pause(this.player.anims.currentAnim.frames[1]);
        }

        if (this.player.x > 370 && !this.startCountdown) {
            this.startTime = time;
            this.startCountdown = true;
        } else if (this.player.x < 270 && !this.startCountdown) {
            this.startTime = time;
            this.startCountdown = true;
        } else if (this.player.x > 270 && this.player.x < 370) {
            this.startCountdown = false;
            this.startTime = 0;
            timeUntilChoice = 3;
        }
        if (this.startCountdown) {
            timeUntilChoice = 3 - ((time - this.startTime) / 1000);
            if ((time - this.startTime) > 3000) {
                console.log("optionSelected");
                if (this.player.x < 270) {
                    whichOption = 1;
                } else if (this.player.x > 370) {
                    whichOption = 2;
                }

                console.log(whichOption);
                this.player.x = 320; //reset position
            }
        }
        if(this.player.x >= 640){
            this.player.x -= 4;
        }
         if(this.player.x <= 0){
            this.player.x += 4;
        }

        this.scene.bringToTop();
    }
});

