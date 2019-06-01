import { Controller, Get } from '@nestjs/common';

const SPEAKERS = [
  {
    fullname: 'Gunnar Ortiz',
    email: 'gunnar@gdglapaz.com'
  },
  {
    fullname: 'Luis Aviles',
    email: 'luis@gdglapaz.com'
  }
];
@Controller('speakers') // /api/speakers/ GET
export class SpeakersController {

  @Get()
  getSpeakers() {
    return SPEAKERS;
  }
}
