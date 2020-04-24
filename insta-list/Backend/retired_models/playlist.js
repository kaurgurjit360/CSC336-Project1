/*module.exports = (sequelize, Datatypes) => {
    const playlist = sequelize.define("playlist", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: false
            },
            playlist_name: {
                type: Datatypes.STRING,
                allowNull: false,
                
            }
           
        
        });
         playlist.associate = models => {
    
    
             playlist.hasMany(models.song,{
                 foreginKey: 'songId'

                })
            
                playlist.hasMany(models.likeplaylist,{
                    foreginKey:'likedplaylistId'
                })

                playlist.hasMany(models.create,{
                    foreignKey:'playlistId'
                })
    
           
            };
          
         
        
        return playlist;
    }*/