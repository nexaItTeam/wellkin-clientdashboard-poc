
import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerItemExpandedFn, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { SVGIcon, menuIcon } from '@progress/kendo-svg-icons';

import { items } from './items';
import { Router } from '@angular/router';
interface Item {text: string, svgIcon: SVGIcon, path: string, selected?: boolean}
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent {
  public selected = 'Inbox';
  public menuSvg: SVGIcon = menuIcon;
  public expandedIndices = [2];
constructor( private router:Router,){
  //this.items = this.mapItems(router.config as Item[]);
 // this.items[0].selected = true;
}
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
      return this.expandedIndices.indexOf(item.id) >= 0;
  };

  public items: Array<DrawerItem> = items;

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
      
      const current = ev.item.id;
      this.router.navigate([ev.item.path]);
      if (this.expandedIndices.indexOf(current) >= 0) {
          this.expandedIndices = this.expandedIndices.filter((id) => id !== current);
      } else {
          this.expandedIndices.push(current);
      }
  }
  public mapItems(routes: Item[]): Item[] {
    return routes.map(item => {
        return {
            text: item.text,
            svgIcon: item.svgIcon,
            path: item.path ? item.path : ''
        };
    });
}
}
