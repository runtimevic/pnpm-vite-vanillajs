import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// import  ads  from 'ads-client';
// //const ads = require('ads-client')

// const client = new ads.Client({
//   targetAmsNetId: '127.0.0.1.1.1',
//   targetAdsPort: 851
// })

// client.connect()
//   .then(res => {   
//     console.log(`Connected to the ${res.targetAmsNetId}`)
//     console.log(`Router assigned us AmsNetId ${res.localAmsNetId} and port ${res.localAdsPort}`)

//     return client.disconnect()
//   })
//   .then(() => {
//     console.log('Disconnected')
//   })
//   .catch(err => {
//     console.log('Something failed:', err)
//   })

// /*
// Example console output:

// Connected to the 127.0.0.1.1.1
// Router assigned us AmsNetId 192.168.1.1.1.1 and port 36837
// Disconnected
// */

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
