import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  getAuthorList() {
    return ["Aaatu", "Baatu", "Chaatu"];

  }
  constructor() { }

}
