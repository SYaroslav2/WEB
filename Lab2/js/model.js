document.addEventListener('keydown', event => {
    calc(event.key)
});
function calc(value) {
    if (value.match(/=|Enter/)) {
       
        try {
            output.textContent = math.evaluate(output.textContent).toFixed(2);
       
        } catch {
            let oldValue = output.textContent
            let newValue = 'недопустимий вираз'
            output.textContent = newValue
            setTimeout(() => {
                output.textContent = oldValue
            }, 1500)
        }
        
    } else if (value === 'C') {
        output.textContent = ''
    
    } else if (value.match(/CE|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    } else {
        output.textContent += value
    }
}