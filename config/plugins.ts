// ./config/plugins.js
module.exports = ({ env }) => ({
  // 1. Configuración esencial de Strapi
  app: {
    keys: env.array('APP_KEYS', ['anpoQA7S2w6nmf57GhYz7w==', 'gOqzh7Hmhf0OyESqEZ05qw==', 'Fv69QYAXEYNJwf8ytMk/8w==', '2y/Ej+Ac5zkK0dZNujU+Kw==']),
  },

  // 2. Plugin de Users & Permissions (Autenticación JWT)
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '9ApGolKktegvgR6O/jEELA=='), // Usa ADMIN_JWT_SECRET como fallback
    },
  },

  // 3. Seguridad del panel de administración
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9ApGolKktegvgR6O/jEELA=='),
    },
  },

  // 4. API y Transfer Tokens (para despliegues)
  api: {
    salt: env('API_TOKEN_SALT', 'WpAJ8f6Tvf4XwPyHryIjNA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '6eSX0QEV7k5sPAI2jB3HhQ=='),
    },
  },

  // 5. Configuración de PostgreSQL (opcional, recomendado en database.js)
  'strapi-connector-bookshelf': {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', 'dpg-d0gc012dbo4c73b85ujg-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'aquacoidb'),
      user: env('DATABASE_USERNAME', 'aquacoi'),
      password: env('DATABASE_PASSWORD', 'nRGg5paXRcvBFZKQlUCbIDGrtBdXgzHu'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    options: {
      ssl: env.bool('DATABASE_SSL', true),
    },
  },

  // 6. Configuración adicional recomendada
  upload: {
    config: {
      provider: 'local', // Cambia a 'cloudinary', 'aws-s3', etc. si necesitas
      sizeLimit: 250 * 1024 * 1024, // 250MB
    },
  },
});