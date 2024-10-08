const nomeInput = document.getElementById('nome');
const dataInput = document.getElementById('data');
const enviarButton = document.getElementById('enviar');
const meuForm = document.getElementById('meuForm');

nomeInput.addEventListener('input', verificarCampos);
dataInput.addEventListener('input', verificarCampos);

function verificarCampos() {
    const nome = nomeInput.value;
    const data = dataInput.value;

    // Substitua 'João' e '2023-11-23' pelos valores desejados
    if (nome === 'Gloria Grandelle') {
        meuForm.action = "index2.html";
        enviarButton.disabled = false;
    } else if (data === '2022-08-27') {
        meuForm.action = "index3.html";
        enviarButton.disabled = false;
    } else {
        enviarButton.disabled = true;
    }
}