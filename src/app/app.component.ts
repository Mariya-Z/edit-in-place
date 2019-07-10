import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  entities = [
    {id: 1, name: 'Netanel Basal', isAdmin: true},
    {id: 2, name: 'John Due', isAdmin: false},
  ];

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        name: new FormControl(entity.name, Validators.required),
        isAdmin: new FormControl(entity.isAdmin),
      });
    });
    this.controls = new FormArray(toGroups);
  }

  getControl(index: number, field: string) {
    return this.controls.at(index).get(field);
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.entities = this.entities.map((e, i) => {
        if (index === i) {
          return {
            ...e,
            [field]: control.value,
          };
        }
        return e;
      });
    }
  }
}
