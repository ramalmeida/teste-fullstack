import { IsNotEmpty } from 'class-validator';

export class AtualizarEstadoDto {
 
    @IsNotEmpty()
    readonly nome: String;

    @IsNotEmpty()
    readonly sufix: String;

}