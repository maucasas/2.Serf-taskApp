
export class Publicadormodel {

Id:number;
Code: string;
FechaCreacion: Date;
FechaPublicador: Date;
FechaDedicacion?: Date;
Nombre: string;
Apellido: string;
Grupo: grupoType;
Celular:string;
Genero: generotype;
Asignaciones = new Array<Asignacion>();
 
constructor ( private id:number,
    private code: string,
    private fechaCreacion: Date,
    private fechaPublicador: Date,
    private nombre: string,
    private apellido: string,
    private grupo: grupoType,
    private celular:string,
    private genero: generotype,
    private asignaciones: Array<Asignacion>,
    private fechaDedicacion?: Date,
) 
    {
        this.Id = this.id;
        this.Code = this.code;
        this.fechaCreacion = this.fechaCreacion;
        this.fechaPublicador = this.fechaPublicador;
        this.Nombre = this.nombre;
        this.Apellido = this.apellido;
        this.Grupo = this.grupo;
        this.Celular = this.celular;
        this.Genero = this.genero;
        this.Asignaciones = this.asignaciones;
        this.FechaDedicacion = this.fechaDedicacion;
        
}

}

export enum Asignacion {
    publicador = 0,
    precursorRegular = 1,
    precursorAuxiliar = 2,
    SiervoMinisterial = 3,
    anciano = 4
}

export enum AsignacionType
{
    Conferencia = 1,
    demostracion = 2
}
export enum generotype 
{
    hombre = 1,
    mujer = 2
}
export enum grupoType 
{
    grupo_1 = 1,
    grupo_2 = 2,
    grupo_3 = 3,
    grupo_4 = 4,
    grupo_5 = 5,
    grupo_6 = 6,
    grupo_7 = 7,
    grupo_8 = 8
}

export interface IPublicador {
id:number;
code: string;
fechaCreacion: Date;
fechaPublicador: Date;
nombre: string;
apellido: string;
grupo: grupoType;
celular:string;
genero: generotype;
asignaciones: Array<Asignacion> ;
fechaDedicacion?: Date;

}