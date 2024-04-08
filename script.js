
window.load=geolocation();

let x=document.getElementsByClassName('out')
let y=document.getElementById('weaimg1')
let z=document.getElementById('tempmax1')
let a=document.getElementById('tempmin1')
let b=document.getElementById('imgname1')

let yy=document.getElementById('weaimg2')
let zz=document.getElementById('tempmax2')
let aa=document.getElementById('tempmin2')
let bb=document.getElementById('imgname2')

let yyy=document.getElementById('weaimg3')
let zzz=document.getElementById('tempmax3')
let aaa=document.getElementById('tempmin3')
let bbb=document.getElementById('imgname3')

let yyyy=document.getElementById('weaimg4')
let zzzz=document.getElementById('tempmax4')
let aaaa=document.getElementById('tempmin4')
let bbbb=document.getElementById('imgname4')

let yyyyy=document.getElementById('weaimg5')
let zzzzz=document.getElementById('tempmax5')
let aaaaa=document.getElementById('tempmin5')
let bbbbb=document.getElementById('imgname5')


function geolocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        x.innerHTML='error'
    }
}


function showPosition(data){
    console.log(data);
    let lat=data.coords.latitude;
    let lon=data.coords.longitude;
    console.log(lat);
    console.log(lon);

    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`


fetch(url,{method:"GET"})
.then((res)=>res.json())
.then((data)=>{
    console.log(data);

    let city=data.city.name;
    let weaimg1=data.list[0].weather[0].icon;
    let tempmax1=data.list[0].temp.max
    let tempmin1=data.list[0].temp.min
    let imgname1=data.list[0].weather[0].main
    x.innerText=`${city}`
    y.innerHTML=`<img src=/Images/${weaimg1}.png>`
    z.innerText='Max:'+`${tempmax1}`+"°C"
    a.innerText='Min:'+`${tempmin1}`+"°C"
    b.innerText=`${imgname1}`


    let weaimg2=data.list[1].weather[0].icon;
    let tempmax2=data.list[1].temp.max
    let tempmin2=data.list[1].temp.min
    let imgname2=data.list[1].weather[0].main
    yy.innerHTML=`<img src=/Images/${weaimg2}.png>`
    zz.innerText='Max:'+`${tempmax2}`+"°C"
    aa.innerText='Min:'+`${tempmin2}`+"°C"
    bb.innerText=`${imgname2}`

    let weaimg3=data.list[2].weather[0].icon;
    let tempmax3=data.list[2].temp.max
    let tempmin3=data.list[2].temp.min
    let imgnam3=data.list[2].weather[0].main
    yyy.innerHTML=`<img src=/Images/${weaimg3}.png>`
    zzz.innerText='Max:'+`${tempmax3}`+"°C"
    aaa.innerText='Min:'+`${tempmin3}`+"°C"
    bbb.innerText=`${imgnam3}`

    let weaimg4=data.list[3].weather[0].icon;
    let tempmax4=data.list[3].temp.max
    let tempmin4=data.list[3].temp.min
    let imgnam4=data.list[3].weather[0].main
    yyyy.innerHTML=`<img src=/Images/${weaimg4}.png>`
    zzzz.innerText='Max:'+`${tempmax4}`+"°C"
    aaaa.innerText='Min:'+`${tempmin4}`+"°C"
    bbbb.innerText=`${imgnam4}`

    let weaimg5=data.list[4].weather[0].icon;
    let tempmax5=data.list[4].temp.max
    let tempmin5=data.list[4].temp.min
    let imgname5=data.list[4].weather[0].main
    yyyyy.innerHTML=`<img src=/Images/${weaimg5}.png>`
    zzzzz.innerText='Max:'+`${tempmax5}`+"°C"
    aaaaa.innerText='Min:'+`${tempmin5}`+"°C"
    bbbbb.innerText=`${imgname5}`

    

})}
    