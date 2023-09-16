setInterval(function(){
   let a= new Date()
    let d=a.getDate()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
        clock.innerHTML=( d + " : " + h + " : " + m + " : " + s )
    },100) 

