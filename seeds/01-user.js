
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Frankie', password: 'pitbull888'},
        {username: 'Blanka', password: 'jungle'},
       ]);
    });
};
