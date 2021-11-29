// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import 

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }

// const multer  = require('multer')
// const storage = multer.memoryStorage()
// const upload = multer({ 
//     storage : storage,
//     limits : {
//         fileSize : 255000
//     }
// })

// let ImageUpload = upload.single('avatar')  
// export default  ImageUpload