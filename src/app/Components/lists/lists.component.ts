import { Component } from '@angular/core';
import { ToplistModel } from 'src/app/models';
import { ToplistService } from 'src/app/services';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent  {
  toplist: ToplistModel[];

  constructor(private toplistService: ToplistService) { }

  ngOnInit(): void {
    this.toplistService.getToplist().subscribe((data) => {
      this.toplist = data;
    });
  }
}
