'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      { nome: 'John', sobrenome: 'Doe', idade: 26, altura: '1,82' },
      { nome: 'Pedro', sobrenome: 'Santos', idade: 20, altura: '1,74' },
      { nome: 'Luiza', sobrenome: 'Souza', idade : 20, altura: '1,65'},
      { nome: 'Julia', sobrenome: 'Dias', idade: 22, altura: '1,60' },
      { nome: 'Leticia', sobrenome: 'Santos', idade: 24, altura: '1,70' },
      { nome: 'Juliana', sobrenome: 'Assunção', idade: 25, altura: '1,59'},
      { nome: 'Talia', sobrenome: 'Rodrigues', idade: 22, altura: '1,66'},
      { nome: 'Katia', sobrenome: 'Pollon', idade: 28, altura:'1,71' },

    ], {});
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
