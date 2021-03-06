export default (sequelize, DataTypes) => {

    const Article = sequelize.define('article', {
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
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        loaded: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        viewed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        read: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        engine: 'MYISAM',
        tableName: 'articles',
        timestamps: false
    });

    Article.belongsTo(sequelize.models.campaign, {
        through: 'campaignId'
    });

    sequelize.models.campaign.hasMany(Article, {
        as: 'articles',
        foreignKey: 'campaignId'
    });

    return Article;
};
