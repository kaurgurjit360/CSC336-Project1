/*module.exports = (sequelize, Datatypes) => {
    const likeplaylist = sequelize.define("likeplaylist", {
        id:{
            type: Datatypes.INTEGER,
            primaryKey:true
        }
      
           
        
        });
         likeplaylist.associate = models => {
            
            likeplaylist.belongsTo(models.user,{

                foreignKey:'userId',
                primaryKey: true
            })

            likeplaylist.belongsTo(models.playlist,{

                foreginKey: 'playlistId',
                primaryKey: true
            })

            likeplaylist.belongsTo(models.song,{

                foreginKey: 'songId',
                primaryKey: true
            })
    
             
            
            };
          
         
        
        return likeplaylist;
    }*/