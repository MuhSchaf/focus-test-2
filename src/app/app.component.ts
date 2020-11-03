import { AfterViewInit, Component, ElementRef,  VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  name = 'Angular ' + VERSION.major;
  @ViewChild('secondInput') secondInput: ElementRef;

  ngAfterViewInit(): void {
    this.secondInput.nativeElement.focus();
  }

}
