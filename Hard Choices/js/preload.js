var preload = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'preload'});
    },

    preload: function ()
    {
        
    },

    create: function ()
    {
        this.scene.start('preload');
    }
});