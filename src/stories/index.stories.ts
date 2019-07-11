import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { AppComponent } from 'src/app/app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { EditableComponent } from 'src/app/editable/editable.component';



storiesOf('Edit in place input', module)
.addDecorator(
  moduleMetadata({
    declarations: [AppComponent, EditableComponent],
    imports: [FormsModule, ReactiveFormsModule]
  }),
)
.add('simple example', () => ({
  template: `
    <app-root></app-root>
  `
}));
