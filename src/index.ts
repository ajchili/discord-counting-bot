import { createRequire } from "node:module";
import { REST, Routes } from 'discord.js';

import { jsonCommands } from "./commands/index.js"

const require = createRequire(import.meta.url);
const { TOKEN, CLIENT_ID } = require("./config.json");

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: jsonCommands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}