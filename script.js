var res=fetch("https://data.covid19india.org/v4/min/data.min.json");
// res.then((data) => (data.json()).then((data1)=>console.log(data1)));
res.then((data) => data.json())
.then((data1)=>foo(data1));
function foo(data1){
    for(var i in data1){
    // console.log(i,data1[i].total.confirmed)
    // }
    var div=document.createElement("div");
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${"covid 19 state details"}</h5> 
    <h5 class="card-title">${[i]}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data1[i].total.confirmed}</h6>
      
    </div>
  </div>`;
    document.body.append(div);
}
}

