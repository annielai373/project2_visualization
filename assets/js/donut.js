// Donut
Plotly.d3.csv('data/df2017.csv', function(err, rows){

function unpack(rows, key) {
    return rows.map(function(row) { 
      return row[key]; 
    });
  }

var data = [{
  type: 'pie',
  values: unpack(rows, 'sex'),
  labels: ['M', 'F', 'U'],
  domain: {column: 0},
  name: 'Vaccine Counts by Gender',
  hoverinfo: 'label+percent',
  hole: .4,
  
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Age Sex',
  grid: {rows: 1, columns: 2},
  showlegend: false,
  annotations: [
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'GHG',
      x: 0.22,
      y: 0.5
    },
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'CO2',
      x: 0.78,
      y: 0.5
    }
  ]
};

Plotly.newPlot('myDonut', data, layout, {showSendToCloud:true});

});

