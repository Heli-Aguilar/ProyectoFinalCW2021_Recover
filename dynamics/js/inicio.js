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

    function verificar(wich)
    {
      if(wich==1||wich==3)
      {
        if(!(validEmail.test(mail.value)))
        {
          mail.classList.toggle("danger");  
          validCorrect=0;  
        }
        else
        {
          validCorrect++;
        }
      }
      if(wich==2||wich==3)
      {
        if((notValidPw.test(psswd.value)))
        {
          psswd.classList.toggle("danger");
          validCorrect=0;
        }
        else
        {
          validCorrect++;
        }
      }
    }
    let validEmail = new RegExp("^[\\w\\.\\-]{3,24}@(((g|hot)mail|outlook|live)\\.com|(comunidad|alumno\\.enp)\\.unam\\.mx)|.mx$");
    let notValidPw = new RegExp("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$");

    let mail=document.getElementById("email");
    let psswd=document.getElementById("pw");
    let send=document.getElementById("Inicia");
    let data=document.getElementById("ini");
    let validCorrect=0;
    var proceed=false;

    verificar(3);

    send.addEventListener("click", ()=>{
      verificar(3);
      let validation = new FormData();
      validation.append("mail", mail.value)
      validation.append("pw", psswd.value)
      fetch("../dynamics/php/startSession.php", {method:"POST", body:validation}).then((response)=>{
          return response.text();
        }).then((txt)=>{
          return new Promise((resolve)=>{
            if(txt=="fine")
            {
              proceed=true;
              validCorrect++;
            }
            else if(txt=="notExistent"&&mail.value!="")
            {
              alert("Este correo no está registrado, por favor, crea una cuenta.");
              validCorrect=0;
            }
            else if(txt=="noGood")
            {
              validCorrect=0;
            }
            resolve();
          })
        }).then(()=>{
          return new Promise((resolve)=>{
            if(validCorrect>=2&&proceed)
            {
              console.log("kepasa");
              //Promesa que se asegura de asignar los atributos al formulario primero y luego al botón
              setTimeout(()=>{
                data.setAttribute("action", "../dynamics/php/SessionAssign.php");
                data.setAttribute("method", "POST");
                resolve();
              },100)
            }
            else if(validCorrect<2)
            {
              alert("Alguno de los datos que has introducido no es válido.");
            }
            else if(!proceed)
            {
              alert("Alguno de los datos que has introducido no coincide con los registros."); 
            }
          })
        }).then(()=>{
            return new Promise((resolve)=>{
              setTimeout(()=>{
                send.setAttribute("type", "submit");
                resolve();
              }, 200)
            })
        }).then(()=>{
            return new Promise((resolve)=>{
              setTimeout(()=>{
                send.click();
                resolve();
              }, 100)
            })
          });
    })

    let volver = document.getElementById("volver");

    volver.addEventListener("click", ()=>{
    window.location.assign("../index.html");
    console.log("click")
    });

    let check = document.getElementById("checkboxPass");
    check.addEventListener("change", ()=>{
      console.log("cambio");
        let show = document.getElementById("pw");
        if(show.type === "password"){
          show.type = "text";
        }else{
          show.type = "password";
        }
    });

  });
}
else
{
  window.location="../index.html";
}