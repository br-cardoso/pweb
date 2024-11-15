const $formnew = document.getElementById('formnew');

const $descr = document.getElementById('description');
const $titu = document.getElementById('criartitulo');
const $pri = document.getElementById('prioridade');
const $temp = document.getElementById('tempo');
const $idT = document.getElementById('idTarefa');
const $tituloc = document.getElementById('titulocriar');
const $tituloe = document.getElementById('tituloeditar');
const $btnc = document.getElementById('btncriar');
const $btne = document.getElementById('btneditar');

const $coluna1 = document.querySelector('#coluna1 .conteudo');
const $coluna2 = document.querySelector('#coluna2 .conteudo');
const $coluna3 = document.querySelector('#coluna3 .conteudo');

const $valCol1 = $coluna1.dataset.column;
const $valCol2 = $coluna2.dataset.column;
const $valCol3 = $coluna3.dataset.column;

let idAtual = 1;
function addID () {
   return (idAtual ++);
}

var listaTarefas = [];

function abrirForm(id) {
    $formnew.style.display = "flex";

    if(id) {
        $tituloc.style.display = "none";
        $tituloe.style.display = "block";
        $btnc.style.display = "none";
        $btne.style.display = "block";


        const t = listaTarefas.findIndex(function (tarefa) {
            return tarefa.id==id;
        });

        let tarefa = listaTarefas[t];

        $idT.value = tarefa.id;
        $descr.value = tarefa.descricao;
        $titu.value = tarefa.titulo;
        $pri.value = tarefa.privalue;
        $temp.value = tarefa.tempo;
    }
    else {
        $tituloc.style.display = "block";
        $tituloe.style.display = "none";
        $btnc.style.display = "block";
        $btne.style.display = "none";
    }
}
function fecharForm() {
     $descr.value = '';
     $titu.value = '';
     $pri.value = 'default';
     $temp.value = '';
     $idT.value = '';

    $formnew.style.display = "none";

}

function criaPost () {
    const listaPost = listaTarefas.map(function(tarefa) {
        return ` 
        <div id="${tarefa.id}" class="post"  draggable="true" ondragstart="dragstartHandler(event)"> 
            <div class="tituloCard">
                <spam> <b>${tarefa.titulo}</b> </spam>
                <div id="iconeEdit" onclick="abreEdit(${tarefa.id})"> <img  src="./edit.png" alt="Editar"/> </div>
            </div>

            <div class="descrCard">
                <label> <b>${tarefa.descricao}</b> </label>
            </div>

            <div class="prioridadeCard">
                <label> <b>${tarefa.prioridade}</b> </label>
            </div>

            <div class="tempoCard">
                <label> <b>${tarefa.tempo} horas</b> </label>
            </div>
        </div>
        `;
    } );

    $coluna1.innerHTML = listaPost.join('');
    console.log(listaTarefas);
    
}

function abreEdit (id){
    abrirForm(id);
    console.log(id);
}

function criarTarefa() {

    const tarefa = {
        id: addID(),
        idcoluna: $valCol1,
        descricao : $descr.value,
        titulo : $titu.value,
        prioridade : $pri.options[$pri.selectedIndex].getAttribute('name'),
        privalue : $pri.value,
        tempo : $temp.value
    }

    listaTarefas.push(tarefa);
    criaPost();

    fecharForm();
}

function editarTarefa (id) {

    const tarefaedit = {
        descricao : $descr.value,
        titulo : $titu.value,
        prioridade : $pri.options[$pri.selectedIndex].getAttribute('name'),
        privalue : $pri.value,
        tempo : $temp.value
    }

    const te = listaTarefas.findIndex(function (tarefaedit) {
        return tarefaedit.id == $idT.value;
    });

    listaTarefas[te] = tarefaedit;
    
    fecharForm();
    criaPost();
}

 function mover (idT, idC) {
    if(idT && idC) {
        listaTarefas = listaTarefas.map( function (tarefa) {
        if(idT !== tarefa.id)
            return tarefa;
        else {
            // spread = uma cópia do objeto que voce pode alterar um campo
            // como se em C você tivesse uma structre e aleterasse só um atributo
            return {...tarefa, idcoluna:idC} ;
            }
        });

        criaPost();
    }

    
}

function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }

  function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const idTar = ev.dataTransfer.getData("text/plain");
    const idCol = ev.target.is(".conteudo").dataset.column;

    mover(idTar, idCol);
    alert(tarefa.id + "\n" + tarefa.idcoluna);
  }

  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }

  