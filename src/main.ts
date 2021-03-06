import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { setSwagger } from './set-swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const env = app.get(ConfigService);
  const port = env.get('port') || 3333;
  app.set('trust proxy', 1);

  app.use(
    session({
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      secret: 'asdflkjasasdfasdfasdf',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.setGlobalPrefix('api');

  setSwagger(app);

  await app.listen(port, () => console.log(`서버 port: ${port}로 열림`));
}
bootstrap();
