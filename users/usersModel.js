// connect to the db
const db = require('../database/connection');

module.exports = {
    add,
    update,
    findBy,
    findById
}

async function add(user) {
    const [ id ] = await db('users').insert(user);
    return findById(id);
}

function update(id, changes) {
    return db('users').where({ id }).update(changes);
}

function findBy(filter) {
    return db('users').where(filter).first();
}

function findById(id) {
    return db('users').where({ id }).first();
}