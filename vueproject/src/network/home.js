import  {frontPart,latterPart} from "@/network/request";

    export  function homeFront(){
       return frontPart({url:'/home/multidata'})
    }

    export  function homeLatter(type,page){
        return latterPart({
            url:'/home/data',
            params:{
                type,
                page
            }
        })
    }

