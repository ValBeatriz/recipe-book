import { UUID } from "crypto";

export class PlatoEntity{
   constructor(
    public nombre: string,
    public preparacion: string,
    public ingredientes: string,
    public id_categoria: UUID,
    public id?: UUID,
    public descripcion?: string,
   ){}
}
