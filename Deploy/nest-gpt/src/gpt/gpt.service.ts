import { Injectable } from '@nestjs/common';
import { UsecasesOrthography } from './use-cases/useCases';
import OpenAI from 'openai';
import { OrthographyDto } from './dtos/orthography.dto';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
  });
  async orthograpyCheck(orthographyDto: OrthographyDto) {
    return await UsecasesOrthography(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
