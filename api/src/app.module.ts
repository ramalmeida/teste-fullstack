import { CidadeModule } from './cidade/cidade.module';
import { CidadeController } from './cidade/cidade.controller';
import { EstadoModule } from './estado/estado.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadoController } from './estado/estado.controller';
import { EstadoService } from './estado/estado.service';
import { CidadeService } from './cidade/cidade.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testesurvie',
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    CidadeModule,
    EstadoModule,
  ],
  controllers: [
    CidadeController, EstadoController],
  providers: [EstadoService, CidadeService],
})
export class AppModule {}
