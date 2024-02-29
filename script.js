const ipt = document.getElementById('input')
const opt = document.getElementById('output')
const btn = document.getElementById('button')

const output = () => {
    let count = 1
    
    opt.classList.add('output2')
    opt.innerText = ipt.value
    
    const timer = setInterval( () => {
        count--
        if (count == 0) {
            clearInterval(timer);
            opt.classList.remove('output2')
        }
    }, 500);
}

btn.addEventListener('click', output)
