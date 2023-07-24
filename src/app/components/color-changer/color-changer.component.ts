import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.scss']
})
export class ColorChangerComponent {
  colorValue = '#25ac97';
  @Output() dataSubmit: EventEmitter<string> = new EventEmitter<string>();

  emitColor() {
    this.dataSubmit.emit(this.colorValue);
  }
}
