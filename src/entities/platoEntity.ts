
export class PlatoEntity{
   constructor(
    public nombre: string,
    public preparacion: string,
    public ingredientes: string,
    public id_categoria: string,
    public id_plato?: string,
    public descripcion?: string,
    public categoria?: string,
   ) {}
}
