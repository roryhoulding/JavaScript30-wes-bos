const validKeyCodes = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL'
];

// When key is pressed add class for styles and play noise once
window.addEventListener('keypress', (e) => {
    if (!validKeyCodes.includes(e.code)) return;

    const keyElement = document.querySelector(`div[data-key="${e.code}"]`);
    const audioElement = document.querySelector(`audio[data-key="${e.code}"]`);
    
    keyElement.classList.add('playing');
    audioElement.currentTime = 0;
    audioElement.play();
})

// When key is released remove playing class
window.addEventListener('keyup', (e) => {
    if (!validKeyCodes.includes(e.code)) return;

    const keyElement = document.querySelector(`div[data-key="${e.code}"]`);
    keyElement.classList.remove('playing');
})
