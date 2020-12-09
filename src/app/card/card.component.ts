import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Saved } from '../interfaces/saved';
import { ServiceService } from '../service.service';
import { SubmitBourbonComponent } from '../submit-bourbon/submit-bourbon.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() bourbonRef: any;
  @Output() saveEvent = new EventEmitter<Saved>();
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    console.log(this.bourbonRef);
  }

  toggleSaved = (recipe: any) => {
    let save: Saved = {
      id: this.bourbonRef.id,
      img_url: this.bourbonRef.img_url,
      brand: this.bourbonRef.brand,
      distillery: this.bourbonRef.distillery,
      description: this.bourbonRef.description,
      isSaved: false,
    };
    this.saveEvent.emit(save);
  };
}
