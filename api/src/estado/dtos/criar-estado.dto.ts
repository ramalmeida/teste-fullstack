import { IsNotEmpty } from 'class-validator';

export class CriarEstadoDto {
 
    @IsNotEmpty()
    readonly nome: String;

    @IsNotEmpty()
    readonly sufix: String;

}