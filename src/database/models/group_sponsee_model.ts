import { sequelize } from '../databaseConection';
import { Model, DataTypes } from 'sequelize';

export class Group_Sponsee extends Model {
    public group_id!: string;
    public sponsee_id!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Group_Sponsee.init({
    group_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    sponsee_id: {
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
    tableName: 'group_sponsee'
});