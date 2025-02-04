/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Object
// ====================================================

export interface Object_Comment {
  __typename: "Comment";
}

export interface Object_Attachment_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface Object_Attachment_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Attachment_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Attachment_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Attachment_connection_user | null;
}

export interface Object_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Attachment {
  __typename: "Attachment";
  href: string;
  counts: Object_Attachment_counts;
  id: number;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  file_extension: string | null;
  updated_at: string;
  user: Object_Attachment_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Attachment_connection | null;
  source: Object_Attachment_source | null;
}

export interface Object_Channel_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface Object_Channel_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface Object_Channel_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type Object_Channel_owner = Object_Channel_owner_Group | Object_Channel_owner_User;

export interface Object_Channel_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Channel_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Channel_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Channel_connection_user | null;
}

export interface Object_Channel_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Channel {
  __typename: "Channel";
  href: string;
  id: number;
  truncatedTitle: string;
  visibility: string;
  updated_at: string;
  counts: Object_Channel_counts;
  owner: Object_Channel_owner;
  label: string;
  title: string;
  user: Object_Channel_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Channel_connection | null;
  source: Object_Channel_source | null;
}

export interface Object_Embed_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface Object_Embed_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Embed_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Embed_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Embed_connection_user | null;
}

export interface Object_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Embed {
  __typename: "Embed";
  href: string;
  counts: Object_Embed_counts;
  id: number;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  updated_at: string;
  user: Object_Embed_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Embed_connection | null;
  source: Object_Embed_source | null;
}

export interface Object_Image_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface Object_Image_original_dimensions {
  __typename: "Dimensions";
  width: number | null;
  height: number | null;
}

export interface Object_Image_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Image_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Image_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Image_connection_user | null;
}

export interface Object_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Image {
  __typename: "Image";
  href: string;
  counts: Object_Image_counts;
  id: number;
  title: string;
  alt_text: string | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  original_dimensions: Object_Image_original_dimensions | null;
  updated_at: string;
  user: Object_Image_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Image_connection | null;
  source: Object_Image_source | null;
}

export interface Object_Link_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface Object_Link_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Link_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Link_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Link_connection_user | null;
}

export interface Object_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Link {
  __typename: "Link";
  href: string;
  counts: Object_Link_counts;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  external_url: string | null;
  content: string | null;
  updated_at: string;
  user: Object_Link_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Link_connection | null;
  source_url: string | null;
  id: number;
  source: Object_Link_source | null;
}

export interface Object_Text_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface Object_Text_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Text_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface Object_Text_connection {
  __typename: "Connection";
  created_at: string;
  user: Object_Text_connection_user | null;
}

export interface Object_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface Object_Text {
  __typename: "Text";
  href: string;
  counts: Object_Text_counts;
  id: number;
  title: string;
  content: string;
  raw: string;
  updated_at: string;
  user: Object_Text_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: Object_Text_connection | null;
  source: Object_Text_source | null;
}

export interface Object_Group {
  __typename: "Group";
  id: number;
  name: string;
  href: string;
  visibility: string;
  label: string;
  initials: string;
  avatar: string | null;
}

export interface Object_User {
  __typename: "User";
  id: number;
  name: string;
  href: string;
  label: string;
  initials: string;
  avatar: string | null;
}

export type Object = Object_Comment | Object_Attachment | Object_Channel | Object_Embed | Object_Image | Object_Link | Object_Text | Object_Group | Object_User;
