import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatamodelService {

  private data: any = [];
  private record: boolean;

  constructor() { }

  putData(index: string, data: any): boolean {
    if(index) {
      this.data[index] = data;
      this.record = true;
    } else {
      this.record = false;
    }
    return this.record;
  }

  getData(index: string): any {
    if(index) {
      return this.data[index];
    } else {
      return null;
    }
  }

  removeData(index: string): boolean {
    return delete this.data[index];
  }
}
