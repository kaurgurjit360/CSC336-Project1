module.exports = (sequelize, Datatypes) => {
    const likeplaylist = sequelize.define("likeplaylist", {
       
      
           
        
        });
         likeplaylist.associate = models => {
            
            likeplaylist.belongsTo(models.user,{

                foreignKey:'userId'
            })

            likeplaylist.belongsTo(models.playlist,{

                foreginKey: 'playlistId'
            })
    
             
            
            };
          
         
        
        return likeplaylist;
    }