(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(250),d=t(249),o=t(260);a.default=function(){var e=Object(o.a)();return"Android"===e?i.a.createElement(l.a,{language:"en"},i.a.createElement(d.a,{title:"Download App"}),i.a.createElement("meta",{httpEquiv:"refresh",content:"2; URL='https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture'"}),i.a.createElement("div",null,"Redirecting you to download the app from Google Play ...")):"iOS"===e?i.a.createElement(l.a,{language:"en"},i.a.createElement(d.a,{title:"Download App"}),i.a.createElement("meta",{httpEquiv:"refresh",content:"2; URL='https://apps.apple.com/app/id1439521846'"}),i.a.createElement("div",null,"Redirecting you to download the app from Apple App Store ...")):i.a.createElement(l.a,{language:"en"},i.a.createElement(d.a,{title:"Download App"}),i.a.createElement("meta",{httpEquiv:"refresh",content:"0; URL='/'"}),i.a.createElement("div",null,"Redirecting you to download the app in a minute ..."))}},243:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(70),d=t.n(l);t.d(a,"a",function(){return d.a});t(245),t(9).default.enqueue,i.a.createContext({})},245:function(e,a,t){var n;e.exports=(n=t(252))&&n.default||n},247:function(e,a,t){"use strict";t(246);var n=t(253),i=t(0),l=t.n(i),d=t(244),o=t.n(d),c=t(255),A=t.n(c),r=function(e){var a=e.iosTitle,t=e.iosLink,d=e.androidTitle,c=e.androidLink,r=e.size,s=void 0===r?"m":r;var g=n.data;return l.a.createElement(i.Fragment,null,l.a.createElement("a",{href:t,className:A.a.downloadItem},l.a.createElement("span",{className:A.a.downloadMobile},l.a.createElement(o.a,{fixed:g.iosSmall.childImageSharp.fixed,title:a,alt:a})),l.a.createElement("span",{className:A.a.downloadDesktop},l.a.createElement(function(){return"s"===s?l.a.createElement(o.a,{fixed:g.iosSmall.childImageSharp.fixed,title:a,alt:a}):l.a.createElement(o.a,{fixed:g.iosMedium.childImageSharp.fixed,title:a,alt:a})},null))),l.a.createElement("a",{href:c,className:A.a.downloadItem},l.a.createElement("span",{className:A.a.downloadMobile},l.a.createElement(o.a,{fixed:g.androidSmail.childImageSharp.fixed,title:d,alt:d})),l.a.createElement("span",{className:A.a.downloadDesktop},l.a.createElement(function(){return"s"===s?l.a.createElement(o.a,{fixed:g.androidSmail.childImageSharp.fixed,title:a,alt:a}):l.a.createElement(o.a,{fixed:g.androidMedium.childImageSharp.fixed,title:a,alt:a})},null))))};r.defaultProps={},a.a=r},249:function(e,a,t){"use strict";var n=t(254),i=t(0),l=t.n(i),d=t(258),o=t.n(d);function c(e){var a=e.description,t=e.lang,i=e.meta,d=e.title,c=n.data.site,A=a||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:d,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:A},{property:"og:title",content:d},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:A}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},a.a=c},250:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=(t(246),t(251)),d=t(243),o=t(244),c=t.n(o),A=t(248),r=t.n(A),s=function(e){var a=e.siteTitle,t=e.logo,n=(e.iconMenu,e.iconClose,e.iconLan),l=e.lanTitle;return i.a.createElement("header",{className:r.a.header},i.a.createElement(d.a,{to:"/cn/",className:r.a.language},i.a.createElement(c.a,{fixed:n,title:l,alt:l})),i.a.createElement(d.a,{to:"/",className:r.a.logo},i.a.createElement(c.a,{fixed:t,title:a,alt:a+" Logo"})))};s.defaultProps={siteTitle:""};var g=s,m=function(e){var a=e.siteTitle,t=e.logo,n=(e.iconMenu,e.iconClose,e.iconLan),l=e.lanTitle;return i.a.createElement("header",{className:r.a.header},i.a.createElement(d.a,{to:"/",className:r.a.language},i.a.createElement(c.a,{fixed:n,title:l,alt:l})),i.a.createElement(d.a,{to:"/cn/",className:r.a.logo},i.a.createElement(c.a,{fixed:t,title:a,alt:a+" Logo"})))};m.defaultProps={siteTitle:""};var p=m,f=function(e){var a=e.language,t=l.data;return"en"===a?i.a.createElement(g,{siteTitle:t.site.siteMetadata.title,logo:t.logo.childImageSharp.fixed,iconMenu:t.iconMenu.childImageSharp.fixed,iconClose:t.iconClose.childImageSharp.fixed,iconLan:t.iconLanCN.childImageSharp.fixed,lanTitle:"访问色采中文网站"}):"cn"===a?i.a.createElement(p,{siteTitle:t.site.siteMetadata.titleCN,logo:t.logo.childImageSharp.fixed,iconMenu:t.iconMenu.childImageSharp.fixed,iconClose:t.iconClose.childImageSharp.fixed,iconLan:t.iconLanEN.childImageSharp.fixed,lanTitle:"Visit Color Collect Website in English"}):void 0};f.defaultProps={language:"en"};var u=f,h=t(247),b=t(256),C=t.n(b),S=function(e){var a=e.homeLink,t=e.homeTitle,l=e.integrationLink,o=e.integrationTitle,c=e.creditLink,A=e.creditTitle,r=e.policyTitle,s=e.termsTitle,g=e.iosTitle,m=e.iosLink,p=e.androidTitle,f=e.androidLink;return i.a.createElement("footer",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:C.a.mobile},i.a.createElement("span",{className:"type--body-xsmall type--on-dark"},"© ",(new Date).getFullYear()," All rights reserved")),i.a.createElement("div",{className:C.a.desktop},i.a.createElement("div",{className:C.a.nav},i.a.createElement(function(){return a?i.a.createElement(d.a,{to:a},t):i.a.createElement(n.Fragment,null)},null),i.a.createElement(function(){return l?i.a.createElement(d.a,{to:l},o):i.a.createElement(n.Fragment,null)},null),i.a.createElement(function(){return c?i.a.createElement(d.a,{to:c},A):i.a.createElement(n.Fragment,null)},null)),i.a.createElement(h.a,{size:"s",iosTitle:g,iosLink:m,androidTitle:p,androidLink:f}),i.a.createElement("div",{className:C.a.copyrightPolicy},i.a.createElement("div",null,"© ",(new Date).getFullYear()," All rights reserved"),i.a.createElement("div",{className:C.a.policy},i.a.createElement(d.a,{to:"/privacy-policy"},r),i.a.createElement(d.a,{to:"/terms-of-services"},s))))))};t(257),a.a=function(e){var a=e.children,t=e.language;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(u,{language:t}),i.a.createElement("main",null,a)),i.a.createElement(function(){return"en"===t?i.a.createElement(S,{homeLink:"/",homeTitle:"Home",policyTitle:"Privacy Policy",termsTitle:"Terms of Use",iosTitle:"Download Color Collect for iOS",iosLink:"https://apps.apple.com/app/id1439521846",androidTitle:"Download Color Collect for Android",androidLink:"https://play.google.com/store/apps/details?id=com.wizeyes.colorcapture"}):i.a.createElement(S,{homeLink:"/cn/",homeTitle:"首页",policyTitle:"隐私条款",termsTitle:"使用条款",iosTitle:"从苹果商店下载色采 iOS 版本",iosLink:"https://apps.apple.com/cn/app/id1439521846",androidTitle:"下载色采安卓版本",androidLink:"https://www.coolapk.com/apk/231885"})},null))}},251:function(e){e.exports={data:{site:{siteMetadata:{title:"Color Collect",titleCN:"色采"}},logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAESElEQVQ4y5WUb0xbVRjGT4EF1Bg1ftDNiLQsyzQuMSbDLKGASpwInUDmshR62w5GyzZ0X/CLYNvBBs4PW+KSSWIZMmVB4jZ6N8KcDFlaSCZEmba3/FlqhyyaqS1Ke9ve276+5/S2i3Ex8SZPznvOuefX5znn3BLxjJpE+tWEPtF+tSp8ulBF68SnW/JwfCfqFEqAIQ1EPik6BgAq8cdSU8ynfZIoj+jT5tL2j5vbCcI0bBAX5WRewLoZtQSfa4CCkmcRdka9vv4UyRf9Zd0QrgSEhFCnYkL548yMrzSXZAEfPctg8QHNwwgah+FikAfVsO4skiPOIhG+KIbIx4VNcajfJC1oIeotlWOCFmD1ZQr+DVXJoF6ERk4+zyKKzs0PIuwHCkNQAmuZCj5Dd/3qeSXaFQhWUIiESqLiyaUyoMK6lrkLASG4L5mokwzgVEtYp6hDOIfujj/xgvjTq6/DSgV1lxC92lRUEdaJuF9LgSl0vY2Bwoaad0O769+RfiePif3MEVWCusXIg+wgvKW/QqAc6GJpoeyeFpk7gJ9Z/FmyZq7bEG7Qrfxp0MEdMpEfGXymQ4mdRGg0crpwY0za9RCebHnUpy3BzX8JFzJFlVapS0Rf6Q6CsOoY9yYkTXUQ1uuGWHSnehkubKYu22n/DvkfDwL7UggL6XXxlLkWQq81lkRHNlYh9Da4NqXv5/g2Ff56DrrLQTf3VWaOAgPrjbsAW4k6RZdCpLekQDxb9HTarSZ9CwbSl7/VMZ1tW49M/2Ms4zCBAia9LgHmetp20rm1A69soO1fXS8SmKwg1iMetqb9gzli7pwi5o4pcrjnWzZm7ZrJAn8J6WtSCjiB0WVsY2FjdTGbb9RlvyCLLQ00d1zPGjK99w1rW2xu0tc3y4AXYP8ekI11AKZ6kIy1QPs4znIEGnpVQcOHKoG7RKD+S9Ji97BPzGL3mFCtSs3GrDQ6LqwM66t51BBqWNG5sL5mdK1h59b7HeTBozfyLHb3KoJCrV0zDzCoY1q1v/P6f98AP3ctf9HgKljgxgqWGy/nj1uuPKI46jh07DugwrpXiZyXXShwoycFg2tNMIzeQt1GBbEfFDg+wGTgl3wcvxZodDXnDwiPWm3umMU+TWFUstXu2aL8UI7ihC8WOJcc3HcVFo2X4ZZpPKsl4xisNE2Al+Pv0nebHZ6Bt3tvUlACJR3q+Z7W5+kcRlahOz437ZJ/gwL83CXAOoZKMhlc8ZXma3B378WqHSfmnms7OgctdncSISkKxKjJtt55Ct2ejewzuDLQOpRMHeGYjLUY3Pc1YFx2N6w2z8xBBOLiGIKkA92zmX10LDsk0mCbIv+GGvmtCJoImL+C1eZJCDRdBdCNqPd2z+w5fNwLVscMtPXMo1hUweLwVGUYVgfeU7957B5Uic/21ciXY38ET9mBf5jozh1U9m0BNYx6q/3EDXYILe+7czOf4d86sA5fNHwMWQAAAABJRU5ErkJggg==",width:24,height:24,src:"/static/dd699db634c5bacfd9ec05cad2f5d83e/3f724/colorcollect-mobile-logo.png",srcSet:"/static/dd699db634c5bacfd9ec05cad2f5d83e/3f724/colorcollect-mobile-logo.png 1x,\n/static/dd699db634c5bacfd9ec05cad2f5d83e/58e7f/colorcollect-mobile-logo.png 1.5x,\n/static/dd699db634c5bacfd9ec05cad2f5d83e/1eb56/colorcollect-mobile-logo.png 2x"}}},iconMenu:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACUUlEQVQ4y5WUPWsUURSGz+4m0SaB4FdjwBQRi9XdnVlTuAEllZK5M5psl8JqM3fYWAVsBQMRCzWaQiOkUBEsIsEihbUg/gQb/4vvmXnv5O6iOF545uN+nHvPue850k0yCVY2RFsY24aw4fsK2AJfwE/wC/wAL0BUzjNpo3s3K74TKxJENGbshL6xwXkseAsOwRC0wCyYBnMgBq/AMVgrDSdZTU52KYxhwi3wDfTlHy2Ms4uY9xHsub6uGnVulsaMPaf/gUkn8D+p46Duof1TXmgeg4N8TTyoieemGjubD0RpXSq0IE7dYV6Ch97x85j1ebIG4jETxLYNrv2BqzqGC5gfDYH9ijDMu9s8dG5yMATvwD4383kD3qsCirnlmnXwVCiNoZMNdpeqbaF3X67fyxg2O4P1n4U6a9FgLfwPgyH1Fxhb5/p9oWhnnUG+z4CboAeWxuhxrJkbg5g9pWwLM2CaHW6nNmO1yxv02WVsH+jcTmHQxfGRMJ3mSpdNWtnlZmQlWR1CPuUJnwlzM3YnhGSqx9BsyGI/k4Ubm046n/QRaW6yY5J5eYH9t8GdMbTPgMWxMHXAB2f5WHPzJNFtE33PwQ54MsYOxwbU7hRtvAarzuCaJrov1EouM6fxXgZHZT1j554mun63Vgb6f6ooBEhF46H/CA3y+DTXXQLfSw9dceTggUpjpACYvMI08iyCwctLm/785dxYYtsjBdovjlo1ikS365pOf3G1w5gduZM5LRZlm8Wxw3qmVUMTXXOTIt5W0arOVBp6m+UFeCdDOOQ3plsheuUz4YEAAAAASUVORK5CYII=",width:24,height:24,src:"/static/9ca468d5410b1e700d866ab9df8d4b35/3f724/menu.png",srcSet:"/static/9ca468d5410b1e700d866ab9df8d4b35/3f724/menu.png 1x,\n/static/9ca468d5410b1e700d866ab9df8d4b35/58e7f/menu.png 1.5x,\n/static/9ca468d5410b1e700d866ab9df8d4b35/1eb56/menu.png 2x"}}},iconClose:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAClElEQVQ4y4VUv2sUQRid3T0VK4uIBpsTi8RCjdlbLnIYG8u72/UOKwM26t3u5WwUkbRXixIllRCixUEkZYKYwtIyIiH/gJX/hb438327c2lceMw3w8zb732/TJIVJu4MDL9GmkdGPtgLwCvgK/Ab+AP8BD4A7fJedxiRw9pZbiqybl5zh8VFPNgGDoENoAXMJ2k+10iLRdhrwCfgO9Dnm+srj/kuMNVfhCzN7wFHwBPzn08UHABbemY9VZlC9itJi6vcx51nAfY1IAQCh4Jr1EiHNY+YIdixb9JBaDyZR0oG+4wl6uZWRtwdUoWqIfiT6Hb7aSD3PwOvffe3VSbJQBB44Yg8OzCTSjYcsB7dfTjmD37AsbrG4tB5MqCkUIgfAU2xKT3wHHgB+RfUAVlHwBsjpbFRPhSZJIN9jPWmyI7EyynO3tNehhL9EeJ6iSVmpM5aQhL6MkkG+wTrkpx/gf3O89Ss9J+b5c5AnZgaKdp5OQiYAPVW1iVgH9gDJi6b1jN7705/XHmf5ptGOmBOCctsOnK9uJdko79Yr8n+rGY8ulz3S++tkXZaVJIym1VmKXNCMuAEexdTIUkerPseftTCXNNetlJelmTTmZiBDPtjrLHGPMmcomZm3+7zsK2VLlkOq9Jw2ZSYqcwY9jeUzXl/oGBdBXY1Xmz0hdkLrs40m75MksXyA8jVOpzqsOCmz0anzXbSDpA6K1vOLy2xz8na0/d2nsnhFuPpXWY/B83eGFNkZOqt+1jXDWNGFZVnxQ0OFaxXypHDeSYkO2x09qYSSztGQhKdGmE9R5bfmhnQ/nDk1LCNnuYF2+n0HJRsrkrMDtQzbQQ3tsVTnWecGmx0aUs+3GTRss6ka3bLBMwkcmj+AfRhMB7j/VL6AAAAAElFTkSuQmCC",width:24,height:24,src:"/static/16e702f04e46dc2dd00688fbd8ffe9c7/3f724/close.png",srcSet:"/static/16e702f04e46dc2dd00688fbd8ffe9c7/3f724/close.png 1x,\n/static/16e702f04e46dc2dd00688fbd8ffe9c7/58e7f/close.png 1.5x,\n/static/16e702f04e46dc2dd00688fbd8ffe9c7/1eb56/close.png 2x"}}},iconLanCN:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACtElEQVQ4y32Uz2sTURDH3+7GgBYv3jwUChU8aNoku4JSFA+tpvmxabQnQbGg2ZdAvRgVVPBcRC+CFrTUllLQkxV/gO1BPdii4EVQKOJZPPoX+J3NzMu0iguffb/nzcybGRPFLVOoNQ19YWwDw18Yt/ZhfBWsgV/gN/gK7oOy7CvWkiCqt+S8ccKKcZJJJ+t2DxYWwQaYASUwGNZsP9oItMEKWAcNOpOrnKNznnG3iLDYHgWboBPNr5n/fdgTgg9g1s3Vbc9MFvYD5HoX2QzGPlGs2YD7AZmpBC+DpXR/1fpGmbkpwiAoG060DfkGgjx12IugxaF6e5u/7QtwTatPPutwP/sP8/aD83/N11upRri8D+tfotj202Z6zY3qx5/ppgi3K0E7uS3hURa7/aQvmmj7as8Obq+Du4ZDY4YnM/ly4nH/HpvyCLwB38A8WABv4ZYhHWpoB8B7w3FW4kk/1xP4BOS5XwYPD5+67PN4Fr49IWeGxi+Iti8NB+2gOP3geCKLc4WG3d0NXjsM7igzb2E8JgLl1dF/bNIMQNCm/oPA4YrT8DlphbUrbOYncJN99RkCjzmBsRM4ZzidIlnMV5oi8Da4CIHH0d4Ar8AYxifJZApsJ7DaFFc8pd8DSift4EK5vSU8oE1Bm0zfkclLHBUtaXfh/Dtx+Iokuhw4MHrGQJtuStZSzRY4bLIFtmJ0sqNfuQKeiZPXkS2h1pJupkdSgX2WL/V4rat91dWB11IsaNCgRFdJ7itzVaAn3hZXcFbh7BRYNdpMdvSyzgAqSSOnp1NtYLKvNA+UZiPgO/budU6lesaLS2l2IDdFMAUtXUqhIa+pLp1KhXFRcQVDF0eqGpToHG8D2wsCv2aFfbYqmlHa9so2F0epZ1Q1KNEpNymdKAMoaCnOKDToNd0DKM3gU/MH8dA6E2Qjg8wAAAAASUVORK5CYII=",width:24,height:24,src:"/static/ed87cf163b418b4013f9e983712a3034/3f724/language-cn.png",srcSet:"/static/ed87cf163b418b4013f9e983712a3034/3f724/language-cn.png 1x,\n/static/ed87cf163b418b4013f9e983712a3034/58e7f/language-cn.png 1.5x,\n/static/ed87cf163b418b4013f9e983712a3034/1eb56/language-cn.png 2x"}}},iconLanEN:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC00lEQVQ4y31UzWsTQRSfZNPEWk+9CVYq1ZsJdHcj1upFBdsmu5seREEUq21mNvXgoTSoICheKtqDB41I8YPag/hVUFTai0Xa3kUPRTx49Og/oL83ebOZBuzCb+fN1++9N+9D+GEs+oOqoM8LlSP488J4L+bTwDLwG/gDfAfuAyPmnBtIx49ic18kZG4oM3oxUt3YeAasAzPAENDnBaoHow/UgEVgDRilO/nSObqXEokWQxaqI8AGMOU/XhZbfTjjAatAI1mLVMtNJvsJ5FuKVAbzNJBikOyQmxbxAjCvz5dVWlhubhgyjDlywQulJjLatQUtImf/sbNGfgfU7U16symWs/9zM398Qvgg9Zk4z6NXqXXh3lc/VD1EQNFcL335lVzEhR2wrhfYg71dB8vTtNZFe4UTUp8pRiqL6ObcIHmyq8Cs4NSYaS7KLG8+Bd4Aj4A7vEaRvWV5dRqYtOYwQK0IzrMhJsxwMF65kexui+pD4Bvg6nmgJoA656LJkveCk7bPTmyML4FLXiBHMB5mJbOUd8BHPnPevDsIjWdPhK4AJG1TqzSEcFc2ML8OeYzXnhfLshPjzaYyNQxc4TzO8Zk5weXks8sOW7PgVmRnm8tzULCb5dfAbaDKFnbw+gv6PaByYkKz8QnyRWgegHzIHAbhPp0FYVzwK7W/ZCnN+0vVFCK+HfPPdJDeabFN0zgI74HwLuRrB07WKcFPgbDbsljC5aPWvAS8NZM1VIHHcmarGi6iO0Fx2uo2xogPplkIjt6qpa2D3hMWOhT5gTM3hK7jQG4qPWAbyxeApaSf8WKDCn0TaRTT24hiZVIMjl4WJBN0gygnuTcI/ICHO7nMYt3PeHNeFzpq0xAXhse1UrLWLVfTbZEf02StpuKYbpOyDtWp0Lk2e9vfkKNZ4jdbMpYlb6/bNrcn08+oa3jNylihcqIK0HlIqYPUoGgmAbAsQ/6KfyX0P9W4uVHkAAAAAElFTkSuQmCC",width:24,height:24,src:"/static/68d9829f07321d87e59bce7578d5a8de/3f724/language-en.png",srcSet:"/static/68d9829f07321d87e59bce7578d5a8de/3f724/language-en.png 1x,\n/static/68d9829f07321d87e59bce7578d5a8de/58e7f/language-en.png 1.5x,\n/static/68d9829f07321d87e59bce7578d5a8de/1eb56/language-en.png 2x"}}}}}},252:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),i=t.n(n),l=t(97);a.default=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}},253:function(e){e.exports={data:{iosSmall:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADt0lEQVQ4y12UXWgcVRTHbwqCfVGUYqX4IPigQotgi099KCgWVHwV9EWwFNEg7ZuILaRglT5YsCltjLFVU2kLzVcTDSbapNlkd6n52k3SNdns5mOz2+73TGZmdz6P59y5dzLtwOHOzD33d//3nHMPO395gOmmw+jZLCotALCLiedhVXutrBjH0drQzqCdKNW0w5HZlSekD/7j/riOXRuYYkxr+rBiXW+RTsWa/n5VbUzWtSa4sPN4aLrpQnW7kUJQq/RXDDOA+kpqGoe99Wn7LnTscnDGRkOgV9tu2GiWMHp3G7a/QVU1IulceR+H6j6U3V97yELy+8AH2WKxR1AB9lTdlO8OmulDG+ml7IO9IkQtTMasWNO+JQdyFCB694TBtmFCvqxCRTX4nJjn0LKijz5y5JXN0gE6inByQzC+UGtYEF9ch96xeQhvJMAWxXarpHzMdrK53S7UWXIBjaSqohig6E34K5aC5GoB0AW/TQidwiEiqoxz2MWbd3bjR6rpcKArlSnoPDmfge4/78HtiSSMxFNwY2SGW2arAqphBkppA4yltZQp7GczqY2XMVuGaljcAUvCoyMuZh7ApVsT0NUfhc6+Sfix17drw/cgV1IClUIpV5nNVz5g/95fP1TXTFkiBAS9acHd2VUOuDoYhyu3Y/ALjh09Ef6/YTqkSMTTLy0KGSo/zmLJ7EGcDBJBCvWmDbGFNQ64irCfB6Ic2tk3Bf3jCQhlWaq06QKkN0vH2ODE/Iulul5C1UEMKfBYsPATAgjIbdBXSarvzqZ55kNHxjUOJFZy71BeWvJlZdzxs+zIXbGIYSiyyONIMSS1pJDGZDpPQFmjLvYCQFHFX4eiL/BMJ1fzXwigLY9Ot6JQUaFvLAHD0SWYTGTg1j9zMJXI8tIJlY1F8cOE/BbU4effde9BlUv2Y1DMpEflQyViYFzr/ru8jjxElA9U1+gfn3uDievCG8NwdPHdcl13DOwmAuqFgu5h4rydq+gXNPnQyaZTG1/usJ55O4COTS9/grvZjt8gHBFTN3SnXfHPpkLBPMDccu57XMr742fnuv0jP32kNbjYPXdm3lsrVOdpAZUCjdh8MAk2GJYLsrXh3d1CAa0Sdrln3IeNJpb5+NzRk4HSD7/qeH5s+r/W5Y3icK5YX8e7rmJr0jDOhdWtciS+kG37pmvwVdlhzv8+woJu09bewwZiC/zHs2+eCKD+8/qTpy71vvTD9dGDF67/fejslaFX9h09+ZScJd+Pvu4MYKc7/mD/A/WEsJAbSOMCAAAAAElFTkSuQmCC",width:48,height:48,src:"/static/85efdca87e453c00274006d549de6549/1eb56/download-ios.png",srcSet:"/static/85efdca87e453c00274006d549de6549/1eb56/download-ios.png 1x,\n/static/85efdca87e453c00274006d549de6549/f4007/download-ios.png 1.5x,\n/static/85efdca87e453c00274006d549de6549/6ee39/download-ios.png 2x"}}},androidSmail:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADoUlEQVQ4y12USWgTYRTHvxYEvSiKqIgHwYMKiqDiyYOgKKh4FfQiKCJaRG8iKlRwwYOCVlzrrrjRzbYUGm2D6aY2bdoa03SJtknTJjHrzCSTmczzvW++mU4deMzMt/y+/1u+x27db2CyqjN6JmOZMgAoZ+KZSUqbEhnlOFol2mW0M/GUtN3TNzLPWoNjfD3uY68bOhmTCiYslpbLrEWxlHwgmc13pKUClGD2MdBktQTJXD6AoAprfUZRbaipJCVx2K4TVeW4sFrHGQ0NgUYql9fQisI0HCvlNfOAZFbxjIYTKzlUNqHs1+8Z5pBfByZIE5sNAeXm+NfRVBOaH/WHppeLEJUxK2axlHSNFtBCsZm+DVRhoDiQ0PCf3OVzYp5DExnZNcflkcn4RpwsiUX8jSdzEHoArm/D0IrWG5iErKyCQzGBixTbSDxzhM1mM1cl1BUtZXJBg4npFLx3eeFJQxc8rO2A1y3fYXAsCnlVt6D01omIKns47O77tgX4EyjoHFiyTsZDoD8Yho+f+6DePcCNvj2+cYgmsuS6lTQDE0IeFf3j0Q3MG5hYi3FSskrRdiWH302enxxCql40f4OXaM+beuDT1yH44OoDjDlkBBDBXGVo6u9B9uPXn61pSQVHNiGnqHxjTVs/PGvshmp0mdx+XN8Jte0+eNfqNYFywRLBC2k88vc46x4MbUG5VkJshc0dfr6ZgAR7+gnBCKzDsY9f+i2FNpAuwOhk/Bhr/OpbHU/LcVQ9J4a0oW84zGHPGnu4u4/qOsHtHYVpjK8zhvTG3MDASHgv5aVsKpFx62aWdUspuUOZ7hgI8Vi2/QjyMFA4Mo7SIRHYCwBFxV40da3imR4cmzotgJqoLYPqkID+0AzPrG8kAp0IV1SNrhyIW8NLjeKHCXlp1+Gp66+Wokq/9h/UUbzguB2GA1aifKC6fL27fxsT14U3hpaun/sSaVlXsJuIhmA4E+U0MU7hMciz3sDEuVnW4t02tL03eBRP03SzQeiiCZSc8RJjGhUK5oGK/yZu5f3x5I1XpsuLdlTYF7umzbv/dzTpow1UCvTG5oPNQQOlWAKrteHdjaCACgt2v8ZtwlwDQf5etuesrfTQ+Qcr2nuHK4ITsZZwLP0Hr2EWW5OEcY6ORRKenqFQ5ZXqxvVWh7n1ppXZ3aayqoY1dA/xgSU7z9hQ89k8/+K92jW337q23Hn7eevVp03rVu45u9CapbWHLzyyYZceNLN/hcGxf+VExaMAAAAASUVORK5CYII=",width:48,height:48,src:"/static/b09e05f60077e2509b2d98dd8a49eb82/1eb56/download-android.png",srcSet:"/static/b09e05f60077e2509b2d98dd8a49eb82/1eb56/download-android.png 1x,\n/static/b09e05f60077e2509b2d98dd8a49eb82/f4007/download-android.png 1.5x,\n/static/b09e05f60077e2509b2d98dd8a49eb82/6ee39/download-android.png 2x"}}},iosMedium:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADt0lEQVQ4y12UXWgcVRTHbwqCfVGUYqX4IPigQotgi099KCgWVHwV9EWwFNEg7ZuILaRglT5YsCltjLFVU2kLzVcTDSbapNlkd6n52k3SNdns5mOz2+73TGZmdz6P59y5dzLtwOHOzD33d//3nHMPO395gOmmw+jZLCotALCLiedhVXutrBjH0drQzqCdKNW0w5HZlSekD/7j/riOXRuYYkxr+rBiXW+RTsWa/n5VbUzWtSa4sPN4aLrpQnW7kUJQq/RXDDOA+kpqGoe99Wn7LnTscnDGRkOgV9tu2GiWMHp3G7a/QVU1IulceR+H6j6U3V97yELy+8AH2WKxR1AB9lTdlO8OmulDG+ml7IO9IkQtTMasWNO+JQdyFCB694TBtmFCvqxCRTX4nJjn0LKijz5y5JXN0gE6inByQzC+UGtYEF9ch96xeQhvJMAWxXarpHzMdrK53S7UWXIBjaSqohig6E34K5aC5GoB0AW/TQidwiEiqoxz2MWbd3bjR6rpcKArlSnoPDmfge4/78HtiSSMxFNwY2SGW2arAqphBkppA4yltZQp7GczqY2XMVuGaljcAUvCoyMuZh7ApVsT0NUfhc6+Sfix17drw/cgV1IClUIpV5nNVz5g/95fP1TXTFkiBAS9acHd2VUOuDoYhyu3Y/ALjh09Ef6/YTqkSMTTLy0KGSo/zmLJ7EGcDBJBCvWmDbGFNQ64irCfB6Ic2tk3Bf3jCQhlWaq06QKkN0vH2ODE/Iulul5C1UEMKfBYsPATAgjIbdBXSarvzqZ55kNHxjUOJFZy71BeWvJlZdzxs+zIXbGIYSiyyONIMSS1pJDGZDpPQFmjLvYCQFHFX4eiL/BMJ1fzXwigLY9Ot6JQUaFvLAHD0SWYTGTg1j9zMJXI8tIJlY1F8cOE/BbU4effde9BlUv2Y1DMpEflQyViYFzr/ru8jjxElA9U1+gfn3uDievCG8NwdPHdcl13DOwmAuqFgu5h4rydq+gXNPnQyaZTG1/usJ55O4COTS9/grvZjt8gHBFTN3SnXfHPpkLBPMDccu57XMr742fnuv0jP32kNbjYPXdm3lsrVOdpAZUCjdh8MAk2GJYLsrXh3d1CAa0Sdrln3IeNJpb5+NzRk4HSD7/qeH5s+r/W5Y3icK5YX8e7rmJr0jDOhdWtciS+kG37pmvwVdlhzv8+woJu09bewwZiC/zHs2+eCKD+8/qTpy71vvTD9dGDF67/fejslaFX9h09+ZScJd+Pvu4MYKc7/mD/A/WEsJAbSOMCAAAAAElFTkSuQmCC",width:64,height:64,src:"/static/85efdca87e453c00274006d549de6549/cbd14/download-ios.png",srcSet:"/static/85efdca87e453c00274006d549de6549/cbd14/download-ios.png 1x,\n/static/85efdca87e453c00274006d549de6549/6ee39/download-ios.png 1.5x"}}},androidMedium:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADoUlEQVQ4y12USWgTYRTHvxYEvSiKqIgHwYMKiqDiyYOgKKh4FfQiKCJaRG8iKlRwwYOCVlzrrrjRzbYUGm2D6aY2bdoa03SJtknTJjHrzCSTmczzvW++mU4deMzMt/y+/1u+x27db2CyqjN6JmOZMgAoZ+KZSUqbEhnlOFol2mW0M/GUtN3TNzLPWoNjfD3uY68bOhmTCiYslpbLrEWxlHwgmc13pKUClGD2MdBktQTJXD6AoAprfUZRbaipJCVx2K4TVeW4sFrHGQ0NgUYql9fQisI0HCvlNfOAZFbxjIYTKzlUNqHs1+8Z5pBfByZIE5sNAeXm+NfRVBOaH/WHppeLEJUxK2axlHSNFtBCsZm+DVRhoDiQ0PCf3OVzYp5DExnZNcflkcn4RpwsiUX8jSdzEHoArm/D0IrWG5iErKyCQzGBixTbSDxzhM1mM1cl1BUtZXJBg4npFLx3eeFJQxc8rO2A1y3fYXAsCnlVt6D01omIKns47O77tgX4EyjoHFiyTsZDoD8Yho+f+6DePcCNvj2+cYgmsuS6lTQDE0IeFf3j0Q3MG5hYi3FSskrRdiWH302enxxCql40f4OXaM+beuDT1yH44OoDjDlkBBDBXGVo6u9B9uPXn61pSQVHNiGnqHxjTVs/PGvshmp0mdx+XN8Jte0+eNfqNYFywRLBC2k88vc46x4MbUG5VkJshc0dfr6ZgAR7+gnBCKzDsY9f+i2FNpAuwOhk/Bhr/OpbHU/LcVQ9J4a0oW84zGHPGnu4u4/qOsHtHYVpjK8zhvTG3MDASHgv5aVsKpFx62aWdUspuUOZ7hgI8Vi2/QjyMFA4Mo7SIRHYCwBFxV40da3imR4cmzotgJqoLYPqkID+0AzPrG8kAp0IV1SNrhyIW8NLjeKHCXlp1+Gp66+Wokq/9h/UUbzguB2GA1aifKC6fL27fxsT14U3hpaun/sSaVlXsJuIhmA4E+U0MU7hMciz3sDEuVnW4t02tL03eBRP03SzQeiiCZSc8RJjGhUK5oGK/yZu5f3x5I1XpsuLdlTYF7umzbv/dzTpow1UCvTG5oPNQQOlWAKrteHdjaCACgt2v8ZtwlwDQf5etuesrfTQ+Qcr2nuHK4ITsZZwLP0Hr2EWW5OEcY6ORRKenqFQ5ZXqxvVWh7n1ppXZ3aayqoY1dA/xgSU7z9hQ89k8/+K92jW337q23Hn7eevVp03rVu45u9CapbWHLzyyYZceNLN/hcGxf+VExaMAAAAASUVORK5CYII=",width:64,height:64,src:"/static/b09e05f60077e2509b2d98dd8a49eb82/cbd14/download-android.png",srcSet:"/static/b09e05f60077e2509b2d98dd8a49eb82/cbd14/download-android.png 1x,\n/static/b09e05f60077e2509b2d98dd8a49eb82/6ee39/download-android.png 1.5x"}}}}}},254:function(e){e.exports={data:{site:{siteMetadata:{title:"Color Collect",description:"A color app for everyone.",author:"@carson"}}}}},260:function(e,a,t){"use strict";a.a=function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"}}}]);
//# sourceMappingURL=component---src-pages-download-js-fc7bd4a78f82118c98f5.js.map