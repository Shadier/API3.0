import { sequelize } from '../databaseConection';
import { Sequelize, Model, DataTypes, BuildOptions, UUIDV4 } from 'sequelize';
import { User } from './user_model';
import { UserRole } from './user_role_model';

export class Roles extends Model {
    public id!: string;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Roles.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
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

// Roles.belongsToMany(User, { through: UserRole });
