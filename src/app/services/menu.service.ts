import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from '../interfaces/menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _destroy$ = new Subject();
  private _userChanges = new BehaviorSubject<Menu|null>(null);
  private _menuUrl = 'api/menu';

  constructor(
    private http: HttpClient,
  ) { }

  getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this._menuUrl).pipe(tap(Menu => {
      this._userChanges.next(Menu)
    }))
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}