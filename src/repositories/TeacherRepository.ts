import { User } from '../database/models/user_model';
import { ITeacherInput } from '../interfaces/ITeacher';
import { sequelize } from '../database/databaseConection';
import { Utils } from 'sequelize/types';

const all = () => {
    return User.findAndCountAll({
    
     })
     .then(result => {
       console.log('n:'+result.count);
       console.log('n:'+result.rows);
     });
}

const find = (id: string) => {
    return sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT})
}

const create = (teacherData: ITeacherInput) => {
    // Add some validation before Creation

    return User.create(teacherData);
}

const update = (id: string, teacherData) => {
    // Add some validation before Update

    //return User.updateOne({id}, teacherData);
}

export const teacherRepository = { all, find, create, update }