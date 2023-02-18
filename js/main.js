const heading = document.querySelector('.greeting')
const main = document.getElementsByTagName('main')[0];
const greeting = "Coder-ACB!";

const getRandomColor = (alpha) => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
}

const headingContent = document.createDocumentFragment()
const letters = greeting.split('');
letters.forEach((Letter, i) =>{
    const span = document.createElement('span');
    span.textContent = Letter !== '-' ? Letter : '';

    if(Letter === '-'){
        span.style.setProperty('--offset','1.5rem');
    }
    span.style.setProperty('--delay',`${i * 100}ms`);
    
    if(Letter !== '-'){
        span.style.color = getRandomColor(1);
    }

    headingContent.appendChild(span);
})
heading.appendChild(headingContent);