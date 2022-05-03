const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.token)

client.on('ready', async () => {
  
 client.user.setActivity(`Tec | tec#1000`, { type:'WATCHING' })
  
  console.log(`Tec |`)
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);


//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Destek/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Destek komutu Yükleniyor...`);
    files.forEach(f => {

        let props = require(`./Destek/${f}`);
        log(`Destek Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Destek/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Ekonomi/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Ekonomi komutu Yükleniyor...`);
    files.forEach(f => {

        let props = require(`./Ekonomi/${f}`);
        log(`Ekonomi Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Ekonomi/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Oyunlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Oyun komutu Yükleniyor...`);
    files.forEach(f => {
        let props = require(`./Oyunlar/${f}`);
        log(`Oyun Komutu Yüklendi: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Oyunlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
