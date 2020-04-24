module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
       
      
           
        
        });
         likesong.associate = models => {
            
            likesong.belongsTo(models.user,{

                foreignKey:'userId',
                primaryKey: true
            })

            likesong.belongsTo(models.song,{

                foreginKey: 'songId'  ,
                primaryKey: true   
                
            })
    
             
            
            };
          
         
        
        return likesong;
    }