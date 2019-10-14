import { sequelize } from '../databaseConection';
import { Model, DataTypes, UUIDV4 } from 'sequelize';

export class User_Role extends Model {
    public group_id!: string;
    public sponsee_id!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User_Role.init({
    group_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    sponsee_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
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
    tableName: 'group_sponsee'
});