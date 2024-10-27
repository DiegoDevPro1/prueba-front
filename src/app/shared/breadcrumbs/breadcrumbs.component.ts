import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BreadcrumbsService } from './breadcrumbs.service';
import { BreadCrumbsInterface } from '../../interfaces/breadCrumbs/BreadCrumbs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [AppRoutingModule, CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent {
  breadcrumbs: BreadCrumbsInterface = {
    mainName: 'Dashboard',
    mainPath: 'dashboard',
    icon: 'fa fa-share',
    subName: '',
    subPath: '',
  };
  constructor(private breadcrumbService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbService.currentBreadcrumb.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
