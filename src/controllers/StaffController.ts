import { staffRepository } from '../repositories/StaffRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';
import { IStaff } from '../interfaces/IStaff';
import TimeAgo from 'javascript-time-ago'
import lang from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(lang)

const getAll = async (req: Request, res: Response) => {
    try {
        let staff = await staffRepository.all();
        return res.json(staff);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let staff : IStaff = await staffRepository.find(req.params.id)       
        return res.json(staff);
    } catch (err) {
        return exceptions.NotFoundException(res);
    }
}

const findByName = async (req: Request, res: Response) => {
    try {
        let staff = await staffRepository.findByName(req.params.search)     
        return res.json(staff);
    } catch (err) {
        console.log(err)
        return exceptions.NotFoundException(res);
    }
}

const createStaff = async (req: Request, res: Response) => {
    try {
        let newstaff = await staffRepository.create(req.body);
        return res.status(201).json(newstaff);
    } catch (error) {
        return exceptions.BadRequestException(res, error)
    }
    
}
    
const updateStaff = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let updatedstaff = await staffRepository.update(id, req.body);
        return res.status(200).json(updatedstaff);
    } catch (error) {
        return exceptions.BadRequestException(res, error.errmsg)
    }
}


export const staffController = { getAll, find, findByName,  createStaff, updateStaff };