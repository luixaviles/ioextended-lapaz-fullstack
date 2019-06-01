import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { SpeakersController } from './src/speakers/speakers.controller';
import { SlidesController } from './src/slides/slides.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    })
  ],
  controllers: [SpeakersController, SlidesController]
})
export class ApplicationModule {}
