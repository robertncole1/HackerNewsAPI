import {Component, Input,} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'card-overview',
  templateUrl: 'card.component.html',
  standalone: true,
  imports: [MatCardModule],
})
export class CardOverviewExample {
  @Input() title: string | undefined;
  @Input() url: string | undefined;
}
