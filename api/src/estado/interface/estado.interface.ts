import { Document } from 'mongoose';
import { Cidade } from 'src/cidade/interface/cidade.interface';

export interface Estado extends Document {
    [x: string]: any;
    nome: String;
    sufix: String;
    cidades: Array<Cidade>
}