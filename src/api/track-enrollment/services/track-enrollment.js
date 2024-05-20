'use strict';

/**
 * track-enrollment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::track-enrollment.track-enrollment');
