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
    }
}

