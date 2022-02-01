import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() compteurPlus: EventEmitter<number> = new EventEmitter<number>();
  @Output() compteurMoins: EventEmitter<number> = new EventEmitter<number>();
  @Input() result: number = 0

  constructor() { }

  ngOnInit() {
  }

  addOne($event: any){
    this.compteurPlus.emit($event);
  }

  deleteOne($event: any){
    this.compteurMoins.emit($event);
  }

}
