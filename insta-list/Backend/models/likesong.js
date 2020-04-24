module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
       
      
           
        
        });
         likesong.associate = models => {
            
            likesong.belongsTo(models.user,{

                foreignKey:{
                    
                    primaryKey: true
                    
                }
            })

            likesong.belongsTo(models.song,{

                foreginKey: {
                    primaryKey: true
                }
            })
    
             
            
            };
          
         
        
        return likesong;
    }