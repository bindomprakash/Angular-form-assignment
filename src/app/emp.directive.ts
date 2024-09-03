import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmp]'
})
export class EmpDirective {

  @Input() color!: string;
  constructor(private el : ElementRef) {}

  ngOnInit(){
    this.el.nativeElement.style.color = "yellow";
    this.el.nativeElement.classList.add('main-container');
    this.el.nativeElement.style.backgroundColor= this.color;
  }
}
