import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Chart';
  lineChart;

  //Indicator levels
  levels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  months = [{month: 'Jan', value: '1'},
  {month: 'Feb', value: '2'},
  {month: 'Mar', value: '3'},
  {month: 'Apr', value: '4'},
  {month: 'May', value: '5'},
  {month: 'Jun', value: '6'},
  {month: 'Jul', value: '7'},
  {month: 'Aug', value: '8'},
  {month: 'Sept',value: '9'},
  {month: 'Oct', value: '10'},
  {month: 'Nov', value: '11'},
  {month: 'Dec', value: '12'}];

  //Start points at Home page
  from = '1';//Jan
  to = '12';//Dec

  //Chart Initialization
  ngOnInit() {
    this.lineChart = new Chart('line', {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Monthly Average Temperature'
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            type: 'line',
            label: 'Athens',
            data: [10,11,13,16,21,26,29,29,25,20,16,12],
            backgroundColor: 'rgba(0, 0, 0)',
            borderColor: 'rgba(0, 0, 255)',
            fill: false,
          }, {
            type: 'line',
            label: 'London',
            data: [6,6,8,11,14,17,19,18,16,13,9,6],
            backgroundColor: 'rgba(0, 0, 0)',
            borderColor: 'rgba(255, 0, 0)',
            fill: false,
          }, {
            type: 'line',
            label: 'Tokyo',
            data: [7,7,10,15,20,23,26,28,25,19,14,9],
            backgroundColor: 'rgba(0, 0, 0)',
            borderColor: 'rgba(238, 130, 238)',
            fill: false,
          }
        ]
      }
    });
  }

  //Apply Button Function
  applyDateRange(){
    this.lineChart.data.labels = this.levels.slice( parseInt(this.from) -1 , parseInt(this.to) );
    this.lineChart.update();
  }

}