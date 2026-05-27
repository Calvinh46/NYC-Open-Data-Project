// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

function display(info){
  document.getElementById("output").innerHTML += `<div class="card">${info}</div>`;
  console.log(info);
}

function card( cardInfo ){
  let build = "";
  build = `<div class="fitted card">
                <h3>reporttype: ${cardInfo.report_type}</h3>
                <hr>
                <p>${cardInfo.grades}</p>
                <hr>
                <p>Issued on: ${cardInfo.total_days}</p>
                <hr>
                <p>${cardInfo.days_absent}</p>
            </div>`;

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