/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
var label = require('ui/label');
var action_bar = require("ui/action-bar");

function onNavigatingTo(args) {
    // The same issue also happen in onNavigatingTo
    //setTitle(args);
}

function onLoaded(args) {
    setTitle(args);
}

function setTitle(args) {
    var page = args.object;
    var actionBarTitleLabel = new label.Label();
    var titleText = "DETAIL TITLE";
    actionBarTitleLabel.text = titleText;
    page.actionBar.titleView = actionBarTitleLabel;

    setTimeout(function () {
        page.actionBar.requestLayout(); //Trigger re-rendering
        /*
        // Adding ActionItem to the bar also can trigger the issue
        let actionItem = new action_bar.ActionItem();
        actionItem.text = 'Upload';
        actionItem.ios.position = 'right';
        page.actionBar.actionItems.addItem(actionItem);*/
    }, 2000); //This can be triggered even if the delay is just 10ms
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
exports.onLoaded = onLoaded;