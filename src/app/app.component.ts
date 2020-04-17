import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html'
})
export class AppComponent {
  copyPastedValue: string;
  savedValue: string[][];

  onChange(event: string) {
    console.log(event);
    // this.savedValue = event
    //   .split('\n')
    //   .filter(x => !!x)
    //   .map(x => x.split('\t')
    //   );
  }
}
