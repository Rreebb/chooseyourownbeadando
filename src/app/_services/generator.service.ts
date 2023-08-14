import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Person } from '../_models/person.model';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor() {}

  generatePerson(): Person {
    return new Person(
      faker.person.fullName(),
      Math.floor(Math.random() * 100),
      faker.hacker.phrase()
    );
  }

  generatePeople(n: number): Person[]{
    return new Array(n).fill(null).map(() => this.generatePerson());
  }
}
