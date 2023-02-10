import { TermRepository } from '../../domain/term/term.repository';
import { Term } from '../../domain/term/term';
import createReport from 'docx-templates';
import * as fs from 'fs';
import * as path from 'path';

export class TermRepositoryImpl implements TermRepository {

  async create(termData: Term): Promise<any> {
    const filePath = path.join(__dirname, `../../../assets/termos/${termData.termName}.docx`);

    const content = fs.readFileSync(filePath);
    const buffer = await createReport({
      template: content,
      data: termData,
    });

    return new Buffer(buffer);
  }
}