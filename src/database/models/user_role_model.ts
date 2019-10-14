import { sequelize } from '../databaseConection';
import { Model, DataTypes } from 'sequelize';

export class User_Role extends Model {
    public role_id!: string;
    public user_id!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User_Role.init({
    role_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        primaryKey: true
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
    tableName: 'user_role'
});