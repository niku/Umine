var MainSceneLayer = cc.LayerColor.extend({
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        // API リファレンスに書いてある通り，
        // onEnter の中では必ず this._super() を呼ばなくてはならない．
        this._super();
        var layer = new MainSceneLayer(cc.color.ORANGE);
        this.addChild(layer);
    }
});
