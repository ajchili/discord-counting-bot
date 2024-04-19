import { CommandInteraction, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder } from "discord.js";
import { command as pingCommand } from "./ping.js"

export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

export const commands: Command[] = [pingCommand]
export const jsonCommands = commands.map(command => command.data.toJSON())