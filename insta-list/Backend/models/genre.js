module.exports = (sequelize, Datatypes) => {
    const genre = sequelize.define("genre", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique:'unique indexes'
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


