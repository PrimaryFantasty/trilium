import FlexContainer from "./flex_container.js";
import NoteTitleWidget from "./note_title.js";
import NoteDetailWidget from "./note_detail.js";
import NoteTreeWidget from "./note_tree.js";
import MobileGlobalButtonsWidget from "./mobile_global_buttons.js";
import CloseDetailButtonWidget from "./close_detail_button.js";
import MobileDetailMenuWidget from "./mobile_detail_menu.js";
import ScreenContainer from "./screen_container.js";

export default class MobileLayout {
    getRootWidget(appContext) {
        return new FlexContainer('row')
            .setParent(appContext)
            .id('root-widget')
            .css('height', '100vh')
            .child(new ScreenContainer("tree", 'column')
                .class("d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4")
                .child(new MobileGlobalButtonsWidget())
                .child(new NoteTreeWidget()))
            .child(new ScreenContainer("detail", "column")
                .class("d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12 col-sm-7 col-md-8 col-lg-8")
                .child(new FlexContainer('row')
                    .child(new MobileDetailMenuWidget())
                    .child(new NoteTitleWidget())
                    .child(new CloseDetailButtonWidget()))
                .child(new NoteDetailWidget()));
    }
}