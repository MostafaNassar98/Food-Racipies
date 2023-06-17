// ==================Global================
var data = [];
var links= document.querySelectorAll('.nav-item .nav-link');
// ==================Event================
for(var i= 0 ; i < links.length ; i++){
    links[i].addEventListener('click',function(e){
        console.log(e.target.text);
        var recipie = e.target.text;
        getRecipies(recipie);
    })
}
// ==================Function================
getRecipies('Pizza');
function getRecipies(index){
    var httpRequest = new XMLHttpRequest;
    httpRequest.open('Get',`https://forkify-api.herokuapp.com/api/search?q=${index}`);
    httpRequest.send();
    httpRequest.addEventListener('readystatechange',function(){
        if((httpRequest.readyState == 4) & (httpRequest.status == 200)){
            data = JSON.parse(httpRequest.response).recipes;
            // console.log(data)
            displayResipies();
        }
    });
}
function displayResipies(){
    item= ``;
    for(var i = 0; i < data.length ; i++){
        item+=`
        <div class="col-md-4">
            <div class="text-center shadow-lg pb-3">
                <img src="${data[i].image_url}" class="w-100">
                <h2>${data[i].title}</h2>
                <a class="btn btn-primary text-center" href="${data[i].publisher_url}">Recipie Details</a>
            </div>
        </div>
        `
    }
        document.getElementById('data').innerHTML=item;
}
// datacontainer=[];
// var httpRequest = new XMLHttpRequest;
// httpRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
// httpRequest.send();
// httpRequest.addEventListener('readystatechange',function(){
//     if((httpRequest.readyState == 4) & (httpRequest.status == 200)){
//         // console.log(JSON.parse(httpRequest.response));
//         datacontainer=JSON.parse(httpRequest.response);
//         dispalyData();
//     }
// })

// function dispalyData(){
//     item =``;
//     for(var i=0 ; i<datacontainer.length;i++){
//         item+=`
//         <div class="col-md-4">
//         <h2>${datacontainer[i].id}</h2>
//         <h4>${datacontainer[i].title}</h4>
//         <p>${datacontainer[i].body}</p>
//     </div>
//         `
//     }
//     document.getElementById('data').innerHTML=item;
// }