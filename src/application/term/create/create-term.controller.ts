import { Request, Response } from 'express';
import { CreateTermUseCase } from './create-term.usecase';
import { TermRepositoryImpl } from '../../../infrasctructure/term/term.repository.impl';

export const createTermController = async (req: Request, res: Response) => {
  const createUserUseCase = new CreateTermUseCase(new TermRepositoryImpl());

  try {
    const userData = req.body;
    const response = await createUserUseCase.execute(userData);
    
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};