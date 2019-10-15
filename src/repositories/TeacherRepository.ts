import { User } from '../database/models/user_model';
import { ITeacherInput } from '../interfaces/ITeacher';
import { sequelize } from '../database/databaseConection';
import { Utils } from 'sequelize/types';
import { Roles } from '../database/models/roles_model';
import { Location } from '../database/models/location_model';
import { UserRole } from '../database/models/user_role_model';

const Sequelize = require('sequelize');

const all = () => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Teacher'", { type: sequelize.QueryTypes.SELECT})
}

const find = (id: string) => {
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id ", { type: sequelize.QueryTypes.SELECT})
} 

const findByName = (search: string) => {
    search = search.toLowerCase()
    return sequelize.query("SELECT u.id, u.last_signed, u.first_name, u.last_name, u.profile_picture, numSponsees(u.id) AS numSponsees FROM users u INNER JOIN user_role ur ON ur.user_id = u.id INNER JOIN roles r ON ur.role_id = r.id WHERE r.name = 'Teacher' AND (u.first_name LIKE '%"+search+"%' OR u.last_name LIKE '%"+search+"%') ", { type: sequelize.QueryTypes.SELECT})
} 

const create = (teacherData: ITeacherInput) => {
    // Add some validation before Creation

    return User.create(teacherData);
}

const update = (id: string, teacherData) => {
    // Add some validation before Update

    //return User.updateOne({id}, teacherData);
}

export const teacherRepository = { all, find, findByName, create, update }