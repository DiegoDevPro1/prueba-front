import { Component } from '@angular/core';
import { RoutesService } from '../../routes.service';
import { ModuleInterface } from '../../interfaces/routes/Module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  modules: ModuleInterface[] = [];
  currentPath: string = '';
  constructor(
    private routeService: RoutesService,
    private router: Router,
    private breadcrumbService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.routeService.loadRoutes().subscribe((routes: ModuleInterface[]) => {
      this.modules = routes;

      console.log(this.modules);
    });
  }

  dropdown(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;
    const submenu = element.nextElementSibling as HTMLElement;
    const arrow = element.querySelector('.arrow') as HTMLElement;

    submenu.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  }

  sendRoutes(opcion: ModuleInterface, subName?: string, subPath?: string) {
    console.log(opcion)
    this.breadcrumbService.updateBreadcrumb({
      mainName: opcion.name ?? '',
      mainPath: opcion.pathModule ?? '',
      subName: subName ?? '',
      subPath: subPath ?? '',
      icon: opcion.icon ?? '',
    });
  }
}
