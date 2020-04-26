module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
           

        },  
          
        userId: {
                 type: Datatypes.INTEGER,
                allowNull:true,
                unique: 'unqiue indexes', 
                allowNull:false, 
                onDelete:'cascade'
                
         },
    
         songId: {
            type: Datatypes.INTEGER,
            allowNull: true,
            unique: 'unqiue indexes', 
            allowNull:false, 
            onDelete:'cascade'
    }
        
        });
         likesong.associate = models => {
             likesong.belongsTo(models.user,{foreginKey:'userId', unique: 'unqiue indexes', allowNull:false, onDelete:'cascade'});
             likesong.belongsTo(models.song,{foreginKey:'songId', unique: 'unique indexes', allowNull: false, onDelete:'cascade'});
            
         }
        
        return likesong;
    }