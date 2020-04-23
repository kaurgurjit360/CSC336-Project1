module.exports = (sequelize, Datatypes) => {
    const genre = sequelize.define("genre", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genre_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false

        }
    });
    return genre;
}