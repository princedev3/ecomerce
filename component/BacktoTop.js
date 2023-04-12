import React,{useState,useEffect} from 'react'

const BacktoTop = () => {
    const [toTop,setToTop]= useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                setToTop(true)
            }else{
                setToTop(false)
            }
        })
    },[])

    const scrollto = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",

        })
    }
  return (
    <div>
        {toTop && (<button onClick={scrollto} style={{
            width:"40px",
            height:"30px",
            position:"fixed",
            background:"grey",
            color:"white",
            borderRadius:"8px",
            fontSize:"40px",
            bottom:"50px",
            right:"50px",
            border:"none"

        }}> ^</button>)}
    </div>
  )
}

export default BacktoTop

//{}[]