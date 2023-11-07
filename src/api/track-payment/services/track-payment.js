'use strict';

/**
 * track-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::track-payment.track-payment');
