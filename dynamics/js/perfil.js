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

  
//  const data = new FormData(document.getElementById("form"));
//  fetch("../dynamics/php/perfil.php", {
//     method: "POST",
//     body: data
//  }).then((response)=>{
//    if(response.ok){
//       //console.log(response.text);
//       console.log(response.text());
//       // response.text().then((text)=>{

//       // })
//    }
//  })
 

  $.ajax({
      url: "../dynamics/php/perfil.php",
      data: 1,
      method: "POST",
      //dataType: "text",
      success: function(response){
        // console.log(response);
        let respuesta = JSON.parse(response);
        console.log(respuesta);
        let nombre = document.getElementById("tdNombre");
        nombre.innerHTML = "<p class= 'tabla'>"+respuesta[2]+"</p>";
        let numCuenta = document.getElementById("varNumCuenta");
        numCuenta.innerHTML = "<p class= 'tabla'>"+respuesta[1]+"</p>";
        let correo = document.getElementById("correo");
        correo.innerHTML = "<p class= 'tabla'>"+respuesta[0]+"</p>";
        let tbody = document.getElementById("tableBody");
        let cont=0;
        for (let valor of respuesta){
          if(cont>2){
            tbody.innerHTML += "<tr><td>"+valor+"</td></tr>";
          }
          cont++;
        }
        

      },
      error: function(error){
        alert("Hubo un error con la pagina");
        console.error(error);
      }

   })
 
  let cookies = document.cookie;
  let cookieSeparada =  cookies.split(";");
  //console.log(cookieSeparada);
  cookieSeparada = cookieSeparada[0].split("=");
  let cookieNombre = cookieSeparada[1];
  console.log(cookieNombre);
  //console.log(cookieSeparada);
  let divImagen = document.getElementById("IMGPerfil");
   divImagen.innerHTML = "<img src='../statics/img/perfil/"+cookieNombre+".jpeg' alt='Foto de Perfil' id=perfilGrande></img>"; 
 
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
  
  let botonPerfil = document.getElementById("cambioFotoPerfil");
  botonPerfil.addEventListener("click", ()=>{
    let divPerfil = document.getElementById("divPerfil");
    divPerfil.style.display = "block";
  });
    
  let checkbox = document.getElementById('check');

  checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
  });
  document.cookie="hola=osucro";
});