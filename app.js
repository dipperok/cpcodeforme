document.getElementById('copy-btn').addEventListener('click', function () {
    const codeBlock = document.getElementById('code-block').innerText;

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(codeBlock).then(() => {
        console.log('123')
    }).catch(err => {
        console.error('Не удалось скопировать код: ', err);
    });
});