import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatusCodes } from 'http-status-codes';
import APIResponse from '../../types/APIResponse';

@Controller('matches')
@ApiTags('matches')
export default class MatchController {
    @Get()
    findAll(): APIResponse<string> {
        return {
            message: 'This action returns all matches',
            status: StatusCodes.OK,
        };
    }

    @Get(':userId')
    findByUserId(@Param('userId') userId: string): APIResponse<string> {
        return {
            message: `This action returns the profile for user ${userId}.`,
            status: StatusCodes.OK,
        };
    }
}
