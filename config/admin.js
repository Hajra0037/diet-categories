module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf1456cc1c9aea51c0fd1da703e93dbf'),
  },
});
