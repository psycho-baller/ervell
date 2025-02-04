/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeedGroupObjects
// ====================================================

export interface FeedGroupObjects_objects_Comment {
  __typename: "Comment";
}

export interface FeedGroupObjects_objects_Attachment_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface FeedGroupObjects_objects_Attachment_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Attachment_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Attachment_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Attachment_connection_user | null;
}

export interface FeedGroupObjects_objects_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Attachment {
  __typename: "Attachment";
  href: string;
  counts: FeedGroupObjects_objects_Attachment_counts;
  id: number;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  file_extension: string | null;
  updated_at: string;
  user: FeedGroupObjects_objects_Attachment_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Attachment_connection | null;
  source: FeedGroupObjects_objects_Attachment_source | null;
}

export interface FeedGroupObjects_objects_Channel_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface FeedGroupObjects_objects_Channel_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface FeedGroupObjects_objects_Channel_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type FeedGroupObjects_objects_Channel_owner = FeedGroupObjects_objects_Channel_owner_Group | FeedGroupObjects_objects_Channel_owner_User;

export interface FeedGroupObjects_objects_Channel_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Channel_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Channel_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Channel_connection_user | null;
}

export interface FeedGroupObjects_objects_Channel_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Channel {
  __typename: "Channel";
  href: string;
  id: number;
  truncatedTitle: string;
  visibility: string;
  updated_at: string;
  counts: FeedGroupObjects_objects_Channel_counts;
  owner: FeedGroupObjects_objects_Channel_owner;
  label: string;
  title: string;
  user: FeedGroupObjects_objects_Channel_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Channel_connection | null;
  source: FeedGroupObjects_objects_Channel_source | null;
}

export interface FeedGroupObjects_objects_Embed_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface FeedGroupObjects_objects_Embed_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Embed_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Embed_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Embed_connection_user | null;
}

export interface FeedGroupObjects_objects_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Embed {
  __typename: "Embed";
  href: string;
  counts: FeedGroupObjects_objects_Embed_counts;
  id: number;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  updated_at: string;
  user: FeedGroupObjects_objects_Embed_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Embed_connection | null;
  source: FeedGroupObjects_objects_Embed_source | null;
}

export interface FeedGroupObjects_objects_Image_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface FeedGroupObjects_objects_Image_original_dimensions {
  __typename: "Dimensions";
  width: number | null;
  height: number | null;
}

export interface FeedGroupObjects_objects_Image_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Image_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Image_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Image_connection_user | null;
}

export interface FeedGroupObjects_objects_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Image {
  __typename: "Image";
  href: string;
  counts: FeedGroupObjects_objects_Image_counts;
  id: number;
  title: string;
  alt_text: string | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  original_dimensions: FeedGroupObjects_objects_Image_original_dimensions | null;
  updated_at: string;
  user: FeedGroupObjects_objects_Image_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Image_connection | null;
  source: FeedGroupObjects_objects_Image_source | null;
}

export interface FeedGroupObjects_objects_Link_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface FeedGroupObjects_objects_Link_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Link_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Link_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Link_connection_user | null;
}

export interface FeedGroupObjects_objects_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Link {
  __typename: "Link";
  href: string;
  counts: FeedGroupObjects_objects_Link_counts;
  title: string;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  external_url: string | null;
  content: string | null;
  updated_at: string;
  user: FeedGroupObjects_objects_Link_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Link_connection | null;
  source_url: string | null;
  id: number;
  source: FeedGroupObjects_objects_Link_source | null;
}

export interface FeedGroupObjects_objects_Text_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface FeedGroupObjects_objects_Text_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Text_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface FeedGroupObjects_objects_Text_connection {
  __typename: "Connection";
  created_at: string;
  user: FeedGroupObjects_objects_Text_connection_user | null;
}

export interface FeedGroupObjects_objects_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface FeedGroupObjects_objects_Text {
  __typename: "Text";
  href: string;
  counts: FeedGroupObjects_objects_Text_counts;
  id: number;
  title: string;
  content: string;
  raw: string;
  updated_at: string;
  user: FeedGroupObjects_objects_Text_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: FeedGroupObjects_objects_Text_connection | null;
  source: FeedGroupObjects_objects_Text_source | null;
}

export interface FeedGroupObjects_objects_Group {
  __typename: "Group";
  id: number;
  name: string;
  href: string;
  visibility: string;
  label: string;
  initials: string;
  avatar: string | null;
}

export interface FeedGroupObjects_objects_User {
  __typename: "User";
  id: number;
  name: string;
  href: string;
  label: string;
  initials: string;
  avatar: string | null;
}

export type FeedGroupObjects_objects = FeedGroupObjects_objects_Comment | FeedGroupObjects_objects_Attachment | FeedGroupObjects_objects_Channel | FeedGroupObjects_objects_Embed | FeedGroupObjects_objects_Image | FeedGroupObjects_objects_Link | FeedGroupObjects_objects_Text | FeedGroupObjects_objects_Group | FeedGroupObjects_objects_User;

export interface FeedGroupObjects {
  __typename: "DeedGroup";
  objects: FeedGroupObjects_objects[];
}
