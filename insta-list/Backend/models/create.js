module.exports = (sequelize, Datatypes) => {
    const create = sequelize.define("create", {
       
      
           
        
        });
         create.associate = models => {
            
            create.belongsTo(models.user,{

                foreignKey: 'userId'
            })

            create.belongsTo(models.playlist,{

                foreginKey: 'playlistId'
            })
    
             
            
            };
          
         
        
        return create;
    }