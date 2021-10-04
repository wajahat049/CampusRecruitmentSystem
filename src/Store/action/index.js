


const changeisuser=(User)=>{
    return (dispatch)=>{
        dispatch({type:"CHANGE_USER",payload:User})


    }
}


const changeisstudent=(Student)=>{
    return (dispatch)=>{
        dispatch({type:"CHANGE_STUDENT",payload:Student})


    }
}

const changeiscompany=(Company)=>{
    return (dispatch)=>{
        dispatch({type:"CHANGE_COMPANY",payload:Company})


    }
}





export {changeisuser,changeiscompany,changeisstudent}


