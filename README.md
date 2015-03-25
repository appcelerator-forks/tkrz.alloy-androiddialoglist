# alloy-androiddialoglist
Titanium Alloy widget

This Titanium Alloy Widget is addressed for those, who want reussable alert dialog component for list display, but without annoying radio buttons on elements. This widget is simple and should not cause any problems. 

Install:

1. Add contents of this repository into app/wigdets/pl.tidev.androidalertdialog folder in your project
2. Add dependency in project's config.json: 

    "dependencies": {
        "pl.tidev.androidalertdialog": "1.0"
    }

Use in controller:

    // Create options object for dialog creation, any standard Ti.UI.AlertDialog options can go here.

    var options = {
        title: 'Options',
        // Modification of available listing options, each item uses title attribute and action, which will be fired, when user clicks list item.
        options: [
           {
               title: 'Edit',
               action: function(){
                   // Edit action goes here
               }
           },
           {
               title: 'Delete',
               action: function(){
                   // Delete action goes here
               }
           }
        ],
        buttonNames: [
           'Anuluj'
        ]
    };
    
    Alloy.createWidget('pl.tidev.androidalertdialog', options).dialog.show();
    
    // Alternatively, if you want to listen for button clicks, you can create widget this way:
    
    var dialog = Alloy.createWidget('pl.tidev.androidalertdialog', options).dialog;
    dialog.addEventListener('click', function(e){
        // Do something on dialog button click
    });
    dialog.show();
