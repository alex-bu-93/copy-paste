import { ChangeDetectionStrategy, Component } from '@angular/core';

const getMaxItemsLength = arr => Math.max.apply(Math, arr.map(el => el.length));
const getMinItemsLength = arr => Math.min.apply(Math, arr.map(el => el.length));

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styles: [`
      .animated { animation-duration: 0.2s }
      .fadeIn { animation-name: fadeIn }
      @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  `]
})
export class AppComponent {

  value: string;
  parsedValue: string[][];

  minColumns: number;
  maxColumns: number;

  onChange(event: string) {
    this.parsedValue = event
      .split('\n')
      .filter(x => !!x)
      .map(x => x.split('\t'));
    this.maxColumns = getMaxItemsLength(this.parsedValue);
    this.minColumns = getMinItemsLength(this.parsedValue);
  }
}
