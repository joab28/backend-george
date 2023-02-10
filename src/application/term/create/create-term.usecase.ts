import { Term } from '../../../domain/term/term';
import { TermRepository } from '../../../domain/term/term.repository';

export class CreateTermUseCase {
  constructor(private termRepository: TermRepository) {}

  async execute(termData: Term): Promise<any> {
    return await this.termRepository.create(termData);
  }
}