import { Injectable } from '@nestjs/common';
import { UsecasesOrthography } from './use-cases/useCases';
import OpenAI from 'openai';
import { OrthographyDto } from './dtos/orthography.dto';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey:
      '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',
  });
  async orthograpyCheck(orthographyDto: OrthographyDto) {
    return await UsecasesOrthography(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
