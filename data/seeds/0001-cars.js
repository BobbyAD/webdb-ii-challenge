exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("cars")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    VIN: "4JGBF71E18A429191",
                    make: "Mercedes Benz",
                    model: "GL Class",
                    mileage: 45000
                },
                {
                    VIN: "2HGES15252H603204",
                    make: "Honda",
                    model: "Civic",
                    mileage: 150000
                },
                {
                    VIN: "2C3CCAFJ2CH801561",
                    make: "Chrysler",
                    model: "300",
                    mileage: 35000
                },
                {
                    VIN: "JF2SH63619H797346",
                    make: "Subaru",
                    model: "Forester",
                    mileage: 85000
                },
                {
                    VIN: "2CNBJ13C3Y6924710",
                    make: "Chevrolet",
                    model: "Tracker",
                    mileage: 100000
                },
                {
                    VIN: "4S4BRDSC2D2221585",
                    make: "Subaru",
                    model: "Outback",
                    mileage: 65000
                },
                {
                    VIN: "4S3BJ6321N6900903",
                    make: "Subaru",
                    model: "Legacy",
                    mileage: 180000
                },
            ]);
        });
};
