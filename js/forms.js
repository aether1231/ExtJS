const combobox1 = () => {
  // Ext.QuickTips.init();
  var remoteJsonStore = Ext.create(Ext.data.Store, {
    root: "records",
    totalProperty: "totalCount",
    baseParams: {
      column: "fullName",
    },
    fields: ["fullName", "id"],
    proxy: {
      type: "jsonp",
      url: "../php/main.php?op=1",
    },
  });

  var combo = {
    xtype: "combo",
    fieldLabel: "Search by name",
    forceSelection: true,
    displayField: "name",
    loadingText: "Querying....",
    minChars: 1,
    store: remoteJsonStore,
  };

  new Ext.Window({
    title: "",
    height: 100,
    labelWidth: 100,
    bodyStyle: "padding: 5px",
    items: combo,
  }).show();
};

const numberField1 = () => {
  Ext.QuickTips.init();

  var fpItems = [
    {
      xtype: "numberfield",
      fieldLabel: "Numbers only",
      allowBlank: false,
      emptyText: "This field is empty!",
      decimalPrecision: 3,
      minValue: 0.001,
      maxValue: 2,
    },
  ];

  var fp = new Ext.form.Panel({
    renderTo: Ext.getBody(),
    width: 400,
    title: "Exercising textfields",
    height: 170,
    frame: true,
    bodyStyle: "padding: 5px",
    monitorValid: true,
    monitorPoll: 50,
    labelWidth: 125,
    defaults: {
      msgTarget: "side",
      anchor: "-20",
    },
    items: fpItems,
  });
};

const textField1 = () => {
  Ext.QuickTips.init();

  var fpItems = [
    {
      fieldLabel: "Alpha only",
      allowBlank: false,
      emptyText: "This field is empty!",
      maskRe: /[a-z]/i,
      msgTarget: "side",
    },
    {
      fieldLabel: "Simple 3 to 7 Chars",
      allowBlank: false,
      msgTarget: "title",
      minLength: 3,
      maxLength: 7,
    },
    {
      fieldLabel: "Special Chars Only",
      allowBlank: false,
      msgTarget: "qtip",
      stripCharsRe: /[a-zA-Z0-9]/gi,
    },
    {
      fieldLabel: "Web Only with VType",
      allowBlank: false,
      vtype: "url",
      msgTarget: "side",
    },
    {
      fieldLabel: "Password",
      allowBlank: false,
      inputType: "password",
    },
    {
      fieldLabel: "File",
      allowBlank: false,
      xtype: "filefield",
    },
    {
      xtype: "textarea",
      fieldLabel: "My TextArea",
      name: "myTextArea",
      anchor: "100%",
      height: 100,
    },
  ];

  var fp = Ext.create("Ext.form.Panel", {
    renderTo: Ext.getBody(),
    width: 400,
    title: "Exploring text fields",
    //            height       : 220,
    frame: true,
    bodyStyle: "padding: 5px",
    monitorValid: true,
    monitorPoll: 50,
    labelWidth: 125,
    defaultType: "textfield",
    defaults: {
      msgTarget: "side",
      anchor: "-20",
    },
    items: fpItems,
  });
};
