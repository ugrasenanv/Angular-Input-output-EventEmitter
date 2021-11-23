import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    @Input() countries: string[];
    @Output() selectedCountryVariable1 = new EventEmitter<string>();
    public model = { countryName: '' };

    private _selectedCountryVariable2: string;
    get selectedCountryVariable2(): string {
        return this._selectedCountryVariable2;
    }
    set selectedCountryVariable2(value: string) {
        this._selectedCountryVariable2 = value;
    }

    onCountryNameChange(): void {
        this.selectedCountryVariable1.emit(this.model.countryName);
        this.selectedCountryVariable2 = this.model.countryName;
    }
}
