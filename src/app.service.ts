import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  public getHello(): string {
    const databaseName: string = this.config.get('APP_NAME');

    console.log('App Name : ', { databaseName });

    return 'Hello World!';
  }
}
