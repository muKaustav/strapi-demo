module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a69afe066c0d08a760f0c00361d9a0b2'),
  },
});
