import { ErrorModel } from "../controllers/model/error";

const { validate } = require('uuid');

export const validateUUID = async (str: string): Promise<boolean> => {
    
    return new Promise((resolve,reject) => {
        if(validate(str)) {
            resolve(true);
        } else {
            reject(new ErrorModel(400, "Id con formato incorrecto"));
        }
    });
};