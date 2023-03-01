import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
    count = 0;
    title = 'shopee-angular';
    numbers = Array(1000).fill(4);
    defaultImage = 'https://cdn.pixabay.com/photo/2023/01/04/19/31/sea-7697492_960_720.jpg';
    imgs = [
        "https://cdn.pixabay.com/photo/2023/01/25/08/59/bird-7742845_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/01/12/16/16/bamboo-7714448_960_720.jpg",
        'https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/12/19/14/14/new-york-7665799_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/22/04/25/spray-7735554_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/19/19/31/winter-7730078_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/12/11/15/01/nature-6862942_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/07/07/16/houses-7702757_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/10/11/12/38/french-bulldog-7514203_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/11/24/12/22/daisy-7614241_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/25/18/46/broccoli-7744338_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/19/10/42/river-7728801_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/04/13/21/animals-7696695_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/10/24/11/55/autumn-7543217_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/12/07/19/rat-7713508_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/12/26/13/50/flower-7679117_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/11/19/53/hiking-7712678_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/11/04/04/11/ocean-7568980_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/09/10/56/meal-7707134_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/11/19/20/38/africa-7602960_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/07/11/00/village-7702981_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/08/20/09/16/nature-7398655_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/12/01/12/26/countryside-7629017_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/11/07/20/23/new-york-7577186_960_720.jpg',
        'https://cdn.pixabay.com/photo/2019/05/23/13/40/bird-4223977_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/01/01/05/31/bride-7689627_960_720.jpg'


    ];

    // Lazy loader
    // lazyModuleConfig: Loader = {
    // loader: () => import('@common-component/what-app-button/what-app-button.module'),
    // module: 'WhatAppButtonModule',
    // };

    constructor() {

    }

    ngOnInit(): void {
        setInterval(() => {
            this.count++;
        }, 1000)
    }

    ngAfterViewInit(): void {
        // const lazyImgs = document.querySelectorAll('.lazy-img');

        // function load(img: any) {
        //     const src = img.getAttribute('lazy-src');
        //     const srcset = img.getAttribute('lazy-srcset');
        //     img.setAttribute('src', src);
        //     img.setAttribute('srcset', srcset);
        // }

        // if('IntersectionObserver' in window) {
        //     let observer = new IntersectionObserver((entries) => {
        //         entries.forEach(entry => {
        //             if(entry.isIntersecting) {
        //                 load(entry.target);
        //             }
        //         });
        //     });

        //     lazyImgs.forEach(img => {
        //         observer.observe(img);
        //     });

        // }

    }

    // Handle Events
    handleClickButton(): void {
        this.count++;
    }

    testPerformance(): void {
        console.log('title: ', 'debugger');
    }
}
