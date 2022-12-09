import { IProductCreateRequest } from './IProductCreateRequest';

export interface IProductAddFormData extends IProductCreateRequest {
  newImage: File;
  id: string;
}
