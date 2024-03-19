window.addEventListener("load",()=>{
    onlyText = new RegExp("^[^\\W]([A-Za-z]|[á-é-í-ó-ú]|[Á-É-Í-Ó-Ú]|\\s){10,}\\.*$");
    onlyNumber =new RegExp("^\\d+$");

    asesoria=document.getElementById("asesoria")
    userName=document.getElementById("name");
    send=document.getElementById("send");
    send.addEventListener("click", ()=>{
        if(!(onlyText.test(userName.value))||!(onlyNumber.test(asesoria.value)))
        {
            if(!(onlyText.test(userName.value)))
            {
                userName.classList.toggle("danger"); 
                console.log("fail name")
            }
            if(!(onlyNumber.test(asesoria.value)))
            {
                asesoria.classList.toggle("danger");
                console.log("fail id")
            }
            
            alert("Not valid");   
            console.log("Not valid");
        }
        else
        {
            console.log("succes");
            report=new FormData(document.getElementById("form"));
            fetch("",{
                method:"POST",
                body:report,
            }).then((response)=>{
                return response.text();
            })
        }
    })
})