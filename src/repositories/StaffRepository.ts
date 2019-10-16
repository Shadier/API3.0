import { User } from '../database/models/user_model'
import { IStaffInput } from '../interfaces/IStaff'
import { sequelize } from '../database/databaseConection'


const all = () => {
    return sequelize.query(
        `SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, getRoles(u.id) AS roles, numSponsees(u.id) AS numSponsees 
        FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id 
        WHERE r.name = 'Admin' OR r.name = 'Teacher' 
        GROUP BY u.id
        ORDER BY numSponsees ASC, u.first_name ASC, u.last_name ASC`, 
        { type: sequelize.QueryTypes.SELECT})
}

const find = (id: string) => {
    return sequelize.query(
        `SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id `, 
        { type: sequelize.QueryTypes.SELECT})
} 

const findByName = (search: string) => {
    search = search.toLowerCase()
    return sequelize.query(
            `SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, getRoles(u.id) AS roles, numSponsees(u.id) AS numSponsees
            FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id 
            WHERE (r.name = 'Admin' OR r.name = 'Teacher') AND (u.first_name LIKE '%${search}%' OR u.last_name LIKE '%${search}%') 
            GROUP BY u.id
            ORDER BY numSponsees ASC, u.first_name ASC, u.last_name ASC`, 
            { type: sequelize.QueryTypes.SELECT})
} 

const create = (staffData: IStaffInput) => {
    // Add some validation before Creation

    return User.create(staffData);
}

const update = (id: string, staffData) => {
    // Add some validation before Update

    //return User.updateOne({id}, staffData);
}

export const staffRepository = { all, find, findByName, create, update }