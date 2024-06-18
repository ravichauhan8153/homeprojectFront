import { Component } from '@angular/core';
import * as _ from 'lodash';

// SERVICES
import { DataProcessingService } from '../../../providers/data-processing/data-processing.service';

interface DataObject {
  [key: string]: string | number;
}

interface DataStructure {
  id: DataObject;
  title: DataObject;
  danceability: DataObject;
  energy: DataObject;
  key: DataObject;
  loudness: DataObject;
  mode: DataObject;
  acousticness: DataObject;
  instrumentalness: DataObject;
  liveness: DataObject;
  valence: DataObject;
  tempo: DataObject;
  duration_ms: DataObject;
  time_signature: DataObject;
  num_bars: DataObject;
  num_sections: DataObject;
  num_segments: DataObject;
  class: DataObject;
}

@Component({
  selector: 'app-data-processing',
  templateUrl: './data-processing.component.html',
  styleUrls: ['./data-processing.component.scss'],
})
export class DataProcessingComponent {
  dataArray: any[] | undefined;

  constructor(private _dataProcessing: DataProcessingService) {}

  ngOnInit(): void {
    this._dataProcessing.getData().subscribe((data) => {
      this.dataArray = this.mergeData(data);
    });
  }

  mergeData(data: DataStructure): any[] {
    const keys = _.keys(data.id).slice(0, 5)
    return _.map(keys, (key) => {      
      return {
        id: data.id[key],
        title: data.title[key],
        danceability: data.danceability[key],
        energy: data.energy[key],
        key: data.key[key],
        loudness: data.loudness[key],
        mode: data.mode[key],
        acousticness: data.acousticness[key],
        instrumentalness: data.instrumentalness[key],
        liveness: data.liveness[key],
        valence: data.valence[key],
        tempo: data.tempo[key],
        duration_ms: data.duration_ms[key],
        time_signature: data.time_signature[key],
        num_bars: data.num_bars[key],
        num_sections: data.num_sections[key],
        num_segments: data.num_segments[key],
        class: data.class[key],
      };
    });
  }
}
