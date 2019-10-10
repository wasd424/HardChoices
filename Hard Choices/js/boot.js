var bootScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'bootScene'});
    },

    preload: function ()
    {
        this.load.image('loading', 'assets/loading.png');
    },

    create: function ()
    {
        this.scene.start('preload');
    }
});