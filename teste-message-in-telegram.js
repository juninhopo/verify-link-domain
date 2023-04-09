import dotenv from 'dotenv'
dotenv.config()

const tokenTelegram = process.env.TOKENTELEGRAM
const chatIdTelegram = process.env.CHATID


const params = {
    text: 'teste',
    chat_id: chatIdTelegram
}

async function sendMessageTelegram() {
    await fetch(`https://api.telegram.org/bot${tokenTelegram}/sendMessage`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(params),
    })
}

sendMessageTelegram()