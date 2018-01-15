/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import * as cameraModule from "nativescript-camera";
import * as ImageSourceModule from "image-source";

let viewModel = new HelloWorldModel();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

    cameraModule.requestPermissions();

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = viewModel;
}

export function takePhoto() {

    // This does not work.
    cameraModule.takePicture({
        width: 1280, height: 720, keepAspectRatio: false, saveToGallery: false
    }).then(function (imageAsset) {
        console.log("Result is an image asset instance");
        viewModel.set("BoardingPassSource", imageAsset);
        var image = ImageSourceModule.fromNativeSource(imageAsset);
        var base64 = image.toBase64String("jpeg");
        // var image = new imageModule.Image();
        // image.imageSource = imageAsset;
        // image.toBase64String("jpeg");
        viewModel.set("base64String", base64);
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });

    // This works!
}