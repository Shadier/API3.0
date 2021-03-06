import { adminRepository } from './../repositories/AdminRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';
import { IAdmin } from '../interfaces/IAdmin';
import TimeAgo from 'javascript-time-ago'
import lang from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(lang)
const timeAgo = new TimeAgo('en')

const getAll = async (req: Request, res: Response) => {
    try {
        let admins = await adminRepository.all();
        return res.json(admins);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let admins : IAdmin = await adminRepository.find(req.params.id)
        return res.json(admins);
    } catch (err) {
        return exceptions.NotFoundException(res);
    }
}

const findByName = async (req: Request, res: Response) => {
    try {
        let admins = await adminRepository.findByName(req.params.search)
        return res.json(admins);
    } catch (err) {
        console.log(err)
        return exceptions.NotFoundException(res);
    }
}

const createAdmin = async (req: Request, res: Response) => {
    try {
        let newadmin = await adminRepository.create(req.body);

        return res.status(201).json(newadmin);
    } catch (error) {
        return exceptions.BadRequestException(res, error)
    }
    
}
    
const updateAdmin = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let updatedadmin = await adminRepository.update(id, req.body);

        return res.status(200).json(updatedadmin);
    } catch (error) {
        return exceptions.BadRequestException(res, error.errmsg)
    }
}


export const adminController = { getAll, find, findByName,  createAdmin, updateAdmin };