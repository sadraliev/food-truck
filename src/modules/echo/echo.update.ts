import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { TelegrafContext } from '@interfaces/context.interface';
import { Markup } from 'telegraf';
import { ConfigService } from '@nestjs/config';

@Update()
export class echoUpdate {
  constructor(private readonly configService: ConfigService) {}
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
    // await ctx.reply('Hey there', {} );
    await ctx.reply('<b>Welcome</b> to <i>Wonderland!</i>', {
      parse_mode: 'HTML',
      ...Markup.inlineKeyboard([
        Markup.button.webApp(
          'Enter',
          this.configService.get<string>('WEB_APP_URL'),
        ),
      ]),
    });
  }
}
