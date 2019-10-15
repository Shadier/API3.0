import { sponsorRepository } from './../repositories/SponsorRepository';
import { Request, Response } from 'express';
import exceptions from '../exceptions';
import { ISponsor } from '../interfaces/ISponsor';
import TimeAgo from 'javascript-time-ago'
import lang from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(lang)
const timeAgo = new TimeAgo('en')

const getAll = async (req: Request, res: Response) => {
    try {
        let sponsors = await sponsorRepository.all();
        sponsors.forEach((sponsor : ISponsor) => {
            sponsor.last_signed = timeAgo.format(sponsor.last_signed)
        });
        return res.json(sponsors);
    } catch (err) {
        return exceptions.ServerErrorException(res);
    }
}


const find = async (req: Request, res: Response) => {
    try {
        let sponsor : ISponsor = await sponsorRepository.find(req.params.id)
        sponsor.last_signed = timeAgo.format(sponsor.last_signed)
        return res.json(sponsor);
    } catch (err) {
        return exceptions.NotFoundException(res);
    }
}

const findByName = async (req: Request, res: Response) => {
    try {
        let sponsors = await sponsorRepository.findByName(req.params.search)
        sponsors.forEach((sponsor : ISponsor) => {
            sponsor.last_signed = timeAgo.format(sponsor.last_signed)
        });
        return res.json(sponsors);
    } catch (err) {
        console.log(err)
        return exceptions.NotFoundException(res);
    }
}

const createSponsor = async (req: Request, res: Response) => {
    try {
        let newsponsor = await sponsorRepository.create(req.body);

        return res.status(201).json(newsponsor);
    } catch (error) {
        return exceptions.BadRequestException(res, error)
    }
    
}
    
const updateSponsor = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let updatedsponsor = await sponsorRepository.update(id, req.body);

        return res.status(200).json(updatedsponsor);
    } catch (error) {
        return exceptions.BadRequestException(res, error.errmsg)
    }
}


export const sponsorController = { getAll, find, findByName,  createSponsor, updateSponsor };