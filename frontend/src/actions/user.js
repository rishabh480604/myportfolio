import axios from 'axios';

export const getUser=()=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"GET_USER_REQUEST"
        });

        const {data}= await axios.get("/api/v1/user");
        dispatch({
            type:"GET_USER_SUCCESS",
            payload:data.user,
            
        });
        console.log("data :",data);

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"GET_USER_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}



export const login=(email,password)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"LOGIN_REQUEST"
        });

        const {data}= await axios.post("/api/v1/login",{
            email,
            password
        },
        {
            headers:{
                "Content-Type":"application/json",
            }
        });
        // console.log("data :",data);
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:data.message,
            
        });
        alert(data.message);
        dispatch({
            type:"CLEAR_MESSAGE"
        });

        
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"LOGIN_FAILURE",
            payload:error.response.data.message,
        });
        alert(error.response.data.message);
        dispatch({
            type:"CLEAR_ERROR"
        });

        
        
        
    }
}


export const logout=()=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"LOGOUT_REQUEST"
        });

        const {data}= await axios.get("/api/v1/logout");
        // console.log("data :",data);
        dispatch({
            type:"LOGOUT_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"LOGOUT_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}



export const loadUser=()=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"LOAD_USER_REQUEST"
        });

        const {data}= await axios.get("/api/v1/me");
        // console.log("data :",data);
        dispatch({
            type:"LOAD_USER_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"LOAD_USER_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const updateUser=(name, email,password,skills, about)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"UPDATE_USER_REQUEST"
        });

        const {data}= await axios.put("/api/v1/admin/update",{
            name,
             email,
             password,
             skills,
              about
        });
        // console.log("data :",data);
        dispatch({
            type:"UPDATE_USER_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"UPDATE_USER_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const addTimeline=(title, description,date)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"ADD_TIMELINE_REQUEST"
        });

        const {data}= await axios.post("/api/v1/admin/timeline/add",{
            title,
             description,
             date
        });
        // console.log("data :",data);
        dispatch({
            type:"ADD_TIMELINE_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        console.log(error);
        dispatch({
            type:"ADD_TIMELINE_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const deleteTimeline=(id)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"DELETE_TIMELINE_REQUEST"
        });

        const {data}= await axios.delete(`/api/v1/admin/timeline/${id}`);
        console.log("delete timeline :",id);
        dispatch({
            type:"DELETE_TIMELINE_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"DELETE_TIMELINE_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}



export const addYoutube=(title, url,image, description, techStack)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"ADD_YOUTUBE_REQUEST"
        });

        const {data}= await axios.post("/api/v1/admin/youtube/add",{
            title,
             url,
             image,
              description,
              techStack
        });
        // console.log("data :",data);
        dispatch({
            type:"ADD_YOUTUBE_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        console.log(error);
        dispatch({
            type:"ADD_YUOUTUBE_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const deleteYoutube=(id)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"DELETE_YOUTUBE_REQUEST"
        });

        const {data}= await axios.delete(`/api/v1/admin/youtube/${id}`);
        // console.log("data :",data);
        dispatch({
            type:"DELETE_YOUTUBE_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"DELETE_YOUTUBE_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const addProject=(title, url, image, description, techStack)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"ADD_PROJECT_REQUEST"
        });

        const {data}= await axios.post("/api/v1/admin/project/add",{
            title,
             url,
             image,
             description,
             techStack,
        });
        // console.log("data :",data);
        dispatch({
            type:"ADD_PROJECT_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        console.log(error);
        dispatch({
            type:"ADD_PROJECT_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}


export const deleteProject=(id)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"DELETE_PROJECT_REQUEST"
        });

        const {data}= await axios.delete(`/api/v1/admin/project/${id}`,);
        // console.log("data :",data);
        dispatch({
            type:"DELETE_PROJECT_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        dispatch({
            type:"DELETE_PROJECT_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}

export const contactUs=(name, email, message)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:"CONTACT_US_REQUEST"
        });

        const {data}= await axios.post("/api/v1/contact",{
            name,
             email,
              message
        });
        // console.log("data :",data);
        dispatch({
            type:"CONTACT_US_SUCCESS",
            payload:data.message,
            
        });

        dispatch({
            type:"CLEAR_MESSAGE"
        });
        // console.log("get user function");

    } catch (error) {
        console.log(error);
        dispatch({
            type:"CONTACT_US_FAILURE",
            payload:error.response.data.message,
        });

        dispatch({
            type:"CLEAR_ERROR"
        });
        
    }
}