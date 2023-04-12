import fetch from 'node-fetch'
import sleep from 'sleep'

import dotenv from 'dotenv'
dotenv.config()

// Limite de requisições para o Target
// const limit = 1
const limit = 100000000000000

// Configs Telegram
const tokenTelegram = process.env.TOKENTELEGRAM
const chatIdTelegram = process.env.CHATID

// Função que realiza a requisição para o site
async function newRequest(url) {
    try {
        const res = await fetch(url)

        // Time caso precisar
        sleep.msleep(250)

        console.log(`${url} -> ${res.status} -> ${res.statusText}`)

        if (res.status == 200 || res.status == 201) {
            const urlSendMessageTelegram = `https://api.telegram.org/bot${tokenTelegram}/sendMessage`

            const messageTelegram = {
                text: `URL -> ${url}\nCódigo HTTP -> ${res.status}`,
                chat_id: chatIdTelegram
            }

            async function sendMessageTelegram(messageForTelegram) {
                await fetch(urlSendMessageTelegram, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(messageTelegram),
                })
            }
            sendMessageTelegram(messageTelegram)

        }

    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('request was aborted');
        }
    }
}

// Função que gera as palavras aleatórias
function generateWords(sizeWord) {
    var wordRandom = '';

    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // var caracteres = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < sizeWord; i++) {
        wordRandom += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return wordRandom;
}

// For que deixa o código rodando
for (let i = 0; i < limit; i++) {

    console.log(`Tentativa Nº${i}`)

    // Seleciona quantas letra quer no subdomínio
    const subdomain = generateWords(5)

    const urlTarget = 'https://bit.ly/'

    // Para teste
    const url = `${urlTarget}${subdomain}`
    // const url = `https://www.okatech.dev/about`

    await newRequest(url)
}
