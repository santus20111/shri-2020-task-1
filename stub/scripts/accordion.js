export default () => {
    let elements = document.getElementsByClassName('history__transaction')
    for (let element of elements) {
        element.addEventListener('click', () => {
            let hiddenElements = element.getElementsByClassName('e-accordion__more')
            for(let hiddenElement of hiddenElements) {
                hiddenElement.classList.toggle('history__hide')
                hiddenElement.classList.toggle('history__show')
            }
        }, false)
    }
}
