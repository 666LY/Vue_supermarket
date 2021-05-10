export function debounce(func,delay){
    let time = null
    return function (...args) {
        time && clearTimeout(time)
        time = setTimeout(()=>{
            func.apply()
        },delay)
    }
}
