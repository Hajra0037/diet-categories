'use strict';

/**
 * day-plan service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::day-plan.day-plan');
