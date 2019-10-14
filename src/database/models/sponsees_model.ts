import { sequelize } from './../databaseConection';
import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { Location } from './location_model';
import { User } from './user_model';
import { Groups } from './groups_model';
import { SponsorSponsee } from './sponsor_sponsee_model';
import { GroupSponsee } from './group_sponsee_model';

export class Sponsees extends Model {
    public id!: string;
    public bio?: string;
    public birth_date?: Date;
    public first_name!: number;
    public last_name!: string;
    public location_id?: string;
    public profile_picture?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public location?: Location;
}

Sponsees.init({
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true
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
    tableName: 'sponsees'
});

Sponsees.belongsTo(Location, { as: 'Location', targetKey: 'id', foreignKey: 'location_id' });
Sponsees.belongsToMany(User, { through: SponsorSponsee });
Sponsees.belongsToMany(Groups, { through: GroupSponsee });
