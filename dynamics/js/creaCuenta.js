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

if(cookieName("profile")==false)
{
  window.addEventListener("load", ()=>{
  
  
    let logo = document.getElementById("logoImg");
    logo.addEventListener("click", ()=>{
      window.location.assign("../index.html");
    });
    let logob = document.getElementById("logoImgb");
    logob.addEventListener("click", ()=>{
      window.location.assign("../index.html");
    });
     let prueba = document.getElementById("inicioSesion")
    prueba.addEventListener("click", ()=>{
      window.location.assign("./inicio.html");
    });
    let perfil = document.getElementById("imgPerfil");
    perfil.addEventListener("click", ()=>{
      window.location.assign("../templates/perfil.html");
    });
  
    let check = document.getElementById("checkboxPass");
    check.addEventListener("change", ()=>{
      console.log("cambio");
        let show = document.getElementById("password");
        if(show.type === "password"){
          show.type = "text";
        }else{
          show.type = "password";
        }
    });
  
    let grado = document.getElementById("anio");
    let cuarto = document.getElementById("cuarto");
    let quinto = document.getElementById("quinto");
    let paleta2 = document.getElementById("paleta2");
    let sexto = document.getElementById("sexto");
    grado.addEventListener("change", ()=>{
      console.log(grado.value);
      if(grado.value == 'Cuarto'){
        paleta2.style.display = 'none';
        quinto.style.display = 'none';
        sexto.style.display = 'none';
        console.log("cambi");
      }else if(grado.value == 'Quinto'){
        quinto.style.display = 'block';
        paleta2.style.display = 'block';
        sexto.style.display = 'none';
      }else if(grado.value == 'Sexto'){
        quinto.style.display = 'block';
        paleta2.style.display = 'block';
        sexto.style.display = 'block';
      }
    });
  
    let checkbox = document.getElementById('check');
  
    checkbox.addEventListener('change', ()=>{
      document.body.classList.toggle('dark');;
  
  
  
    }); 
  });
}
else
{
  window.location="../index.html";
}

