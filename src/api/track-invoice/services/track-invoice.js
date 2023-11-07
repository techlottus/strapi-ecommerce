'use strict';

/**
 * track-invoice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::track-invoice.track-invoice');
