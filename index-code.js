const w = window.innerWidth
const wc = Math.ceil(w / 2 - 10)
const h = window.innerHeight
const hc = Math.ceil(h / 2 - 10)
const tracker = document.getElementById('eb1')
const tracker2 = document.getElementById('eb2')
const eyebro1 = document.getElementById('eyebro1')
const eyebro2 = document.getElementById('eyebro2')
const face = document.getElementById('face')


document.addEventListener('mousemove', (event) => {
    const cx = event.clientX
    const cy = event.clientY
    const x = Math.ceil((cx * 20) / w) - wc
    const y = Math.ceil((cy * 20) / h) - hc

    if (cy < hc) {
        if (cx > wc) {
            eyebro2.style.transform = `translateY(${hc - 10 + y}px)`
            eyebro1.style.transform = 'translateY(0px)';
            face.style.transform= `rotate(-3deg)`;
        }

        if (cx < wc) {
            eyebro1.style.transform = `translateY(${hc - 10 + y}px)`
            eyebro2.style.transform = 'translateY(0px)';
            face.style.transform= `rotate(3deg)`;

        }
    } else {
        eyebro1.style.transform = 'translateY(0px)';
        eyebro2.style.transform = 'translateY(0px)';
        face.style.transform= `rotate(0deg)`;
    }
    tracker.style.transform = `translate(${wc - 10 + x}px, ${hc - 10 + y}px)`
    tracker2.style.transform = `translate(${wc - 10 + x}px, ${hc - 10 + y}px)`

})
