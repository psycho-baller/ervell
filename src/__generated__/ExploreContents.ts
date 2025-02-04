/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchType, SearchSorts, BlockFilterEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: ExploreContents
// ====================================================

export interface ExploreContents_contents_Attachment_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Attachment_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Attachment_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Attachment_connection_user | null;
}

export interface ExploreContents_contents_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Attachment_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_Attachment {
  __typename: "Attachment";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Attachment_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Attachment_connection | null;
  source: ExploreContents_contents_Attachment_source | null;
  counts: ExploreContents_contents_Attachment_counts;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  file_extension: string | null;
}

export interface ExploreContents_contents_Embed_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Embed_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Embed_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Embed_connection_user | null;
}

export interface ExploreContents_contents_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Embed_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_Embed {
  __typename: "Embed";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Embed_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Embed_connection | null;
  source: ExploreContents_contents_Embed_source | null;
  counts: ExploreContents_contents_Embed_counts;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
}

export interface ExploreContents_contents_Image_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Image_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Image_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Image_connection_user | null;
}

export interface ExploreContents_contents_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Image_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_Image_original_dimensions {
  __typename: "Dimensions";
  width: number | null;
  height: number | null;
}

export interface ExploreContents_contents_Image {
  __typename: "Image";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Image_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Image_connection | null;
  source: ExploreContents_contents_Image_source | null;
  counts: ExploreContents_contents_Image_counts;
  alt_text: string | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  original_dimensions: ExploreContents_contents_Image_original_dimensions | null;
}

export interface ExploreContents_contents_Link_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Link_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Link_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Link_connection_user | null;
}

export interface ExploreContents_contents_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Link_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_Link {
  __typename: "Link";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Link_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Link_connection | null;
  source: ExploreContents_contents_Link_source | null;
  counts: ExploreContents_contents_Link_counts;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  external_url: string | null;
  content: string | null;
  source_url: string | null;
}

export interface ExploreContents_contents_PendingBlock_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_PendingBlock_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_PendingBlock_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_PendingBlock_connection_user | null;
}

export interface ExploreContents_contents_PendingBlock_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_PendingBlock_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_PendingBlock {
  __typename: "PendingBlock";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_PendingBlock_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_PendingBlock_connection | null;
  source: ExploreContents_contents_PendingBlock_source | null;
  counts: ExploreContents_contents_PendingBlock_counts;
}

export interface ExploreContents_contents_Text_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Text_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Text_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Text_connection_user | null;
}

export interface ExploreContents_contents_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Text_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface ExploreContents_contents_Text {
  __typename: "Text";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Text_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Text_connection | null;
  source: ExploreContents_contents_Text_source | null;
  counts: ExploreContents_contents_Text_counts;
  content: string;
  raw: string;
}

export interface ExploreContents_contents_Channel_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Channel_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface ExploreContents_contents_Channel_connection {
  __typename: "Connection";
  created_at: string;
  user: ExploreContents_contents_Channel_connection_user | null;
}

export interface ExploreContents_contents_Channel_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ExploreContents_contents_Channel_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface ExploreContents_contents_Channel_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface ExploreContents_contents_Channel_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type ExploreContents_contents_Channel_owner = ExploreContents_contents_Channel_owner_Group | ExploreContents_contents_Channel_owner_User;

export interface ExploreContents_contents_Channel {
  __typename: "Channel";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: ExploreContents_contents_Channel_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ExploreContents_contents_Channel_connection | null;
  source: ExploreContents_contents_Channel_source | null;
  truncatedTitle: string;
  visibility: string;
  counts: ExploreContents_contents_Channel_counts;
  owner: ExploreContents_contents_Channel_owner;
  label: string;
}

export type ExploreContents_contents = ExploreContents_contents_Attachment | ExploreContents_contents_Embed | ExploreContents_contents_Image | ExploreContents_contents_Link | ExploreContents_contents_PendingBlock | ExploreContents_contents_Text | ExploreContents_contents_Channel;

export interface ExploreContents {
  contents: ExploreContents_contents[];
}

export interface ExploreContentsVariables {
  type?: SearchType | null;
  page?: number | null;
  per?: number | null;
  sort?: SearchSorts | null;
  seed?: number | null;
  block_filter?: BlockFilterEnum | null;
  timestamp?: any | null;
}
