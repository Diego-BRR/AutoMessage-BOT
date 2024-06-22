const { EmbedBuilder } = require('discord.js');

const TARGET_CHANNEL_ID = '1248288668456587265'; // Remplace par l'ID de ton salon
const SERVER_EMOJI = '<:github:1254060939918184570>'; // Remplace par ton emoji personnalisé

module.exports = {
    init: (client) => {
        client.on('messageCreate', message => {
            if (message.channel.id === TARGET_CHANNEL_ID && !message.author.bot) {
                const embed = new EmbedBuilder()
                    .setTitle('Bienvenue dans le salon de partage de PROJET !')
                    .setDescription(`Veuillez respecter les règles du salon : partagez des projets et ne discutez pas ici => <#1248290085703647263>`)
                    .setColor(0x0099ff)
                    .addFields(
                        { name: 'Comment partager ?', value: `${SERVER_EMOJI} Via GitHub`, inline: true }
                    )
                    .setFooter({ text: 'INFO DEV - Message 1' });

                message.channel.send({ embeds: [embed] });
            }
        });
    }
};
