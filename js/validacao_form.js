var formEl = document.getElementById("meuForm");

//chama a função captura_eventos
captura_eventos(formEl,'submit',formValid);

//função para capturar eventos
function captura_eventos(objeto, evento, funcao){
    //teste addEventListener
    if(objeto.addEventListener){
        objeto.addEventListener(evento, funcao, true)
    }
    //teste attachEvent
    else if(objeto.attachEvent){
        var evento = "on" + evento;
        objeto.attachEvent(evento, funcao);
    };
}

//função para cancelar eventos
function cancela_evento(evento){
    if(event.preventDefault){
        event.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

//função que verifica os campos radio e checkbox
function VerificaCampos(campo){
    //variavel que verifica os radios
    var checados = false;
    //verifica os radios
    for(var i=0; i<campo.length; i++){
        if(campo[i].checked){
            checados = true;
        }
    };

    if(!checados){
        alert("Marque o campo "+ campo[0].name);
        cancela_evento(evento);
        return false;
    }
}

function formValid(event){
    //pega os campos text e select
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades,
        campoRadios = formEl.sexo,
        campoCheckbox = formEl.rede;

    //verifica campo de texto
    if(campoNome.length == 0){
        alert("O campo Nome é obrigatório!");
        return false;
    }

    //laço que percorre todas as opções
    for(var i=0; i<campoCidade.length; i++){
        if(campoCidade[i].selected){
            if(campoCidade[i].value == ""){
                alert("Selecione uma opção!");
                cancela_evento(evento);
            }
        }
    }
}

//chama a função verificaCampos para o radio
verificaCampos(campoRadios);

//chama a função verificaCampos para o checkbox
verificaCampos(campoCheckbox);
alert("O formulário será enviado.");
return true;