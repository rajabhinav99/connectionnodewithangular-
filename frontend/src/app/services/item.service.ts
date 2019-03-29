import { Injectable } from '@angular/core';
import { Item } from '../model/item'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:1000/api/item";

  getItems() {
    return this.http.get<Item[]>(this.baseUrl);
  }

  addItems(item: Item) {
    return this.http.post(this.baseUrl, item);
  }

}
