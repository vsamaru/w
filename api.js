var H = {}
var O = {}
var columnify = require('columnify')
                   var init = {
      headers: {
        'content-type': 'application/json',
      }
    }

var { Database } = require('firebase-firestore-lite')
const D = new Database({ projectId: 'iiilll' })
var all = D.ref("L/L")
//var All = D.ref("ALL")
// var list = D.ref("l/LiST")

var date = () => new Date()
    .toISOString()
    .replace(/T/, '')
    .replace(/2021-/, '')
    .replace(/\..+/, '')
    .replace(/:|-/, '')
    .replace(/:|-/, '-')
    .replace(/:/, '')


async function me(ip,body = {}) {
  var m = await M.get("ALL")
  m = pa(m)

  if(ip){
    m[ip] = {date:date()}
    await M.put("ALL",str(m))
  }

body = m
  return JSON.stringify(body,null,4)
}

 var ki = {
    "inline_keyboard": [
        [
        // {
        //     "text": "↑",
        //     "callback_data": "↑"
        // },{
        //     "text": "X",
        //     "callback_data": "X"
        // },
         {
            "text": ":RE",
            "switch_inline_query_current_chat": ""
        }, {
            "text": ":TO",
            "switch_inline_query": ""
        }]
    ]
}
var kii = {
                "resize_keyboard": true,
                "keyboard": [
                    [{
                        "request_location": true,
                        "text": "📍"
                    }
                  //  , "#l", '🔙', "$SSS"
                    ]
                ]
            }

var iq = async () => {

   // var rr = await ref2.get()
   // console.warn(rr)
            var one = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(~~(Math.random() * 844) + 1).padStart(3, '0')}.png`
        var two = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(~~(Math.random() * 844) + 1).padStart(3, '0')}.png`
         var three = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(~~(Math.random() * 844) + 1).padStart(3, '0')}.png`
       ki.inline_keyboard.push([{
            "text": "url",
            "url": "https://pbl6a.vvwv.workers.dev?ll="+ "51,31"
        }])
       var rs = encodeURIComponent(JSON.stringify([     
        {                                                                                                                                                                                                                        
    type: 'article',                                                                                                                                                                                                       
    id: two,                                                                                                                                                                                                                 
    title: 'Charmander (#004)',                                                                                                                                                                                            
    input_message_content: {                                                                                                                                                                                               
      message_text: String(`
*bold \*text*
_italic \*text_
__underline__
~strikethrough~
*bold _italic bold ~italic bold strikethrough~ __underline italic bold___ bold*
[inline URL](http://www.example.com/)
[inline mention of a user](tg://user?id=123456789)
\`inline fixed-width code\`
\`\`\`
pre-formatted fixed-width code block
\`\`\`
\`\`\`python
pre-formatted fixed-width code block written in the Python programming language
\`\`\`
      '*Charmander (#004)*\n' +                                                                                                                                                                              
        'Type: Fire\n' +                                                                                                                                                                                                   
        'Weak against: Ground (2x), Rock (2x), Water (2x)\n' +                                                                                                                                                             
        'Resistant to: Bug (0.5x), Fairy (0.5x), Fire (0.5x), Grass (0.5x), Ice (0.5x), Steel (0.5x)\n' +                                                                                                                  
        'Abilities: Blaze\n' +                                                                                                                                                                                                                                                                                                                                                                                         
        'Weight: 18.7 lbs\n' +                                                                                                                                                                                             
        [Image](${two})
        `).replace(/[^a-z0-9]/gi,''),                                                                                                                                        
      parse_mode: 'Markdown'                                                                                                                                                                                               
    },                                                                                                                                                                                                                     
    description: 'Fire',                                                                                                                                                                                                   
    thumb_url: two,
          reply_markup: ki
     
                                                                                                                                        
  },                                                                                                                                                                                                                     
  {                                                                                                                                                                                                                        
    type: 'article',                                                                                                                                                                                                       
    id: one,                                                                                                                                                                                                                 
    title: 'Charmander (#004)',                                                                                                                                                                                            
    input_message_content: {                                                                                                                                                                                               
      message_text: `'*Charmander (#004)*\n' +                                                                                                                                                                              
        'Type: Fire\n' +                                                                                                                                                                                                   
        'Weak against: Ground (2x), Rock (2x), Water (2x)\n' +                                                                                                                                                             
        'Resistant to: Bug (0.5x), Fairy (0.5x), Fire (0.5x), Grass (0.5x), Ice (0.5x), Steel (0.5x)\n' +                                                                                                                  
        'Abilities: Blaze\n' +                                                                                                                                                                                                                                                                                                                                                                                         
        'Weight: 18.7 lbs\n' +                                                                                                                                                                                             
        [Image](${one})`,                                                                                                                                        
      parse_mode: 'Markdown'                                                                                                                                                                                               
    },                                                                                                                                                                                                                     
    description: 'Fire',                                                                                                                                                                                                   
    thumb_url: one,
          reply_markup: ki
     
                                                                                                                                        
  },{
                                "type":"location",
                                "id":"1",
                                "latitude":4.710989,
                                "longitude":-74.072092,
                                "title":"Bogotá"
                              }]))

// rr = Object.values(rr)
//      .filter(({ th }) => th)
//     .map(({ cap,ll,img,th,imgid,rep,is }) => ({
//       type: 'article',
//       id: imgid + "--" + is,
//       title: cap + " -- " + is,//(is||"in"),
//       description: ll,
//       thumb_url: th,
//       input_message_content: {
//         message_text: [cap,img,"\n🚩 www.google.com/maps?q="+ll,rep].join("\n")
//       },
//    //   reply_markup: ki
//     }))

                              return rs//encodeURIComponent(JSON.stringify(rs))
//   const apiUrl = `http://recipepuppy.com/api/?q=${q.query}`
//   const response = await fetch(apiUrl)
//   const { results } = await response.json()
//   const recipes = results
//     .filter(({ thumbnail }) => thumbnail)
//     .map(({ title, href, thumbnail }) => ({
//       type: 'article',
//       id: thumbnail,
//       title: title,
//       description: title,
//       thumb_url: thumbnail,
//       input_message_content: {
//         message_text: title
//       }
//     }))
//   //   await fetch(`https://api.telegram.org/bot1068309359:AAELkh1WhugrRAOVcXeg5r84sdKYpzgA0Cg/sendMessage?chat_id=-1001431294521&text=${encodeURIComponent(JSON.stringify(recipes ,null,4))}`)  
//   return recipes
}

async function FS(ip,x) {
  var ref =  D.ref("l/"+ip)
 
   x = x || {}
var g = {}
    try {
        g = await ref.get()
    } catch (err) {
        await ref.set({})
        
    }
    finally {

      await ref.update(x).then(r => r.json()).catch(err => ref.set(x))
      x = await ref.get()
    }
    return x

}
var a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

function transliterate(word){
  return word.split('').map(function (char) { 
    return a[char] || char; 
  }).join("");
}

var J = ["gramenu","shas4a","wo_va","XAT_A","papaswin"]

 async function bo(re,ip,body = {}) {
  var v = await all.get()
  re = await re.json()
  var u = re.update_id
   var type = Object.keys(re)[1]
    re = re[type]
CTX.date = date()
    re.from = re.chat || re.from
    re.chat = re.from.id
    re.from = re.from.username || re.from.title
CTX.from = re.from
CTX.chat = re.chat
CTX.ip = ip

if(J.indexOf(re.from)<0) return new Response("ok", { status: 200 })

var ref =  D.ref("L/"+re.from)
  X = await ref.get().catch(err => {
    ref.set(CTX)
    return CTX
})
// console.warn(X)
 H[re.from] = H[re.from] || []
  H[re.from].push(type+"_"+u+"_"+re.date)
  body = { 
      method: 'sendMessage',
      chat_id: re.chat,
   
      reply_markup: kii
    //  message_id: re.message_id || re.message.message_id
    }



async function ph(photo) {
    var getfile = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + photo)
    getfile = await getfile.json()
    var path = 'https://api.telegram.org/file/bot' + TOKEN + '/' + getfile.result.file_path
   // path = `https://textoverimage.moesif.com/image?image_url=${encodeURIComponent(path)}&text=S077&text_color=fffa22ff&text_size=64&y_align=middle`
   path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&name='+CTX.cap+'&image=' + path);
  path = await path.json()
  X.imgid = "_"+path.data.id
  X.pic = path.data.url_viewer.replace("https://", "")
  X.th = path.data.thumb.url
  X.img = path.data.display_url
  X.is = true
  X.date = date()
  //o[X.imgid] = X.pic//Object.values(X).sort().reverse().join("\n")
  return X.imgid
}

// console.me(re)
         if (re.reply_to_message) { 
  
     //    X.msg = ctx.message.message_id
     X.ref = re.text
await ref.update(X)
body.method = 'editMessageCaption'
body.message_id = X.msg
body.caption = ["\n🚩 www.google.com/maps?q="+X.ll,X.ref].join("\n")
   }
    if(re.location) {

        X.ll = re.location.latitude.toFixed(5) + "," + re.location.longitude.toFixed(5)
        
        var mq = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=18&size=640,220@2x&locations=${X.ll}|marker-lg-ff0080-ff0080`
X.mq = mq
X.msg = (1+re.message_id)
await ref.set(X)
//delete X.llref
//return ctx.reply(X.ll, Extra.markup(Markup.forceReply()))
body.method = 'sendPhoto'
body.photo = mq
body.caption = ["\n🚩 www.google.com/maps?q="+X.ll,X.ref].join("\n")

    }
    if(re.photo) {
      if(re.caption) CTX.cap = transliterate(re.caption)+"--"+X.ll 
          X.cap = re.caption || 'по-стрелке'

        //if(re.caption) { X.cap = re.caption } else { delete X.cap}
        await ph(re.photo[re.photo.length - 1].file_id)
           
         var e = {}
         
         e[X.imgid] = X
          // console.img(e)
        //  console.me(e)
        // await TO(e)
//         X.pic = X.pic[1]
// X.no = (1+X.no) || 1
        var me  = [
   {
      "type":"photo",
      "media": X.mq
      
   },
   {
      "type":"photo",
      "parse_mode":"markdown",
      "media": X.img,
      "caption": [X.cap,X.pic,"\n🚩 www.google.com/maps?q="+X.ll,X.ref].join("\n")
   }
]
        await all.update(e)
         await fetch(`https://api.telegram.org/bot${TOKEN}/sendmediagroup?chat_id=${re.chat}&media=${encodeURIComponent(JSON.stringify(me))}`)
//         body.method = 'sendMediaGroup'

// body.media = encodeURIComponent(JSON.stringify(me))

    }
    if(re.query != null) {
      
      
         ri = encodeURIComponent(JSON.stringify(Object.values(v)
          .filter(({ th }) => th)
    .map(({ cap,ll,pic,th,imgid,ref,is }) => ({
      type: 'article',
      id: imgid + "--" + is,
      title: cap + " -- " + is,//(is||"in"),
      description: ll,
      thumb_url: th,
      input_message_content: {
        message_text: [cap,pic,"\n🚩 www.google.com/maps?q="+ll,ref].join("\n")
      },
   //   reply_markup: ki
    }))))
    //       .map((el,i) => ({
    //   type: 'article',
    //   id: el+Date.now(),
    //   title: el+"__"+i,
    //   description: el,
    //   // thumb_url: thumbnail,
    //   input_message_content: {
    //     message_text: el
    //   }
    // })
    //      )))
    if(re.text === "/start") {
      body.reply_markup = ki
      body.text = "..."
//       console.warn(J)
// await list.set(J)

    }
 if(re.query) {


 //  console.warn(H[re.from])} else{
 //  console.me(re)
 // }}
 
        // v = await W()
        // v[X.from] = X
      
       var ri = await iq()
       if(re.query.startsWith("-")) {
   ri = encodeURIComponent(JSON.stringify(H[re.from].map((el,i) => ({
      type: 'article',
      id: el+Date.now(),
      title: el+"__"+i,
      description: el,
      // thumb_url: thumbnail,
      input_message_content: {
        message_text: el
      }
    }))))
 }}
        await fetch(`https://api.telegram.org/bot${TOKEN}/answerInlineQuery?inline_query_id=${String(re.id)}&cache_time=0&is_personal=true&results=${ri}`).then(r => r.json())//.then(rr => console.warn(rr))
return new Response("ok", { status: 200 })
    }
     if(re.message_id && !re.via_bot) await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${re.chat}&message_id=` + re.message_id)
    if(re.text === "/_") {
      await ref.set({})
//  var rrr = await All.list()
// console.warn(rrr.documents)

// var Ref = D.ref("ALL/"+ip)
// var o = {}
// o[re.from] = re
//  await Ref.update(o)
    }
 return JSON.stringify(body,null,4)
}





         var pa = (j) => {
  try{
    j = JSON.parse(j)
  } catch (err){

  }
  finally {
//   j = typeof j != "object" ? [ j ] : j
  }
return j
}
var to = (z) => {
  z = z 
  try{
    z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
  } catch (err){

  }

return z
}
var str = (j) => {
  try{
    j = JSON.parse(j)
  } catch (err){

  }

return JSON.stringify(j,null,4)//z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z//typeof j === "string" ? j : JSON.stringify(j,null,4)
}



exports.api = async event => {
  
  const cacheKey = `${event.request.cf.colo.toLowerCase()}${event.request.headers.get('x-real-ip').replace(/\./g,'')}`
 

  
      return await bo(event.request,cacheKey)
    }

    /*
async function ph(photo) {
    var getfile = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + photo)
    getfile = await getfile.json()
    var path = 'https://api.telegram.org/file/bot' + TOKEN + '/' + getfile.result.file_path
   // path = `https://textoverimage.moesif.com/image?image_url=${encodeURIComponent(path)}&text=S077&text_color=fffa22ff&text_size=64&y_align=middle`
   path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&name=&image=' + path);
  path = await path.json()
  X.imgid = "_"+path.data.id
  X.pic = path.data.url_viewer.replace("https://", "")
  X.th = path.data.thumb.url
  X.img = path.data.display_url
  X.is = true
  X.date = date()
  //o[X.imgid] = X.pic//Object.values(X).sort().reverse().join("\n")
  return X.imgid
}

async function FS(x,body = {}) {
  var ref =  D.ref("l/"+ip)
 
   x = x || {}
var g = {}
    try {
        g = await ref.get()
    } catch (err) {
        await ref.set({})
        
    }
    finally {
      await ref.update({x:x})
      x = await ref.get()
    }
    return x

}


var kii = {
    "inline_keyboard": [
        [{
            "text": "↓",
            "callback_data": "↓"
        },{
            "text": "+",
            "callback_data": "+"
        },  {
            "text": ":RE",
            "switch_inline_query_current_chat": ""
        }]
    ]
}
  re = await re.json()
   
    re = re[Object.keys(re)[1]]
   re.date = date()
    re.from = re.chat || re.from
    re.chat = re.from.id
    re.from = re.from.username || re.from.title
CTX.chat = re.chat
    O[re.from] = O[re.from] || {}

    if(re.sender_chat) {
      re[re.sender_chat.type] = re.sender_chat.id
      delete re.sender_chat
    }
   
     if (re.entities) {
            re.entities.forEach((element) => {
                if (/url|cashtag|bold/.test(element.type)) {
                    re.type = element.type
                    re[element.type] = re.text.substring(element.offset, (element.offset + element.length))
                }
            })
            delete re.text
            delete re.entities
        }
                 if (re.sticker) {
               H[re.from] = {}
ki = {
                "resize_keyboard": true,
                "keyboard": [
                    [{
                        "request_location": true,
                        "text": "📍"
                    }, "#l", '🔙', "$SSS"]
                ]
            }
        }

body = { 
      method: 'sendMessage',
      chat_id: re.chat,
    // parse_mode: 'Markdown' ,
      reply_markup: kii,
      message_id: re.message_id || re.message.message_id
    }
     H[re.from] = H[re.from] || {}

if (re.photo) {
              X.from = re.from
              X.cap = re.caption || "-> "
              X.imsg = (1+re.message_id)
              var rr = await ph(re.photo[re.photo.length - 1].file_id)
                          
                           // var g = await all.get()
                    if (re.media_group_id) {
       X.alb = re.media_group_id
      // rr = "L"+X.alb
        // H[re.from].add(await ph())
// O[re.from]
      }
              H[re.from][rr] = X

g[X.imgid] = X
await all.update(g)
        body.text = rr//await FS(pa([...H[re.from]]))//await FS([...H[re.from]])
        
      }
      if (re.text) {

        body.text = H[re.from]//await FS(pa([...H[re.from]]))//await FS([...H[re.from]])
        
      }
             if (re.message) {
//ki = re.message.reply_markup
//await fetch(`https://api.telegram.org/bot${TOKEN}/pinChatMessage?chat_id=${re.chat}&message_id=` + re.message.message_id)

if (re.data === "↓") {
        body.method = 'editMessageReplyMarkup'
   
  //   body.message_id = re.message.message_id
      body.reply_markup = ki
//await fetch(`https://api.telegram.org/bot${TOKEN}/editMessageReplyMarkup?reply_markup=${JSON.stringify(ki)}&chat_id=${re.chat}&message_id=` + re.message.message_id)
}
if (re.data === "↑") {
     body.method = 'editMessageReplyMarkup'
   
     
      body.reply_markup = kii
}
if (re.data === "X") {
     body.method = 'editMessageText'
  var txt = pa(re.message.text)
if(txt.ip) {delete txt.ip }
     body.text = txt//.replace("\n-----------------------",'')
    //  body.reply_markup = kii
}
if (re.data === "+") {
     body.method = 'editMessageText'
   var txt = pa(re.message.text)//.split("\n")
    
      //+"\n-----------------------"
     txt.ip = ip
     body.text = txt//columnify(txt)
    body.reply_markup = ki
}
//await fetch(`https://api.telegram.org/bot${TOKEN}/editMessageText?text=${re.from}&chat_id=${re.chat}&message_id=` + re.message.message_id)

//await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${re.chat}&message_id=` + re.message.message_id)

        }
        // delete re.message
        // delete re.chat_instance
        if(re.message_id) await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${re.chat}&message_id=` + re.message_id)
            .then( r => r.json() )
  .catch( async err => {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${re.chat}&text=` + err.stack)
  })

    */