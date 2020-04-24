module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
       
      
           
        
        });
         likesong.associate = models => {
            
            likesong.belongsTo(models.user,{

                foreignKey:{
                    
                   
                    
                }
            })

            likesong.belongsTo(models.song,{

                foreginKey: {
                  
                }
            })
    
             
            
            };
          
         
        
        return likesong;
    }