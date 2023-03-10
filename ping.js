const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check the bot\'s latency'),
  async execute(interaction) {
    const pingEmbed = new EmbedBuilder()
      .setColor('#2F3136')
      .setTitle('š Pong!')
      .setDescription(`š» Bot Latency: ${Date.now() - interaction.createdTimestamp}ms\nš¤ API Latency: ${Math.round(
        interaction.client.ws.ping
      )}ms`)

    await interaction.reply({ embeds: [pingEmbed], ephemeral: true });
  },
};
