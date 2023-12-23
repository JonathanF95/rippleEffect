const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;

       const buttonTop = e.target.offsetTop;
       const buttonLeft = e.target.offsetLeft;

       const xInside = x - buttonLeft;
       const yInside = y - buttonTop;

        const span = document.createElement('span');
        span.innerHTML = `<span class="circle" style="top: ${yInside}px; left: ${xInside}px;"></span>`;
        e.target.appendChild(span);

        setTimeout(() => span.remove(), 400)
    })
})