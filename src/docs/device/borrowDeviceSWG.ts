// import { TAG } from '../mainInfo/tags';

// const DELETE = {
//   delete: {
//     security: [{ bearerAuth: [] }],

//     summary: `Borrow a device`,
//     tags: [TAG.DEVICE.tags.name],
//     description: 'Borrow a device',
//     operationId: 'viewBorrowDevice',
//     parameters: [
//       {
//         name: 'id',
//         in: 'path',
//         schema: {
//           type: 'string',
//           description: 'The tracking information for device id',
//           default: '91d63ad5-2e00-4ab3-97d0-d5351af7e80e',
//           example: '91d63ad5-2e00-4ab3-97d0-d5351af7e80e',
//         },
//         description: 'Fields that filtered the request only by DeviceID',
//         required: true,
//       },
//     ],
//     responses: {
//       200: {
//         description: 'Delete device successfully',
//       },
//       400: {
//         description: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/ErrorCode400',
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };
// export default DELETE;
