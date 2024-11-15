import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { Post } from '../../post';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  items: Post[] = [];

  constructor(private json: JsonService) {
    this.items = this.json.getItems();
  }
}
