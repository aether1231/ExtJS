Ext.onReady(() => {
  Ext.create("Ext.window.Window", {
    height: 125,
    width: 200,
    border: false,
    closable: false,
    title: "Input needed",
    layout: "fit",
    items: formPanel,
  }).show();
});
