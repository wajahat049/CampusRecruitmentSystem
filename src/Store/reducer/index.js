const initial_state = {
    // userInfo:{},
    // product:[],
    // Order:[],
    // Category:""
    User: "",
    Student: {},
    Company: {}

}



const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            return ({
                ...state, User: action.payload
            })

        case "CHANGE_STUDENT":
            return ({
                ...state, Student: action.payload
            })

        case "CHANGE_COMPANY":
            return ({
                ...state, Company: action.payload
            })

    }
    return state

}

export default reducer;