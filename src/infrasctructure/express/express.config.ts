import { Router } from 'express';
import { createTermController } from '../../application/term/create/create-term.controller';

export const expressConfig = (router: Router) => {
  router.post('/term', createTermController);
};