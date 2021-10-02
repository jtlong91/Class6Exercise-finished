import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit {

  constructor(public elRef: ElementRef, public renderer: Renderer2) { }

  ngOnInit() {
    //Sets random background color on initialization using getRandomColor
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.getrandomColor());

  }

  //Change the color to random color using getRandomColor() when we hover over an element
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elRef.nativeElement,"background-color",this.getrandomColor());
  }


  //Create function that we will call to set random background color
  getrandomColor() {
    let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

}
