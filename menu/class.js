var currentWindow = 
{
  setWindow: function(window)
	{
		this.win = window;
	},
	getWindow: function()
	{
		return this.win;
	}
}


var myMenu = 
{
	setMenu: function(menu)
	{
		this.menu = menu;
	},
	getMenu: function()
	{
		return this.menu;
	},
	setBackMenu: function(back)
	{
		this.back = back;
	},
	getBackMenu: function()
	{
		return this.back;
	},
	showMenu: function()
	{

		var R = this.menu;
		R.animate({left: "20%", duration: 400}, function(e){
			R.onMenu = true;											
		});
		
		this.back.open();
		this.back.animate({opacity: 0.6, duration: 400});
		
	},
	hideMenu: function()
	{
	
		var R = this.menu;
		R.animate({left: "100%", duration: 400}, function(e){				
			R.onMenu = false;					
		});
		
		var back = this.back;
		back.animate({opacity: 0.0, duration: 400}, function(e){
			back.close();
		});
	
	},
	
	
	
	setHeader: function(header)
	{
		this.header = header;
	},
	
	setIcone: function(icone)
	{
		this.icone = icone;		
	},
	
	getHeader: function()
	{
		return this.header;
	},
	
	getIcone: function()
	{
		return this.icone;
	},
	
}

var moduleMenu = 
{
		
	open: function()
	{
		myMenu.getHeader().open();
		myMenu.getMenu().open();				
	},
	add: function(obj)
	{
		myMenu.getMenu().add(obj);
	},
	
	
	setMenuBackgroundImage: function(image)
	{
		myMenu.menu.backgroundImage = image;
	},
	getMenuBackgroundImage: function()
	{
		return myMenu.menu.backgroundImage;
	},
	setMenuBackgroundColor: function(color)
	{
		myMenu.menu.backgroundColor = color;
	},
	getMenuBackgroundColor: function(color)
	{
		return myMenu.menu.backgroundColor;
	},
	
	
	setHeaderBackgroundImage: function(image)
	{
		myMenu.header.backgroundImage = image;
	},
	getHeaderBackgroundImage: function()
	{
		return myMenu.header.backgroundImage;
	},
	setHeaderBackgroundColor: function(color)
	{
		myMenu.header.backgroundColor = color;
	},
	getHeaderBackgroundColor: function(color)
	{
		return myMenu.header.backgroundColor;
	},
	
	
	
	setImageIcone: function(icone)
	{
		myMenu.icone.image = icone;
	},
	getImageIcone: function()
	{
		return myMenu.icone.image;
	},
	
	 
	getHeader: myMenu.getHeader,
	
	getMenu: myMenu.getMenu,
	
	hideMenu: myMenu.hideMenu,
	showMenu: myMenu.showMenu
	
}
