import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response, Request } from 'express'
import { CustomHttpExceptionResponse, HttpExceptionResponse } from './models/http-exception-response-interface'

@Catch()
export class AllExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost){
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        let status: HttpStatus
        let errorMessage: string

        if(exception instanceof HttpException){
            status = exception.getStatus()
            const errorResponse = exception.getResponse()

            errorMessage = (errorResponse as HttpExceptionResponse).error || exception.message
        } else {
            const errorName = exception.name
            switch (errorName) {
                case 'SequelizeUniqueConstraintError':
                    status = 201
                    errorMessage = 'This email has already been registered. Use another email!'
                    break;
            
                default:
                    status = HttpStatus.INTERNAL_SERVER_ERROR
                    errorMessage = 'Internal server error occurred!'
                    break;
            }
        }
        const errorResponse = this.getErrorResponse(status, errorMessage, request)
        response.status(status).json(errorResponse)
    }

    private getErrorResponse = (status: HttpStatus, errorMessage: string, request: Request):
    CustomHttpExceptionResponse => ({
        statusCode: status,
        error: errorMessage,
        path: request.url,
        method: request.method,
        timeStamp: new Date()
    })
}

