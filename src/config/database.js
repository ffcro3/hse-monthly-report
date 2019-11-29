module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'empregapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
