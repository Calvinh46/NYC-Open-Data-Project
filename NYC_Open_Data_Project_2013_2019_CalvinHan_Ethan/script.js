//Data Source: https://data.cityofnewyork.us/Education/Attendance-Results-2013-2019/mg8s-7r2b/about_data
//global variables
let data, info, output;

async function init(){
  let link = "ar.json"; //https://data.cityofnewyork.us/resource/mg8s-7r2b.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let attendance = data[i];
    build += `<div class="fitted card">
                <h3>${attendance.report_type}</h3>
                <hr>
                <h5>${attendance.grades}</h5>
                <h5>${attendance.days_absent}</h5>
                <h5>${attendance.year}</h5>
                </hr>
                <h5>${attendance.total_days}</h5>
              </div>`    
  }
  output.innerHTML = build;

}
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;
}
