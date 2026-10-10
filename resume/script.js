function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('#clock').textContent = `${hours}:${minutes}:${seconds}`;

    const hour = now.getHours();
    let greeting = '';
    if (hour >= 5 && hour < 12) { greeting = 'Доброе утро!'; }
    else if (hour >= 12 && hour < 18) { greeting = 'Добрый день!'; }
    else if (hour >= 18 && hour < 23) { greeting = 'Добрый вечер!'; }
    else { greeting = 'Доброй ночи!'; }
    document.querySelector('#greeting').textContent = greeting;
}

updateClock();
setInterval(updateClock, 1000);

let visits = localStorage.getItem('visitCount');
if (visits === null) { visits = 1; } else { visits = Number(visits) + 1; }
localStorage.setItem('visitCount', visits);
document.querySelector('#visits').textContent = visits;

window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.skill-fill');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.width;
        }, index * 200);
    });
});