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
        }
    }, {
        engine: 'MYISAM',
        tableName: 'articles',
        timestamps: false
    });

    Article.belongsTo(sequelize.models.campaign, {
        through: 'campaign_id'
    });



    //
    //
    // Url.belongsTo(sequelize.models.source, {
    //     through: 'source_id'
    // });

    return Article;
};
