module.exports = (sequelize, Datatypes) => {
    const album = sequelize.define("album", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        album_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        }, 

       

    });

     album.associate =function(models) {
           album.hasMany(models.song, {
             as: 'song',
            foreignKey: 'albumId',
            allowNull: false,
            unqiue: 'unique indexes',
            onDelete:'Cascade'
            
        });
     }
    return album;
}