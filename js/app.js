Ext.require(["Ext.button.Button", "Ext.panel.Panel", "Ext.toolbar.Toolbar"]);

Ext.onReady(() => {
  const config = window.location.href.includes("localhost")
    ? appConfig.local
    : appConfig.remote;
  for (const [key, value] of Object.entries(config)) {
    localStorage.setItem(key, value);
  }
  // textField1();
  // numberField1();
  // comboboxLocal();
  // comboboxRemote();
  // comboboxCustomRemote();
  // timeField();
  // timeFieldWithRange();
  // htmlEditor();
  // htmlEditorDisabledButtons();
  dateField();
});
