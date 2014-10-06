var n        = document.querySelector( "#n"),
    generate = document.querySelector( "#generate" ),
    display  = document.querySelector( "#display" ),
    menu     = Ti.UI.createMenu(),
    fileItem = Ti.UI.createMenuItem( "File" ),
    exitItem;

exitItem = fileItem.addItem( "Exit", function () {
	if ( confirm( "Are you sure you want to quit?" ) ) {
		Ti.App.exit();
	}
} );

menu.appendItem( fileItem );
Ti.UI.setMenu( menu );

generate.addEventListener( "click", function ( ev ) {
	ev.preventDefault();
	display.value = password(n.value);
}, false );
