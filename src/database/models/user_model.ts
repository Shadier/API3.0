import { sequelize } from './../databaseConection';
import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { Location } from './location_model';
import { Sponsees } from './sponsees_model';
import { Roles } from './roles_model';
import { Groups } from './groups_model';
import { SponsorSponsee } from './sponsor_sponsee_model';
import { UserRole } from './user_role_model';
import { GroupUser } from './group_user_model';

export class User extends Model {
    public id!: string;
    public bio?: string;
    public birth_date?: Date;
    public email!: string;
    public first_name!: number;
    public last_name!: string;
    public last_signed?: string;
    public location_id?: string;
    public password!: string;
    public profile_picture?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public location?: Location;
}

User.init({
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
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_signed: {
        type: DataTypes.DATE,
        allowNull: true
    },
    location_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
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
    tableName: 'users'
});

// User.belongsTo(Location, { as: 'Location', targetKey: 'id', foreignKey: 'location_id' });
// User.belongsToMany(Sponsees, { through: SponsorSponsee });
// User.belongsToMany(Roles, { through: UserRole });
// User.belongsToMany(Groups, { through: GroupUser });