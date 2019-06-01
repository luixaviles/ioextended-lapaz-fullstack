import { Test, TestingModule } from '@nestjs/testing';
import { SlidesController } from './slides.controller';

describe('Slides Controller', () => {
  let controller: SlidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlidesController],
    }).compile();

    controller = module.get<SlidesController>(SlidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
