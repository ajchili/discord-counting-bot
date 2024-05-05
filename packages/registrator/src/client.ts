import { REST, Routes, APIApplicationCommand } from "discord.js";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { Command } from "@discord-counting-bot/core";

const require = createRequire(import.meta.url);
const { TOKEN, CLIENT_ID } = require(
  resolve(import.meta.dirname, "./config.json")
);

export class DiscordClient {
  private restClient: REST;

  constructor(
    token: string = TOKEN,
    private clientId: string = CLIENT_ID
  ) {
    this.restClient = new REST({}).setToken(token);
  }

  async getCommands(): Promise<APIApplicationCommand[]> {
    return (await this.restClient.get(
      Routes.applicationCommands(this.clientId),
      {}
    )) as APIApplicationCommand[];
  }

  async updateCommands(commands: Command[]) {
    const body = commands.reduce(
      (_commands, _command) => _commands.concat(_command.builder.toJSON()),
      new Array()
    );

    return await this.restClient.put(
      Routes.applicationCommands(this.clientId),
      { body }
    );
  }
}
