const ObjectId = require('mongodb').ObjectId;

const accounts = require('./index').db('petshopdb').collection('users');



const save = async ({USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE}) => {
    const result = await accounts.insertOne({USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE});
    return result.ops[0];
}

const getAll = async () =>{
    const cursor = await accounts.find();

    return cursor.toArray();
}

const getById = async (id) =>{
    return await accounts.findOne({_id:ObjectId(id)});
}

const update = async (id, {USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE}) =>{
const result = await accounts.replaceOne({_id:ObjectId(id)}, {USERNAME, PASSWORD, USERLEVEL, EMAIL, STAFFCODE});
return result.ops[0];
}

const removebyId = async id=>{
    await accounts.deleteOne({id:ObjectId(id)});
}

module.exports={save, getAll, getById, update, removebyId}