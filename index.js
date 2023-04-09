import { error } from 'console'
import fetch from 'node-fetch'
import sleep from 'sleep'

// Limite de requisições para o Target
const limit = 99999999999

// Função que realiza a requisição para o site
async function newRequest(url) {
    try {
        const res = await fetch(url)

        // sleep.msleep(300)

        console.log(`${url} -> ${res.status} -> ${res.statusText}`)

        if (res.status == 200 || res.status == 201) {

            console.log(`res -> ${url} ALERTA ALERTA ALERTA ALERTA ALERTA`)
            console.log(`res - ${res.status} ALERTA ALERTA ALERTA ALERTA ALERTA`)
        }

    } catch (error) {
        console.log('chegou no error')
        if (error.name === 'AbortError') {
            console.log('request was aborted');
        }
    }
}

// Função que gera as palavras aleatórias
function generateWords(sizeWord) {
    var wordRandom = '';

    // var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var caracteres = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < sizeWord; i++) {
        wordRandom += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return wordRandom;
}

// For que deixa o código rodando
for (let i = 1; i < limit; i++) {

    console.log(`Tentativa Nº${i}`)

    const subdomain = generateWords(5)

    const urlTarget = 'https://www.okatech.dev/'

    const url = `${urlTarget}${subdomain}`

    await newRequest(url)
}
