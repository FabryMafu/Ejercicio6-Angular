import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { Post } from '../../post';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  items: Post[] = [];

  constructor(private json: JsonService) {
    this.items = this.json.getItems();
  }
}
