export interface Post {
  id: string;
  name: string;
  enrollmentNo: string;
  phoneNumber: string;
  email: string;
}

export interface QueryParams {
  filter?: number;
  search?: string;
  pageNumber?: number;
  pageSize?: number;
  matterId?: string;
  folderId?: string;
  fileUniqueName?: string;
  id?: string;
  taskId?: string;
  month?: number;
  year?: number;
  [key: string]: any;
}
