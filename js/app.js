Ext.onReady(() => {
  const div1 = Ext.get("div1");
  div1.setSize(300, 300, { duration: 3000, easing: "bounceout" });

  div1.createChild("Child from a string");
  div1.createChild("<div>Element from a string</div>");
  div1.createChild({ tag: "div", html: "Child from a config object" });
  div1.createChild({
    tag: "div",
    style: "border: 1px dashed; padding: 5px;",
    children: {
      tag: "div",
      html: "... nested div",
      style: "color: #EE0000; border: 1px solid",
    },
  });

  div1.insertFirst({
    tag: "div",
    html: "Child inserted as node 0 of div1",
  });

  div1.createChild(
    {
      tag: "div",
      id: "removeMeLater",
      html: "Child inserted as node 2 of div1",
    },
    div1.dom.childNodes[3]
  );
});
