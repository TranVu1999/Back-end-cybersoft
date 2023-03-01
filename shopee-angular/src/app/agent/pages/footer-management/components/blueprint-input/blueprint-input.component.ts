import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'app-blueprint-input',
    templateUrl: './blueprint-input.component.html',
    styleUrls: ['./blueprint-input.component.scss']
})
export class BlueprintInputComponent implements OnInit {
    isUnreachableImage = false;
    isLoadingImage = true;
    isShowImageResult = false;
    imageUrlTemplate = '';

    mForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.mForm = this.formBuilder.group({
            imageUrl: ['']
        });

        this.mForm.get('imageUrl')?.valueChanges.subscribe(() => {
            this.isLoadingImage = true;
        });

        this.imageUrl?.valueChanges.pipe(
            debounceTime(2000)
        ).subscribe(data => {
            this.checkImageIsExists(data);
        })
    }

    ngOnInit() {
    }

    get imageUrl() {
        return this.mForm.get('imageUrl');
    }

    // Functionalities
    checkImageIsExists(imageUrl: string){
        var http = new XMLHttpRequest();
        http.open('HEAD', imageUrl, false);
        http.send();

        if(http.status === 200) {
            this.isLoadingImage = false;
            this.isUnreachableImage = false;
            this.imageUrlTemplate = imageUrl;
        } else {
            this.isLoadingImage = false;
            this.isUnreachableImage = true;
            this.isShowImageResult = false;
        }

    }

    // Handle Events
    handleCanGetImage(): void {
        this.isShowImageResult = true;
        this.isLoadingImage = false;
    }

}
