//Data Source: https://data.cityofnewyork.us/Education/Attendance-Results-2013-2019/mg8s-7r2b/about_data
//global variables
let data, info, output;

async function init(){
  let link = "ar.json"; //https://data.cityofnewyork.us/resource/mg8s-7r2b.json";
  info = await fetch(link);
  data = await info.json();
  //console.log(data); 
  let output = get("output");
  let build = "";

  //Challenge 6: Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    build += card(attendance);
  }
  //Challenge 7: Display cards in the div with id "leftPanel"
  output.innerHTML = build;  
}


function filterByreporttypeandyear(){
  let output = document.getElementById("output");
  let report_type = document.getElementById("reporttype");
  let year = document.getElementById("years");
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if (attendance.report_type == reporttype && attendance.year == years){		
      build += card(attendance);
    }
  }

  output.innerHTML = build;

}
