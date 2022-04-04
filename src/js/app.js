window.onload = () => {
    let files;
    const inputBtn = document.getElementById('input-files');
    const submitBtn = document.querySelector('button[data-type="submit"]');

    inputBtn.addEventListener('change', e => files = e.target.files);
    submitBtn.addEventListener('click', e => console.log(e));
};
