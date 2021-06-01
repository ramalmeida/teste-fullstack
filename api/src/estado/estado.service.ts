import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { exec } from 'child_process';
import { Model } from 'mongoose';
import { AtualizarEstadoDto } from './dtos/atualizar-estado.dto';
import { CriarEstadoDto } from './dtos/criar-estado.dto';
import { Estado } from './interface/estado.interface';


@Injectable()
export class EstadoService { 
    
    constructor(@InjectModel('Estado') private readonly estadoModel: Model<Estado>) {}
    
    private readonly logger = new Logger(EstadoService.name)

    async criarEstado(criarEstadoDto: CriarEstadoDto): Promise<Estado> {
        const { nome } = criarEstadoDto
        const estadoEncontrado = (await this.estadoModel.findOne({nome})).exec();

        if (estadoEncontrado) {
            throw new BadRequestException(`Estado com nome ${nome} já cadastrado`)
        }
        const EstadoCriado = new this.estadoModel(criarEstadoDto)
        return await EstadoCriado.save()
    }

  async atualizarEstado(_id: string, atualizarEstadoDto: AtualizarEstadoDto): Promise<void> {
      const estadoEncontrado = await (await this.estadoModel.findOne({_id})).exec();

      if (!estadoEncontrado) {
          throw new NotFoundException(`Estado com id ${_id} não encontrado`)
      }
      await this.estadoModel.findOneAndUpdate({_id}), {$set: atualizarEstadoDto}).exec();
  }
    
  async consultarTodosEstados(): Promise<Estado[]> {
      return await this.estadoModel.find().exec()
  }

  async consultarEstadoPeloId(_id: string): Promise<Estado> {
      const estadoEncontrado = await (await this.estadoModel.findOne({_id})).exec();
      if (!estadoEncontrado) {
        throw new NotFoundException(`Estado com id ${_id} não encontrado`)
    }
        return estadoEncontrado
  }

  async deletarEstado(_id): Promise<any> {
    const estadoEncontrado = await (await this.estadoModel.findOne({_id})).exec();
    if (!estadoEncontrado) {
      throw new NotFoundException(`Estado com id ${_id} não encontrado`)
                            }
        return await this.estadoModel.deleteOne({_id}).exec();
  }

}
