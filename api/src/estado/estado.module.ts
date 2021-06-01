import { EstadoController } from './estado.controller';
import { EstadoService } from './estado.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadoSchema } from './interface/estado.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Estado', schema: EstadoSchema}])],
    controllers: [EstadoController],
    providers: [EstadoService],
})
export class EstadoModule {}

