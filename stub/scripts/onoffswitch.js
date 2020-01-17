export default () => {
    let elements = document.getElementsByClassName('onoffswitch')
    if(elements.length > 0) {
        for(let element of elements) {
            element.addEventListener('click', () => {
                const defaultThemeName = 'theme_color_project-default'
                const inverseThemeName = 'theme_color_project-inverse'

                for(let element of document.getElementsByClassName('onoffswitch')) {
                    if (element.classList.contains('onoffswitch_checked')) {
                        element.classList.remove('onoffswitch_checked')
                    } else {
                        element.classList.add('onoffswitch_checked')
                    }
                }

                let defaultThemeElements = []
                for(let element of document.getElementsByClassName(defaultThemeName)) {
                    defaultThemeElements.push(element)
                }


                let inverseThemeElements = []
                for(let element of document.getElementsByClassName(inverseThemeName)) {
                    inverseThemeElements.push(element)
                }

                for(let element of defaultThemeElements) {
                    element.classList.remove(defaultThemeName)
                    element.classList.add(inverseThemeName)
                }

                for(let element of inverseThemeElements) {
                    element.classList.remove(inverseThemeName)
                    element.classList.add(defaultThemeName)
                }
            }, false);
        }
    }
}
