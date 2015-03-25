var args = arguments[0] || {},
options = args.options,
container = Ti.UI.createScrollView({
    layout: 'vertical'
});

exports.dialog = Ti.UI.createOptionDialog({
    title: args.title,
    buttonNames: args.buttonNames,
    androidView: container
});

// $.optionsDialog.title = args.title;
// $.optionsDialog.buttonNames = args.buttonNames;

for(var i = 0, l = options.length; i < l; i++)
{
    var option = Alloy.createWidget('pl.tidev.androidalertdialog', 'option', options[i].title);
    option.getView('active').addEventListener('click', options[i].action);
    option.getView('active').addEventListener('click', autoHide);
    container.add(option.getView());
}

function autoHide()
{
    exports.dialog.hide();
}
