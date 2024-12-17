const tplData = [
  {
    color: "#FFE9E9",
    name: "Naomi White",
    age: 25,
    dob: "03/17/84",
    cars: ["Jetta", "Camry", "S2000"],
  },
  {
    color: "#E9E9FF",
    name: "John Smith",
    age: 20,
    dob: "10/20/89",
    cars: ["Civic", "Accord", "Camry"],
  },
];

advancedXTemplates = () => {
  var myTpl = Ext.create("Ext.XTemplate", [
    '<tpl for=".">',
    '<div style="background-color: {color}; margin: 10px;">',
    "<b> Name :</b> {name}<br />",
    "<b> Age :</b> {age}<br />",
    "<b> DOB :</b> {dob}<br />",
    "<b> Cars : </b>",
    '<tpl for="cars">',
    "{.}",
    '<tpl if="this.isCamry(values)">',
    "<b> (same car)</b>",
    "</tpl>",
    '{[ (xindex < xcount) ? ", " : "" ]}',
    "</tpl>",
    "<br />",
    "</div>",
    "</tpl>",
    {
      isCamry: function (car) {
        return car === "Camry";
      },
    },
  ]);

  myTpl.compile();
  myTpl.append(document.body, tplData);
};

xTemplates = () => {
  const myTpl = Ext.create("Ext.XTemplate", [
    '<tpl for=".">',
    '<div style="background-color: {color}; margin: 10px;">',
    "<b> Name :</b> {name}<br />",
    "<b> Age :</b> {age}<br />",
    "<b> DOB :</b> {dob}<br />",
    "</div>",
    "</tpl>",
  ]);
  myTpl.compile();
  myTpl.append(document.body, tplData);
};

templates = () => {
  const myTpl = Ext.create("Ext.Template", [
    '<div style="background-color: {color}; margin: 10px;">',
    "<b> Name :</b> {name}<br />",
    "<b> Age :</b> {age}<br />",
    "<b> DOB :</b> {dob}<br />",
    "</div>",
  ]);

  myTpl.compile();

  myTpl.append(document.body, {
    color: "#E9E9FF",
    name: "John Smith",
    age: 20,
    dob: "10/20/89",
  });
  myTpl.append(document.body, {
    color: "#FFE9E9",
    name: "Naomi White",
    age: 25,
    dob: "03/17/84",
  });
};

elementManipulation = () => {
  const div1 = Ext.get("div1");
  div1.setSize(300, 300, { duration: 1000, easing: "bounceout" });

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

  div1.createChild({
    tag: "button",
    id: "btn1",
    html: "Remove First Child",
  });

  div1.createChild({
    tag: "button",
    id: "btn2",
    html: "Remove 4th Child",
  });

  Ext.get("btn1").addListener("click", () => {
    const myDiv = Ext.get("div1");
    const firstChild = myDiv.down("div:first-child");
    firstChild.remove();
  });

  Ext.get("btn2").addListener("click", () => {
    const myDiv2 = Ext.get("div2");
    myDiv2.down(".child3").remove();
  });

  const tpl = Ext.create("Ext.Template", [
    '<div id="div2" class="myDiv">',
    '<div id="child1">Child 1</div>',
    '<div class="child2">Child 2</div>',
    '<div class="child3">Child 3</div>',
    '<div id="child4" class="sameClass">Child 4</div>',
    "<div>Child 5</div>",
    "</div>",
  ]);
  div1.appendChild(tpl);
};
