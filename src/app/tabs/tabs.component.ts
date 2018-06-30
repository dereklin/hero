import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
  ViewChild,
  ContentChild,
  AfterViewInit
} from '@angular/core';
import { TabComponent } from './tab.component';
import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';

@Component({
  selector: 'ngx-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <div appDynamicTabAnchor #DynamicTabAnchorDirective>test</div>
  `
})
export class TabsComponent implements AfterContentInit, AfterViewInit {
  @ViewChild(DynamicTabAnchorDirective) dynamicTabPlaceholder: DynamicTabAnchorDirective;
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  ngAfterViewInit() {
    const test = this.dynamicTabPlaceholder;
    const t = '1';
  }


  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  openTab() {
    const test = this.dynamicTabPlaceholder;
    console.log(this.dynamicTabPlaceholder.viewContainer);
  }
}
