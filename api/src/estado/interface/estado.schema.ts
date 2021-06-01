import * as mongoose from 'mongoose';

export const EstadoSchema = new mongoose.Schema({
    nome: { type: String, unique:true},
    sufix: { type: String, unique:true},
    },
    {timestamps:true, collection: 'estados'});
    