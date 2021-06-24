
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'aasdf',
          password: 'asdf',
          email: 'adsf@email.com',
        },
        {
          username: 'aasdf2',
          password: 'asdf2',
          email: 'adsf@email2.com',
        }
      ]);
    });
};
