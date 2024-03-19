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
    let checkbox = document.getElementById('check');

    checkbox.addEventListener('change', ()=>{
      document.body.classList.toggle('dark');;
    });
    let logo = document.getElementById("logoImg");
    logo.addEventListener("click", ()=>{
    window.location.assign("../../index.html");
  });
  let logob = document.getElementById("logoImgb");
  logob.addEventListener("click", ()=>{
    window.location.assign("../../index.html");
  });
   let prueba = document.getElementById("inicioSesion")
  prueba.addEventListener("click", ()=>{
    window.location.assign("../../templates/inicio.html");
  });
  let perfil = document.getElementById("imgPerfil");
  perfil.addEventListener("click", ()=>{
    window.location.assign("../../templates/perfil.html");
  });
let buscar = document.getElementById("buscar");
    let body = document.getElementById("body");

    buscar.addEventListener("click", ()=>{
        let datos = document.getElementById("formUsuario");
        const data = new FormData(datos);
        console.log(data);
        fetch("./busquedaUsuario.php",{
            method: 'POST',
            body: data
        }).then((response)=>{
            if(response.ok)
            {
                //console.log(response.text());
                response.text().then((text)=>{
                    let info = text.split(",");
                    body.innerHTML += "<h2>"+info[4]+"</h2>";
                    
                    inputs = "<input type='hidden' name='numCuenta' value='"+info[0]+"'>";
                    inputs += "Año de inscripcion:<input type='text' name='añoInscripcion' value='"+info[1]+"'>";
                    inputs += "<br><br>";
                    inputs += "Correo electronico:<input type='text' name='email' value='"+info[2]+"'>";
                    inputs += "<br><br>";
                    inputs += "Numero de telefono:<input type='text' name='numTelefono' value='"+info[3]+"'>";
                    inputs += "<br><br>";
                    inputs += "Nombre:<input type='text' name='nombre' value='"+info[4]+"'>";
                    inputs += "<br><br>";
                    inputs += "Calificacion total:<input type='text' name='calificacionTotal' value='"+info[5]+"'>";
                    inputs += "<br><br>";
                    inputs += "<select name='id_tipoUsuario'><option value='1'>Usuario</option><option value='2'>admin</option></select>";
                    inputs += "<br><br>";
                    inputs += "</form>";
                    inputs += "<br><br>";
                    body.innerHTML += "<form id='modificacion'>"+inputs+"</form>";
                    body.innerHTML += "<span id='cambiar'>Cambiar datos</span>" ;
                    let cambiar = document.getElementById("cambiar");
                    cambiar.addEventListener("click", ()=>{
                        console.log("entro");
                        let formCambio = document.getElementById("modificacion");
                        console.log(formCambio);
                        let cambios = new FormData(formCambio);
                        console.log(cambios);
                        fetch("./cambiarDatos.php",{
                            method: 'POST',
                            body: cambios
                        }).then((response2)=>{
                            console.log(response2.text());
                        })
                    })
                })
            }
        });
    });
});