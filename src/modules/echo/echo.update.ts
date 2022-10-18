import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { TelegrafContext } from '@interfaces/context.interface';

@Update()
export class echoUpdate {
  @Start()
  async start(@Ctx() ctx: TelegrafContext): Promise<void> {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext): Promise<void> {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx: TelegrafContext): Promise<void> {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx: TelegrafContext): Promise<void> {
    await ctx.reply('Hey there');
  }
}
