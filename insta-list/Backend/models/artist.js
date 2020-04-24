module.exports = (sequelize, Datatypes) => {
    const artist = sequelize.define("artist", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        artist_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        }
    });
    artist.associate= models=>{
        artist.hasMany(models.song,{foreignKey:"artistId" })
    }
    return artist;
}