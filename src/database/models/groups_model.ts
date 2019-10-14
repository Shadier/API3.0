import { sequelize } from '../databaseConection';
import { Sequelize, Model, DataTypes, BuildOptions, UUIDV4 } from 'sequelize';
import { Location } from './location_model';
import { User } from './user_model';
import { Sponsees } from './sponsees_model';

export class Groups extends Model {
    public id!: string;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public location!: Location;
    
}

Groups.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    location_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
}, {
    sequelize: sequelize,
    tableName: 'roles'
});

Groups.hasOne(Location, { as: 'Location', sourceKey: 'id', foreignKey: 'location_id' });
Groups.belongsToMany(User,{through:'group_user'});
Groups.belongsToMany(Sponsees,{through: 'group_sponsee'});
