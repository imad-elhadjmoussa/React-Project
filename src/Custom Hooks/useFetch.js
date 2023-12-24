import { useEffect, useState } from "react";

const useFetch = (url,contry) => {
    const [data,setData]=useState(null);
    const [err,setErr]=useState(false);
    useEffect(() => {
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    setErr(true);
                }else{
                    return res.json();
                }
            })
            .then(data=>setData(data))
            setErr(false);
    },[contry])
    console.log(data);
    return {data,err};
}

export default useFetch;