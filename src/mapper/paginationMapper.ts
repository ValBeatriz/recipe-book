import { PaginationModel } from "../controllers/model/paginationModel";

export const paginationRequestToModelMapper = async (obj: any): Promise<PaginationModel> => {
    
    const size = obj?.size != null && obj?.size != '' ? obj?.size : 10
    const page = obj?.page != null && obj?.page != '' ? obj?.page : 1
    const search = obj?.search != null && obj?.search != '' ? obj?.search : ''
    
    const model: PaginationModel = new PaginationModel(size as number, page as number, search as string);
 
    return model;
};