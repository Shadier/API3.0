import { sequelize } from '../databaseConection';
import { Sequelize, Model, DataTypes, BuildOptions, UUIDV4 } from 'sequelize';
import { Organization } from './organization_model';

export class Location  extends Model {
    public id!: string;
    public name!: string;
    public description!: string;
    public organization_id!: string;
    public image!: string;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public organization!: Organization;
}

Location.init({
    id: {
        type: DataTypes.UUIDV4,
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
    organization_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    image: {
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
    tableName: 'locations'
});


Location.hasOne(Organization, { as: 'Organization', sourceKey: 'id', foreignKey: 'organization_id' })