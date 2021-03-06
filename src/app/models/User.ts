export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    province?: string;
  };
  isActive?: boolean;
  registered?: any;
}
