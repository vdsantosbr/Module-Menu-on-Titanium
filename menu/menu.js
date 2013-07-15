module.exports = function(arg)
{
  
	var win = Ti.UI.createWindow({
		width: "80%",
		left: "100%",
		top: 80,
		layout: "vertical",
		zIndex: 9999
	});	
	myMenu.setMenu(win);
		
	return win;	
}
