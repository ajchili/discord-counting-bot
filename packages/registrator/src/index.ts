import { jsonCommands } from "@discord-counting-bot/core";
import { REST, Routes } from "discord.js";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const { TOKEN, CLIENT_ID } = require(
  resolve(import.meta.dirname, "./config.json")
);

const rest = new REST({}).setToken(TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  const body = Object.values(jsonCommands).reduce(
    (commands, command) => commands.concat(command.builder.toJSON()),
    new Array()
  );

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
