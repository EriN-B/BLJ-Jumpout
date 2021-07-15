import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';
import {
  Chart, registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  jsonData = data;

  time_height_canvas;
  time_heiht_ctx;

  time_temp_canvas;
  time_temp_ctx;

  time_humidity_canvas;
  time_humidity_ctx;

  time_pressure_canvas;
  time_pressure_ctx;


  constructor() { }

  ngOnInit() {

    this.cleanDataSet();

    console.log(this.jsonData);

    this.time_height_canvas = document.getElementById('time_height');
    this.time_heiht_ctx = this.time_height_canvas.getContext('2d');

    this.time_temp_canvas = document.getElementById('time_temp');
    this.time_temp_ctx = this.time_temp_canvas.getContext('2d');

    this.time_humidity_canvas = document.getElementById('time_humidity');
    this.time_humidity_ctx = this.time_humidity_canvas.getContext('2d');

    this.time_pressure_canvas = document.getElementById('time_pressure');
    this.time_pressure_ctx = this.time_pressure_canvas.getContext('2d');



    // @ts-ignore

    const timeTemp = new Chart(this.time_temp_ctx  , {
      type: 'line',
      data: {
        labels: this.getLabels(),
        datasets: [{
          label: 'Themeratur Innen',
          data: this.getTimeTempDataInside(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Themperatur Aussen',
          data: this.getTimeTempDataOutside(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: this.getOptions()
    });



    const timehumidity = new Chart(this.time_humidity_ctx  , {
      type: 'line',
      data: {
        labels: this.getLabels(),
        datasets: [{
          label: 'Luftfeuchtigkeit',
          data: this.getTimeHumidityData(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: this.getOptions()
    });



    const timeHeight = new Chart(this.time_heiht_ctx  , {
      type: 'line',
      data: {
        labels: this.getLabels(),
        datasets: [{
          label: 'Höhe (MüM)',
          data: this.getTimeHeightData(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: this.getOptions()
    });




    const timePressure = new Chart(this.time_pressure_ctx  , {
      type: 'line',
      data: {
        labels: this.getLabels(),
        datasets: [{
          label: 'Druck',
          data: this.getTimePressureData(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: this.getOptions()
    });

  }







  getOptions(): any {
    return {
      responsive: true,
        elements: {
      point: {
        radius: 0
      }
    },
      tooltips: {
        callbacks: {
          label(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        },

      }
    };
    }

  cleanDataSet() {
    this.jsonData.default.forEach((val, index) => {
      if (val.longitude === 'NA' || val.latitude === 'NA') {
        this.jsonData.default.splice(index, 1);
      }
    });
  }


  getTimeHeightData() {
    const data = [];
    for (const elem of this.jsonData.default) {
      data.push(elem.altitude);
    }
    return data;
  }

  getTimeTempDataInside() {
    const data = [];
    for (const elem of this.jsonData.default) {
      data.push(elem.tempInside);
    }
    return data;
  }

  getTimeTempDataOutside() {
    const data = [];
    for (const elem of this.jsonData.default) {
      data.push(elem.tempOutside);
    }
    return data;
  }


  getTimeHumidityData() {
    const data = [];
    for (const elem of this.jsonData.default) {
      data.push(elem.humidity);
    }
    return data;
  }

  getTimePressureData() {
    const data = [];
    for (const elem of this.jsonData.default) {
      data.push(elem.pressure);
    }
    return data;
  }

  getLabels() {
    const start = this.jsonData.default[0].timeStamp;
    const labels = [];

    for (const elem of this.jsonData.default) {
      const labelVal = elem.timeStamp - start;
      labels.push('');
    }
    return labels;
  }
}
