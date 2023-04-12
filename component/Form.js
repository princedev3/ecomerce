import { useState } from "react"
import SignupForm from "./SignupForm"
import SignupFormSucess from "./SignupFormSucess"

const Form = () => {
    const [formsubmit, setFormsubmit]=useState(false)

    const submitForm = ()=>{
        setFormsubmit(true)
    }
  return (
    <div>
       { !formsubmit ?<SignupForm submitForm={submitForm}/>:<SignupFormSucess />}
    </div>
  )
}

export default Form