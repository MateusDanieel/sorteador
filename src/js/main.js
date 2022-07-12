let names = [];
let inputName = document.getElementById('inputName');
let btAdc = document.getElementById('btAdc');
let tblNames = document.getElementById('tblNames');
let btSort = document.getElementById('btSort');
let form = document.getElementById('form');
let result = document.querySelector('#result h1');
let btExcluir;
let alert = document.querySelector('.alert');

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
                <button type="button" class="btExcluir" data-id="${i}" title="Excluir">
                <i class="fa-solid fa-trash"></i> 
                </button>
            </td>
         </tr>`;
    });

    btExcluir = document.querySelectorAll('.btExcluir');

    btExcluir.forEach((el, i) => {
        el.addEventListener('click', () => {
            let tr = document.querySelectorAll('#tblNames tr');

            delArrEl(el.dataset.id);

            tr[i].remove();
            
        });
    });

    inputName.value = '';
});

btSort.addEventListener('click', () => {

    if(names.length > 1) {
        let i = Math.floor(Math.random() * names.length);

        form.style.display = 'none';
        result.innerHTML = names[i];
        alert.style.display = 'none';
    } else {
        alert.style.display = 'block';
    }
    
});

function delArrEl(i) {
    names.splice(i);
}