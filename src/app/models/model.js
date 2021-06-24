'use strict';
// require('dotenv').config();
const { Model } = require('objection');
const Knex = require('knex');
const config = require('../../../knexfile');
const knex = Knex.knex(config[process.env.NODE_ENV]);
Model.knex(knex);
module.exports = Model;