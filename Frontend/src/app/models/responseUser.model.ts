import {UserModel} from './user.model';

export interface Response {
  getUsers: UserModel[];
}