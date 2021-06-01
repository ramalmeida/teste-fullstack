import { CidadeService } from './cidade.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CidadeSchema } from './interface/cidade.schema';
import { EstadoSchema } from 'src/estado/interface/estado.schema';
import { CidadeController } from './cidade.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cidade', schema: CidadeSchema },
      { name: 'Estado', schema: EstadoSchema },
    ]),
  ],
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
