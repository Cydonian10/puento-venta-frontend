import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  template: `
    <div class="min-h-screen w-full grid place-items-center bg-gray-100">
      <mat-card class="w-4/12">
        <mat-card-content class="p-10">
          <h3 class="text-center text-2xl font-bold">Login</h3>
          <div class="my-4 border-2"></div>

          <mat-form-field appearance="outline" class="w-full mb-4">
            <mat-label>Email</mat-label>
            <input matInput placeholder="Placeholder" type="email">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
            <mat-hint>Hint</mat-hint>
          </mat-form-field>

          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Password</mat-label>
            <input matInput placeholder="Placeholder" type="password">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
            <mat-hint>Hint</mat-hint>
          </mat-form-field>

        </mat-card-content>
      </mat-card>
    </div>    
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginPage {}