import { Module } from '@nestjs/common';
import MatchController from './matches.controller';

@Module({
    controllers: [MatchController],
})
export class MatchModule {}
