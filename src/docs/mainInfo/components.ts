export const COMPONENTS = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      EditUserInfo: {
        type: 'object',
        properties: {
          username: {
            type: `string`,
            description: `The unique name of the account`,
            example: `ducminh12345`,
          },
          name: {
            type: `string`,
            description: `The full name of the account owner`,
            example: `NDM`,
          },
        },
      },

      ErrorCode400: {
        type: 'object',
        properties: {
          httpStatusCode: {
            type: 'number',
            description: 'HTTP Status Code',
            example: 400,
          },
          typeError: {
            type: 'string',
            description: 'Type Of Error',
            example: 'Raw',
          },
          message: {
            type: `string`,
            description: `Bad Request`,
            example: `You can't view`,
          },
        },
      },
      ErrorCode401: {
        type: 'object',
        properties: {
          httpStatusCode: {
            type: 'number',
            description: 'HTTP Status Code',
            example: 401,
          },
          typeError: {
            type: 'string',
            description: 'Type Of Error',
            example: 'Raw',
          },
          message: {
            type: `string`,
            description: `JWT error`,
            example: `You can't view the list of requests without authorization`,
          },
        },
      },
      ErrorCode404: {
        type: 'Object',
        properties: {
          httpStatusCode: {
            type: 'number',
            description: 'HTTP status code',
            example: 404,
          },
          typeError: {
            type: 'string',
            description: 'Type of error',
            example: 'Raw',
          },
          message: {
            type: 'string',
            description: 'Not Found',
            example: '404 Not Found',
          },
        },
      },

      authentication: {
        type: 'Object',
        properties: {
          email: {
            type: 'string',
            example: 'duongdaoq@gmail.com',
            description: 'Username can not null',
          },
          password: {
            type: 'string',
            example: 'Duck130603@',
            description: 'Password can not null',
          },
        },
      },

      register: {
        type: 'Object',
        properties: {
          email: {
            type: 'string',
            example: '',
            description: 'Username can not null',
          },
          password: {
            type: 'string',
            example: '',
            description: 'Password can not null',
          },
          passwordConfirm: {
            type: 'string',
            example: '',
            description: 'Please confirm password',
          },
        },
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '',
            description: 'uuid',
          },
          email: {
            type: 'string',
            example: '',
            description: 'Email can not null',
          },
          password: {
            type: 'string',
            example: '',
            description: 'Password can not null',
          },
          username: {
            type: 'string',
            example: '',
            description: 'Username can be null',
          },
          name: {
            type: 'string',
            example: '',
            description: 'Name can be null',
          },
          phone_number: {
            type: 'number',
            example: '',
            description: 'Phone Number can be null',
          },
          address: {
            type: 'string',
            example: '',
            description: 'Address can be null',
          },
          role: {
            type: 'enum',
            example: '',
            description: 'Role can not null',
          },
        },
      },
    },
  },
};
