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
//Seleccionas todos los elementos con clase test
var botones = document.getElementsByClassName("boton");

//Recorres la lista de elementos seleccionados
for (let i=0; i< botones.length; i++)
{
    //Añades un evento a cada elemento
    botones[i].addEventListener("click",function() {
        console.log("entro")
        let forms = document.getElementsByClassName("formulario");
        datos = forms[i];
        const data = new FormData(datos);
        fetch("./subidaAsesoria.php",{
            method: 'POST',
            body: data
        }).then((response)=>{
            if(response.ok)
            {
                response.text().then((text)=>{
                    //console.log(response.text());
                    if(text == 'ok')
                    {
                        body = document.getElementById("body");
                        console.log(body);
                        let arreglo = [];
                        cv = document.createElement("div");
                        cv.innerHTML += "<canvas id='canvas' width='1000' height='1000'></canvas>"
                        body.prepend(cv);
                            let i = 0;
                            new Promise((resolve)=>{
                                for (let value of data.values()) {

                                    if(i == 0)
                                    {
                                        console.log("hola");
                                        body.innerHTML += "<form id='horario'><input type='hidden' name='id_horario' value='"+value+"'></form>";
                                        let formCanvas = document.getElementById("horario");
                                        const datas = new FormData(formCanvas);
                                        fetch("./peticionCanvas.php",{
                                            method: 'POST',
                                            body: datas
                                        }).then((response2)=>{
                                            if(response2.ok)
                                            {
                                                response2.text().then((text2)=>{
                                                    console.log(text2);
                                                    arreglo.push(text2);
                                                    resolve();
                                                })
                                            }
                                        })
                                    }
                                    else if(i != 0 && i != 1 && i != 4)
                                    {
                                        console.log(value);
                                        arreglo.push(value);
                                    }
                                    i++;
                                }
                            }).then(()=>{
                                let canvas = document.getElementById("canvas");
                                let ctx = canvas.getContext("2d");
                                ctx.fillStyle = "black";
                                ctx.font = "15px Arial";
                                ctx.beginPath();
                                ctx.stroke();
                                let k = 0;
                                console.log(arreglo);
                                for(let valor of arreglo)
                                {
                                    console.log(valor);
                                    ctx.fillText(valor, k, 40)
                                    k += 80;
                                }
                                ctx.closePath();
                            })
                    }
                    if(text == 'f')
                    {
                        body = document.getElementById("body");
                        body.innerText += "Algo salio mal";
                    }
                    /*if(text = 'ND')
                    {
                        body = document.getElementById("body");
                        body.innerText += "Cupo lleno";
                    }*/
                })
            }
        })
    });
}