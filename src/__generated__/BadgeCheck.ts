/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BadgeCheck
// ====================================================

export interface BadgeCheck_me_can {
  __typename: "UserCan";
  set_custom_badge: boolean;
}

export interface BadgeCheck_me {
  __typename: "Me";
  id: number;
  custom_badge: string | null;
  badge: string | null;
  can: BadgeCheck_me_can;
}

export interface BadgeCheck {
  /**
   * The current logged in user
   */
  me: BadgeCheck_me | null;
}
