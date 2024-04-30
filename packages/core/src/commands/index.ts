import { SlashCommandBuilder } from "discord.js";
export { command as CountCommand } from "./count.js";
export { command as PingCommand } from "./ping.js";

export interface Command {
  builder: SlashCommandBuilder;
}
