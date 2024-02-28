import type { StatusCodes } from 'http-status-codes';

export default interface APIResponse<T> {
    item?: T;
    items?: T[];
    errors?: string[];
    message: string;
    status: StatusCodes;
}
