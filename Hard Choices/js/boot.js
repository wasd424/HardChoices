var bootScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'bootScene'});
    },

    preload: function ()
    {
        this.load.spritesheet('loading', 'assets/loading.png', { frameWidth: 1154, frameHeight: 570, endFrame: 2});
        this.load.json('assets', 'assets/assets.json');
    },

    create: function ()
    {
        this.scene.start('preload');
    }
});