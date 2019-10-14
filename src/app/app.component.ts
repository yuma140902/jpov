import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Prefecture, Prefectures } from './shared/prefectures.module';
import { JpoJson } from './jpo/jpo-json';
import { JpoService } from './jpo/jpo.service';
import { JpoTableEntry } from './jpo/jpo-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jpov';
  version = "0.0-SNAPSHOT"

  prefectureControl = new FormControl();
  prefectures = Prefectures.prefectures;

  constructor(private jpoService: JpoService) { }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['area', 'number'];
  jpojson: JpoJson = null;
  jpoTable: JpoTableEntry[];

  getJpoData() {
    this.jpoService.getLatest(this.prefectureControl.value).subscribe(
      jpojson => {
        this.jpojson = jpojson;
        this.jpoTable = JpoTableEntry.parse(jpojson);
        console.log(jpojson);
        console.log(this.jpoTable);
      },
      error => {
        this.jpojson = null;
      }
    )
  }

}
