let quotes = document.getElementById('quotes');
let d_quotes = [
'"ज़िन्दगी साइकिल चलाने के जैसे हैं। बैलेंस बनाये रखने के लिए, आप को चलते रहना होता हैं।"',
'"जीवन का आनंद लेने के लिए सबसे जरूरी यह है की आप खुश रहे, बस यही मायने रखता हैं।"',
'"ये उम्मीद करना कि दुनिया आपके साथ अच्छा व्यवहार करेगी क्योंकि आप अच्छे हैं, ये उम्मीद करने की तरह है कि सांड आपको इसलिए नहीं दौड़ायेगा क्योंकि आप शाकाहारी हैं।"',
'"नए सबक सीखने के लिए हमेशा तैयार रहे, भले ही वह सबक आपके कल सीखे हुए सबक का खंडन ही क्यों न करते हो।"',
'" जीवन में सबसे कठिन कार्य यह है की कौन से पुल को पार करें और कौन से पुल को नष्ट करें।"',
'"अपनी ख़राब आदतों पर विजयी हासिल करने से ज्यादा आनंद इस जीवन में और कुछ नही होता।"',
'" जो इंसान हार के डर से कभी आगे नही बढ़ता, वो इंसान जीवन में कभी कामयाब नही हो सकता।"',
'"सच्चे इंसान को झूठे इंसान से अक्सर ज्यादा सफाई देनी पड़ती हैं।"',
' "आप को डुबोने के लिए दुनिया में ऐसे लोग भी बैठे होंगे। जिनको तैरना ख़ुद आपने ही सिखाया होगा।"',
' "खुद से नहीं हारोगे, तो अवश्य जीतोगे।',
'"वक़्त-वक़्त की बात है, आज आपका है तो उड़ लीजिये। कल हमारा होगा तो उड़ा देंगे।"',
'"धैर्य रखिये! आसान बनने से पहले सभी चीजें कठिन होती हैं।"',
' "ज़िन्दगी में कुछ फैसले बहुत सख्त होते है और यही फैसले ज़िन्दगी का रुख बदल देते हैं।"',


]
function randomquotes() {
    quotes.innerText= d_quotes[(Math.floor(Math.random()*d_quotes.length))]
}