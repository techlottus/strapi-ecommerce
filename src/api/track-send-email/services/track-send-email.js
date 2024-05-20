'use strict';

/**
 * track-send-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::track-send-email.track-send-email');
