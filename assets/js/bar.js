var x = ["Apples","Apples","Apples","Organges", "Bananas"]
var y = ["5","10","3","10","5"]

var data = [
  {
    histfunc: "count",
    y: y,
    x: x,
    type: "histogram",
    name: "count"
  },
  {
    histfunc: "sum",
    y: y,
    x: x,
    type: "histogram",
    name: "sum"
  }
]

Plotly.newPlot('myBar', data)