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

  toggleSaved = (bourbon: any) => {
    let save: Saved = {
      id: bourbon.id,
      img_url: bourbon.img_url,
      brand: bourbon.brand,
      distillery: bourbon.distillery,
      description: bourbon.description,
      isSaved: true,
    };
    if (bourbon.isSaved === true) {
      bourbon.isSaved = false;
    } else {
      bourbon.isSaved = true;
    }
    this.saveEvent.emit(save);
    console.log(bourbon);
  };
}
