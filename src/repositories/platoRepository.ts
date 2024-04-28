import { pool } from '../adapters'
import { PlatoEntity } from '../entities'

export class PlatoRepository {
    static create = async (plato: PlatoEntity): Promise<PlatoEntity | null> => {

        console.log('plato', plato)
        return new Promise<PlatoEntity | null>((resolve, reject) => {
            pool.connect((err) => {
                // pool.end();
                if (err) {
                    console.error("Error connecting yo postgre", err);
                    reject(err);
                    return;
                }

                pool.query(`INSERT INTO plato (nombre, descripcion, preparacion, ingredientes, id_categoria) values ('${plato.nombre}','${plato.descripcion}','${plato.preparacion}','${plato.ingredientes}','${plato.id_categoria}')`, (queryError, result) => {

                    if (queryError) {
                        console.error("Error on the query", queryError);
                        reject(queryError);
                        return;
                    }

                    const nuevoPlato: PlatoEntity = {
                        ...plato,
                        // id: result.rows[0].id
                    }
                    resolve(nuevoPlato);
                    return;

                });
            })
        })
    }
    static getAll = async (): Promise<PlatoEntity[]> => {
        return new Promise((resolve,reject) => {
            pool.query("SELECT * FROM plato ",(error, results) => {
                // pool.end();

                if (error) {
                    console.error("Error on the query", error);
                    reject(error);
                    return;
                }

                resolve(results.rows as PlatoEntity[]);
                return;
            });
        });
    }
    static getById = async (id: string): Promise<PlatoEntity | null> => {
        return new Promise((resolve,reject) => {
            pool.query(`SELECT * FROM plato where id_plato = '${id}'`,(error, results) => {
                // pool.end();

                console.log(results);
                console.log(`SELECT * FROM plato where id_plato = '${id}'`);

                if (error) {
                    console.error("Error on the query", error);
                    reject(error);
                    return;
                }

                if(results.rows.length === 0){
                    resolve(null);
                } else {
                    resolve(results.rows[0] as PlatoEntity);
                }

                return;
            });
        });
    }
    static update = async (id: string, plato: PlatoEntity): Promise<PlatoEntity | null> => {
        return new Promise((resolve,reject) => {
            pool.query(`UPDATE plato SET nombre='${plato.nombre}', ingredientes='${plato.ingredientes}', preparacion='${plato.preparacion}' where id_plato = '${id}'`,(error, results) => {
                // pool.end();

                if (error) {
                    console.error("Error on the query", error);
                    reject(error);
                    return;
                }

                if(results.rowCount && results.rowCount > 0){
                    resolve(plato);
                } else {
                    resolve(null);
                }

                return;
            });
        });
    }
    static delete =  async (id: string): Promise<boolean> => {
        return new Promise((resolve,reject) => {
            pool.query(`DELETE FROM plato where id_plato = '${id}'`,(error, results) => {
                // pool.end();

                if (error) {
                    console.error("Error on the query", error);
                    reject(error);
                    return;
                }

                if(results.rowCount && results.rowCount > 0){
                    resolve(true);
                } else {
                    resolve(false);
                }

                return;
            });
        });
    }
}