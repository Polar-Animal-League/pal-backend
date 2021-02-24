import HttpException from './HttpException';

class ConflictException extends HttpException {
    constructor() {
        super(409, "Conflict");
    }
}

export default ConflictException;