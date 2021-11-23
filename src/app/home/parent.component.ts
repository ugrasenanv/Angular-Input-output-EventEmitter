import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    @ViewChild(ChildComponent) childComponent: ChildComponent;
    public listOfCountry = ['Canada', 'England', 'Mexico'];
    public selectedCountry = '';

    showSelectedCountry(country) {
        this.selectedCountry = country;
    }
}
