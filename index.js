function expend(){
//aleternando em menu expand e menu no expand
container.classList.toggle("noexpand");
container.classList.toggle("expand");
/*
---- alterna entre menu expand e no exapand menu.========-->

    if(container.classList=="noexpand"){
    container.classList.remove('noexpand');
    container.classList.add('expand');
    }
    else{
        container.classList.remove('expand');
        container.classList.add('noexpand');
    }*/
}
//FUNCOES BOTOES============================================>
function activePainel(clikbotao){
    if(clikbotao.classList=="side-btn"){

        //pegando todos os botoes com a classe side-btn
        const btns_sides = document.querySelectorAll(".side-btn");

        //removendo de todos os botoes a classe active
        btns_sides.forEach(function(element) {
            element.classList.remove("active");
          });
        //adicionando a classe active ao botão de apertado
        clikbotao.classList.add('active');

        //selecionando todos os paineis.
        const allPainels = document.querySelectorAll('.painel');

        //removendo a classe active de todos os paineis
        allPainels.forEach(function(element) {
            element.classList.remove("active");
          });
          //ativando o painel clicado
          if(clikbotao.id=='btn_buscar'){
             painelbuscar.classList.add('active');
          }
          else if(clikbotao.id=="btn_dashboard"){
            paineldashboard.classList.add('active');
          }
          else if(clikbotao.id=="btn_pets"){
            painelpets.classList.add('active');
          }
          else if(clikbotao.id=="btn_clientes"){
            painelclientes.classList.add('active');
          }
          else if(clikbotao.id=="btn_vets"){
            painelvets.classList.add('active');
          }
          else{
              painelajustes.classList.add('active');
          }
}
}
/*
function buscar(){
    if(btn_buscar.classList=="side-btn"){
        btn_buscar.classList.add("active");
        removerBuscar();
        addPainelBuscar();
       
    }else{
        btn_buscar.classList.remove("active");
        painelbuscar.classList.remove("active");
    } console.log(btn_buscar);
}
function removerBuscar(){
     btn_dashboard.classList.remove("active");
     btn_pets.classList.remove("active");
     btn_clientes.classList.remove("active");
     btn_vets.classList.remove("active");
    btn_ajustes.classList.remove("active");
}
function addPainelBuscar(){
    painelbuscar.classList.add("active");
    paineldashboard.classList.remove("active");
    painelpets.classList.remove("active");
    painelclientes.classList.remove("active");
    painelvets.classList.remove("active");
    painelajustes.classList.remove("active");
}
//----------------------------------------------------------
function dashboard(){
    if(btn_dashboard.classList=="side-btn"){
        btn_dashboard.classList.add("active");
        removerDashboard();
        addPainelDashboard();
    }else{
        btn_dashboard.classList.remove("active");
        paineldashboard.classList.remove("active");
    }
    console.log(btn_dashboard);
}
function removerDashboard(){
        btn_buscar.classList.remove("active");
        btn_pets.classList.remove("active");
        btn_clientes.classList.remove("active");
        btn_vets.classList.remove("active");
        btn_ajustes.classList.remove("active");
}
function addPainelDashboard(){
    painelbuscar.classList.remove("active");
    paineldashboard.classList.add("active");
    painelpets.classList.remove("active");
    painelclientes.classList.remove("active");
    painelvets.classList.remove("active");
    painelajustes.classList.remove("active");
}

//---------------------------------------------------------
function pets(){
    if(btn_pets.classList=="side-btn"){
        btn_pets.classList.add("active");
        removerPets();
        addPainelPets();
    }else{
        btn_pets.classList.remove("active");
        painelpets.classList.remove("active");
    }
    console.log(btn_pets);
}
function removerPets(){
    btn_buscar.classList.remove("active");
    btn_dashboard.classList.remove("active");
    btn_clientes.classList.remove("active");
    btn_vets.classList.remove("active");
    btn_ajustes.classList.remove("active");
}
function addPainelPets(){
    painelbuscar.classList.remove("active");
    paineldashboard.classList.remove("active");
    painelpets.classList.add("active");
    painelclientes.classList.remove("active");
    painelvets.classList.remove("active");
    painelajustes.classList.remove("active");
}
//------------------------------------------------------
function clientes(){
    if(btn_clientes.classList=="side-btn"){
        btn_clientes.classList.add("active");
        removerClientes();
        addPainelClientes();
    }else{
        btn_clientes.classList.remove("active");
        painelclientes.classList.remove("active");
    }
    console.log(btn_clientes);
}
function removerClientes(){
    btn_buscar.classList.remove("active");
    btn_dashboard.classList.remove("active");
    btn_pets.classList.remove("active");
    btn_vets.classList.remove("active");
    btn_ajustes.classList.remove("active");
}
function addPainelClientes(){
    painelbuscar.classList.remove("active");
    paineldashboard.classList.remove("active");
    painelpets.classList.remove("active");
    painelclientes.classList.add("active");
    painelvets.classList.remove("active");
    painelajustes.classList.remove("active");
}
//--------------------------------------------------------

function vets(){
    if(btn_vets.classList=="side-btn"){
        btn_vets.classList.add("active");
        removerVets();
        addPainelVets();
    }else{
        btn_vets.classList.remove("active");
        painelvets.classList.remove("active");
    }
    console.log(btn_vets);
}
function removerVets(){
    btn_buscar.classList.remove("active");
    btn_dashboard.classList.remove("active");
    btn_pets.classList.remove("active");
    btn_clientes.classList.remove("active");
    btn_ajustes.classList.remove("active");
}
function addPainelVets(){
    painelbuscar.classList.remove("active");
    paineldashboard.classList.remove("active");
    painelpets.classList.remove("active");
    painelclientes.classList.remove("active");
    painelvets.classList.add("active");
    painelajustes.classList.remove("active");
}
//---------------------------------------------------

function ajustes(){
    if(btn_ajustes.classList=="side-btn"){
        btn_ajustes.classList.add("active");
        removerAjustes();
        addPainelAjustes();
    }else{
        btn_ajustes.classList.remove("active");
        painelajustes.classList.remove("active");
    }
    console.log(btn_ajustes);
}
function removerAjustes(){
    btn_buscar.classList.remove("active");
    btn_dashboard.classList.remove("active");
    btn_pets.classList.remove("active");
    btn_clientes.classList.remove("active");
    btn_vets.classList.remove("active");
}
function addPainelAjustes(){
    painelbuscar.classList.remove("active");
    paineldashboard.classList.remove("active");
    painelpets.classList.remove("active");
    painelclientes.classList.remove("active");
    painelvets.classList.remove("active");
    painelajustes.classList.add("active");
}
//-----------------------------------------------------
*/