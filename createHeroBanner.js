module.exports = {
    preHeaderText: (data) => {
        if (typeof data.preHeader !== "undefined") {
            return ` <p class="hero-banner__pre-header">
            ${data.preHeader}
         </p>`
          
        } else {
            return '';
        }
    },
    bopusBadge: (data) => {
        if (typeof data.icon !== "undefined" && data.icon === "yes"){
        return ` <?xml version="1.0" encoding="utf-8"?>
        <svg class="bopus-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 37.25 52.31"
            style="enable-background:new 0 0 37.25 52.31;" xml:space="preserve">
            <style type="text/css">
                .st0 {
                    fill: #6EBD44;
                }

                .st1 {
                    fill: #002169;
                }

                .st2 {
                    fill: #FFFFFF;
                }
            </style>
            <path class="st0"
                d="M36.35,47.78c0,2.05-1.66,3.71-3.71,3.71H4.83c-2.05,0-3.72-1.67-3.72-3.71V13.27h35.23V47.78z" />
            <path class="st1" d="M36.55,12.12h-6.61v-0.89C29.94,5.03,24.91,0,18.72,0C12.53,0,7.5,5.03,7.5,11.23v0.89H0.88
                c-0.45,0-0.82,0.37-0.82,0.82v34.14c0,2.88,2.34,5.23,5.23,5.23h26.85c2.88,0,5.23-2.35,5.23-5.23V12.94
                C37.37,12.48,37,12.12,36.55,12.12 M9.14,11.23c0-5.28,4.29-9.59,9.58-9.59s9.59,4.3,9.59,9.59v0.89H9.14V11.23z M35.72,47.08
                c0,1.98-1.6,3.59-3.58,3.59H5.29c-1.98,0-3.59-1.61-3.59-3.59V13.76h34.02V47.08z" />
            <path class="st1" d="M26.15,34.45L26.15,34.45L26.15,34.45z M18.15,35.32l2.42,5.44c0.17,0.36,0.61,0.55,1.01,0.38l0.69-0.31
                c0.39-0.17,0.56-0.62,0.39-1.01l-2.37-5.31l5.78-0.07L14.34,22.87v16.53L18.15,35.32z M21.27,42.56c-0.83,0-1.59-0.49-1.93-1.24
                l-1.6-3.59l-2.48,2.64c-0.37,0.39-0.94,0.52-1.45,0.32c-0.49-0.19-0.83-0.68-0.83-1.22V22.77c0-0.53,0.33-1.02,0.83-1.21
                c0.46-0.2,1.02-0.1,1.41,0.28l0.01,0.01l11.85,11.71c0.38,0.38,0.49,0.94,0.29,1.44c-0.19,0.48-0.68,0.81-1.21,0.81l-3.8,0.04
                l1.53,3.43c0.47,1.07-0.01,2.32-1.08,2.79l-0.69,0.31C21.85,42.5,21.56,42.56,21.27,42.56" />
            <path class="st1" d="M18.17,35.18l0.05,0.11l2.42,5.44c0.16,0.34,0.56,0.49,0.91,0.34l0.69-0.31c0.17-0.07,0.3-0.21,0.36-0.38
                c0.07-0.17,0.06-0.36-0.01-0.53l-2.42-5.42l5.71-0.06L14.42,23.05V39.2L18.17,35.18z M21.27,41.28c-0.32,0-0.63-0.18-0.77-0.49
                l-2.37-5.34l-3.86,4.13V22.68l11.89,11.75v-0.06l0,0.06l0.09,0.09l-5.84,0.07l2.32,5.2c0.09,0.21,0.1,0.43,0.02,0.64
                c-0.08,0.21-0.24,0.38-0.44,0.47l-0.69,0.31C21.5,41.26,21.38,41.28,21.27,41.28 M17.76,37.59l1.64,3.69
                c0.33,0.73,1.06,1.2,1.86,1.2c0.28,0,0.56-0.06,0.83-0.18L22.78,42c0.5-0.22,0.88-0.62,1.07-1.13c0.2-0.51,0.18-1.06-0.04-1.56
                l-1.58-3.54l3.92-0.04c0.5,0,0.95-0.31,1.14-0.76c0.19-0.46,0.09-0.99-0.27-1.35L15.17,21.9c-0.36-0.35-0.89-0.45-1.33-0.27
                c-0.47,0.18-0.78,0.64-0.78,1.14v16.69c0,0.51,0.31,0.97,0.78,1.15c0.48,0.19,1.01,0.07,1.36-0.3L17.76,37.59z M21.27,42.64
                c-0.86,0-1.64-0.51-2-1.29l-1.55-3.48l-2.4,2.55c-0.39,0.42-1,0.55-1.53,0.34c-0.53-0.2-0.88-0.72-0.88-1.29V22.77
                c0-0.57,0.35-1.08,0.88-1.29c0.48-0.21,1.08-0.09,1.49,0.29L27.13,33.5c0.4,0.4,0.52,1,0.31,1.52c-0.21,0.51-0.72,0.86-1.28,0.86
                l-3.68,0.04l1.48,3.32c0.24,0.54,0.25,1.13,0.04,1.68c-0.21,0.55-0.62,0.98-1.16,1.21l-0.69,0.31
                C21.87,42.57,21.57,42.64,21.27,42.64" />
            <path class="st2" d="M21.29,41.29c-0.32,0-0.63-0.18-0.77-0.49l-2.37-5.34l-3.86,4.13V22.69l11.89,11.75v-0.06l0,0.06l0.09,0.09
                l-5.84,0.07l2.32,5.2c0.09,0.21,0.1,0.43,0.02,0.64c-0.08,0.21-0.24,0.38-0.44,0.47l-0.69,0.31C21.52,41.27,21.41,41.29,21.29,41.29
                " />
        </svg>`
            } else {
                return '';
            }
    },
    promotionText: (data) => {
        if (typeof data.promotion !== "undefined") {
            return `  <p class="hero-banner__bmsm">
            ${data.promotion}
        </p>`
          
        } else {
            return '';
        }
    }, 
    brandDescriptionText: (data) => {
        if (typeof data.brandDescription !== "undefined") {
            return `<p class="hero-banner__post-header-line-1">
            ${data.brandDescription}
          </p>`
          
        } else {
            return '';
        }
    },
    postHeaderText2: (data) => {
        if (typeof data.postHeaderText2 !== "undefined") {
            return `<p class="hero-banner__post-header-line-2">
            ${data.postHeaderText2}
          </p>`
          
        } else {
            return '';
        }  
      },
      postHeaderText3: (data) => {
        if (typeof data.postHeaderText3 !== "undefined") {
            return `<p class="hero-banner__post-header-line-3">
                           ${data.postHeaderText3}
                        </p>`
          
        } else {
            return '';
        }  
      
      },
      heroImage: (data) => {
        return `<picture>
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=360&amp;hei=89&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 360px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=470&amp;hei=117&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 470px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=768&amp;hei=191&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 768px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1024&amp;hei=254&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 1024px)">
        <img src="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1027&amp;hei=255&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" />
    </picture>`;
    },
    heroBannerCtaTemplate: (data) => {
        return `<a href="${data.url}"
        ${data.trackingCode}>
          <div class="hero-banner">
              <div class="hero-banner__backdrop">
              ${module.exports.heroImage(data)}
              <div class="hero-banner__price-wrapper">
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                      ${module.exports.bopusBadge(data)}
                      ${module.exports.preHeaderText(data)}
                          <div class="hero-banner__bmsm-group">
                                  ${module.exports.promotionText(data)}
                          </div>
                          <div class="hero-banner__post-header-group">
                                ${module.exports.brandDescriptionText(data)}
                                ${module.exports.postHeaderText2(data)}
                                ${module.exports.postHeaderText3(data)}
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
                    ${module.exports.heroImage(data)}
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                      ${module.exports.bopusBadge(data)}
                      ${module.exports.preHeaderText(data)}
                          <div class="hero-banner__bmsm-group">
                          ${module.exports.promotionText(data)}
                          </div>
                          <div class="hero-banner__post-header-group">
                          ${module.exports.brandDescriptionText(data)}
                          ${module.exports.postHeaderText2(data)}
                          ${module.exports.postHeaderText3(data)}
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
            font-family: lato, serif;
        }
    
        .site-wrapper .hero-banner .mobile-only,
        .site-wrapper .hero-banner .mobile-only-inline {
            display: none !important;
        }
    
        .site-wrapper .hero-banner strong {
            font-family: lato, serif;
            font-weight: 700;
        }
    
        .site-wrapper .hero-banner p {
            line-height: 1;
            color: #012169;
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
            position: relative;
            text-align: left;
            margin-left: auto;
        }
    
        .site-wrapper .hero-banner .hero-banner__main-text-wrapper {
            position: absolute;
            width: 50%;
            top: 40%;
            transform: translate(0, -50%);
            right: 0;
        }
    
        .site-wrapper .hero-banner .hero-price-text-wrapper {
            position: absolute;
            width: 40%;
            top: 85%;
            transform: translate(0, -50%);
            left: 3%;
        }
    
        .site-wrapper .hero-banner .hero-price-text-wrapper p {
            font-size: 200%;
        }
    
        .site-wrapper .hero-banner .hero-banner__pre-header {
            font-family: lato, serif;
            font-weight: 700;
            font-size: 220%;
            text-transform: uppercase;
        }
    
        .site-wrapper .hero-banner .hero-banner__pre-header span {
            color: #eb0706;
        }
    
        .site-wrapper .hero-banner .hero-banner__top-header {
            color: #0E1C64;
            font-size: 196%;
            margin-bottom: 3%;
            margin-left: 2%;
        }
    
        .site-wrapper .hero-banner .hero-banner__bmsm {
            font-size: 660%;
            font-family: lato, serif;
            font-weight: 700;
            text-transform: uppercase;
        }
    
        .site-wrapper .hero-banner .hero-banner__perc {
            font-family: lato, serif;
            font-weight: 700;
            font-size: 969%;
            line-height: 77%;
            padding-top: 23%;
        }
    
        .site-wrapper .hero-banner .hero-banner__off {
            font-family: lato, serif;
            font-weight: 700;
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
            font-size: 200%;
            line-height: 1.2;
            font-family: lato, serif;
        }
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
            font-size: 180%;
            font-family: lato, serif;
            font-weight: 700;
            border-top: 1px solid #012169;
            border-bottom: 1px solid #012169;
            display: inline-block;
            margin-top: 3%;
            line-height: 1.3;
            margin-bottom: 2%;
    
        }
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-3 {
            font-size: 195%;
        }
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-3 span {
            color: #0076b4;
        }
    
        .site-wrapper .hero-banner .hero-banner__disclaimer {
            font-family: lato, serif;
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
            font-family: lato, serif;
            font-weight: 700;
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
                font-size: 94%;
                line-height: 1;
            }
    
            .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
                font-size: 95%;
            }
    
            .site-wrapper .hero-banner .hero-banner__post-header-line-3 {
            font-size: 95%;
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
                font-size: 235%;
            }
    
            .site-wrapper .hero-banner .hero-price-text-wrapper p {
                font-size: 80%;
            }
    
            .site-wrapper .hero-banner .hero-banner__main-text {
                margin-right: 15%;
            }
        }
    
        @media screen and (max-width: 470px) {
            .site-wrapper .hero-banner .hero-banner__post-header-line-1 {
                letter-spacing: 0px;
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
            font-family: lato, serif;
            font-weight: 700;
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
    
        .bb-block__wrapper .bb-block__child .image-block {
            position: relative;
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
            min-height: 168px;
            color: #012169;
            margin-top: 2%;
        }
    
        .bb-block__wrapper .bb-block__text-line-1 {
            /* font-size: 25px; */
            font-size: 140%;
            font-family: lato, serif;
            font-weight: 700;
            color: #012169;
            line-height: 120%;
        }
    
        .bb-block__wrapper .bb-block__text-line-2 {
            /* font-size: 18px; */
            font-size: 120%;
            font-family: lato, serif;
            color: #012169;
            line-height: 135%;
            margin-top: 1%;
    
        }
    
        .bb-block__wrapper .bb-block__cta {
            /* font-size: 14px; */
            font-size: 100%;
            font-family: lato, serif;
            font-weight: 700;
            color: #012169;
        }
    
        .bb-block__link-container.bb-block__link-container-4 .bb-block__text.bb-block__text-line-1 {
            margin-right: 0;
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
                min-height: 175px;
    
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
    dealsDrawerUpperGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let folderName = v;
        let markup = '';
        data.map((val,i) => {
            let fileName = val.name;
            let html = module.exports.dealsDrawerUpperemplate(val);
            let styles = module.exports.dealsDrawerUpperStyles();
            markup = styles + html;
            fs.writeFile(`./${folderName}/${fileName}.html`, markup, function (err) {
                if (err) throw err;

            });

        });
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
            let folderName = v;
            let fileName = val.name;
            let styles = module.exports.heroBannerStyles();
            let html = module.exports.heroBannerCtaTemplate(val);
            let htmlNoCta = module.exports.heroNoCta(val);
            let withCTA = styles + '\n' + html;
            let noCTA = styles + '\n' + htmlNoCta;
            fs.writeFile(`./${folderName}/${fileName}.html`, withCTA, function (err) {
                if (err) throw err;

            });
            fs.writeFile(`./${folderName}/${fileName} NO CTA.html`, noCTA, function (err) {
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
                fs.writeFile(`./${folderName}/${fileName}.html`, markup, function (err) {
                    if (err) throw err;
        
                });
                markup = '';
            }
           
        });
        
    },
    crossPromosGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let folderName = v;
        let markup = '';
        data.map((val,i) => {
            let fileName = val.name;
            let html = module.exports.crossPromoTemplate(val);
            let styles = module.exports.crossPromoStyles(val);
            markup = styles + html;
            fs.writeFile(`./${folderName}/${fileName}.html`, markup, function (err) {
                if (err) throw err;

            });

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
                    <p class="bb-block__text bb-block__text-line-2">${data.brandDescription}</p>
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
    dealsDrawerUpperStyles: () => {
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
    },
    dealsDrawerUppertemplate : (data) => {
        return `<a class="bmsm-d2__link-wrapper" href="${data.url}" tabindex="-1" aria-label="${data.preHeader + data.promotion + data.brandDescription + data.ctaText}" ${data.trackingCode}>
        <div class="bmsm-d2__image-container">
           <img src="//s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?$OP_JPG$&amp;qlt=70" alt="">
        </div>
        <div class="bmsm-d2__content">
           <div class="bmsm-d2__top bmsms-d2__percent">
             ${data.preHeader}
           </div>
           <div class="bmsm-d2__main-message bmsm-d2__main-message-v1">
              <p class="bmsm-d2__header bmsm-d2__header-v1">
               ${data.promotion}
              </p>
           </div>
           <div class="bmsm-d2__post-header-group">
              <p class="bmsm-d2__post-header bmsm-d2__post-header-line1">
           ${data.brandDescription}
              </p>
           </div>
           <p class="bmsm-d2__cta bmsm-d2__cta--blue" tabindex="0" role="link" aria-label="${data.preHeader + data.promotion + data.brandDescription + data.ctaText}">
              ${data.ctaText}
           </p>
        </div>
     </a>`
    }
}

