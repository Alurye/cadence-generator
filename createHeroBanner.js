module.exports = {
    heroBannerCtaTemplate: (data) => {
        return `<a href="${data.url}"
        ${data.trackingCode}>
          <div class="hero-banner">
              <div class="hero-banner__backdrop">
                 <picture>
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=360&amp;hei=89&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 360px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=470&amp;hei=117&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 470px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=768&amp;hei=191&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 768px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1024&amp;hei=254&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 1024px)">
                      <img src="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1027&amp;hei=255&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" />
                  </picture>
                  <div class="hero-banner__price-wrapper">
                  <p class="hero-banner__post-header-line-1">
                                              ${data.priceText}
                                                </p></div>
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                          <p class="hero-banner__pre-header">
                             ${data.preHeader}
                          </p>
                          <div class="hero-banner__bmsm-group">
                              <p class="hero-banner__bmsm">
                                  ${data.promotion}
                              </p>
                          </div>
                          <div class="hero-banner__post-header-group">
                              <p class="hero-banner__post-header-line-1">
                                ${data.brandDescription}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="hero-banner__cta-container">
                  <div class="hero-banner__cta hero-banner__cta1">
                      ${data.ctaText}
                  </div>
              </div>
          </div>
      </a>`

    },
    heroNoCta: (data) => {
        return `<div class="hero-banner">
              <div class="hero-banner__backdrop">
                 <picture>
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=360&amp;hei=89&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 360px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=470&amp;hei=117&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 470px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=768&amp;hei=191&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 768px)">
                      <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1024&amp;hei=254&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 1024px)">
                      <img src="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1027&amp;hei=255&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" />
                  </picture>
                  <div class="hero-banner__price-wrapper">
                  <p class="hero-banner__post-header-line-1">
                                              ${data.priceText}
                                                </p></div>
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                          <p class="hero-banner__pre-header">
                             ${data.preHeader}
                          </p>
                          <div class="hero-banner__bmsm-group">
                              <p class="hero-banner__bmsm">
                                  ${data.promotion}
                              </p>
                          </div>
                          <div class="hero-banner__post-header-group">
                              <p class="hero-banner__post-header-line-1">
                                ${data.brandDescription}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`
    },
    heroBannerStyles: () => {
        return `<style>
        .site-wrapper .hero-banner {
            font-size: 1rem;
            background-color: #f4f4f4;
            border: 1px solid #d3d3d3;
            width: 100%;
            font-family: corisanderegular;
        }
    
        .site-wrapper .hero-banner .mobile-only,
        .site-wrapper .hero-banner .mobile-only-inline {
            display: none !important;
        }
    
        .site-wrapper .hero-banner strong {
            font-family: corisandebold;
        }
    
        .site-wrapper .hero-banner p {
            line-height: 1;
            color: white;
        }
    
        .site-wrapper .hero-banner p,
        .site-wrapper .hero-banner span {
            font-family: inherit;
        }
    
        .site-wrapper .hero-banner sup {
            font-size: 56%;
        }
    
        .site-wrapper .hero-banner .hero-banner__backdrop {
            width: 100%;
            position: relative;
        }
    
        .site-wrapper .hero-banner.hb-no-cta .hero-banner__backdrop {
            min-height: 259px;
        }
    
        .site-wrapper .hero-banner .hero-banner__main-text {
            margin-left: auto;
            position: relative;
            text-align: left;
            margin-right: 30%;
            float: right;
        }
    
        .site-wrapper .hero-banner .hero-banner__main-text-wrapper {
            position: absolute;
            width: 60%;
            top: 45%;
            transform: translate(0, -50%);
            right: 0;
        }
        .site-wrapper .hero-banner .hero-banner__price-wrapper {
            position: absolute;
            left: 0;
            width: 50%;
            height: 100%;
            top: 0%;
        }
    
        .site-wrapper .hero-banner .hero-banner__price-wrapper p {
            margin-top: 39%;
            margin-right: 5%;
            font-family: LatoRegular;
        }
​
        .site-wrapper .hero-banner .hero-price-text-wrapper {
            position: absolute;
            width: 40%;
            top: 85%;
            transform: translate(0, -50%);
            left: 3%;
        }
​
        .site-wrapper .hero-banner .hero-price-text-wrapper p {
            font-size: 200%;
        }
    
        .site-wrapper .hero-banner .hero-banner__pre-header {
            font-family: LatoBold;
            font-size: 220%;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
    
        .site-wrapper .hero-banner .hero-banner__top-header {
            color: #0E1C64;
            font-size: 196%;
            margin-bottom: 3%;
            margin-left: 2%;
        }
    
        .site-wrapper .hero-banner .hero-banner__bmsm {
            font-size: 436%;
            font-family: LatoBold;
            text-transform: uppercase;
        }
    
        .site-wrapper .hero-banner .hero-banner__perc {
            font-family: corisandebold;
            font-size: 969%;
            line-height: 77%;
            padding-top: 23%;
        }
    
        .site-wrapper .hero-banner .hero-banner__off {
            font-family: corisandebold;
            font-size: 489%;
            margin-top: -6%;
            text-align: center;
        }
    
        /* for 2 paragraphs */
        /*.site-wrapper .hero-banner .hero-banner__post-header-line-1:first-child {
                margin-bottom: 4px;
            }*/
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-1,
        .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
            font-size: 158%;
            line-height: 1.2;
            font-family: LatoRegular;
            margin-top: 1%;
        }
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
            font-size: 180%;
            font-family: corisandebold;
            border-top: 1px solid #012169;
            border-bottom: 1px solid #012169;
            display: inline-block;
            margin-top: 3%;
            line-height: 1.3;
        }
    
        .site-wrapper .hero-banner .hero-banner__disclaimer {
            font-family: corisanderegular;
            color: #666;
            margin-left: -19%;
            font-size: 160%;
        }
    
        .site-wrapper .hero-banner .hero-banner__cta-container {
            width: 99.125%;
            position: relative;
            text-align: right;
            margin: 0 auto;
        }
    
        .site-wrapper .hero-banner.hb-no-cta .hero-banner__cta-container {
            display: none;
        }
    
        .site-wrapper .hero-banner .hero-banner__cta-container p {
            margin-top: 2.25%;
            text-align: left;
            margin-left: 2.25%;
            color: #666;
            line-height: 130%;
            font-family: corisandelight;
            font-size: 160%;
            float: left;
        }
    
        .site-wrapper .hero-banner .hero-banner__cta {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;
            text-transform: uppercase;
            display: inline-block;
            padding: 10px 37px;
            background-color: #0076b4;
            text-align: center;
            font-family: corisandebold;
            border-radius: 5px;
            margin: 2%;
        }
    
        .site-wrapper .hero-banner .hero-banner__cta:hover {
            background-color: #07689b;
        }
    
        .svg-img {
            width: 8%;
            position: absolute;
            top: 6%;
            left: 2%;
        }
    
        @media screen and (max-width: 1368px) {
            .site-wrapper .hero-banner {
                font-size: .72vw;
            }
        }
    
        @media screen and (max-width: 1023px) {
            .site-wrapper .hero-banner {
                font-size: 2.5vw;
            }
    
            .site-wrapper .hero-banner .mobile-only {
                display: block !important;
            }
    
            .site-wrapper .hero-banner .mobile-only-inline {
                display: inline !important;
            }
    
            .site-wrapper .hero-banner .desktop-only {
                display: none !important;
            }
    
            .site-wrapper .hero-banner.hb-no-cta .hero-banner__backdrop {
                min-height: 79px;
                padding-bottom: 0;
            }
    
            .site-wrapper .hero-banner .hero-banner__pre-header {
                font-size: 100%;
            }
    
            .site-wrapper .hero-banner .hero-banner__top-header {
                color: #0E1C64;
                font-size: 75%;
                margin-bottom: 3%;
                margin-left: 2%;
            }
    
            .site-wrapper .hero-banner .hero-banner__perc {
                font-size: 258%;
                padding-top: 22%;
            }
    
            .site-wrapper .hero-banner .hero-banner__off {
                font-size: 158%;
            }
    
            .site-wrapper .hero-banner .hero-banner__post-header-line-1 {
                font-size: 82%;
                line-height: 1;
            }
    
            .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
                font-size: 65%;
            }
    
            .site-wrapper .hero-banner .hero-banner__disclaimer {
                font-size: 100%;
                margin-left: 0;
            }
    
            .site-wrapper .hero-banner .hero-banner__cta-container p {
                font-size: 78%;
            }
    
            .site-wrapper .hero-banner .hero-banner__cta {
                width: 40%;
                font-size: 1.2rem;
                margin-right: 2.5%;
                padding: 8px 10px;
            }
    
            .site-wrapper .hero-banner .hero-banner__bmsm {
                font-size: 200%;
            }
​
            .site-wrapper .hero-banner .hero-price-text-wrapper p {
                font-size: 80%;
            }
            
            .site-wrapper .hero-banner .hero-banner__main-text {
                margin-right: 30%;
            }
​
        }

        @media screen and (max-width: 470px) {
            .site-wrapper .hero-banner .hero-banner__main-text-wrapper {
                top:50%;
            }
            .site-wrapper .hero-banner .hero-banner__post-header-line-1 {
                letter-spacing: 1px;
                font-size:90%;
            }
    
            .site-wrapper .hero-banner .hero-banner__post-header-line-1 br {
                display: none;
            }
        }
    </style>`
    },
    promoShortStyles: () => {
        return `<style>
        .secondary__bb {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
        }
    
        .secondary__bb h2 {
            font-family: corisandebold;
            color: #012169;
            font-size: 260%;
            margin: 0 auto;
            padding-top: 3%;
        }
    
        .bb-block__wrapper {
            display: flex;
            -ms-box-orient: horizontal;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -moz-flex;
            display: -webkit-flex;
            background-color: #fff;
            height: 100%;
            width: 82%;
            margin: 0 auto;
            flex-direction: row;
            flex-wrap: nowrap;
            padding-top: 1%;
    
        }
    
        .bb-block__wrapper .bb-block__link-container {
            flex-wrap: nowrap;
            align-items: center;
            width: 25%;
            margin-bottom: 0;
    
        }
    
        .bb-block__wrapper .bb-block__child {
            width: 100%;
            margin: 0 auto;
            text-align: left;
            line-height: 1;
        }
    
        .bb-block__wrapper .bb-block__child .bb-block__text-wrapper .bb-block__text-line-1,
        .bb-block__wrapper .bb-block__child .bb-block__text-wrapper .bb-block__text-line-2 {
            margin-right: 2%;
        }
    
        .bb-block__wrapper .bb-block__child img {
            width: 100%;
        }
    
        .bb-block__link-container-1,
        .bb-block__link-container-2,
        .bb-block__link-container-3 {
            margin-right: 1%;
        }
    
        .bb-block__text-wrapper {
            min-height: 160px;
            color: #012169;
            margin-top: 2%;
        }
    
        .bb-block__wrapper .bb-block__text-line-1 {
            /* font-size: 25px; */
            font-size: 140%;
            font-family: corisandebold;
            color: #012169;
            line-height: 120%;
        }
    
        .bb-block__wrapper .bb-block__text-line-2 {
            /* font-size: 18px; */
            font-size: 120%;
            font-family: corisandelight;
            color: #012169;
            line-height: 135%;
            margin-top: 1%;
    
        }
    
        .bb-block__wrapper .bb-block__cta {
            /* font-size: 14px; */
            font-size: 100%;
            font-family: corisandebold;
            color: #012169;
        }
    
        @media screen and (max-width: 700px) {
    
            .bb-block__wrapper {
                padding-top: 0;
            }
    
        }
    
        @media screen and (max-width: 1023px) {
    
            .secondary__bb h2 {
                font-size: 210%;
            }
    
            .bb-block__wrapper {
                width: 90%;
            }
    
            .bb-block__text-wrapper {
                min-height: 138px;
    
            }
    
            .bb-block__wrapper .bb-block__text-line-1 {
                font-size: 100%;
                line-height: 116%;
            }
    
            .bb-block__wrapper .bb-block__text-line-2 {
                font-size: 90%;
                line-height: 120%;
            }
    
            .bb-block__wrapper .bb-block__child .bb-block__cta {
                font-size: 85%;
            }
        }
    
        @media screen and (max-width: 767px) {
            .secondary__bb h2 {
                font-size: 200%;
                margin-bottom: 2%;
            }
        }
    
        @media screen and (max-width: 700px) {
            .secondary__bb h2 {
                margin-top: 0;
                padding-top: 0%;
            }
        }
    
        @media screen and (max-width: 470px) {
    
            .secondary__bb h2 {
                font-size: 170%;
            }
    
            .bb-block__wrapper {
                flex-wrap: wrap;
                padding-top: 5%;
            }
    
    
            .bb-block__wrapper .bb-block__link-container {
                width: 100%;
                margin-bottom: 4%;
                margin-right: 0;
                padding-bottom: 6%;
            }
    
            /* .bb-block__wrapper .bb-block__link-container-3 {
            padding-bottom: 0;
            } */
            .bb-block__wrapper .bb-block__link-container-4 {
                padding-bottom: 0;
            }
    
            .bb-block__text-wrapper {
                min-height: 41px;
    
            }
    
            .bb-block__wrapper .bb-block__child .bb-block__text-wrapper .bb-block__text-line-1 {
                font-size: 160%;
                margin-left: 3%;
            }
    
            .bb-block__wrapper .bb-block__child .bb-block__text-wrapper .bb-block__text-line-2 {
                font-size: 110%;
                margin-left: 3%;
                margin-bottom: 4%;
                min-height: 60px;
            }
    
            .bb-block__wrapper .bb-block__child .bb-block__cta {
                margin-left: 3%;
                font-size: 100%;
            }
        }
    </style>`
    },
    promoShortBillboardGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let fileName = v;
        let markup = '';
        let styles = module.exports.promoShortStyles();
        data.map((val, i) => {
            i++;
            let html = module.exports.promoShortTemplate(val, i);
            markup += html;
        });
        markup = styles + module.exports.promoShortWrapper(markup)
        fs.writeFile(`./${fileName}/${fileName}.html`, markup, function (err) {
            if (err) throw err;

        });
    },
    heroBannersGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        data.map((val, i) => {
            // console.log(val)
            let fileName = val.name;
            let styles = module.exports.heroBannerStyles();
            let html = module.exports.heroBannerCtaTemplate(val);
            let htmlNoCta = module.exports.heroNoCta(val);
            let withCTA = styles + '\n' + html;
            let noCTA = styles + '\n' + htmlNoCta;
            fs.writeFile(`./heroBanners/${fileName}.html`, withCTA, function (err) {
                if (err) throw err;

            });
            fs.writeFile(`./heroBanners/${fileName} NO CTA.html`, noCTA, function (err) {
                if (err) throw err;

            });
        });
    },
    featureProductSpotlightGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let folderName = v;
        let markup = '';
        data.map((val,i) => {
            let fileName = val.name;
            let html = module.exports.fpsTemplate(val);
            markup += html;
            if (i % 2 !== 0) {
                markup = module.exports.fpsWrapper(markup);
                console.log(markup);
                fs.writeFile(`./${folderName}/${fileName}.html`, markup, function (err) {
                    if (err) throw err;
        
                });
                markup = '';
            }
           
        });
        
    },
    fpsTemplate: (data, i) => {
        return `<div class="featured-product" style="margin-bottom:25px; text-align:left;">
       <a style="width:100%;text-align:center!important;" aria-label="${data.brandName + ' ' + data.brandDescription}" href="${data.url}"
        ${data.trackingCode} >
         <div
           style="color:#012169; font-size:1.3rem;line-height: 1.5rem;font-family:'corisandebold'; margin-bottom:5px; text-align: center;">
          ${data.brandName}
         </div>
         <div class="featured-product-link"
           style="color:#012169; font-size:1.3rem;line-height: 1.5rem;font-family:'corisandebold'; margin-bottom:10px; text-align: center;">
           ${data.brandDescription}
         </div>
         <div>
           <img alt="" src="//s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.skuNumber}_set?wid=180&amp;$L3_CLP$"
             style="max-height:133px;" />
         </div>
         <button tabindex="-1"
           style="padding: 8px !important; border-radius: 5px; margin: 2px 0 0 26px; text-align: center; text-transform: uppercase; background: #0076b4; color: #fff;width: 30px;">
           Shop Now
         </button>
       </a> 
     </div>`
    },
    fpsWrapper: (data) => {
        return `<div style="width: 187px;float: right;margin-right:70px;">${data}</div>`
    },
    promoShortTemplate: (data, i) => {
        return ` <div class="bb-block__link-container bb-block__link-container-${i}">
        <a class="bb-block__link-wrapper" href="${data.url}"
            ${data.trackingCode}>
            <div class="bb-block__child bb-block__child-1">
                <div>
                    <vshoppe-lazy-load
                        image-src="'//s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=440&amp;hei=536&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0'"
                        alt="''"></vshoppe-lazy-load>
                </div>
                <div class="bb-block__text-wrapper">
                    <p class="bb-block__text bb-block__text-line-1">${data.promotion}</p>
                    <p class="bb-block__text bb-block__text-line-2">${data.brandDescription}.</p>
                </div>
                <p class="bb-block__cta">${data.ctaText || ''}</p>
            </div>
        </a>
    </div>`
    },
    promoShortWrapper: (data) => {
        return `<div class="secondary__bb">
        <h2>Fuel Your Journey</h2>
        <div class="bb-block__wrapper">
           ${data}
        </div>
    </div>`
    },
    htmlAdGeneralStyles: () => {
        return `
        body {
            margin: 0;
            overflow: hidden;
        }
        body .ad-wrapper * {
            font-family: Lato, sans-serif;
        }
        .ad-wrapper {
            /* width: 100%; */
            height: calc(100% - 2px);
            margin: 0% auto;
            text-align: center;
            font-family: Lato, sans-serif;
            border: 1px solid black;
            padding: 0;
            position: relative;
        }
        .ad-wrapper img {
            width: 100%;
            display: block;
        }
        .ad-wrapper h2 {
            color: #012169;
            font-weight: bold;
            margin: 4% 0 2%;
        }
        .mask {
            overflow: hidden;
        }
        .mask ul {
            padding: 0;
            margin: 0;
            position: relative;
        }
        .mask ul li {
            width: 100%;
            height: 28vh;
            position: absolute;
            top: -14vh;
            list-style: none;
        }
        .mask:hover ul li.anim1,
        .mask:hover ul li.anim2 {
            -webkit-animation-play-state: paused;
            -moz-animation-play-state: paused;
            -o-animation-play-state: paused;
            animation-play-state: paused;
        }
        .mask ul li.anim1 {
            animation: cycle 7s 3 linear;
            animation-fill-mode: forwards;
        }
        .mask ul li.anim2 {
            animation: cycle2 7s 3 linear;
            animation-fill-mode: forwards;
        }
        .mask ul li.anim1 h2.second-step span:first-child {
            font-size: 60%;
            vertical-align: top;
        }
        .mask ul li.anim1 h2.second-step span:nth-child(2) {
            margin-left: -20%;
            font-size: 33%;
            vertical-align: baseline;
        }
        .ad-wrapper:hover li {
            animation-play-state: paused;
        }
        .ad-wrapper .ad-button {
            background: #0458ad;
            color: white;
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            display: inline-block;
            border-radius: 10px;
            transition: 0.3s;
        }
        .ad-wrapper .ad-button:hover {
            background-color: #012169;
        }
        @keyframes cycle {
            0% {
                top: 0px;
                opacity: 1;
                z-index: 0;
            }

            45% {
                top: 0px;
                opacity: 1;
                z-index: 0;
            }

            50% {
                top: 175px;
                opacity: 0;
                z-index: 0;
            }

            51% {
                top: -175px;
                opacity: 0;
                z-index: -1;
            }

            95% {
                top: 175px;
                opacity: 0;
                z-index: 0;
            }

            96% {
                top: -175px;
                opacity: 0;
                z-index: 0;
            }

            100% {
                top: 0px;
                opacity: 1;
                z-index: 0;
            }
        }
        @keyframes cycle2 {
            0% {
                top: -175px;
                opacity: 0;
            }

            45% {
                top: -175px;
                opacity: 0;
            }

            50% {
                top: 0px;
                opacity: 1;
            }

            51% {
                top: 0px;
                opacity: 1;
                z-index: 0;
            }

            94% {
                top: 0px;
                opacity: 1;
                z-index: 0;
            }

            99% {
                top: 175px;
                opacity: 0;
                z-index: 0;
            }

            100% {
                top: -175px;
                opacity: 0;
                z-index: 0;
            }
        }`
    },
    htmlAd160x600Styles: () => {
        return `body {
            width: 160px;
            height: 600px;
        }
        .ad-wrapper .ad-svg svg {
            width: 85%;
            margin: 15% 0 0;
        }
        .mask {
            height: 26.5%;
        }
        .mask ul li.anim2 h2.first-step {
            font-size: 32px;
            margin: 4% 6% 2%;
        }
        .mask ul li.anim2 p {
            color: #012169;
            font-size: 20px;
            margin: 5% 0 0%;
            font-weight: bold;
        }
        .mask ul li.anim1 h2.second-step {
            font-size: 36px;
            line-height: .7;
            margin: 30% 0 2%;
        }
        .mask ul li.anim1 p {
            color: #012169;
            font-size: 15px;
            margin: 5% 3% 0;
        }
        .ad-wrapper .ad-button {
            padding: 4% 7%;
            margin: 4% 0 8%;
            font-size: 16px;
        }
        `
    },
    htmlAd300x250Styles: () => {
        return `body {
            width: 300px;
            height: 250px;
        }
        .ad-wrapper {
            display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
            display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
            display: -ms-flexbox;      /* TWEENER - IE 10 */
            display: -webkit-flex;     /* NEW - Chrome */
            display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
        }
        .ad-wrapper .ad-svg svg {
            width: 85%;
            margin: 15% 0 0;
        }
        .mask {
            height: 52%;
        }
        .mask ul li.anim2 h2.first-step {
            font-size: 28px;
            margin: 0% 9% 2%;
        }
        .mask ul li.anim2 p {
            color: #012169;
            font-size: 18px;
            margin: 0% 0 0%;
            font-weight: bold;
        }
        .mask ul li.anim1 h2.second-step {
            font-size: 34px;
            line-height: .7;
            margin: 23% 0 2%;
        }
        .mask ul li.anim1 p {
            color: #012169;
            font-size: 13px;
            margin: 5% 0% 0;
        }
        .ad-wrapper .position-1 {
            order: 2;
        }
        .ad-wrapper .ad-button {
            padding: 5% 8%;
            margin: 4% 0;
            font-size: 13px;
        }
        `
    },
    htmlAdContent300x250Wrapper: (data) => {
        return `<div class="position-1">${data}</div>`
    },
    htmlAd300x600Styles: () => {
        return `body {
            width: 300px;
            height: 600px;
        }
        .ad-wrapper .ad-svg svg {
            width: 70%;
            margin: 5% 0;
        }
        .mask {
            height: 26.7%;
        }
        .mask ul li.anim2 h2.first-step {
            font-size: 33px;
            margin: 0% 9% 2%;
        }
        .mask ul li.anim2 p {
            color: #012169;
            font-size: 20px;
            margin: 5% 0 2%;
            font-weight: bold;
        }
        .mask ul li.anim1 h2.second-step {
            font-size: 65px;
            line-height: .7;
            margin: 15% 0 2%;
        }
        .mask ul li.anim1 p {
            color: #012169;
            font-size: 17px;
            margin: 5% 0 0;
        }
        .ad-wrapper .ad-button {
            padding: 4% 7%;
            margin: 4% 0;
            font-size: 16px;
        }
        `
    },
    htmlAd320x50Styles: () => {
        return `body {
            width: 320px;
            height: 50px;
        }
        body a {
            color: transparent;
        }
        .ad-wrapper {
            display: -webkit-box;
            /* OLD - iOS 6-, Safari 3.1-6 */
            display: -moz-box;
            /* OLD - Firefox 19- (buggy but mostly works) */
            display: -ms-flexbox;
            /* TWEENER - IE 10 */
            display: -webkit-flex;
            /* NEW - Chrome */
            display: flex;
            /* NEW, Spec - Opera 12.1, Firefox 20+ */
        }
        .ad-wrapper .ad-svg {
            width: 67%;
        }
        .ad-wrapper .ad-svg svg {
            width: 100%;
            margin: 6% 0 0 5%;
        }
        .mask {
            height: 100%;
            width: 100%;
        }
        .mask ul li.anim2 h2.first-step {
            font-size: 12px;
            margin: 1% 0% 0%;
        }
        .mask ul li.anim2 p {
            color: #012169;
            font-size: 13px;
            margin: 4% 0 0%;
            font-weight: bold;
        }
        .mask ul li.anim1 h2.second-step {
            font-size: 22px;
            line-height: .7;
            margin: 6% 0 2%;
        }
        .mask ul li.anim1 p {
            color: #012169;
            font-size: 12px;
            margin: 0% 7% 0;
        }
        .ad-wrapper .ad-button {
            padding: 1% 3%;
            margin: 2% 2%;
            font-size: 12px;
        }
        `
    },
    htmlAd728x90Styles: () => {
        return `body {
            width: 728px;
            height: 90px;
        }
        body a {
            color: transparent;
        }
        .ad-wrapper {
            display: -webkit-box;
            /* OLD - iOS 6-, Safari 3.1-6 */
            display: -moz-box;
            /* OLD - Firefox 19- (buggy but mostly works) */
            display: -ms-flexbox;
            /* TWEENER - IE 10 */
            display: -webkit-flex;
            /* NEW - Chrome */
            display: flex;
            /* NEW, Spec - Opera 12.1, Firefox 20+ */
        }
        .ad-wrapper .ad-svg svg {
            width: 80%;
            margin: 6% 0 0;
        }
        .ad-wrapper img {
            width: auto;
        }
        .mask {
            overflow: hidden;
            height: 100%;
            width: 40%;
        }
        .mask ul li.anim2 h2.first-step {
            font-size: 22px;
            margin: 0% 7% 2%;
        }
        .mask ul li.anim2 p {
            color: #012169;
            font-size: 18px;
            margin: 1% 0 0%;
            font-weight: bold;
        }
        .mask ul li.anim1 h2.second-step {
            font-size: 40px;
            line-height: .7;
            margin: 10% 0 2%;
        }
        .mask ul li.anim1 p {
            color: #012169;
            font-size: 16px;
            margin: 0% 7% 0;
        }
        .ad-wrapper .ad-button {
            padding: 1% 3%;
            margin: 4% 2%;
            font-size: 12px;
            width: 14%;
        }
        `
    },
    htmlAdContent: (data) => {
        return `<div class="mask">
        <ul>
            <li class="anim1">
                <p>${data.a2PreHeader ? data.a2PreHeader : ''}</p>
                <h2 class="second-step">
                    <!-- 20<span>%</span><span>OFF</span> -->
                    ${data.a2Header}
                </h2>
                <p>${data.a2PostHeader ? data.a2PostHeader : ''}</p>
            </li>
            <li class="anim2">
                <p>${data.a1PreHeader ? data.a1PreHeader : ''}</p>
                <h2 class="first-step">
                    ${data.a1Header}
                </h2>
                <p>${data.a1PostHeader ? data.a1PostHeader : ''}</p>
            </li>
        </ul>
    </div>`
    },
    htmlAdSvg1: () => {
        return `            <div class="ad-svg">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg class="html-ad-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 214 78.7"
            style="enable-background:new 0 0 214 78.7;" xml:space="preserve">
            <style type="text/css">
                .html-ad-svg .st0 {
                    fill: #012169;
                }

                .html-ad-svg .st1 {
                    fill: #41B6E6;
                }
            </style>
            <g>
                <path class="st0" d="M2.9,68.6H0.3c-0.2,0-0.3-0.2-0.3-0.3v-2c0-0.2,0.1-0.3,0.3-0.3h8c0.2,0,0.3,0.2,0.3,0.3v2
                c0,0.2-0.1,0.3-0.3,0.3H5.8v9.7c0,0.2-0.2,0.3-0.3,0.3H3.3c-0.2,0-0.3-0.2-0.3-0.3V68.6z M11.7,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2
                c0.2,0,0.3-0.2,0.3-0.3v-4.8h5.2v4.8c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-12c0-0.2-0.2-0.3-0.3-0.3h-2.2
                c-0.2,0-0.3,0.2-0.3,0.3v4.6h-5.2v-4.6c0-0.2-0.1-0.3-0.3-0.3h-2.2c-0.2,0-0.3,0.2-0.3,0.3V78.2z M27,78.2c0,0.2,0.1,0.3,0.3,0.3
                h7.5c0.2,0,0.3-0.2,0.3-0.3v-2c0-0.2-0.1-0.3-0.3-0.3h-5v-2.4H34c0.2,0,0.3-0.1,0.3-0.3v-2c0-0.2-0.2-0.3-0.3-0.3h-4.1v-2.2h5
                c0.2,0,0.3-0.2,0.3-0.3v-2c0-0.2-0.1-0.3-0.3-0.3h-7.5c-0.2,0-0.3,0.2-0.3,0.3V78.2z M49.3,78.5c0.1,0.1,0.2,0.2,0.3,0.2h0.2
                c0.1,0,0.3-0.1,0.3-0.2l5.7-12.2c0.1-0.2,0-0.5-0.3-0.5H53c-0.1,0-0.3,0.1-0.3,0.2l-3,6.6h-0.1l-3-6.6c0-0.1-0.2-0.2-0.3-0.2h-2.4
                c-0.3,0-0.4,0.2-0.3,0.5L49.3,78.5z M58.6,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-12c0-0.2-0.2-0.3-0.3-0.3H59
                c-0.2,0-0.3,0.2-0.3,0.3V78.2z M67.4,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-9.7h2.6c0.2,0,0.3-0.2,0.3-0.3v-2
                c0-0.2-0.1-0.3-0.3-0.3h-8c-0.2,0-0.3,0.2-0.3,0.3v2c0,0.2,0.1,0.3,0.3,0.3h2.6V78.2z M78.6,74.2l1.4-3h0l1.4,3H78.6z M73.9,78.1
                c-0.1,0.2,0,0.5,0.3,0.5h2c0.4,0,0.6-0.2,0.7-0.4l0.7-1.4h4.9l0.7,1.4c0.2,0.3,0.3,0.5,0.6,0.5h2c0.3,0,0.4-0.2,0.3-0.5l-5.7-12.2
                c-0.1-0.1-0.2-0.2-0.3-0.2h-0.2c-0.1,0-0.3,0.1-0.3,0.2L73.9,78.1 M88.6,78.2c0,0.2,0.1,0.4,0.3,0.4H91c0.2,0,0.3-0.1,0.3-0.3
                l0.8-5.6h0l3.1,5.9c0.1,0.1,0.2,0.2,0.3,0.2h0.3c0.1,0,0.3-0.1,0.3-0.2l3-5.9h0l0.8,5.6c0,0.1,0.2,0.3,0.3,0.3h2.1
                c0.2,0,0.4-0.2,0.3-0.4l-2-12.1c0-0.2-0.2-0.3-0.3-0.3h-0.3c-0.1,0-0.3,0.1-0.3,0.2l-4.2,7.8h0l-4.2-7.8c-0.1-0.1-0.2-0.2-0.3-0.2
                h-0.3c-0.1,0-0.3,0.1-0.3,0.3L88.6,78.2z M106.6,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-12c0-0.2-0.2-0.3-0.3-0.3
                h-2.2c-0.2,0-0.3,0.2-0.3,0.3V78.2z M113.8,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-6.7h0l7.1,7.2
                c0,0,0.2,0.1,0.2,0.1h0.3c0.2,0,0.3-0.1,0.3-0.3V66.2c0-0.2-0.2-0.3-0.3-0.3h-2.2c-0.2,0-0.3,0.2-0.3,0.3v6.4h0l-7.2-6.9h-0.5
                c-0.2,0-0.3,0.1-0.3,0.3L113.8,78.2z M134.7,76.8c-0.1,0.3-0.1,0.3,0.1,0.5c0.4,0.4,1.7,1.4,4.1,1.4c2.7,0,4.3-1.9,4.3-3.7
                c0-2.5-2.2-3.6-3.7-4.1c-1.4-0.6-2-1.1-2-1.8c0-0.5,0.5-0.9,1.1-0.9c1.1,0,2.4,1,2.6,1.1c0.2,0.1,0.5,0,0.6-0.2l0.9-1.4
                c0.1-0.1,0.1-0.5-0.1-0.6c-0.5-0.4-2-1.4-3.9-1.4c-2.8,0-4.2,1.8-4.2,3.6c0,2.2,2,3.4,3.5,4c1.2,0.5,1.9,1.1,1.9,1.8
                c0,0.6-0.5,1.1-1.2,1.1c-1.2,0-2.5-1-2.6-1c-0.1-0.1-0.5-0.1-0.6,0.1L134.7,76.8 M146.8,78.2c0,0.2,0.2,0.3,0.3,0.3h2.2
                c0.2,0,0.3-0.2,0.3-0.3v-4.8h5.2v4.8c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.2,0.3-0.3v-12c0-0.2-0.2-0.3-0.3-0.3h-2.2
                c-0.2,0-0.3,0.2-0.3,0.3v4.6h-5.2v-4.6c0-0.2-0.1-0.3-0.3-0.3h-2.2c-0.2,0-0.3,0.2-0.3,0.3V78.2z M167.7,75.8c-2,0-3.6-1.6-3.6-3.6
                c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C171.3,74.2,169.7,75.8,167.7,75.8 M167.7,65.7c-3.6,0-6.5,2.9-6.5,6.5
                c0,3.6,2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5C174.2,68.6,171.3,65.7,167.7,65.7 M180.6,71.3v-2.8h1.7c0.8,0,1.4,0.6,1.4,1.3
                c0,0.8-0.7,1.4-1.4,1.4H180.6z M177.8,78.2c0,0.2,0.1,0.3,0.3,0.3h2.1c0.2,0,0.3-0.2,0.3-0.3V74h1.9c2.2,0,4-1.8,4-4.1
                c0-2.2-1.8-4-4-4h-4.4c-0.2,0-0.3,0.2-0.3,0.3V78.2z M192.5,71.3v-2.8h1.7c0.8,0,1.4,0.6,1.4,1.3c0,0.8-0.7,1.4-1.4,1.4H192.5z
                M189.7,78.2c0,0.2,0.1,0.3,0.3,0.3h2.1c0.2,0,0.3-0.2,0.3-0.3V74h1.9c2.2,0,4-1.8,4-4.1c0-2.2-1.8-4-4-4H190
                c-0.2,0-0.3,0.2-0.3,0.3V78.2z M201.6,78.2c0,0.2,0.1,0.3,0.3,0.3h7.5c0.2,0,0.3-0.2,0.3-0.3v-2c0-0.2-0.1-0.3-0.3-0.3h-5v-2.4h4.1
                c0.2,0,0.3-0.1,0.3-0.3v-2c0-0.2-0.2-0.3-0.3-0.3h-4.1v-2.2h5c0.2,0,0.3-0.2,0.3-0.3v-2c0-0.2-0.1-0.3-0.3-0.3h-7.5
                c-0.2,0-0.3,0.2-0.3,0.3V78.2z" />
                <g>
                    <path class="st1"
                        d="M136,1.8c-2.5-1.8-15.5-4.2-21.5,3.3c-10.8,13.5,3.5,30.3,3.5,30.3L136,1.8z" />
                    <path class="st0" d="M109,26.4c-3.2-6-7.5-14.7-8-15.6c-5.1-9-11.9-9.9-16-9.9H73.7c0,0,24.7,47.3,25,47.9
                    c1.5,2.5,3.8,3.5,6.1,3.5c2.4,0,4.5-0.9,6.1-3.5l0,0l7-13.3C118,35.5,114.4,36.5,109,26.4" />
                </g>
                <path class="st0" d="M214,67.2c0,0.7-0.6,1.3-1.4,1.3c-0.8,0-1.4-0.6-1.4-1.3c0-0.7,0.6-1.3,1.4-1.3C213.4,65.9,214,66.4,214,67.2z
                M211.6,67.2c0,0.6,0.4,1.1,1,1.1c0.6,0,1-0.5,1-1.1c0-0.6-0.4-1.1-1-1.1C212,66.1,211.6,66.6,211.6,67.2z M212.4,67.9h-0.3v-1.3
                c0.1,0,0.3,0,0.5,0c0.3,0,0.4,0,0.5,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.3,0.3v0c0.1,0,0.2,0.1,0.2,0.3
                c0,0.2,0.1,0.3,0.1,0.3h-0.3c0,0-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.3-0.2h-0.1V67.9z M212.4,67.1h0.1c0.2,0,0.3-0.1,0.3-0.2
                c0-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.1,0-0.2,0V67.1z" />
            </g>
        </svg>
    </div>`
    },
    htmlAdSvg2: () => {
        return `<div class="ad-svg">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg class="html-ad-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 202 74.53"
            style="enable-background:new 0 0 202 74.53;" xml:space="preserve">
            <style type="text/css">
                .html-ad-svg .st0 {
                    fill: #222C65;
                }

                .html-ad-svg .st1 {
                    fill: #44B6E5;
                }
            </style>
            <g>
                <path class="st0" d="M180.43,45.5c0,0.25,0.23,0.48,0.48,0.48h2.99c0.28,0,0.48-0.23,0.48-0.48v-9.37h0.02l9.93,9.98
c0.05,0.05,0.25,0.12,0.33,0.12h0.4c0.25,0,0.48-0.2,0.48-0.45V28.87c0-0.25-0.23-0.48-0.48-0.48h-3.02
c-0.28,0-0.48,0.23-0.48,0.48v8.92h-0.02l-10.03-9.65h-0.63c-0.25,0-0.48,0.2-0.48,0.45L180.43,45.5L180.43,45.5z" />
                <path class="st0" d="M170.3,45.5c0,0.25,0.23,0.48,0.48,0.48h3.01c0.25,0,0.48-0.23,0.48-0.48V28.87c0-0.25-0.23-0.48-0.48-0.48
h-3.01c-0.25,0-0.48,0.23-0.48,0.48V45.5L170.3,45.5z" />
                <path class="st0" d="M145.29,45.43c-0.05,0.33,0.18,0.55,0.48,0.55h2.97c0.25,0,0.45-0.2,0.48-0.4l1.11-7.77h0.05l4.25,8.14
c0.07,0.15,0.28,0.28,0.43,0.28h0.45c0.13,0,0.35-0.12,0.43-0.28l4.22-8.14h0.05l1.13,7.77c0.02,0.2,0.25,0.4,0.48,0.4h2.96
c0.3,0,0.53-0.23,0.48-0.55l-2.84-16.89c-0.03-0.23-0.25-0.4-0.45-0.4h-0.4c-0.13,0-0.35,0.1-0.43,0.25l-5.83,10.86h-0.05
l-5.83-10.86c-0.08-0.15-0.3-0.25-0.43-0.25h-0.4c-0.2,0-0.43,0.18-0.45,0.4L145.29,45.43L145.29,45.43z" />
                <path class="st0" d="M124.92,45.33c-0.15,0.33,0.05,0.65,0.43,0.65h2.76c0.5,0,0.78-0.3,0.91-0.6l0.9-2.01h6.83l0.91,1.98
c0.23,0.48,0.43,0.63,0.88,0.63h2.79c0.38,0,0.58-0.33,0.43-0.65l-7.87-16.91c-0.08-0.15-0.25-0.28-0.43-0.28h-0.25
c-0.18,0-0.35,0.13-0.43,0.28L124.92,45.33 M131.43,39.95l1.89-4.15h0.02l1.91,4.15H131.43L131.43,39.95z" />
                <path class="st0" d="M115.9,45.5c0,0.25,0.23,0.48,0.48,0.48h3.02c0.25,0,0.48-0.23,0.48-0.48V32.09h3.59
c0.28,0,0.48-0.23,0.48-0.48v-2.74c0-0.25-0.2-0.48-0.48-0.48h-11.16c-0.28,0-0.48,0.23-0.48,0.48v2.74c0,0.25,0.2,0.48,0.48,0.48
h3.59V45.5L115.9,45.5z" />
                <path class="st0" d="M103.69,45.5c0,0.25,0.23,0.48,0.48,0.48h3.01c0.25,0,0.48-0.23,0.48-0.48V28.87c0-0.25-0.23-0.48-0.48-0.48
h-3.01c-0.25,0-0.48,0.23-0.48,0.48V45.5L103.69,45.5z" />
                <path class="st0" d="M90.66,45.96c0.08,0.15,0.23,0.28,0.43,0.28h0.25c0.2,0,0.35-0.12,0.43-0.28l7.89-16.91
c0.15-0.33-0.05-0.65-0.43-0.65h-3.34c-0.2,0-0.38,0.15-0.43,0.28l-4.15,9.17h-0.15l-4.15-9.17c-0.05-0.12-0.23-0.28-0.43-0.28
h-3.34c-0.38,0-0.58,0.33-0.43,0.65L90.66,45.96L90.66,45.96z" />
            </g>
            <g>
                <path class="st0" d="M120.35,21.18c0,0.25,0.2,0.48,0.48,0.48h10.4c0.28,0,0.48-0.23,0.48-0.48v-2.74c0-0.25-0.2-0.48-0.48-0.48
h-6.96v-3.39H130c0.25,0,0.48-0.2,0.48-0.48v-2.74c0-0.25-0.23-0.48-0.48-0.48h-5.73V7.76h6.96c0.28,0,0.48-0.23,0.48-0.48V4.54
c0-0.25-0.2-0.48-0.48-0.48h-10.4c-0.28,0-0.48,0.23-0.48,0.48V21.18L120.35,21.18z" />
                <path class="st0" d="M99.08,21.18c0,0.25,0.23,0.48,0.48,0.48h2.99c0.28,0,0.48-0.23,0.48-0.48v-6.61h7.19v6.61
c0,0.25,0.2,0.48,0.48,0.48h2.99c0.25,0,0.48-0.23,0.48-0.48V4.54c0-0.25-0.23-0.48-0.48-0.48h-2.99c-0.28,0-0.48,0.23-0.48,0.48
v6.33h-7.19V4.54c0-0.25-0.2-0.48-0.48-0.48h-2.99c-0.25,0-0.48,0.23-0.48,0.48V21.18L99.08,21.18z" />
                <path class="st0" d="M86.84,7.76h-3.59c-0.28,0-0.48-0.23-0.48-0.48V4.54c0-0.25,0.2-0.48,0.48-0.48h11.16
c0.28,0,0.48,0.23,0.48,0.48v2.74c0,0.25-0.2,0.48-0.48,0.48h-3.59v13.42c0,0.25-0.23,0.48-0.48,0.48h-3.01
c-0.25,0-0.48-0.23-0.48-0.48V7.76L86.84,7.76z" />
            </g>
            <g>
                <path class="st1"
                    d="M80.24,6.4c-3.2-2.33-19.68-5.27-27.26,4.2C39.33,27.66,57.35,49,57.35,49L80.24,6.4L80.24,6.4z" />
                <path class="st0" d="M46.01,37.49c-4.06-7.57-9.43-18.59-10.11-19.78C29.44,6.35,20.8,5.22,15.65,5.22H1.35
c0,0,31.27,59.82,31.68,60.59c1.96,3.11,4.78,4.39,7.76,4.4c2.99-0.01,5.76-1.13,7.67-4.4l0-0.01L57.35,49
C57.35,49,52.9,50.32,46.01,37.49" />
            </g>
            <g>
                <path class="st0" d="M175.84,69.74c0,0.25,0.2,0.48,0.48,0.48h10.4c0.28,0,0.48-0.23,0.48-0.48V67c0-0.25-0.2-0.48-0.48-0.48h-6.96
v-3.39h5.73c0.25,0,0.48-0.2,0.48-0.48v-2.74c0-0.25-0.23-0.48-0.48-0.48h-5.73v-3.12h6.96c0.28,0,0.48-0.23,0.48-0.48V53.1
c0-0.25-0.2-0.48-0.48-0.48h-10.4c-0.28,0-0.48,0.23-0.48,0.48V69.74L175.84,69.74z" />
                <path class="st0" d="M142.82,69.74c0,0.25,0.2,0.48,0.48,0.48h2.96c0.25,0,0.48-0.23,0.48-0.48v-5.91h2.64
c3.07,0,5.6-2.54,5.6-5.65c0-3.04-2.54-5.55-5.63-5.55h-6.06c-0.28,0-0.48,0.23-0.48,0.48V69.74L142.82,69.74z M146.74,60.16v-3.85
h2.39c1.08,0,1.98,0.8,1.98,1.86c0,1.13-0.9,1.99-1.98,1.99H146.74L146.74,60.16z" />
                <path class="st0" d="M128.76,52.37c-5.03,0-9.02,4.05-9.02,9.07c0,5.03,4,9.02,9.02,9.02c5.03,0,9.05-3.99,9.05-9.02
C137.81,56.42,133.79,52.37,128.76,52.37 M128.76,66.45c-2.74,0-5-2.26-5-5c0-2.76,2.26-5.05,5-5.05c2.76,0,5.03,2.29,5.03,5.05
C133.79,64.18,131.52,66.45,128.76,66.45" />
                <path class="st0" d="M99.66,69.74c0,0.25,0.23,0.48,0.48,0.48h2.99c0.28,0,0.48-0.23,0.48-0.48v-6.61h7.19v6.61
c0,0.25,0.2,0.48,0.48,0.48h2.99c0.25,0,0.48-0.23,0.48-0.48V53.1c0-0.25-0.23-0.48-0.48-0.48h-2.99c-0.28,0-0.48,0.23-0.48,0.48
v6.33h-7.19V53.1c0-0.25-0.2-0.48-0.48-0.48h-2.99c-0.25,0-0.48,0.23-0.48,0.48V69.74L99.66,69.74z" />
                <path class="st0" d="M82.9,67.83c-0.2,0.35-0.13,0.45,0.13,0.7c0.58,0.58,2.39,1.93,5.65,1.93c3.69,0,5.93-2.61,5.93-5.2
c0-3.42-3.12-4.95-5.08-5.73c-1.99-0.8-2.74-1.51-2.74-2.44c0-0.68,0.68-1.28,1.58-1.28c1.53,0,3.37,1.38,3.59,1.51
c0.23,0.18,0.68-0.05,0.86-0.33l1.28-1.94c0.1-0.18,0.15-0.63-0.15-0.8c-0.75-0.55-2.76-1.88-5.38-1.88c-3.87,0-5.8,2.51-5.8,5
c0,3.02,2.71,4.7,4.88,5.55c1.71,0.68,2.59,1.48,2.59,2.54c0,0.88-0.73,1.51-1.73,1.51c-1.66,0-3.47-1.33-3.57-1.38
c-0.18-0.13-0.65-0.18-0.85,0.15L82.9,67.83" />
                <path class="st0" d="M190.93,54.34h0.2c0.24,0,0.43-0.08,0.43-0.27c0-0.17-0.12-0.28-0.4-0.28c-0.11,0-0.19,0.01-0.24,0.02V54.34
L190.93,54.34z M190.92,55.38h-0.43v-1.85c0.17-0.02,0.41-0.06,0.71-0.06c0.35,0,0.51,0.06,0.63,0.15c0.11,0.08,0.19,0.22,0.19,0.4
c0,0.23-0.17,0.37-0.39,0.44v0.02c0.18,0.06,0.27,0.2,0.33,0.45c0.06,0.28,0.1,0.38,0.13,0.45h-0.45
c-0.05-0.07-0.09-0.23-0.15-0.45c-0.03-0.19-0.15-0.28-0.38-0.28h-0.2V55.38L190.92,55.38z M189.77,54.42
c0,0.83,0.62,1.48,1.45,1.48c0.8,0.01,1.41-0.66,1.41-1.47c0-0.83-0.61-1.49-1.44-1.49C190.4,52.94,189.77,53.61,189.77,54.42
L189.77,54.42z M193.11,54.42c0,1.04-0.84,1.87-1.9,1.87c-1.06,0-1.91-0.82-1.91-1.87c0-1.04,0.85-1.85,1.92-1.85
C192.27,52.57,193.11,53.38,193.11,54.42L193.11,54.42z" />
                <path class="st0" d="M159.33,69.74c0,0.25,0.2,0.48,0.48,0.48h2.96c0.25,0,0.48-0.23,0.48-0.48v-5.91h2.64
c3.07,0,5.6-2.54,5.6-5.65c0-3.04-2.54-5.55-5.63-5.55h-6.06c-0.28,0-0.48,0.23-0.48,0.48V69.74L159.33,69.74z M163.25,60.16v-3.85
h2.39c1.08,0,1.99,0.8,1.99,1.86c0,1.13-0.9,1.99-1.99,1.99H163.25L163.25,60.16z" />
            </g>
        </svg>
    </div>`
    },
    htmlAdImage: (data) => {
        return  `<img src="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}">`
    },
    htmlAdCTA: (data) => {
        return  `<div class="ad-button">
                    ${data.ctaText}
                </div>`
    },
    htmlAdWrapper: (data, styles, extraStyles, content) => {
        return `<!DOCTYPE html>
        <html>

        <head>
            <title>${data.name}_${data.width}x${data.height}</title>
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
            <script type="text/javascript">
                var clickTag = "https://www.vitaminshoppe.com/${data.url}";
            </script>
            <style>
                ${styles}
                ${extraStyles}
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </head>
        
        <body>
            <a href="javascript:window.open(window.clickTag)">
                <div class="ad-wrapper">
                    ${content}
                </div>
            </a>
        </body>
        
        </html>`
    },
    htmlAdGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let folderName = v,
        markup = '',
        styles = module.exports.htmlAdGeneralStyles();
        data.map((val) => {
            let fileName = val.name, 
            layoutWidth = val.width,
            layoutHeight = val.height,
            extraStyles = '',
            content = '';

            if (layoutWidth === 160 && layoutHeight === 600) {
                extraStyles = module.exports.htmlAd160x600Styles();
                // append svg logo to the top
                content = module.exports.htmlAdSvg1();
                // regular content
                content += module.exports.htmlAdContent(val);
                //add CTA
                content += module.exports.htmlAdCTA(val);
                //add image
                content += module.exports.htmlAdImage(val);
            } else if (layoutWidth === 300 && layoutHeight === 250) {
                extraStyles = module.exports.htmlAd300x250Styles();
                // append svg logo to the top
                content += module.exports.htmlAdSvg1();
                // regular content
                content += module.exports.htmlAdContent(val);
                //add CTA
                content += module.exports.htmlAdCTA(val);
                // in case we need an extra layout block
                content = module.exports.htmlAdContent300x250Wrapper(content);
                //add image
                content += module.exports.htmlAdImage(val);
            } else if (layoutWidth === 300 && layoutHeight === 600) {
                extraStyles = module.exports.htmlAd300x600Styles();
                // append svg logo to the top
                content += module.exports.htmlAdSvg1();
                // regular content
                content += module.exports.htmlAdContent(val);
                //add CTA
                content += module.exports.htmlAdCTA(val);
                //add image
                content += module.exports.htmlAdImage(val);
            } else if (layoutWidth === 320 && layoutHeight === 50) {
                extraStyles = module.exports.htmlAd320x50Styles();
                // append svg logo to the top
                content += module.exports.htmlAdSvg2();
                // regular content
                content += module.exports.htmlAdContent(val);
                //add CTA
                content += module.exports.htmlAdCTA(val);
            } else if (layoutWidth === 728 && layoutHeight === 90) {
                extraStyles = module.exports.htmlAd728x90Styles();
                // append svg logo to the top
                content += module.exports.htmlAdSvg1();
                // regular content
                content += module.exports.htmlAdContent(val);
                //add image
                content += module.exports.htmlAdImage(val);
                //add CTA
                content += module.exports.htmlAdCTA(val);
            }
            markup = module.exports.htmlAdWrapper(val, styles, extraStyles, content);

            fs.writeFile(`./${folderName}/${fileName}_${layoutWidth}x${layoutHeight}.html`, markup, function (err) {
                if (err) throw err;
            });
            content = "";
            markup = '';
        });
    },
    crossPromoTemplate: (data) => {
        return `<a href="${data.url}" class="vites cross-promo-module" ${data.trackingCode} >
        <img class="img-responsive vites-img" src="//s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?$OP_JPG$&amp;qlt=100&amp;hei=213" alt="">
        <p class="title"><strong>${data.promo}</strong></p>
        <p class="description">${data.brandDescription}</p>
        <p class="cta"><span class="inner-cta">${data.cta}</span></p>
    </a>`
    },
    crossPromoStyles: (data) => {
        return `<style type="text/css">
        .cross-promo-module * {
            font-family: corisandelight;
        }
    
        .cross-promo-module strong {
            font-family: lato, serif;
            font-weight: 700;
        }
    
        .cross-promo-module.${data.className}   {
            display: block;
            height: 498px !important;
            border: 0;
            background-color:#E6D482;
            position: relative;
        }
    
        .cross-promo-module.${data.className} > img {
            max-height: 325px;
            width: 100%;
        }
    
        .cross-promo-module.${data.className} > .title {
            text-transform: uppercase;
            margin-top: 8%;
            margin: 5% 5% 0% 5%;
            font-size: 135%;
            color: #012169;
            line-height: 1.1;
        }
    
        .cross-promo-module.${data.className} > .description {
            margin-top: 5%;
            margin: 4% 4% 0 4%;
            font-size: 1.5rem;
            font-family: lato, serif;
            color: #000;
            line-height: 1.6;
        }
    
        .cross-promo-module.${data.className} > .cta {
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 1px;
            color: #07689b;
            font-weight: bold;
            display: inline-block;
            position: absolute !important;
            bottom: 25px;
            left: 0;
            top: auto;
            width: 100%;
            text-align: center;
        }
    
        .cross-promo-module.${data.className} > .cta>.inner-cta:after {
            background: url(/images/plpl2/arrow.png) no-repeat right 1px;
            padding-right: 10px;
            content: " ";
            height: 13px;
            margin: 1px 0 0 6px;
            position: absolute;
            width: 10px;
        }
    
        .svg-img {
            width: 16%;
            position: absolute;
            top: 2%;
            left: 2%;
        }
    
        @media screen and (max-width: 1023px) {
            .cross-promo-module.${data.className}   {
                height: 488px !important;
            }
    
            .cross-promo-module>.title {
                margin-top: 6%;
            }
    
            .cross-promo-module.${data.className} > .description {
                line-height: 1.4;
            }
    
            .cross-promo-module>.cta {
                margin-top: 3%;
            }
        }
    
    
        @media screen and (max-width: 365px) {
            .cross-promo-module {
                height: 457px;
            }
    
            .cross-promo-module>.title {
                font-size: 2.1rem;
            }
    
            .cross-promo-module.${data.className} > .description {
                font-size: 1.3rem;
            }
    
            .cross-promo-module>.cta {
                font-size: .8rem;
            }
        }
    </style>`
    },
    dealsDrawerUpperStyles: (data) => {
        return `<style class="ng-scope">
        /* STYLES BELOW ARE FOR BLOG HEADER FIX */
    
        .deals .dealColTwo p {
            line-height: 1.42857;
        }
    
        .deals .dealColTwo button,
        .deals .dealColTwo a {
            box-shadow: none;
        }
    
        .deals .dealColTwo button:hover,
        .deals .dealColTwo a:hover {
            box-shadow: none;
        }
    
        .site-wrapper .bmsm-d2__content-wrapper:focus,
        .content-asset .bmsm-d2__content-wrapper:focus {
            outline: 0.1em dashed #012169;
        }
    
        .site-wrapper .bmsm-d2,
        .content-asset .bmsm-d2 {
            min-height: 216px;
            max-width: 492px;
            background-size: 100% 100%;
            padding: 30px 20px 25px 20px;
            position: relative;
            font-family: lato, sans-serif;
        }
    
        .site-wrapper .bmsm-d2 .mobile-only,
        .site-wrapper .bmsm-d2 .mobile-only-inline,
        .content-asset .bmsm-d2 .mobile-only,
        .content-asset .bmsm-d2 .mobile-only-inline {
            display: none !important;
        }
    
        .site-wrapper .bmsm-d2 strong,
        .content-asset .bmsm-d2 strong {
            font-family: lato, sans-serif;
            font-weight: bold;
        }
    
        .site-wrapper .bmsm-d2 p,
        .content-asset .bmsm-d2 p {
            color: #012169;
        }
    
        .site-wrapper .bmsm-d2 sup,
        .content-asset .bmsm-d2 sup {
            font-size: 8px;
        }
    
        .site-wrapper .bmsm-d2__content-wrapper,
        .content-asset .bmsm-d2__content-wrapper {
            float: left;
            width: 100%;
        }
    
        .site-wrapper .bmsm-d2__tag,
        .content-asset .bmsm-d2__tag {
            left: -12px;
            margin-top: 17px;
            color: white;
            position: absolute;
            min-width: 47px;
            height: 17.5px;
            transform: rotate(90deg);
            transform-origin: right top;
            display: block;
            text-transform: uppercase;
            padding: 2px 12px;
            font-size: 10px;
            font-family: lato, sans-serif;
            font-weight: bold;
        }
    
        .site-wrapper .bmsm-d2__content,
        .content-asset .bmsm-d2__content {
            text-align: left;
            width: 60.3333%;
            float: left;
            padding-left: 29px;
        }
    
        .site-wrapper .bmsm-d2__content .bmsm-d2__post-header-group,
        .content-asset .bmsm-d2__content .bmsm-d2__post-header-group {
            text-transform: initial;
        }
    
        .site-wrapper .grenade .bmsm-d2__top,
        .content-asset .grenade .bmsm-d2__top {
            font-family: lato, sans-serif;
            font-weight: bold;
            color: #012169;
            margin-top: 4%;
            font-size: 15px;
        }
    
        .site-wrapper .bmsm-d2__main-message,
        .content-asset .bmsm-d2__main-message {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
        }
    
        .site-wrapper .bmsm-d2__cta,
        .content-asset .bmsm-d2__cta {
            color: #fff !important;
            padding: 5px 30px;
            margin-top: 4px;
            font-family: lato, sans-serif;
            font-weight: bold;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
            white-space: nowrap;
            display: inline-block;
        }
    
        .site-wrapper .bmsm-d2__cta:hover,
        .site-wrapper .bmsm-d2__cta:focus,
        .content-asset .bmsm-d2__cta:hover,
        .content-asset .bmsm-d2__cta:focus {
            text-decoration: none;
        }
    
        .site-wrapper .bmsm-d2__cta--blue,
        .content-asset .bmsm-d2__cta--blue {
            background-color: #0076b4;
        }
    
        .site-wrapper .bmsm-d2__cta--blue:hover,
        .site-wrapper .bmsm-d2__cta--blue:focus,
        .content-asset .bmsm-d2__cta--blue:hover,
        .content-asset .bmsm-d2__cta--blue:focus {
            background-color: #07689b;
            color: white;
        }
    
        .site-wrapper .bmsm-d2__cta-carrot,
        .site-wrapper .bmsm-d2__cta-carrot {
            color: #0076b4 !important;
        }
    
        .site-wrapper .bmsm-d2__image-container,
        .content-asset .bmsm-d2__image-container {
            width: 38.66667%;
            float: left;
            text-align: center;
            margin-left: 0;
        }
    
        .site-wrapper .bmsm-d2__image-container img,
        .content-asset .bmsm-d2__image-container img {
            max-width: 82%;
        }
    
        .site-wrapper .bmsm-d2__callout,
        .content-asset .bmsm-d2__callout {
            font-family: lato, sans-serif;
            font-weight: bold;
            font-size: 13px;
        }
    
        .site-wrapper .bmsm-d2__pre-header,
        .content-asset .bmsm-d2__pre-header {
            font-family: lato, sans-serif;
            font-weight: bold;
            font-size: 30px;
            margin-right: 2%;
        }
    
        .site-wrapper .bmsm-d2__post-header,
        .content-asset .bmsm-d2__post-header {
            font-family: lato, sans-serif;
            font-size: 15px;
            margin-top: 3%;
            color: #666 !important;
            line-height: 19px !important;
        }
    
        .site-wrapper .bmsm-d2__post-header-line1,
        .content-asset .bmsm-d2__post-header-line1 {
            margin-top: 3%;
            font-size: 16px;
        }
    
        .site-wrapper .bmsm-d2__post-header-line1 br,
        .content-asset .bmsm-d2__post-header-line1 br {
            display: block;
        }
    
        .site-wrapper .bmsm-d2__post-header-bold,
        .content-asset .bmsm-d2__post-header-bold {
            color: #01aef2;
            font-family: lato, sans-serif;
            font-weight: bold;
        }
    
        .site-wrapper .bmsm-d2__disclaimer,
        .content-asset .bmsm-d2__disclaimer {
            font-family: lato, sans-serif;
            font-size: 16px;
            color: #666 !important;
            margin-top: 6%;
            margin-bottom: 5%;
        }
    
        .site-wrapper .bmsm-d2,
        .content-asset .bmsm-d2 {
            background-color: #fff;
        }
    
        .site-wrapper .bmsm-d2__header-v1,
        .content-asset .bmsm-d2__header-v1 {
            font-family: lato, sans-serif;
            font-weight: bold;
            font-size: 28px;
            line-height: 22px;
            margin-top: 1%;
        }
    
        .site-wrapper .bmsm-d2__header-v1 span,
        .content-asset .bmsm-d2__header-v1 span {
            font-family: lato, sans-serif;
        }
    
        .site-wrapper .bmsm-d2__callout-line1,
        .content-asset .bmsm-d2__callout-line1 {
            margin-bottom: -3px;
        }
    
        .site-wrapper .bmsm-d2__preheader-v1,
        .content-asset .bmsm-d2__preheader-v1 {
            margin-top: 3px;
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: -14px;
        }
    
        @media screen and (max-width: 1230px) {
    
            .site-wrapper .bmsm-d2__preheader-v1,
            .content-asset .bmsm-d2__preheader-v1 {
                font-size: 18px;
            }
        }
    </style>`
    }

}