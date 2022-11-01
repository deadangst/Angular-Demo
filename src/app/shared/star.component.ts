import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() calificacion = 0;
  tamanhoStar = 75;


  ngOnChanges(): void {
    this.tamanhoStar = this.calificacion * 75 / 5;
  }

}