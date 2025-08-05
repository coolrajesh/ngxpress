import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, SidebarComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  collapsed = false;
  currentYear = new Date().getFullYear();
  breadcrumb$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.generateBreadcrumb(this.router.url))
  );

  constructor(private router: Router) { }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  generateBreadcrumb(url: string) {
    const parts = url.split('/').filter(Boolean);
    return parts.map((part, index) => ({
      label: this.capitalize(part),
      url: '/' + parts.slice(0, index + 1).join('/')
    }));
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
