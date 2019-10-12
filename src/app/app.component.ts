import { Component } from '@angular/core';
import { Prefecture, PrefectureGroup, Prefectures } from './shared/prefectures.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jpov';
  prefectureControl = Prefectures.prefectureControl;
  prefectureGroups = Prefectures.prefectureGroups;  
}
