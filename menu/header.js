module.exports = function(arg)
{
  
	var m = require("menu");
	m = new m();	
	
	var back = Ti.UI.createWindow({
		backgroundColor: "#000",			
		top: 80,
		opacity: 0.0,
		zIndex: 9998
	});
	
	var win = Ti.UI.createWindow({
		top: 0,
		height: 80,
		width: "100%",
		zIndex: 9999					
	});
	
	var icoMenu = Ti.UI.createImageView({		
		width: 64,
		height: 64,
		right: "1%"
	})
	win.add(icoMenu);	
	icoMenu.addEventListener("touchend", function(e){
		
		myMenu.setBackMenu(back);
		var menu = myMenu.getMenu();			
		
		if(!menu.onMenu){		
			myMenu.showMenu();
		}
		else{						
			myMenu.hideMenu();
		}			
			
	});	
	
	myMenu.setIcone(icoMenu);	
	myMenu.setHeader(win);	
	return win;
}
