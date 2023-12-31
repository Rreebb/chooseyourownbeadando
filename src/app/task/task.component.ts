import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterService } from '../_services/router.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() configuration!: { subTasks: any };
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() index!: number;
  @Input() selected: boolean = false;
  @Input() story!: string;
  @Input() task!: 'A' | 'B';
  @Input() tasks!: { text: string; xp: number }[];

  @Output() thisWayBraveAdventurer: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class') get class() {
    return Object.values(this.configuration.subTasks).some((subTask) => subTask) ? '' : 'unimplemented';
  }

  constructor(public r : RouterService) { }

  ngOnInit(): void {
  }

}
