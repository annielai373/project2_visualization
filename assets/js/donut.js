// Donut
var data = [{
  values: [13028, 21445, 959],
  labels: ['M', 'F', 'U'],
  domain: {column: 0},
  name: '2017',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [14392, 26257, 383],
  labels: ['M', 'F', 'U'],
  text: '2018',
  textposition: 'inside',
  domain: {column: 1},
  name: '2018',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Total Vaccines by Gender',
  grid: {rows: 1, columns: 2},
  showlegend: false,
  annotations: [
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: '2017',
      x: 0.22,
      y: 0.5
    },
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: '2018',
      x: 0.78,
      y: 0.5
    }
  ]
};

Plotly.newPlot('myDonut', data, layout, {showSendToCloud:true});


