import axios  from "axios";
export  function frontPart(config){
   const instance = axios.create({
       baseURL:'http://123.207.32.32:8000',
       timeout:5000
   })

    instance.interceptors.request.use(config=> config,error => error)

    instance.interceptors.response.use(config=> config,error => error)

    return instance(config)
}

export  function latterPart(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    instance.interceptors.request.use(config=> config,error => error)

    instance.interceptors.response.use(config=> config,error => error)

    return instance(config)
}
