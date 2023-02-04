import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    footerData: any;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.footerData = [
                {
                    type: 'footer-row',
                    items: [
                        {
                            itemType: 'linked',
                            content: 'Term & Conditions',
                            url: ''
                        },
                        {
                            itemType: 'linked',
                            content: 'Privacy Policy',
                            url: ''
                        },
                        {
                            itemType: 'linked',
                            content: 'Responsible Gambling',
                            url: ''
                        },
                        {
                            itemType: 'linked',
                            content: 'KYC Policy',
                            url: ''
                        },
                        {
                            itemType: 'linked',
                            content: 'Self-Exclusion',
                            url: ''
                        },
                        {
                            itemType: 'linked',
                            content: 'Underage Gaming Policy',
                            url: ''
                        }
                    ]
                },
                {
                    type: 'footer-row',
                    items: [
                        {
                            itemType: 'paragraph',
                            customStyle: {
                                fontWeight: 600,
                                textAlign: 'center'
                            },
                            content: 'WinFair24.com is operated by REDCOIN LIMITED, Registration Number: HE 417872, 176 Avlonos 1, Maria House, Nicosia, Cyprus. REDCOIN N.V. with Registration number 155936 and registered address Abraham de Veerstraat 9 Curaçao, is licensed under Gaming Services Provider N.V., holder of Gaming License 365/JAZ of the Central Government of the Netherlands Antilles. Redcoin N.V. is licensed and regulated in virtue of license number GLH-OCCHKTW07011902021 granted by the Government of Curaçao to Redcoin N.V. The license was issued on 19th of January 2021.'
                        }
                    ]
                },
                {
                    type: 'footer-column',
                    columns: [
                        {
                            columnName: 'Company',
                            ratio: 1,
                            items: [
                                {
                                    itemType: 'linked',
                                    content: 'About',
                                    url: '',
                                    customStyle: {
                                        fontWeight: 400
                                    },

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Interfration & Performance',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Concerns',
                                    url: '',

                                }
                            ]
                        },
                        {
                            columnName: 'Product',
                            ratio: 1,
                            items: [
                                {
                                    itemType: 'linked',
                                    content: 'ATS',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Features',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Pricing',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Support',
                                    url: '',

                                }
                            ]
                        },
                        {
                            columnName: 'Learn',
                            ratio: 1,
                            items: [
                                {
                                    itemType: 'linked',
                                    content: 'Resources',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Blog',
                                    url: '',

                                },
                                {
                                    itemType: 'linked',
                                    content: 'Structured Hirring',
                                    url: '',

                                }
                            ]
                        },
                        {
                            columnName: 'Contact',
                            ratio: 2,
                            items: [
                                {
                                    itemType: 'paragraph',
                                    content: 'Below these links, we have 2 columns with the logo and small social media icons on the left and a call-to-action email sign-up form on the right.',
                                    customStyle: {
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        color: 'red'
                                    },
                                },
                                {
                                    itemType: 'paragraph',
                                    content: 'The overall styling of grey text on white background matches the style of the rest of the site.'
                                },
                                {
                                    itemType: 'paragraph',
                                    content: 'Below these links, we have 2 columns with the logo and small social media icons on the left and a call-to-action email sign-up form on the right.'
                                }
                            ]
                        }
                    ]
                },
            ]
        }, 100);

    }

}
