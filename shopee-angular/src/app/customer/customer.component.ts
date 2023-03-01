import { Component, createNgModuleRef, Injector, NgModuleRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    @ViewChild('container', {read: ViewContainerRef})
    container!: ViewContainerRef;

    isShowCustomerHeader = false;
    isShowCustomerFooter = false;

    constructor(
        // private route: ActivatedRoute,
        private router: Router,
        private injector: Injector,
        // private compiler: Compiler // using angular 12
    ) { }

    ngOnInit() {
        this.listenRouterChange();
        this.isShowCustomerHeader = !this.router.url.includes('authorization');
    }

    // Handle Events
    listenRouterChange(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        console.log('start');
      } else if(event instanceof NavigationEnd) {
        console.log('end');
      }
    });
    }

    handleToogleCustomFooter(): void {
        this.isShowCustomerFooter = true;
        // import ('./../component/custom-footer/custom-footer.component').then((module: any) => {
        //     const component = module['CustomFooterComponent'];
        //     // console.log('title: ', component);
        //     this.container.createComponent(component);
        // });

        import ('./../component/custom-footer/custom-footer.module').then((module: any) => {
            const lazymodule = module['CustomFooterModule'];
            let moduleRef: NgModuleRef<any>;

            // // using angular 12
            // const moduleFactory = this.compiler.compileModuleSync(lazymodule);
            // moduleRef = moduleFactory.create(this.injector);

            // using anuglar 13
            moduleRef = createNgModuleRef(lazymodule, this.injector);
            const component = moduleRef.instance.getComponent();
            this.container.createComponent(component, {ngModuleRef: moduleRef});
        });
    }

    testFunction(n: number): boolean {
        // let testInterface: TestInterface = {age: undefined};

        if(n > 5) {
            return true;
        } else {
            return false;
        }
        // return true;
//         What is Lorem Ipsum?
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

    }
}