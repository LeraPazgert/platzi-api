import { IProductCreateRequest } from './IProductCreateRequest';

export interface IProductFormData extends IProductCreateRequest {
  newImage: File;
}
