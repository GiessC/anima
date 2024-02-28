import type { HttpStatus } from '@nestjs/common';

export default interface APIResponse<T> {
    item?: T;
    items?: T[];
    errors?: string[];
    message: string;
    status: HttpStatus;
}
