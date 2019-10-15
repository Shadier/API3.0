import { User } from '../database/models/user_model'
import { IAdminInput } from '../interfaces/IAdmin'
import { sequelize } from '../database/databaseConection'


const all = () => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponseesSponsor(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Sponsor'", { type: sequelize.QueryTypes.SELECT})
}

const find = (id: string) => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponseesSponsor(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id ", { type: sequelize.QueryTypes.SELECT})
} 

const findByName = (search: string) => {
    search = search.toLowerCase()
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponseesSponsor(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Sponsor' AND (u.first_name LIKE '%"+search+"%' OR u.last_name LIKE '%"+search+"%') ", { type: sequelize.QueryTypes.SELECT})
} 

const create = (sponsorData: IAdminInput) => {
    // Add some validation before Creation

    return User.create(sponsorData);
}

const update = (id: string, sponsorData) => {
    // Add some validation before Update

    //return User.updateOne({id}, sponsorData);
}

export const sponsorRepository = { all, find, findByName, create, update }