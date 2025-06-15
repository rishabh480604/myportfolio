import { createReducer } from "@reduxjs/toolkit";

const initialState={
    loading:true,
    user:null,
}

export const userReducer=createReducer(initialState,(builder)=>{

    builder
        .addCase('GET_USER_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('GET_USER_SUCCESS',(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            console.log("get_user_success ");

        })

        .addCase('GET_USER_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })
        .addCase('CLEAR_ERROR',(state)=>{
            state.error=null;
        })

        .addCase('CLEAR_MESSAGE',(state)=>{
            
            state.message=null;
        })
})

export const loginReducer=createReducer(initialState,(builder)=>{

    builder
    /* login */
        .addCase('LOGIN_REQUEST',(state)=>{
            state.loading=true;
            state.isAuthenticated=false;
        })

        .addCase('LOGIN_SUCCESS',(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isAuthenticated=true;
            console.log("User loggedin Success");
        })

        .addCase('LOGIN_FAILURE',(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated=false;
        })
        /*load user*/

        .addCase('LOAD_USER_REQUEST',(state)=>{
            state.loading=true;
            state.isAuthenticated=false;
        })

        .addCase('LOAD_USER_SUCCESS',(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isAuthenticated=true;
        })

        .addCase('LOAD_USER_FAILURE',(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
        })

        .addCase('CLEAR_ERROR',(state)=>{
            state.error=null;
        })

        .addCase('CLEAR_MESSAGE',(state)=>{
            
            state.message=null;
        })
        /*logout reducer */
        .addCase('LOGOUT_REQUEST',(state)=>{
            state.loading=true;
            
        })

        .addCase('LOGOUT_SUCCESS',(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.user=null;
            state.message=action.payload;
            console.log("User logged out Successfully")

        })

        .addCase('LOGOUT_FAILURE',(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.error=action.payload;
        })

        
})


export const updateReducer=createReducer({},(builder)=>{

    builder
        .addCase('UPDATE_USER_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('UPDATE_USER_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("data updated successfully in database");

        })

        .addCase('UPDATE_USER_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })

        .addCase('ADD_TIMELINE_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('ADD_TIMELINE_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("timeline added in database successfully");

        })

        .addCase('ADD_TIMELINE_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })

        .addCase('DELETE_TIMELINE_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('DELETE_TIMELINE_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("timeline deleted successfully");

        })

        .addCase('DELETE_TIMELINE_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })


        .addCase('ADD_YOUTUBE_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('ADD_YOUTUBE_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("youtube video in database successfully");

        })

        .addCase('ADD_YOUTUBE_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })

        .addCase('DELETE_YOUTUBE_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('DELETE_YOUTUBE_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("youtube video deleted successfully");

        })

        .addCase('DELETE_YOUTUBE_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })

        .addCase('CONTACT_US_REQUEST',(state)=>{
            state.loading=true;
           
        })

        .addCase('CONTACT_US_SUCCESS',(state,action)=>{
            state.loading=false;
            state.message=action.payload;
            console.log("message sent successfully");

        })

        .addCase('CONTACT_US_FAILURE',(state,action)=>{
            state.loading=false;
           
            state.error=action.payload;
        })

        .addCase('CLEAR_ERROR',(state)=>{
            state.error=null;
        })

        .addCase('CLEAR_MESSAGE',(state)=>{
            
            state.message=null;
        })
})



   /* {

    "GET_USER_REQUEST":(state)=>{
        state.loading=true;

    },
    "GET_USER_SUCCESS":(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    
    },
    "GET_USER_FAILURE":(state,action)=>{
        state.loading=false;
        state.error=action.payload;

    },
}*/

