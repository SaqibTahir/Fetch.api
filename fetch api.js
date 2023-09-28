let url = 'https://kontests.net/api/v1/all'

let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((v) => {
    console.log(v)
    html = ''
    for (item in v) {
        console.log(v[item])
        html += `
            <div class="card m-2" style="width: 18rem;">
                <img src="https://source.unsplash.com/random/200x200?" id="img" class="card-img-top" alt="...">
                <div class="card-body " >
                    <h5 class="card-title">${v[item].name}</h5>
                   <p> start time : ${v[item].start_time}</p>
                   <p> end time : ${v[item].end_time}</p>
                   <p> status : ${v[item].status}</p>
                   <p>Duration : ${v[item].in_24_hours}</p>
                    <a href="${v[item].url}" class="btn btn-primary">vsist</a>
                </div>
            </div>
        `
        document.getElementById('m1').innerHTML = html;
        
    }
    
    
})
// let a= document.getElementById('m1');
// let src='https://source.unsplash.com/random/200x200?'
// let rows = response;
// for(i=0;i<=rows;i++){
// document.getElementById('img')=src
// }
   

