function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisText=document.getElementById("mais");
    var leiaMais=document.getElementById("leiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisText.style.display = "none";
        leiaMais.style.border = "transparent";
        leiaMais.innerHTML = "ver mais";
    }else{
        pontos.style.display = "none";
        maisText.style.display = "inline";
        leiaMais.style.border = "transparent";
        leiaMais.innerHTML = "ver menos";
    }
}

function criarTopico(){
    var criarTop=document.getElementById("criarTop");
    var enviarTop=document.getElementById("enviarTop");
    var agradecer=document.getElementById("agradecer");

    if(criarTop.style.display === "none"){
        criarTop.style.display = "inline";
        enviarTop.style.display = "none";
        agradecer.style.display = "none";
    }else{ 
        if(enviarTop.style.display === "none"){
            criarTop.style.display = "none";
            enviarTop.style.display = "inline";
            agradecer.style.display = "none"; 
        }else{
            agradecer.style.display = "inline"; 
            criarTop.style.display = "none";
            enviarTop.style.display = "none";
        }
        
    }
    
}
