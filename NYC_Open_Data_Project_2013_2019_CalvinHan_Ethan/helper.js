// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

function display(info){
  document.getElementById("output").innerHTML += `<div class="card">${info}</div>`;
  console.log(info);
}

function card( info ){
  let build = `<div class="fitted card">
                <h3>reporttype:${info.report_type}</h3>
                <hr>
                <p>Year:${info.year}</p>
                <p>Grade:${info.grades}</p>
                <p>${info.days_absent}</p>
                <hr>
                <p>Total Days:${info.total_days}</p>`;
  build +=    `</div>`;
  return build;
  
}

//Function to generate Chart (accepts data, id of div for chart, and chart type)
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}