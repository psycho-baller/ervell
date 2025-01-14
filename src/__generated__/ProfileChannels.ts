/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfileChannels
// ====================================================

export interface ProfileChannels_Group_channels_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface ProfileChannels_Group_channels_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface ProfileChannels_Group_channels_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type ProfileChannels_Group_channels_owner = ProfileChannels_Group_channels_owner_Group | ProfileChannels_Group_channels_owner_User;

export interface ProfileChannels_Group_channels {
  __typename: "Channel";
  id: number;
  href: string;
  truncatedTitle: string;
  visibility: string;
  updated_at: string;
  counts: ProfileChannels_Group_channels_counts;
  owner: ProfileChannels_Group_channels_owner;
  label: string;
}

export interface ProfileChannels_Group_counts {
  __typename: "GroupCounts";
  channels: number;
}

export interface ProfileChannels_Group {
  __typename: "Group";
  id: number;
  name: string;
  channels: ProfileChannels_Group_channels[];
  counts: ProfileChannels_Group_counts;
}

export interface ProfileChannels_User_counts {
  __typename: "UserCounts";
  channels: number;
}

export interface ProfileChannels_User_channels_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface ProfileChannels_User_channels_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface ProfileChannels_User_channels_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type ProfileChannels_User_channels_owner = ProfileChannels_User_channels_owner_Group | ProfileChannels_User_channels_owner_User;

export interface ProfileChannels_User_channels {
  __typename: "Channel";
  id: number;
  href: string;
  truncatedTitle: string;
  visibility: string;
  updated_at: string;
  counts: ProfileChannels_User_channels_counts;
  owner: ProfileChannels_User_channels_owner;
  label: string;
}

export interface ProfileChannels_User {
  __typename: "User";
  id: number;
  name: string;
  counts: ProfileChannels_User_counts;
  channels: ProfileChannels_User_channels[] | null;
}

export type ProfileChannels = ProfileChannels_Group | ProfileChannels_User;
