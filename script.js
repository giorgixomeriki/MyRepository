const btn = document.querySelectorAll(".navbar ul li");
let text = document.querySelector('h1')

btn.forEach(button => {
    button.addEventListener('click', (event) => {
        text.textContent = event.target.textContent

        switch (text.textContent) {
            case "Home": text.style.color = "red"
                break;
            case "About": text.style.color = "green"
                break;
            case "Contact": text.style.color = "yellow"
                break;
            case "Support": text.classList.add('testClass')
                break;
            case "Search": text.classList.remove('testClass')
        } 
    })
}) 