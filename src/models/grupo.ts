import { IPublicador } from './publicador.model';


export class Grupomodel {

    grupo: Array<IPublicador>;
    desc: string;
    completado: boolean;

    constructor ( desc:string) {
        this.desc = desc;
       this.completado = false;
    }
}