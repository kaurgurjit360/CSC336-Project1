module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
       
      userId:{
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: false,
          unique:'unique indexes'
      },
      songId:{
          type: Datatypes.INTEGER,
          allowNull:false,
          unique:'unique indexes'
      }
           
        
        });
         likesong.associate = models => {
            
            likesong.belongsTo(models.user,{

                foreignKey:'userId',
                unique: 'unique indexes',
                allowNull:false,
                Ondelete: 'cascade'
            })

            likesong.belongsTo(models.song,{

                foreginKey: 'songId'  ,
                unique:'unique indexes',
                allowNull:false,
                Ondelete: 'cascade'
                
            })
    
             
            
            };
          
         
        
        return likesong;
    }