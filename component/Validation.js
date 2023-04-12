

const Validation = (values) => {
    let error = {}

    if(!values.fullname){
        error.fullname = "Name is required"
    }
    
    if(!values.email){
        error.email = "email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "email is invalid"
    }

    if(!values.password){
        error.password ="password is required"
    }else if (values.password.length<5){
        error.password =" password too short"
    }
  return error
}

export default Validation

//{}[] \