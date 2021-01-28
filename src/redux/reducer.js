const mainData ={
    title:'Counter',
    desc:'Counter-redux',
    num:0,
}

export default (initialstate = {...mainData},action) => {
    switch (action.type) {

    case 'ADD':
        return { 
            ...initialstate,
            num: initialstate.num+action.adds
         }
    case 'MIN':
        return{
            ...initialstate,
            num:initialstate.num-5
        }

    default:
        return initialstate
    }
}
