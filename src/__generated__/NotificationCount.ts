/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NotificationCount
// ====================================================

export interface NotificationCount_counts {
  __typename: "MeCounts";
  notifications: number;
}

export interface NotificationCount {
  __typename: "Me";
  id: number;
  counts: NotificationCount_counts;
}
