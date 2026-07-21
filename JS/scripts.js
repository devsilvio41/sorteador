/* ==========================================================================
   Sorteador de Números - Renderização no DOM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção dos elementos do DOM
    const inputMin = document.querySelector('.input-min');
    const inputMax = document.querySelector('.input-max');
    const btnSortear = document.querySelector('.btn-sortear');
    const numberSorteadoDisplay = document.querySelector('.number-sorteado'); // Elemento onde o resultado será exibido

    /**
     * Função que valida os dados e renderiza o resultado na tela
     */
    const handleSortear = () => {
        const min = Math.ceil(Number(inputMin.value));
        const max = Math.floor(Number(inputMax.value));

        // Validações de entrada
        if (inputMin.value.trim() === '' || inputMax.value.trim() === '') {
            numberSorteadoDisplay.textContent = 'Preencha ambos os campos!';
            return;
        }

        if (isNaN(min) || isNaN(max)) {
            numberSorteadoDisplay.textContent = 'Digite apenas números válidos.';
            return;
        }

        if (min >= max) {
            numberSorteadoDisplay.textContent = 'O valor mínimo deve ser menor que o máximo!';
            return;
        }

        // Realiza o sorteio
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

        // Atualiza a interface do usuário (UI) diretamente no elemento
        numberSorteadoDisplay.textContent = resultado;
    };

    // Event Listener
    if (btnSortear) {
        btnSortear.addEventListener('click', handleSortear);
    }
});