import { SlashCommandBuilder } from "discord.js";
export { command as PingCommand } from "./ping.js";

export interface Command {
  data: SlashCommandBuilder;
}
