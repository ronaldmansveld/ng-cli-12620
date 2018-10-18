import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _items: string[] = [];

  constructor() {}

  public getItems(): string[] {
    return this._items;
  }

  public addItem(item: string): void {
    this._items.push(item);
  }
}
