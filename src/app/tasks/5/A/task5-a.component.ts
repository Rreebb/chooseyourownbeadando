import { Component } from '@angular/core';
import { Person } from 'src/app/_models/person.model';
import { GeneratorService } from 'src/app/_services/generator.service';
import { MatGridList } from '@angular/material/grid-list';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task5-a',
  templateUrl: './task5-a.component.html',
  styleUrls: ['./task5-a.component.less'],
})
export class Task5AComponent {
  people_rest: Person[] = [];
  people_chosen: Person[] = [];

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.people_rest = this.generatorService.generatePeople(4);
  }

  drop(event: CdkDragDrop<Person[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
