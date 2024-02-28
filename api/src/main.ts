import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cors from 'cors';
import express from 'express';
import { MatchModule } from './features/matches/matches.module';

// TODO: Use .env and move it to a config file to use here instead.
const settings = {
    PORT: process.env.PORT ?? 5000,
};

const bootstrap = async () => {
    const app = await NestFactory.create(MatchModule);

    const config = new DocumentBuilder()
        .setTitle('Anima API')
        .setDescription('The API for Anima applications.')
        .setVersion('0.1.0-alpha')
        .addTag('matches')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    await app.listen(settings.PORT);
};
bootstrap();
