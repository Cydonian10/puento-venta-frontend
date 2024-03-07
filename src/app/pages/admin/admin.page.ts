import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MaterialModule],
  template: `
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminPage {}