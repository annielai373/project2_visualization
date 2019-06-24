
// parallel
//Plotly.d3.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/parcoords_data.csv', function(err, rows){
Plotly.d3.csv('data/parallel_data.csv', function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) { 
    return row[key]; 
  });
}

var data = [{
  type: 'parcoords',
  line: {
    showscale: true,
    reversescale: true,
    colorscale: 'Jet',
    cmin: 0,
    cmax: 120,
    color: unpack(rows, 'colorVal')
  },
  
  dimensions: [{
    label: 'Vaccine Type',
    tickvals: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],
    ticktext: ["vaccine1","vaccine2","vaccine3","vaccine4","vaccine5","vaccine6","vaccine7","vaccine8","vaccine9","vaccine10","vaccine11","vaccine12","vaccine13","vaccine14","vaccine15","vaccine16","vaccine17","vaccine18","vaccine19","vaccine20","vaccine21","vaccine22","vaccine23","vaccine24","vaccine25","vaccine26","vaccine27","vaccine28","vaccine29","vaccine30","vaccine31","vaccine32","vaccine33","vaccine34","vaccine35","vaccine36","vaccine37","vaccine38","vaccine39","vaccine40","vaccine41","vaccine42","vaccine43","vaccine44","vaccine45","vaccine46","vaccine47","vaccine48","vaccine49","vaccine50","vaccine51","vaccine52","vaccine53","vaccine54","vaccine55"],
    values: unpack(rows, 'vaccine_name')
  }, 
  // {
  //   label: 'Age',
  //   tickvals: [0,1,2,3,4,5],
  //   ticktext: ["Infant","Toddler","Kids","Teen","Adult","Senior"],
  //   values: unpack(rows, 'age_group')
  // },
  {
    label: 'Sex',
    tickvals: [0,1],
    ticktext: ["F","M"],
    values: unpack(rows, 'sex')
  },{
    label: 'State',
    tickvals: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],
    ticktext: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    values: unpack(rows, 'state')
  }]
}];

Plotly.plot('myParallel', data);

});
