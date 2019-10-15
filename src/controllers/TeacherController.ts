import { teacherRepository } from './../repositories/TeacherRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';
import { ITeacher } from '../interfaces/ITeacher';
import TimeAgo from 'javascript-time-ago'
import lang from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(lang)
const timeAgo = new TimeAgo('en')

const getAll = async (req: Request, res: Response) => {
    try {
        let teachers = await teacherRepository.all();
        teachers.forEach((teacher : ITeacher) => {
            teacher.last_signed = timeAgo.format(teacher.last_signed)
        });
        return res.json(teachers);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let teacher : ITeacher = await teacherRepository.find(req.params.id)
        teacher.last_signed = timeAgo.format(teacher.last_signed)
        return res.json(teacher);
    } catch (err) {
        return exceptions.NotFoundException(res);
    }
}

const findByName = async (req: Request, res: Response) => {
    try {
        let teachers = await teacherRepository.findByName(req.params.search)
        teachers.forEach((teacher : ITeacher) => {
            teacher.last_signed = timeAgo.format(teacher.last_signed)
        });
        return res.json(teachers);
    } catch (err) {
        console.log(err)
        return exceptions.NotFoundException(res);
    }
}

const createTeacher = async (req: Request, res: Response) => {
    try {
        let newTeacher = await teacherRepository.create(req.body);

        return res.status(201).json(newTeacher);
    } catch (error) {
        return exceptions.BadRequestException(res, error)
    }
    
}
    
const updateTeacher = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let updatedTeacher = await teacherRepository.update(id, req.body);

        return res.status(200).json(updatedTeacher);
    } catch (error) {
        return exceptions.BadRequestException(res, error.errmsg)
    }
}


export const teacherController = { getAll, find, findByName,  createTeacher, updateTeacher };