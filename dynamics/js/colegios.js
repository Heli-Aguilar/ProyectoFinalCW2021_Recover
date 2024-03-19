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

if(cookieName("profile"))
{
    let ses=document.getElementById("inicioSesion");
    ses.style.display="none";
}
else
{
  window.location="./inicio.html";
}
window.addEventListener("load", ()=>{
  var materias;
  const data = new FormData(document.getElementById("form"));

  fetch("../dynamics/php/colegios.php", {
    method: "POST",
    body: data
  }).then((response)=>{
    if(response.ok){
      //console.log(response.text());
      // let materias = response.text();
      // console.log(materias);
      response.text().then((text)=>{
        materias=text;
        let cont=1;
        let array = [];
        let nombre;
        array = text.split(",");
        let select = document.getElementById("selectMat");
        let filas = document.getElementById("tbody");
        for (let value of array) {
          if(cont%2!=0){
            nombre = value;
            console.log(value);
            console.log(nombre);
          filas.innerHTML += "<tr><td><p>"+value+"</p></td></tr>";     
          }
          if(cont%2==0){
            console.log(value);
            select.innerHTML += "<option value="+value+">"+nombre+"</option>"
          }
          cont++;           
        }
      })
    }
  }); 

  let tituloColegio = document.getElementById("colegio");
  $cookie = document.cookie.split(";");;
  //$cookie = $cookie.split("=");
  let $cookies = $cookie[1].split("=");
  console.log($cookies);

  //console.log($cookie[1]);
  switch ($cookies[1]) {
    case '1':
      tituloColegio.innerHTML = "MATEMÁTICAS";
      break;
    case '2':
      tituloColegio.innerHTML = "EDUCACIÓN ESTETICA";
    case '3':
      tituloColegio.innerHTML = "MORFOFISIOLOGÍA";
      break;
    case '4':
      tituloColegio.innerHTML = "BIOLOGÍA";
      break;
    case '5':
      tituloColegio.innerHTML = "CIENCIAS SOCIALES";
      break;
    case '6':
      tituloColegio.innerHTML = "DIBUJO";
      break;
    case '7':
      tituloColegio.innerHTML = "FILOSOFÍA";
      break;
    case '8':
      tituloColegio.innerHTML = "FÍSICA";
      break;
    case '9':
      tituloColegio.innerHTML = "GEOGRAFÍA";
      break;
    case '10':
      tituloColegio.innerHTML = "HISTORIA";
      break;
    case '11':
      tituloColegio.innerHTML = "LENGUAS VIVAS";
      break;
    case '12':
      tituloColegio.innerHTML = "LETRAS CLÁSICAS";
      break;
    case '13':
      tituloColegio.innerHTML = "LITERATURA";
      break;
    case '14':
      tituloColegio.innerHTML = "MATEMÁTICAS";
      break;
    case '15':
      tituloColegio.innerHTML = "PSICOLOGÍA";
      break;
    case '16':
      tituloColegio.innerHTML = "QUÍMICA";
      break;
    case '17':
      tituloColegio.innerHTML = "INFORMÁTICA";
      break;
    case '18':
      tituloColegio.innerHTML = "OPCIONES TÉCNICAS";
      break;
    case '19':
      tituloColegio.innerHTML = "ORIENTACIÓN";
      break;
    case '20':
      tituloColegio.innerHTML = "CÓMPUTO";
      break;
      
    default:
      console.log("DEFAULR");
      break;
  }
  
  let prueba = document.getElementById("inicioSesion")
  prueba.addEventListener("click", ()=>{
    window.location.assign("./inicio.html");
  });

  let logo = document.getElementById("logoImg");
  logo.addEventListener("click", ()=>{
    window.location.assign("../index.html");
  });

  let logob = document.getElementById("logoImgb");
  logob.addEventListener("click", ()=>{
    window.location.assign("../index.html");
  });

 let perfil = document.getElementById("imgPerfil");
  perfil.addEventListener("click", ()=>{
    window.location.assign("./perfil.html");
  });

  let checkbox = document.getElementById('check');

  checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
  });




  
  
});