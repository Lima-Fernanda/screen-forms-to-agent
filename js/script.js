

const campotema = document.getElementById("tema");
const campoindicador= document.getElementById("indicador");
const campoobjetivo = document.getElementById("objetivo");
const objetivo = document.querySelector("form");

function showToast(mensagem) {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);

}

objetivo.addEventListener("submit", function(event) {
    event.preventDefault();
    const tema = campotema.value;
    const indicador = campoindicador.value;
    const objetivo = campoobjetivo.value;

    if (tema === "" || indicador === "" || objetivo === " "){
        showToast("Preencha os campos vazios.")
    }
    else {
        showToast("Formulário preenchido!");
    }

});



