const panelToolbar4 = () => {
  var allButtons = [{ text: "Btn 1" }, { text: "Btn 2" }, { text: "Btn 3" }];

  var topDockedToolbar = {
    // 2
    xtype: "toolbar",
    dock: "top",
    items: allButtons,
  };

  var bottomDockedToolbar = {
    xtype: "toolbar",
    dock: "bottom",
    items: allButtons,
  };

  var leftDockedToolbar = {
    xtype: "toolbar",
    vertical: true,
    weight: 10,
    dock: "left",
    items: allButtons,
  };

  var rightDockedToolbar = {
    xtype: "toolbar",
    vertical: true,
    weight: 10,
    dock: "right",
    items: allButtons,
  };

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 350,
    height: 250,
    title: "Ext Panels rock!",
    renderTo: Ext.getBody(),
    html: "Content body",
    buttons: {
      weight: -1,
      items: allButtons,
    },
    dockedItems: [
      // 3
      topDockedToolbar,
      bottomDockedToolbar,
      leftDockedToolbar,
      rightDockedToolbar,
    ],
  });
};

const panelToolbar3 = () => {
  var allButtons = [
    // 1
    { text: "Btn 1" },
    { text: "Btn 2" },
    { text: "Btn 3" },
  ];

  var topDockedToolbar = {
    // 2
    xtype: "toolbar",
    dock: "top",
    items: allButtons,
  };

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 350,
    height: 250,
    title: "Ext Panels rock!",
    renderTo: Ext.getBody(),
    html: "Content body",
    buttons: {
      items: allButtons,
    },
    dockedItems: [
      // 3
      topDockedToolbar,
    ],
  });
};

const panelToobar2 = () => {
  const myBtnHandler = function (btn) {
      // 1
      Ext.MessageBox.alert("You Clicked", btn.text);
    },
    fileBtn = Ext.create("Ext.button.Button", {
      // 2
      text: "File",
      handler: myBtnHandler,
    }),
    editBtn = Ext.create("Ext.button.Button", {
      // 3
      text: "Edit",
      handler: myBtnHandler,
    }),
    tbFill = new Ext.toolbar.Fill(); // 4

  var myTopToolbar = Ext.create("Ext.toolbar.Toolbar", {
    // 5
    items: [fileBtn, tbFill, editBtn],
  });

  var myBottomToolbar = [
    // 6
    {
      text: "Save",
      handler: myBtnHandler,
    },
    "-", // vertical divider
    {
      text: "Cancel",
      handler: myBtnHandler,
    },
    "->", // pull right
    "<b>Items open: 1</b>",
  ];

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 200,
    height: 150,
    title: "Ext Panels rock!",
    collapsible: true,
    renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: "My first Toolbar Panel!",
    buttons: [
      {
        text: "Press me!",
        handler: myBtnHandler,
      },
    ],
    tools: [
      {
        type: "gear",
        handler: function (evt, toolEl, panel) {
          debugger;
          var toolClassNames = toolEl.dom.className.split(" ");
          var toolClass = toolClassNames[1];
          var toolId = toolClass.split("-")[2];

          Ext.MessageBox.alert("You Clicked", "Tool " + toolId);
        },
      },
      {
        type: "help",
        handler: function () {
          Ext.MessageBox.alert("You Clicked", "The help tool");
        },
      },
    ],
  });
};

const panelToobars = () => {
  var myBtnHandler = function (btn) {
      // 1
      Ext.MessageBox.alert("You Clicked", btn.text);
    },
    fileBtn = Ext.create("Ext.button.Button", {
      // 2
      text: "File",
      handler: myBtnHandler,
    }),
    editBtn = Ext.create("Ext.button.Button", {
      // 3
      text: "Edit",
      handler: myBtnHandler,
    }),
    tbFill = new Ext.toolbar.Fill(); // 4

  var myTopToolbar = Ext.create("Ext.toolbar.Toolbar", {
    // 5
    items: [fileBtn, tbFill, editBtn],
  });

  var myBottomToolbar = [
    // 6
    {
      text: "Save",
      handler: myBtnHandler,
    },
    "-", // vertical divider
    {
      text: "Cancel",
      handler: myBtnHandler,
    },
    "->", // pull right
    "<b>Items open: 1</b>",
  ];

  var myPanel = Ext.create("Ext.panel.Panel", {
    width: 200,
    height: 150,
    title: "Ext Panels rock!",
    collapsible: true,
    renderTo: Ext.getBody(),
    tbar: myTopToolbar,
    bbar: myBottomToolbar,
    html: "My first Toolbar Panel!",
  });
};

componentQuery = () => {
  // I'm using textmate while sitting on an airplane headed to SF CA to build this example.
  // If this file contains hard tabs, my sincere apologies.

  var buildNestedPanel = function (itemId) {
    var unique = Math.floor(Math.random() * 1000);
    return {
      title: "itemId : " + itemId,
      level: 3,
      layout: "fit",
      flex: 1,
      frame: true,
      itemId: itemId,
      items: {
        html:
          "itemId: " +
          itemId +
          "_gc1,<br />grandchild: true,<br />unique: " +
          unique,
        itemId: itemId + "_gc1",
        unique: unique,
        bodyStyle: "padding: 10px; background-color: #E9F9F9	;",
        grandchild: true,
      },
    };
  };

  var genChildPanels = function (itemId) {
    return {
      title: "itemId: " + itemId,
      itemId: itemId,
      flex: 1,
      level: 2,
      frame: true,
      layout: {
        type: "hbox",
        align: "stretch",
      },
      items: [
        buildNestedPanel(itemId + "_c1"),
        buildNestedPanel(itemId + "_c2"),
        buildNestedPanel(itemId + "_c3"),
      ],
    };
  };

  var submitHandler = function () {
    var ownrPnl = this.up("panel")[0],
      tf = this.ownerCt.query("#queryEditor")[0],
      query = tf.getRawValue(),
      items;

    if (query.length < 1) {
      Ext.MessageBox.alert(
        "Error!",
        "The query editor cannot be left blank!",
        function () {
          tf.el.frame("#F00");
          tf.focus();
        }
      );
      return;
    } else {
      items = Ext.ComponentQuery.query(query);
    }

    if (items.length < 1) {
      if (console.warn) {
        console.warn("No items found using:", query);
      }
    } else {
      if (console.info) {
        console.info("found " + query.length + " items using query: ", query);
      }
      Ext.each(items, function (item) {
        if (console.log) {
          console.log(item);
        }
        item.rendered && item.el.fadeOut().fadeIn();
      });
    }
  };

  var bottomToolbar = {
    xtype: "toolbar",
    dock: "bottom",
    items: [
      "Ext.ComponentQuery.query('",
      {
        xtype: "textfield",
        itemId: "queryEditor",
        flex: 1,
      },
      "');",
      "->",
      {
        text: "Submit query",
        handler: submitHandler,
      },
    ],
  };
  Ext.create("Ext.container.Viewport", {
    layout: "fit",
    items: {
      itemId: "master_panel",
      layout: {
        type: "vbox",
        align: "stretch",
      },
      items: [genChildPanels("p1"), genChildPanels("p2"), genChildPanels("p3")],
      dockedItems: [bottomToolbar],
    },
  });
};

container1 = () => {
  const panel1 = {
    html: "I am Panel1",
    id: "panel1",
    frame: true,
    height: 100,
  };
  const panel2 = {
    html: "<b>I am Panel2</b>",
    id: "panel2",
    frame: true,
  };
  const myWin = Ext.create("Ext.window.Window", {
    id: "myWin",
    height: 400,
    width: 400,
    items: [panel1, panel2],
  });

  myWin.add({
    title: "Appended Panel",
    id: "addedPanel",
    html: "Hello there!",
  });
  myWin.insert(1, {
    title: "Inserted Panel",
    id: "insertedPanel",
    html: "It is cool here!",
  });
  myWin.add({
    xtype: "button",
    html: "Del Appended Panel",
    handler: () => {
      const panel = Ext.getCmp("addedPanel");
      Ext.getCmp("myWin").remove(panel);
    },
  });
  myWin.add({
    xtype: "button",
    html: "Copy",
    handler: () => {
      const panel = Ext.getCmp("insertedPanel");
      Ext.getCmp("myWin").remove(panel, false);
      Ext.getCmp("panel1").add(panel);
    },
  });
  myWin.show();
};

components2 = () => {
  const panel = Ext.create("Ext.window.Window", {
    width: 200,
    height: 150,
    title: "Accordion window",
    border: false,
    layout: {
      type: "accordion",
      animate: true,
    },
    items: [
      {
        xtype: "panel",
        title: "Plain Panel",
        html: "Panel with an xtype specified",
      },
      {
        title: "Plain Panel 2",
        html: "Panel with <b>no</b> xtype specified",
      },
    ],
  });
  panel.show();
  // panel.render(document.body);
};

components1 = () => {
  const panel1 = {
    xtype: "panel",
    title: "Plain Panel",
    html: "Panel with an xtype specified",
  };
  const panel2 = {
    title: "Plain Panel 2",
    html: "Panel with <b>no</b> xtype specified",
  };

  Ext.create("Ext.window.Window", {
    width: 200,
    height: 150,
    title: "Accordion window",
    border: false,
    layout: {
      type: "accordion",
      animate: true,
    },
    items: [panel1, panel2],
  }).show();
};
