var res=fetch('https://restcountries.com/v2/all');
//console.log(res);
res.then((data)=>(data.json()) .then((data1)=>foo(data1)));
function foo(arr){
    for(var i=0;i<=arr.length;i++){
    var div=document.createElement("div")
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      
    </div>
  </div>`
    document.body.append(div);

}
} 