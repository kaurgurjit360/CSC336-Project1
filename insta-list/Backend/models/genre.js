module.exports = (sequelize, Datatypes) => {
    const genre = sequelize.define("genre", {
        genreId: {
            type: Datatypes.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            unique:'unique indexes',
            allowNull: false
        },
        genre_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        },
        songId:{	
            type: Datatypes.INTEGER,	
            allowNull:false,	
            unique: 'unique indexes'	
        }
    });
    genre.associate = models => 
    {
        genre.belongsTo(models.song,{foreginKey:'songId', unique: true, allowNull:false, onDelete:'cascade' });
    }
    return genre;
}


