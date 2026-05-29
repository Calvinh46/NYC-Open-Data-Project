//Data Source: https://data.cityofnewyork.us/Education/Attendance-Results-2013-2019/mg8s-7r2b/about_data
//global variables
let data, info, output;

async function init(){
  let link = "ar.json"; //https://data.cityofnewyork.us/resource/mg8s-7r2b.json";
  info = await fetch(link);
  data = await info.json();
  //console.log(data); 
  let output = get("output");
  let result = get("result");
  let build = "";
  let ct = 0;

  //Challenge 6: Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    build += card(attendance);
    ct++;
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  
}
  
  let years = fillDropDown("year");
  document.getElementById("year").innerHTML = years;

  let violation = fillDropDown("violation");
  document.getElementById("violation").innerHTML = violation;

  let agencies = fillDropDown("issuing_agency");
  document.getElementById("issuing_agency").innerHTML = agencies;  

function filterByreporttypeandyear(){
  let output = get("output");
  let report_type = get("reporttype");
  let year = get("year");
  let result = get("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if (attendance.report_type == reporttype && attendance.year == years){		
      build += card(attendance);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

}
