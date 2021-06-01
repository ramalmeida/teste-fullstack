import * as mongoose from 'mongoose';

export const CidadeSchema = new mongoose.Schema({
    nome: { type: String, unique:true},
    pontot: { type: Array },
    estado: {type: mongoose.Schema.Types.ObjectId, ref:"Estado"}
    },
    {timestamps:true, collection: 'cidades'});