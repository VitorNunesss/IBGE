
async function obterEstados() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const estados = await response.json();
    const estadosSelect = document.getElementById('estados');

    estados.forEach(estado => {
        let option = document.createElement('option');
        option.value = estado.id;
        option.textContent = estado.nome;
        estadosSelect.appendChild(option);
    });
}

async function obterCidades(estadoId) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
    const cidades = await response.json();
    const cidadesSelect = document.getElementById('cidades');
    cidadesSelect.innerHTML = '';

    cidades.forEach(cidade => {
        let option = document.createElement('option');
        option.value = cidade.id;
        option.textContent = cidade.nome;
        cidadesSelect.appendChild(option);
    });
}


document.getElementById('estados').addEventListener('change', function() {
    const estadoId = this.value;
    obterCidades(estadoId);
});


obterEstados();
