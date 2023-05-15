'use strict';

/**
 * track-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::track-subscription.track-subscription');
