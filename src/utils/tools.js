export function debounce (fn, delay) {
    let timer = null

    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
           fn.apply(this, arg) 
        }, delay)
    }
}