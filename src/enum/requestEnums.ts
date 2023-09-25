export enum ABSENT_REQUEST {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export type IIsAccepted = `${ABSENT_REQUEST}`;
