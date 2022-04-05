const alertFunction = window.alert;
window.alert = function () {};

window.onload = () => {
    let files, result;

    const inputBtn = document.getElementById('input-files');
    const filesLister = document.querySelector('ul.lister');
    const submitBtn = document.querySelector('button[data-type="submit"]');

    inputBtn.addEventListener('change', e => files = e.target.files);
    submitBtn.addEventListener('click', uploadFile);

    async function uploadFile () {
        const formData = new FormData();
        
        for (const i in files) formData.append(`files_${i}`, files[i]);
        
        fetch('/src/php/index.php', {method: 'POST', body: formData})
            .then(res => res.json())
            .then(res => {
                result = res;
                console.log(result);
            })
            .catch(err => console.error(err));
    }
};
