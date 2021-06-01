import { Document } from 'mongoose';

export interface Cidade extends Document {
    nome: String;
    pontot: Array<String>;
    estado: String;
}