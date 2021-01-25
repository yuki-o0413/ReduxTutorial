
// export const didMnt = (test) => {
//     return {
//         type: 'DID_MOUNT',
//         payload: { test }
//     };
// }
export const didMnt = (id,name) => {
    console.log(id,name);
    return {
        type: 'DID_MOUNT',
        payload: { id,name }
    };
}

// export const updateFormId = (id) => {
//     return {
//         type: 'UPDATE_ID',
//         payload: { id }
//     };
// }
// export const updateFormName = (name) => {
//     return {
//         type: 'UPDATE_NAME',
//         payload: { name }
//     };
// }
