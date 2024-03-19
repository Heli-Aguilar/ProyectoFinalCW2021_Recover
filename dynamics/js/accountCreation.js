window.addEventListener("load", ()=>{
    function verify (wich)
    {
        if(wich==1||wich==5)
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
            let validation = new FormData();
            validation.append("mail", mail.value)
            fetch("../dynamics/php/exists.php", {method:"POST", body:validation}).then((response)=>{
                return response.text();
            }).then((txt)=>{
                if(txt=="existent")
                {
                    alert("Este correo ya está registrado, por favor inicia sesión.");
                    validCorrect=0;
                }
                else
                {
                    proceed=true;
                }
            });
        }
        if(wich==2||wich==5)
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
        if(wich==3||wich==5)
        {
            if(!(validNumCuenta.test(nCuenta.value)))
            {
                nCuenta.classList.toggle("danger");
                validCorrect=0;
            }
            else
            {
                validCorrect++;
            }
        }
        if(wich==4||wich==5)
        {
            if(!(validCell.test(tel.value)))
            {
                tel.classList.toggle("danger");
                validCorrect=0;
                console.log("fail cell");
            }
            else
            {
                validCorrect++;
            }
        }
    }  
    let validEmail = new RegExp("^[\\w\\.\\-]{3,24}@(((g|hot)mail|outlook|live)\\.com|(comunidad|alumno\\.enp)\\.unam\\.mx)|.mx$");
    let validNumCuenta = new RegExp("^[1-3](1|2)\\d{7}$"); 
    let notValidPw = new RegExp("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$");
    let validCell = new RegExp("^(55|56)\\d{8}")

    let send = document.getElementById("boton");
    let mail = document.getElementById("correo");
    let psswd = document.getElementById("password");
    let nCuenta = document.getElementById("numcuenta");
    let tel = document.getElementById("tel");
    let data = document.getElementById("form");

    let validCorrect=0, proceed=false;
    verify(5);

    mail.addEventListener("change",()=>{
        verify(1);
    })
    psswd.addEventListener("change", ()=>{
        verify(2);
    })
    nCuenta.addEventListener("change", ()=>{
        verify(3);
    })
    tel.addEventListener("change", ()=>{
        verify(4);
    })

    send.addEventListener("click", ()=>{
        verify(5);

        if(validCorrect>=4&&proceed)
        {
            //Promesa que se asegura de asignar los atributos al formulario primero y luego al botón
            const process = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    data.setAttribute("action", "../dynamics/php/creaCuenta.php");
                    data.setAttribute("method", "POST");
                    resolve();
                },100)
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
                    }, 200)
                })
            });
        }
        else
        {
            alert("Alguno de los datos que has introducido no es válido.");
        }
    })
    let checkbox = document.getElementById('check');

    checkbox.addEventListener('change', ()=>{
      document.body.classList.toggle('dark');
    });

})