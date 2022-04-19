import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective {

  constructor(private fontType:ElementRef) {
    this.fontType.nativeElement.style.fontSize="30px"
    this.fontType.nativeElement.style.color="brown"
    this.fontType.nativeElement.style.fontFamily="geneva"

   }

}
