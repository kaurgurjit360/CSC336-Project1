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
            

        },

        songId:{
            type: Datatypes.INTEGER,
            allowNull:false,
            unique: true
        }
    });
    genre.associate = models => 
    {
        genre.belongsTo(models.song,{foreginKey:'songId', unique: true, allowNull:false, onDelete:'cascade' });
       
    }
    return genre;
}