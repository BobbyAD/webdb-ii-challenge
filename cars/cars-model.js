const db = require('../data/db.js')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where('id', id)
}

function add(car) {
    return db('cars').insert(car)
    .then(ids => {
        return db('cars').where({ id: ids[0] }).first();
    })
}