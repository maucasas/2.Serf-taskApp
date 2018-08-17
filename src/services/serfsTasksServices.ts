import {Injectable} from '@angular/core';
import { IPublicador, grupoType } from '../models/publicador.model';


@Injectable ()

export class SerfsTaskService {
publicador: IPublicador;
listaPublicadores= new Array<IPublicador>();

ByGroup: Array<IPublicador>;
 constructor(private pub: IPublicador) { 
     this.publicador = pub;
    
   }
 addPublicador (pub: IPublicador) {
     let indexarray1 = this.listaPublicadores.length; 
     this.listaPublicadores.push(pub); 
     let indexarray2 = this.listaPublicadores.length;
     if (indexarray1 > indexarray2){
         return ("elemento agregado");
     }     
 }

 getPublicadorByID(id: number){
    let pub: IPublicador;
    for (let publicador of this.listaPublicadores) {
        let idFound = pub.id;
        if (idFound === id){
            pub = publicador;
        }else {
            return pub = null;
        }
    }    
     return pub;
 }

 getGrupo(grupo: grupoType) {
     let agrupado: Array<IPublicador>;
    
    for( let pub of this.listaPublicadores) {
        let groupByPublicador = pub.grupo;

        if ( groupByPublicador === grupo) {
            agrupado.push(pub);
        }
    } 
    return agrupado;
 }

}