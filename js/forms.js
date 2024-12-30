const comboboxCustomRemote = () => {
  Ext.QuickTips.init();

  var remoteJsonStore = Ext.create(Ext.data.JsonStore, {
    baseParams: {
      column: "fullName",
    },
    fields: [
      {
        name: "name",
        mapping: "fullName",
      },
      {
        name: "id",
        mapping: "id",
      },
      {
        name: "address",
        mapping: "address",
      },
      {
        name: "city",
        mapping: "city",
      },
      {
        name: "state",
        mapping: "state",
      },
      {
        name: "zip",
        mapping: "zip",
      },
    ],
    proxy: {
      type: "ajax",
      url:
        `${localStorage.getItem("baseURL")}/php/main.php?op=1` +
        `&srvr=${localStorage.getItem("servername")}` +
        `&user=${localStorage.getItem("username")}` +
        `&pass=${localStorage.getItem("password")}` +
        `&db=${localStorage.getItem("dbName")}`,
      reader: {
        type: "json",
        rootProperty: "records",
        totalProperty: "totalCount",
      },
    },
  });

  var combo = {
    cls: "customCombo",
    xtype: "combo",
    queryMode: "remote",
    fieldLabel: "Search by name",
    width: 320,
    forceSelection: true,
    displayField: "name",
    valueField: "id",
    pageSize: 20,
    minChars: 1,
    triggerAction: "all",
    store: remoteJsonStore,
    listConfig: {
      getInnerTpl: function () {
        return (
          ' <div data-qtip="{name}">' +
          '<div class="combo-name">{name}</div>' +
          '<div class="combo-full-address"> {address} </div>' +
          '<div class="combo-full-address">{city} {state} {zip}</div>' +
          "</div>"
        );
      },
    },
  };

  Ext.create(Ext.Window, {
    title: "",
    height: 100,
    labelWidth: 100,
    bodyStyle: "padding: 5px",
    items: combo,
  }).show();
};

const comboboxRemote = () => {
  Ext.QuickTips.init();

  var remoteJsonStore = Ext.create(Ext.data.JsonStore, {
    storeId: "people",
    fields: ["id", "name"],
    proxy: {
      type: "ajax",
      url:
        `${localStorage.getItem("baseURL")}/php/main.php?op=1` +
        `&srvr=${localStorage.getItem("servername")}` +
        `&user=${localStorage.getItem("username")}` +
        `&pass=${localStorage.getItem("password")}` +
        `&db=${localStorage.getItem("dbName")}`,
      reader: {
        type: "json",
        rootProperty: "records",
        totalProperty: "totalCount",
      },
    },
  });

  var combo = {
    xtype: "combo",
    queryMode: "remote",
    fieldLabel: "Search by name",
    width: 320,
    forceSelection: true,
    displayField: "name",
    valueField: "id",
    pageSize: 20,
    minChars: 1,
    triggerAction: "all",
    store: remoteJsonStore,
  };

  Ext.create(Ext.Window, {
    title: "",
    height: 100,
    labelWidth: 100,
    bodyStyle: "padding: 5px",
    items: combo,
  }).show();
};

const comboboxLocal = () => {
  Ext.QuickTips.init();
  var names = [
    ["Jack Slocum"],
    ["Abe Elias"],
    ["Aaron Conran"],
    ["Evan Trimboli"],
  ];

  var mySimpleStore = {
    type: "array",
    data: names,
    fields: ["name"],
  };

  var combo = {
    xtype: "combo",
    fieldLabel: "Select a name",
    store: mySimpleStore,
    displayField: "name",
    typeAhead: true,
    mode: "local",
  };

  new Ext.Window({
    title: "",
    height: 100,
    labelWidth: 80,
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
