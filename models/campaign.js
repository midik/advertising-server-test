export default (sequelize, DataTypes) => {

    const Campaign = sequelize.define('campaign', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        engine: 'MYISAM',
        tableName: 'campaigns',
        timestamps: false
    });

    // sequelize.models.article.hasMany(Campaign, {
    //     as: 'campaigns',
    //     foreignKey: 'campaign_id'
    // });

    return Campaign;
};
