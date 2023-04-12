import React, {useEffect, useState} from 'react'
import Validation from './Validation'


const SignupForm = ({submitForm}) => {

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }
    const hanleSubmit= (e)=>{
        e.preventDefault()
        setErrors(Validation(values))
        setDataisCorrect(true)
    }
    const[dataisCorrect, setDataisCorrect]= useState(false)
    const [errors,setErrors]=useState({})
    const [values, setValues]= useState({
        fullname: "",
        email:"",
        password:""
    })

    useEffect(()=>{
            if(Object.keys(errors).length ===0 && dataisCorrect){
                submitForm(true)
            }
    },[errors])
  return (
    <div className='container' >
        <div className='app-wrapper'>
            <div className='app-header'>
               <h2>

                create account
                </h2> 
            </div>
            <form className='form-wrapper'>
                <div className='form-element'>
                    <label className=' form-name'>full name</label>
                    <input className='form-input' type="text" name='fullname' value={values.fullname} onChange={handleChange}/>
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}
                </div>
                <div className='form-element'>
                    <label className=' form-name'>Email</label>
                    <input className='form-input' type="email" name='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='form-element'>
                    <label className=' form-name'>password</label>
                    <input className='form-input' type="password" name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='btn-submit'>
                        <button onClick={hanleSubmit}>Sign Up</button>
                </div>
                <h2 className='filma'>this is filma-X</h2>
            </form>
        </div>
    </div>
  )
}

export default SignupForm