/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetConnectionSelection
// ====================================================

export interface GetConnectionSelection_connection_can {
  __typename: "ConnectionCan";
  manage: boolean;
}

export interface GetConnectionSelection_connection {
  __typename: "Connection";
  id: number;
  selected: boolean;
  can: GetConnectionSelection_connection_can;
}

export interface GetConnectionSelection {
  connection: GetConnectionSelection_connection | null;
}

export interface GetConnectionSelectionVariables {
  id: string;
}
