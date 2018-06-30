import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ],
  template: `
    <div [hidden]="!active" class="pane">
    <ng-content *ngIf="!template"></ng-content>
    <ng-container *ngIf="template" [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{data: dataContext}"></ng-container>

    </div>
  `
})
export class TabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
  @Input() template; // new line
  @Input() dataContext;
  /*
  <ng-content *ngIf="!template"></ng-content>
    <ng-container *ngIf="template" [ngTemplateOutlet]="template"></ng-container>
  */
}
