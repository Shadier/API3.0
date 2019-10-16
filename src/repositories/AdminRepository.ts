import { User } from '../database/models/user_model'
import { IAdminInput } from '../interfaces/IAdmin'
import { sequelize } from '../database/databaseConection'


const all = () => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, getRoles(u.id) AS roles, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Admin'", { type: sequelize.QueryTypes.SELECT})
}

const find = (id: string) => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id ", { type: sequelize.QueryTypes.SELECT})
} 

const findByName = (search: string) => {
    search = search.toLowerCase()
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, getRoles(u.id) AS roles, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Admin' AND (u.first_name LIKE '%"+search+"%' OR u.last_name LIKE '%"+search+"%') ", { type: sequelize.QueryTypes.SELECT})
} 

const create = (adminData: IAdminInput) => {
    // Add some validation before Creation

    return User.create(adminData);
}

const update = (id: string, adminData) => {
    // Add some validation before Update

    //return User.updateOne({id}, adminData);
}

export const adminRepository = { all, find, findByName, create, update }