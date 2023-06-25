import type {App} from 'vue'
export default {
    install(app:App) {
        app.directive('lazy', {
            mounted:(el, binding) => {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            el.src = binding.value
                            observer.unobserve(el)
                        }
                    })
                })
                observer.observe(el)
            }
        })
        // app.directive('focus', {
        //     mounted:(el:HTMLElement,binding) => {
        //         const input:HTMLInputElement = (el.querySelector('input') as HTMLInputElement)
        //         input.focus()
        //     }
        // })
    }
}