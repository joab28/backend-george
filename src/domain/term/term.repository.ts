import { Term } from './term';

export interface TermRepository {
  create(userData: Term): Promise<any>;
}