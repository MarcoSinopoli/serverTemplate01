import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { IUser, ICategory } from "../types/user.type";
import { users, products, } from "../data/user.data";
import { error } from "console";


export const getAllUser = async (req: Request, res: Response) => {
    try{
        res.status(200).json(users)
    } catch (error: any) {
        res.status(500).json({error: error.message,message:"getAllUsers page failed :-( "})
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try{
        const indexUserFound = users.find((user) => user.id === req.params.id);
        if (indexUserFound) {
            res.status(200).json(indexUserFound);
        } else {
            res.send(error);
            console.error(error);
        }
    } catch (error: any) {
        res.status(400).json({error: error.message, message: "User's Id requested not found"})
    }
}

export const addUserHandler = async (req: Request, res: Response) => {
    try { 
        const user: IUser = req.body;
        const newId = {id: uuidv4()};
        users.push({...user, ...newId});
        const indexUserAdded = users.findIndex((user) => user.id === newId.id);
        res.status(200).json({message: "Successfully added:", User: users[indexUserAdded]});
    } catch (error: any) {
        res.status(400).json({error: error.message, message: "User not added"})
    }
};
export const updateUserHandler = async (req: Request, res: Response) => {
    try{
        const userFound = users.find((user) => user.id === req.params.id);
        if (userFound) {
            const updatedUser = Object.assign(userFound, req.body);
            res.status(200).json(updatedUser);
        } else {
            res.send(error);
            console.error(error);
        }
    } catch (error: any) {
        res.status(400).json({error: error.message, message: "User not updated"});
    }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
    try{
        const indexUserFound = users.findIndex((user) => user.id === req.params.id);
        if (indexUserFound !== -1) {
            const deletedUser = users.splice(indexUserFound, 1);
            res.status(200).json({message: "Successfully deleted:", deletedUser});
        }
        else {
            res.status(404).json({ error: 'User by id not found' });
        }
    } catch (error: any) {
        res.status(500).json({error: error.message, message: "User not deleted"});
    }
};