import { sequelize } from '../databaseConection';
import { Model, DataTypes, UUIDV4 } from 'sequelize';

export class Sponsor_Sponsee extends Model {
    public sponsee_id!: string;
    public sponsor_id!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Sponsor_Sponsee.init({
    sponsee_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    sponsor_id: {
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
    tableName: 'sponsor_sponsee'
});