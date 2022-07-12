(function() {

    let names = [];
    let inputName = document.getElementById('inputName');
    let btAdc = document.getElementById('btAdc');
    let tblNames = document.querySelector('#tblNames');
    let btSort = document.getElementById('btSort');
    let form = document.getElementById('form');
    let result = document.querySelector('#result h1');
    
    btAdc.addEventListener('click', () => {
        tblNames.innerHTML = '';

        if(inputName.value != '') {
            names.push(inputName.value);
        }

        names.forEach((el, i) => {
            tblNames.innerHTML += 
            `<tr>
                <td>${el}</td>
                <td>
                    <button type="button" class="btExcluir">
                        Excluir
                    </button>
                </td>
             </tr>`;
        });

        inputName.value = '';
    });

    btSort.addEventListener('click', () => {
        form.style.display = 'none';
        let i = Math.floor(Math.random() * names.length);

        result.innerHTML = names[i];
    });

    

    



})();