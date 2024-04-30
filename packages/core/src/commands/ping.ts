import { SlashCommandBuilder } from "discord.js";
import type { Command } from "./index.js";

export const command: Command = {
  builder: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
};
