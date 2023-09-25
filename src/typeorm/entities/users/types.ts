export enum ROLE_TYPE {
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  HR = 'HR',
}

export enum ABSENT_REQUEST {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}
export enum DEVICE_STATUS {
  AVAILABLE = 'AVAILABLE',
  BORROWED = 'BORROWED',
}

export type Language = `${Languages}`;

enum Languages {
  En = 'en-US',
  Sl = 'sl-SL',
}
