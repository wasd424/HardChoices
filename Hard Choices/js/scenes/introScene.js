var introScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'introScene'});
    },

    preload: function ()
    {
        this.load.image('intro', 'assets/intro.png');
    },

    create: function ()
    {
        console.log("introScene")
        this.intro = this.add.sprite(0,0, 'intro');
        this.intro.setOrigin(0,0);
        this.intro.setScale(0.75);
        //make the intro interactive
        this.intro.setInteractive();

        this.intro.on('pointerdown', function (pointer) {
            this.intro.visible = false;
            this.intro.disableInteractive();
            console.log("keydown on intro");
            isIntro = false;
            this.scene.start('scene1');
        }, this);
    }
});