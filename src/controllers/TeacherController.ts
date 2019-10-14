import { teacherRepository } from './../repositories/TeacherRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';


const getAll = async (req: Request, res: Response) => {
    try {
        let teachers = await teacherRepository.all();
        return res.json(teachers);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let teacher = await teacherRepository.find(req.params.id);
        return res.json(teacher);
    } catch (err) {
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


export const teacherController = { getAll, find, createTeacher, updateTeacher };