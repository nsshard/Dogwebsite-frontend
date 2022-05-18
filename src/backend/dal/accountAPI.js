const {save, getAll, getById, update, removebyId} = require('./accountREST');

const createaccount = async ({USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE}) => {

const account = {
    USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE
}

return await save(account);
}

const getaccounts = async ()=>{
    return await getAll();
}

const getaccount = async id =>{
    return await getById(id);
}

const UserNameAlreadyExists = async id =>{
    return await getById(id);
}

const deleteaccount = async id =>{
    return await removebyId(id);
}

const updateaccount = async (id, {USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE}) =>{
    return await update(id, {USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE});

}

module.exports = {
    createaccount,
    getaccount,
    getaccounts,
    deleteaccount,
    updateaccount, UserNameAlreadyExists
}