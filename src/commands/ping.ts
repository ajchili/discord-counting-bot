import { type CommandInteraction, SlashCommandBuilder } from "discord.js";
import type { Command } from "./index.js"

export const command: Command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
    execute: async (interaction: CommandInteraction) => {
        await interaction.reply("pong");
    }
}