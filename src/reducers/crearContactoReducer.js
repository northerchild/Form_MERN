//datos iniciales 
const initialState = {
    usuarios:[],
    error:false,
    loading:false,
    usuarioeliminar:null,
    usuarioeditar:null
}

export default function foo(state=initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}