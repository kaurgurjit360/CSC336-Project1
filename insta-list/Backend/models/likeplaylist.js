module.exports = (sequelize, Datatypes) => {
    const likeplaylist = sequelize.define("likeplaylist", {
       
      
           
        
        });
         likeplaylist.associate = models => {
            
            likeplaylist.belongsTo(models.user,{

                foreignKey:{
                    
                    primaryKey: true
                    
                }
            })

            likeplaylist.belongsTo(models.playlist,{

                foreginKey: {
                    primaryKey: true
                }
            })
    
             
            
            };
          
         
        
        return likeplaylist;
    }