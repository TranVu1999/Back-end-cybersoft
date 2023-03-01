import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { NodeInterface, TextContentInterface } from '@shared-models/node.interface';

const data: NodeInterface = {
    "typeNode": "element",
    "tag": "div",
    "className": [
        "text-center",
        "extra-footer"
    ],
    "nodes": [
        {
            "typeNode": "element",
            "tag": "p",
            "className": [
                "mx-auto"
            ],
            "styles": {
                "font-size": "12px",
                "font-weight": "600",
                "max-width": "95%"
            },
            "nodes": [
                {
                    "typeNode": "text",
                    "textContent": {
                        "en_US": {
                            "content": "WinFair24.comisoperatedbyREDCOINLIMITED,RegistrationNumber:HE417872,176Avlonos1,MariaHouse,Nicosia,Cyprus.\nREDCOINN.V.withRegistrationnumber155936andregisteredaddressAbrahamdeVeerstraat9Curaçao,islicensedunderGamingServicesProviderN.V.,\nholderofGamingLicense365/JAZoftheCentralGovernmentoftheNetherlandsAntilles.RedcoinN.V.\nislicensedandregulatedinvirtueoflicensenumberGLH-OCCHKTW07011902021grantedbytheGovernmentofCuraçaotoRedcoinN.V.\nThelicensewasissuedon19thofJanuary2021.",
                            "isDefault": true
                        },
                        "vi_VN": {
                            "content": "WinFair24.comisoperatedbyREDCOINLIMITED,RegistrationNumber:HE417872,176Avlonos1,MariaHouse,Nicosia,Cyprus.\nREDCOINN.V.withRegistrationnumber155936andregisteredaddressAbrahamdeVeerstraat9Curaçao,islicensedunderGamingServicesProviderN.V.,\nholderofGamingLicense365/JAZoftheCentralGovernmentoftheNetherlandsAntilles.RedcoinN.V.\nislicensedandregulatedinvirtueoflicensenumberGLH-OCCHKTW07011902021grantedbytheGovernmentofCuraçaotoRedcoinN.V.\nThelicensewasissuedon19thofJanuary2021.",
                            "isDefault": false
                        }
                    }
                }
            ]
        },
        {
            "typeNode": "element",
            "tag": "div",
            "className": [
                "text-center"
            ],
            "nodes": [
                {
                    "typeNode": "element",
                    "tag": "iframe",
                    "className": [
                        "d-inline-block"
                    ],
                    "attributes": {
                        "src": "https://licensing.gaming-curacao.com/validator/?lh=3ab3d822c0a72da18ff4046e8c9f84c3&template=tseal",
                        "width": "150",
                        "height": "50"
                    },
                    "styles": {
                        "border": "none"
                    }
                }
            ]
        }
    ]
}
@Directive({
    selector: '[appDrawDom]'
})
export class DrawDomDirective implements AfterViewInit {
    @Input() templateData: any;
    @Input() locale = '';

    /* eslint-disable */
    constructor(
        private elementRef: ElementRef
    ) {}
    /* eslint-enable */

    ngAfterViewInit(): void {
        const templateElm = this.createElement(this.templateData);
        this.elementRef.nativeElement.appendChild(templateElm);
    }

    createElement(elmData: NodeInterface) {
        const {
            tag,
            className,
            nodes,
            attributes,
            styles
        } = elmData;

        if(tag !== undefined) {
            const parentElm = document.createElement(tag.toLowerCase());

            if(className && className.length > 0) {
                className.forEach((classItem: string) => {
                    parentElm.classList.add(classItem);
                });
            }

            if(attributes) {
                for (const [key, value] of Object.entries(attributes)) {
                    parentElm.setAttribute(key, value);
                }
            }

            if(styles) {
                for (const [key, value] of Object.entries(styles)) {
                    parentElm.style.setProperty(key, value);
                }
            }



            if(nodes && nodes.length > 0) {
                nodes.forEach((child: NodeInterface) => {
                    let childElm = null;
                    if(child.typeNode === 'element') {
                        // child node
                        childElm = this.createElement(child);
                    } else {
                        // text node
                        let textContent = '';
                        if(child.textContent) {
                            let locLocale = this.locale;

                            if(!locLocale) {
                                for (const [key, value] of Object.entries(child.textContent)) {
                                    if(value.isDefault) {
                                        locLocale = key;
                                        break;
                                    }
                                }
                            }

                            textContent = child.textContent[locLocale as keyof TextContentInterface].content;
                        }
                        childElm = document.createTextNode(textContent);

                    }

                    parentElm.appendChild(childElm as Node);

                });
            }
            return parentElm;
        }
        return null;
    }
}
