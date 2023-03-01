import { ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import { DynamicModalComponent } from './dynamic-modal.component';

@Injectable({
    providedIn: 'root'
})
export class DynamicModalService {
    private rootViewContainer!: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent(modalTitle: string, modalText: string) {
        const factory = this.factoryResolver.resolveComponentFactory(DynamicModalComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.modalTitle = modalTitle;
        component.instance.modalText = modalText;
        component.instance.closeModal.subscribe(() => {this.removeDynamicComponent(component)});

        this.rootViewContainer.insert(component.hostView);
    }

    removeDynamicComponent(component: any) {
        component.destroy();
    }



}
