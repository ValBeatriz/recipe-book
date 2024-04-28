import { UUID } from "crypto";

export class PlatoEntity{
   constructor(
    public id: UUID,
    public nombre: string,
    public descripcion: string,
    public preparacion: string,
    public ingredientes: string,
    public id_categoria: UUID 
   ){}
}
