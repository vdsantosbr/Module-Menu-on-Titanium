var menu = require("/menu/app");

menu.setImageIcone("/KS_nav_ui.png");
menu.setHeaderBackgroundColor("#fff");
menu.setMenuBackgroundColor("#000");

var lbl = Ti.UI.createLabel({text: "TESTE", font:{fontSize: 30}});
menu.add(lbl);
menu.open();
