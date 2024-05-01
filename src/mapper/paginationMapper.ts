import { PaginationModel } from "../controllers/model/paginationModel";

export const paginationRequestToModelMapper = async (obj: any): Promise<PaginationModel> => {
    if(obj == null || obj.query == null){
        return new PaginationModel();
    }
    const size = obj.query?.size != null && obj.query?.size != '' ? obj.query?.size : 10
    const page = obj.query?.page != null && obj.query?.page != '' ? obj.query?.page : 1
    const search = obj.query?.search != null && obj.query?.search != '' ? obj.query?.search : ''
    
    const model: PaginationModel = new PaginationModel(size as number, page as number, search as string);
 
    return model;
};