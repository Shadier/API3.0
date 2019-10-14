import { sequelize } from '../databaseConection';
import { Model, DataTypes, UUIDV4 } from 'sequelize';

export class Organization extends Model {
    public id!: string;
    public name!: string;
    public description!: string;
    public image?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Organization.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING
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
    tableName: 'organizations'
});
