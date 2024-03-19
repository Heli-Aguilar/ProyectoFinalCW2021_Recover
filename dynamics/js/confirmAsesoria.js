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
let acpBoton = document.getElementsByClassName("acept");
let rjcBoton = document.getElementsByClassName("reject");

console.log(acpBoton);
console.log(rjcBoton.item(0));

for(let i=0; i<acpBoton.length; i++)
{
    acpBoton.item(i).addEventListener("click", ()=>{
        console.log("acepto");
        let form = document.createElement("div");
        let tabla = document.getElementsByClassName("id");
        let id = tabla.item(i).innerText;
        console.log(id);
        acpBoton.item(i).appendChild(form);
        form.innerHTML = "<form class='confirm'><input type='text' name='ubicacion'></form>";
        let padre = acpBoton.item(i).parentNode;
        padre.removeChild(acpBoton.item(i));
        padre.appendChild(form);
        form.innerHTML = "<form class='confirm'>Ubicacion:<input type='text' name='ubicacion'><input type='hidden' name='id_asesoria' value="+id+"><span class='submit'>Enviar</span></form>";
        form = document.getElementsByClassName("submit");
        for(let k=0; k<form.length; k++)
        {
            form.item(k).addEventListener("click", ()=>{
                let formulario = form.item(k).parentNode;
                const data = new FormData(formulario);
                fetch("./confirmtosql.php",{
                    method: 'POST',
                    body: data
                }).then((response)=>{
                    if(response.ok)
                    {
                        console.log(response.text());
                    }
                })
            })
        }
    })
    rjcBoton.item(i).addEventListener("click", ()=>{
        console.log("rechazo");
        rjcBoton.item(i).innerHTML = "Rechazado con exito";
        let padre = rjcBoton.item(i).parentNode;
        console.log(acpBoton.item(i));
        if(acpBoton.item(i) !== null)
        {
            padre.removeChild(acpBoton.item(i));
        }
        let form = document.getElementsByClassName("confirm");
        console.log(form);
        if(form.item(i) !== null)
        {
            padre = form.item(i).parentNode;
            padre.removeChild(form.item(i));
        }
    })
}
