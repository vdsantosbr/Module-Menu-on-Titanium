Module-Menu-on-Titanium
=======================

It's a module Menu create on Titanium application, if you need a better layout in your application try this module, is very easy and simple... ENJOY 

This a simple example


Put the directory MENU in your application
var menu = require("/menu/app");


Set some properties
menu.setImageIcone("/KS_nav_ui.png");
menu.setHeaderBackgroundColor("#fff");
menu.setMenuBackgroundColor("#000");

Add a some objects
var lbl = Ti.UI.createLabel({text: "TESTE", font:{fontSize: 30}});
menu.add(lbl);

on finally you OPEN you new menu
menu.open();




I holp to help you in this case


Enjoy

*if you have a question, please, ask me and sorry for my english is terrible
