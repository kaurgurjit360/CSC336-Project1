/*module.exports = (sequelize, Datatypes) => {
    const create = sequelize.define("create", {
       
      
           
        
        });
         create.associate = models => {
            
            create.belongsTo(models.user,{

                foreignKey: 'userId',
                primaryKey: true
            })

            create.belongsTo(models.playlist,{

                foreginKey: 'playlistId',
                primaryKey: true
            })
    
             
            
            };
          
         
        
        return create;
    }*/