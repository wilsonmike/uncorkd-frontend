import { Component, Input, OnInit } from '@angular/core';
import { Saved } from '../interfaces/saved';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  @Input() bourbonRef: any;
  saved: Saved[] = [];
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.saved = this.service.getSaved();
    console.log(this.saved);
    // this.getSaved();
  }

  getSaved = () => {
    this.saved = this.service.getSaved();
  };

  removeSaved = (saved: Saved) => {
    this.service.editSaved(saved);
    this.getSaved;
  };
}
