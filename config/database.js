module.exports = ({ env }) => {
  const ssl = process.env.NODE_ENV === 'development' ? false : true;

  return {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl,
      },
    },
  },
}};
