import { error } from 'console'
import fetch from 'node-fetch'
import sleep from 'sleep'

const limit = 999

async function newRequest(url) {
    try {
        const res = await fetch(url)

        // sleep.msleep(150)

        console.log(`${url} -> ${res.status} -> ${res.statusText}`)

        // console.log(res.message.code)

        if (res.status == 200 || res.status == 201) {

            console.log(`res -> ${url}`)
            console.log(`res - ${res.status}`)

        }

    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('request was aborted');
        }
    }
}

for (let i = 0; i < limit; i++) {

    function generateWords(sizeWord) {
        var wordRandom = '';

        // var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var caracteres = 'abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < sizeWord; i++) {
            wordRandom += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return wordRandom;
    }

    const subdomain = generateWords(8)

    const url = `https://www.youtube.com/${subdomain}`

    newRequest(url)
}
