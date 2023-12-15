import type { Schema, Attribute } from '@strapi/strapi';

export interface TrackingRequests extends Schema.Component {
  collectionName: 'components_tracking_requests';
  info: {
    displayName: 'requests';
  };
  attributes: {
    vendor: Attribute.String;
    request: Attribute.String;
  };
}

export interface TrackingResponses extends Schema.Component {
  collectionName: 'components_tracking_responses';
  info: {
    displayName: 'responses';
  };
  attributes: {
    vendor: Attribute.String;
    response: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tracking.requests': TrackingRequests;
      'tracking.responses': TrackingResponses;
    }
  }
}
