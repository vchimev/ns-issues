import { Observable } from "data/observable";
import { topmost } from "ui/frame";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";

export class GettingStartedViewModel extends Observable {
    constructor() {
        super();
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. "
            + "The component has a default transition and position and also exposes notifications related to changes in its state. "
            + "Swipe from left to open side drawer.");
    }

    public onOpenDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    }

    public onCloseDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }
}
