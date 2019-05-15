function buildWindow() {
    var win = new Ext.Window({ // 1

        id: 'myWindow',
        title: 'My first Ext JS Window',
        width: 300,
        height: 150,
        layout: 'fit',
        autoLoad: {// 2
            url: 'sayHi.html',
            scripts: true
        }
    });
    win.show(); // 3
}
Ext.onReady(buildWindow);

