import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colo-picker',
  templateUrl: './colo-picker.component.html',
  styleUrls: ['./colo-picker.component.scss']
})
export class ColoPickerComponent {
  initialValue = '#25ac97'
  @Output() colorEmitter = new EventEmitter<string>()

  public emitColor(value: string) {
    this.colorEmitter.emit(value);
  }
}
