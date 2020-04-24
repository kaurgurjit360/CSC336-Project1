module.exports = (sequelize, Datatypes) => {
    const playlist = sequelize.define("playlist", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: false
            },
            playlist_name: {
                type: Datatypes.STRING,
                allowNull: false,
                primaryKey: true
            }
           
        
        });
         playlist.associate = models => {
    
    
             playlist.hasMany(models.song,{
                 foreginKey: {
                     allowNull: true
                 }
                })
            
                playlist.hasMany(models.likedplaylist,{
                    foreginKey:{
                        allowNull:false
                    }
                })
    
           
            };
          
         
        
        return playlist;
    }