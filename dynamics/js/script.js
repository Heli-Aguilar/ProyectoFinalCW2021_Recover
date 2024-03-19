function cookieName (name) 
{
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");
    for (let value of cookieArray)
    {
        let cookie=value.split("=");
        if(cookie[0]===name)
        {
            return cookie[1];
        }
    }
    return false;
}

  let prueba = document.getElementById("inicioSesion")
  prueba.addEventListener("click", ()=>{
    // window.location.assign("./templates/inicio.html");
  });
  prueba.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/inicio.html");
    }        
  });
  let perfil = document.getElementById("imgPerfil");
  perfil.addEventListener("click", ()=>{
    window.location.assign("./templates/perfil.html");
  });
  perfil.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/perfil.html");
    }        
  });
  /* EVENTOS DE CLICK A CUALQUEIRA DE LAS TARJETAS 1-20*/
  let tarjeta1 = document.getElementById("colegio1");
  tarjeta1.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=1";
  });
  tarjeta1.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=1";
    }        
  });
  let tarjeta2 = document.getElementById("colegio2");
  tarjeta2.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=2";
  });
  tarjeta2.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=2";
    }        
  });
  let tarjeta3= document.getElementById("colegio3");
  tarjeta3.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=3";
  });
  tarjeta3.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=3";
    }        
  });
  let tarjeta4 = document.getElementById("colegio4");
  tarjeta4.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=4";
  });
  tarjeta4.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=4";

    }        
  });
  let tarjeta5 = document.getElementById("colegio5");
  tarjeta5.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=5";
  });
  tarjeta5.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=5";
    }        
  });
  let tarjeta6 = document.getElementById("colegio6");
  tarjeta6.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=6";
  });
  tarjeta6.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=6";
    }        
  });
  let tarjeta7 = document.getElementById("colegio7");
  tarjeta7.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=7";
  });
  tarjeta7.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=7";
    }        
  });
  let tarjeta8 = document.getElementById("colegio8");
  tarjeta8.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=8";
  });
  tarjeta8.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=8";
    }        
  });
  let tarjeta9 = document.getElementById("colegio9");
  tarjeta9.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=9";
  });
  tarjeta9.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=9";
    }        
  });
  let tarjeta10 = document.getElementById("colegio10");
  tarjeta10.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=10";
  });
  tarjeta10.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=10";

    }        
  });
  let tarjeta11 = document.getElementById("colegio11");
  tarjeta11.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=11";
  });
  tarjeta11.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=11";

    }        
  });
  let tarjeta12 = document.getElementById("colegio12");
  tarjeta12.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=12";
  });
  tarjeta12.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=12";

    }        
  });
  let tarjeta13 = document.getElementById("colegio13");
  tarjeta13.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=13";
  });
  tarjeta13.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=13";

    }        
  });
  let tarjeta14 = document.getElementById("colegio14");
  tarjeta14.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=14";
  });
  tarjeta14.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=14";

    }        
  });
  let tarjeta15 = document.getElementById("colegio15");
  tarjeta15.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=15";
  });
  tarjeta15.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=15";

    }        
  });
  let tarjeta16 = document.getElementById("colegio16");
  tarjeta16.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=16";
  });
  tarjeta16.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=16";

    }        
  });
  let tarjeta17 = document.getElementById("colegio17");
  tarjeta17.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=17";
  });
  tarjeta17.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=17";

    }        
  });
  let tarjeta18 = document.getElementById("colegio18");
  tarjeta18.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=18";
  });
  tarjeta18.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=18";

    }        
  });
  let tarjeta19 = document.getElementById("colegio19");
  tarjeta19.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=19";
  });
  tarjeta19.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=19";

    }        
  });
  let tarjeta20 = document.getElementById("colegio20");
  tarjeta20.addEventListener("click", ()=>{
    window.location.assign("./templates/colegios.html");
    document.cookie="colegio=20";
  });
  tarjeta20.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
      window.location.assign("./templates/colegios.html");
      document.cookie="colegio=20";

    }        
  });
  
  let checkbox = document.getElementById('check');

    checkbox.addEventListener('change', ()=>{
      document.body.classList.toggle('dark');
      document.cookie="modo=oscuro";
    });
    
