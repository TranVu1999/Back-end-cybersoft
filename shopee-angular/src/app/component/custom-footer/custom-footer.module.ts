import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomFooterComponent } from "./custom-footer.component";

@NgModule({
    imports: [CommonModule],
    declarations: [CustomFooterComponent]
})
export class CustomFooterModule {
    getComponent() {
        return CustomFooterComponent;
    }

}