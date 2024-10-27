import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadCrumbsInterface } from '../../interfaces/breadCrumbs/BreadCrumbs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private breadcrumbSource = new BehaviorSubject<BreadCrumbsInterface>({
    mainName: 'Dashboard',
    mainPath: 'dashboard',
    subName: '',
    subPath: '',
    icon: 'fa fa-share',
  });
  currentBreadcrumb = this.breadcrumbSource.asObservable();

  updateBreadcrumb(breadcrumb: BreadCrumbsInterface) {
    this.breadcrumbSource.next(breadcrumb);
  }
}
