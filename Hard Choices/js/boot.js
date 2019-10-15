var bootScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'bootScene'});
    },

    preload: function ()
    {
        console.log("Boot started");
        this.load.spritesheet('loading', 'assets/loading.png', { frameWidth: 1154, frameHeight: 570, endFrame: 2});
        console.log("Boot started2");
    },

    create: function ()
    {
        alert("Boot complete");
        this.scene.start('preload');
    }
});