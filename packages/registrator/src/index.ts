import { jsonCommands } from "@discord-counting-bot/core";
import { DiscordClient } from "./client.js";

try {
  const discordClient = new DiscordClient();
  const existingCommands = await discordClient.getCommands();

  console.log("Started refreshing application (/) commands.");

  await discordClient.updateCommands(Object.values(jsonCommands));

  console.log("Successfully reloaded application (/) commands.");

  const updatedCommands = await discordClient.getCommands();
  const operationDiff = updatedCommands.map(({ id, name, ...rest }) => ({
    id,
    name,
    ...rest,
    isNew: !existingCommands.find((command) => command.name === name),
  }));
  console.log(operationDiff);
} catch (error) {
  console.error(error);
}
