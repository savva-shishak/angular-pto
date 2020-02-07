import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <mat-form-field appearance="outline" style="width: 100%;">
      <mat-label>{{searchInputLabel}}</mat-label>
      <input (input)="onInput($event)" matInput type="text">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
    <div style="width: 100%; max-height: 90%; overflow-y: auto">
      <mat-action-list style="width: 100%; overflow-y: auto">
        <button
          *ngFor="let item of items"
          [routerLink]="linkShema(item)"
          [innerHTML]="displayShema(item)" mat-list-item>
        </button>
      </mat-action-list>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() searchInputLabel: string;
  @Input() items: any;
  @Input() displayShema: (item: any) => string;
  @Input() linkShema: (item: any) => string;

  @Output() onSearchInput = new EventEmitter<string>();

  delay: any;

  async onInput(event: Event) {
    await this.toDelay();

    this.passValue(event);
  }

  passValue(event: Event) {
    const value = this.getValueFromInputEvent(event);

    this.onSearchInput.emit(value);
  }

  getValueFromInputEvent(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  toDelay() {
    return new Promise((res, rej) => {
      this.clearTimeout();
      this.delay = setTimeout(() => res(), 500);
    });
  }

  clearTimeout() {
    if (this.delay) {
      clearTimeout(this.delay);
    }
  }
}
