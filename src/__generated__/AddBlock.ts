/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AddBlock
// ====================================================

export interface AddBlock_can {
  __typename: "ChannelCan";
  add_to: boolean | null;
}

export interface AddBlock {
  __typename: "Channel";
  can: AddBlock_can | null;
  visibility: string | null;
}