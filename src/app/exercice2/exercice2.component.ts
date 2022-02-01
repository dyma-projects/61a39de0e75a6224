import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild("myinput") public el?: ElementRef<HTMLInputElement>;
  valeur?: string;
  constructor() { }

  ngOnInit() {

  }

  add(){
    this.valeur = this.el?.nativeElement.value;
  }
}
