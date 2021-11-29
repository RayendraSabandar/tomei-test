// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import FormData from 'form-data'
// import axios from 'axios' 

// @Injectable()
// export class ImageKit implements NestMiddleware {
//     async use(req: Request, res: Response, next: NextFunction) {
//     if(['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg'].includes(req.file.mimetype)){
//         var form = new FormData()
//         const encode = req.
//         const encode = req.file.buffer.toString('base64')
//         form.append('file', encode)
//         form.append('fileName', req.file.originalname)
//         const privateKey = Buffer.from(process.env.privateKey+":").toString('base64')
//         const result = await axios({
//           url: 'https://upload.imagekit.io/api/v1/files/upload',
//           method: 'post',
//           data: form,
//           headers: {
//             ...form.getHeaders(),
//             Authorization: `Basic ${privateKey}`
//           }
//         });
//         if(!result){
//           throw({
//             name: 'invalidData',
//             code: 404,
//             message: '404 Data not found'
//           })
//         } else {
//           req.body.imgUrl = result.data.url
//           next()
//         }
//       } else {
//         throw({
//           name : 'File type error',
//           code : 400,
//           message : 'File type must be one of the following [JPEG / JPG / PNG / SVG / GIF / SVG]'
//         })
//       }
//       next();
//     } 
// }