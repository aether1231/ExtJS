const tpl = Ext.create("Ext.Template", [
  "Hello {firstname} {lastname}",
  " Good to meet you!",
]);

const formPanel = Ext.create("Ext.form.FormPanel", {
  itemId: "formPanel",
  frame: true,
  layout: "anchor",
  defaultType: "textfield",
  defaults: {
    anchor: "-10",
    labelWidth: 65,
  },
  items: [
    {
      fieldLabel: "First name",
      name: "firstname",
    },
    {
      fieldLabel: "Last name",
      name: "lastname",
    },
  ],
  buttons: [
    {
      text: "Submit",
      handler: (btn) => {
        const formPanel = btn.up("#formPanel"),
          vals = formPanel.getValues(),
          greeting = tpl.apply(vals);
        Ext.Msg.alert("Hello!", greeting);
      },
    },
  ],
});
