'use strict';

/**
 * store-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::store-transaction.store-transaction');
