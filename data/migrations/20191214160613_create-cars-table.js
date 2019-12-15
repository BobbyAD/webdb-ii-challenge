exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        //id
        tbl.increments();

        tbl.text("VIN", 128)
            .unique()
            .notNullable();

        tbl.text("make", 128).notNullable();

        tbl.text("model", 128).notNullable();

        tbl.integer("mileage", 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
