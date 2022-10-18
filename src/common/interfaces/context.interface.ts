import { Context } from 'telegraf';

export interface TelegrafContext extends Context {
  userId: number;
}
