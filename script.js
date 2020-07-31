fetch('data.json')
  .then(response => response.json())
  .then(data => letsDoIt(data));

// Função 'principal' do app
function letsDoIt (dados) {
    console.log('Dados: ', dados);
}

// "Dark mode"
const csslinkelm = document.getElementById('maincsslink');
const darkMode = document.getElementById('darkMode');

darkMode.addEventListener('click', (item) => {
    console.log('Darkmode:', item.target);
    console.log('Darkmode.target.dataset', item.target.dataset);

    changeDarkMode(item.target, csslinkelm, item.target.dataset.dm)
});

function changeDarkMode (darkMode, csslinkelm, mode) {
    console.log(darkMode.dataset);
    if (mode === 'off') {
        darkMode.dataset.dm = 'on';
        darkMode.src = './images/on.png';
        csslinkelm.href = 'style-dark.css';
    }
    
    if (mode === 'on') {
        darkMode.dataset.dm = 'off';
        darkMode.src = './images/off.png';
        csslinkelm.href = 'style.css';
    }
}
// Fim "dark mode"
