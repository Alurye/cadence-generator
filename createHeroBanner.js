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
    badge1: (data) => {
        if (typeof data.badge1 !== "undefined" && data.badge1 === "yes"){
        return `<svg class="badge1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 337.3 213.3" style="enable-background:new 0 0 337.3 213.3;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:none;stroke:#FFFFFF;stroke-width:3.71;stroke-linecap:round;stroke-linejoin:round;}
       .st1{fill:url(#SVGID_1_);}
       .st2{fill:url(#SVGID_2_);}
       .st3{fill:url(#SVGID_3_);}
       .st4{fill:url(#SVGID_4_);}
       .st5{fill:url(#SVGID_5_);}
       .st6{fill:#3B3B3B;}
       .st7{fill:#FFFFFF;}
   </style>
   <g>
       <polygon class="st0" points="249.6,81.1 167.3,3.6 84.9,81.1 2.6,3.6 2.6,158.6 331.9,158.6 331.9,3.6 	"/>
       
           <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="8855.2803" y1="81.1071" x2="9184.626" y2="81.1071" gradientTransform="matrix(-1 0 0 1 9187.2129 0)">
           <stop  offset="0" style="stop-color:#A6D064"/>
           <stop  offset="1.013308e-02" style="stop-color:#A1CE63"/>
           <stop  offset="0.1457" style="stop-color:#61B056"/>
           <stop  offset="0.2599" style="stop-color:#329B4C"/>
           <stop  offset="0.3472" style="stop-color:#158E46"/>
           <stop  offset="0.3972" style="stop-color:#0A8944"/>
           <stop  offset="0.4682" style="stop-color:#1F7C62"/>
           <stop  offset="0.5537" style="stop-color:#346F7F"/>
           <stop  offset="0.6385" style="stop-color:#436594"/>
           <stop  offset="0.7216" style="stop-color:#4C60A1"/>
           <stop  offset="0.801" style="stop-color:#4F5EA5"/>
       </linearGradient>
       <polygon class="st1" points="2.6,3.6 2.6,158.6 84.9,81.1 	"/>
       
           <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="8855.2803" y1="81.1071" x2="9184.626" y2="81.1071" gradientTransform="matrix(-1 0 0 1 9187.2129 0)">
           <stop  offset="0" style="stop-color:#A6D064"/>
           <stop  offset="1.013308e-02" style="stop-color:#A1CE63"/>
           <stop  offset="0.1457" style="stop-color:#61B056"/>
           <stop  offset="0.2599" style="stop-color:#329B4C"/>
           <stop  offset="0.3472" style="stop-color:#158E46"/>
           <stop  offset="0.3972" style="stop-color:#0A8944"/>
           <stop  offset="0.4682" style="stop-color:#1F7C62"/>
           <stop  offset="0.5537" style="stop-color:#346F7F"/>
           <stop  offset="0.6385" style="stop-color:#436594"/>
           <stop  offset="0.7216" style="stop-color:#4C60A1"/>
           <stop  offset="0.801" style="stop-color:#4F5EA5"/>
       </linearGradient>
       <polygon class="st2" points="249.6,81.1 331.9,158.6 331.9,3.6 	"/>
       
           <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="8855.2803" y1="81.1071" x2="9184.626" y2="81.1071" gradientTransform="matrix(-1 0 0 1 9187.2129 0)">
           <stop  offset="0" style="stop-color:#A6D064"/>
           <stop  offset="1.013308e-02" style="stop-color:#A1CE63"/>
           <stop  offset="0.1457" style="stop-color:#61B056"/>
           <stop  offset="0.2599" style="stop-color:#329B4C"/>
           <stop  offset="0.3472" style="stop-color:#158E46"/>
           <stop  offset="0.3972" style="stop-color:#0A8944"/>
           <stop  offset="0.4682" style="stop-color:#1F7C62"/>
           <stop  offset="0.5537" style="stop-color:#346F7F"/>
           <stop  offset="0.6385" style="stop-color:#436594"/>
           <stop  offset="0.7216" style="stop-color:#4C60A1"/>
           <stop  offset="0.801" style="stop-color:#4F5EA5"/>
       </linearGradient>
       <polygon class="st3" points="167.3,3.6 84.9,81.1 167.3,158.6 249.6,81.1 	"/>
       
           <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="9019.9531" y1="119.8772" x2="8855.8994" y2="119.8772" gradientTransform="matrix(-1 0 0 1 9187.2129 0)">
           <stop  offset="0" style="stop-color:#004100"/>
           <stop  offset="0.6239" style="stop-color:#2A8228"/>
           <stop  offset="0.9989" style="stop-color:#40A43D"/>
       </linearGradient>
       <polygon class="st4" points="167.3,158.6 331.9,158.6 249.6,81.1 	"/>
       <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="3.2519" y1="119.8772" x2="160.2111" y2="119.8772">
           <stop  offset="0.3439" style="stop-color:#18236B"/>
           <stop  offset="0.6696" style="stop-color:#13275C"/>
           <stop  offset="1" style="stop-color:#102A51"/>
       </linearGradient>
       <polygon class="st5" points="2.6,158.6 167.3,158.6 84.9,81.1 	"/>
   </g>
   <path class="st6" d="M40.9,177.1v36.3h-6.6v-22.3c0-0.5,0-1,0-1.5c0-0.5,0.1-1.1,0.1-1.6L24,207.6c-0.6,1.1-1.4,1.6-2.6,1.6h-1
       c-0.6,0-1.1-0.1-1.5-0.4c-0.5-0.3-0.8-0.7-1.1-1.2L7.3,187.9c0,0.6,0.1,1.1,0.1,1.7s0,1,0,1.5v22.3H0.9v-36.3h5.7c0.3,0,0.6,0,0.8,0
       s0.5,0.1,0.7,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.2,0.2,0.3,0.4,0.5,0.7l10.2,19.3c0.3,0.6,0.6,1.2,0.9,1.8c0.3,0.6,0.5,1.2,0.8,1.9
       c0.2-0.7,0.5-1.3,0.8-2c0.3-0.6,0.6-1.2,0.9-1.8l10.1-19.3c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.3-0.3,0.5-0.3
       c0.2-0.1,0.4-0.1,0.6-0.1s0.5,0,0.9,0H40.9z"/>
   <path class="st6" d="M85.2,177.1l-14.6,36.3h-6.8l-14.6-36.3h6c0.7,0,1.2,0.2,1.6,0.5c0.4,0.3,0.7,0.7,0.9,1.2l7.9,20.9
       c0.3,0.8,0.6,1.6,0.9,2.6c0.3,0.9,0.6,1.9,0.8,2.9c0.2-1,0.5-2,0.7-2.9s0.5-1.8,0.8-2.6l7.8-20.9c0.2-0.4,0.5-0.8,0.9-1.1
       c0.4-0.3,1-0.5,1.6-0.5H85.2z"/>
   <path class="st6" d="M105.8,177.1c2.5,0,4.6,0.3,6.4,0.9c1.8,0.6,3.3,1.4,4.5,2.4c1.2,1,2,2.3,2.6,3.7c0.6,1.4,0.8,3,0.8,4.7
       c0,1.8-0.3,3.4-0.9,4.9c-0.6,1.5-1.5,2.8-2.7,3.8s-2.7,1.9-4.5,2.5s-3.9,0.9-6.3,0.9H101v12.5h-7.5v-36.3H105.8z M105.8,195.1
       c2.4,0,4.1-0.6,5.2-1.7c1.1-1.1,1.6-2.7,1.6-4.7c0-0.9-0.1-1.7-0.4-2.5s-0.7-1.4-1.2-1.9c-0.6-0.5-1.3-0.9-2.1-1.2
       c-0.9-0.3-1.9-0.4-3-0.4H101v12.4H105.8z"/>
   <path class="st6" d="M158.2,177.1c2.4,0,4.5,0.2,6.2,0.7c1.7,0.5,3.1,1.1,4.2,1.9c1.1,0.8,1.9,1.9,2.4,3.1c0.5,1.2,0.8,2.5,0.8,4
       c0,0.8-0.1,1.6-0.4,2.4c-0.2,0.8-0.6,1.5-1.1,2.2c-0.5,0.7-1.2,1.3-2,1.8c-0.8,0.5-1.8,1-2.9,1.4c2.5,0.6,4.3,1.5,5.5,2.9
       c1.2,1.3,1.8,3,1.8,5.1c0,1.5-0.3,3-0.9,4.3c-0.6,1.3-1.5,2.5-2.6,3.4c-1.1,1-2.5,1.7-4.2,2.3c-1.7,0.5-3.6,0.8-5.7,0.8h-14v-36.3
       H158.2z M152.9,182.8v9.8h4.9c1.1,0,2-0.1,2.8-0.3c0.8-0.2,1.5-0.5,2-0.8c0.5-0.4,1-0.9,1.3-1.5c0.3-0.6,0.4-1.4,0.4-2.3
       c0-0.9-0.1-1.7-0.4-2.3c-0.2-0.6-0.6-1.1-1.1-1.5s-1.1-0.7-1.9-0.8c-0.8-0.2-1.7-0.3-2.7-0.3H152.9z M159.3,207.6
       c1.2,0,2.2-0.1,3-0.4c0.8-0.3,1.4-0.7,1.9-1.2s0.8-1,1-1.7c0.2-0.6,0.3-1.3,0.3-1.9c0-0.7-0.1-1.4-0.3-2c-0.2-0.6-0.6-1.1-1-1.5
       s-1.1-0.7-1.9-0.9c-0.8-0.2-1.7-0.3-2.9-0.3h-6.4v9.9H159.3z"/>
   <path class="st6" d="M212.5,213.3h-6.8c-1.3,0-2.2-0.5-2.8-1.5l-6.9-11.1c-0.3-0.4-0.6-0.8-0.9-0.9c-0.3-0.2-0.8-0.3-1.5-0.3H191
       v13.8h-7.5v-36.3h11.4c2.5,0,4.7,0.3,6.5,0.8s3.3,1.3,4.4,2.2s2,2,2.5,3.3c0.5,1.3,0.8,2.7,0.8,4.3c0,1.2-0.2,2.3-0.5,3.4
       s-0.8,2.1-1.5,2.9c-0.7,0.9-1.5,1.7-2.4,2.3c-1,0.7-2,1.2-3.2,1.7c0.5,0.3,0.9,0.6,1.4,1c0.4,0.4,0.8,0.8,1.1,1.3L212.5,213.3z
        M194.9,194.2c1.2,0,2.3-0.2,3.1-0.5c0.9-0.3,1.6-0.7,2.2-1.3c0.6-0.5,1-1.2,1.2-1.9s0.4-1.5,0.4-2.4c0-1.7-0.6-3.1-1.7-4
       c-1.1-1-2.9-1.4-5.2-1.4H191v11.5H194.9z"/>
   <path class="st6" d="M252.8,213.3h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-2.4-6.9h-14.5l-2.5,6.9
       c-0.2,0.4-0.5,0.8-0.9,1.1c-0.4,0.3-0.9,0.5-1.6,0.5h-5.9l14.2-36.3h7.7L252.8,213.3z M240.2,199.6l-3.9-11.1
       c-0.2-0.6-0.5-1.3-0.7-2c-0.3-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.8-0.7,2.6c-0.3,0.8-0.5,1.5-0.7,2.1l-3.9,11.1H240.2z"/>
   <path class="st6" d="M292.2,177.1v36.3h-3.9c-0.6,0-1.1-0.1-1.5-0.3c-0.4-0.2-0.8-0.5-1.2-1l-18.1-23c0,0.6,0.1,1.2,0.1,1.7
       c0,0.6,0,1.1,0,1.6v21h-6.6v-36.3h4c0.3,0,0.6,0,0.8,0s0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.2,0.5,0.4c0.2,0.2,0.3,0.4,0.5,0.6l18.2,23.1
       c-0.1-0.6-0.1-1.2-0.2-1.8s0-1.2,0-1.7v-20.8H292.2z"/>
   <path class="st6" d="M337.3,195.2c0,2.6-0.4,5.1-1.3,7.3c-0.9,2.2-2.1,4.1-3.8,5.7c-1.6,1.6-3.6,2.8-5.9,3.8
       c-2.3,0.9-4.8,1.3-7.6,1.3h-14v-36.3h14c2.8,0,5.3,0.4,7.6,1.3s4.2,2.2,5.9,3.8s2.9,3.5,3.8,5.7
       C336.9,190.1,337.3,192.6,337.3,195.2z M329.6,195.2c0-1.9-0.2-3.6-0.8-5.1s-1.2-2.8-2.2-3.9s-2.1-1.9-3.4-2.4s-2.9-0.8-4.6-0.8
       h-6.4v24.5h6.4c1.7,0,3.2-0.3,4.6-0.8s2.5-1.4,3.4-2.4c0.9-1.1,1.7-2.3,2.2-3.9S329.6,197.1,329.6,195.2z"/>
   <g>
       <path class="st7" d="M200.3,65.7c-2.6-1.9-16.1-4.3-22.3,3.4c-11.1,13.9,3.6,31.4,3.6,31.4L200.3,65.7z"/>
       <path class="st7" d="M172.3,91.1c-3.3-6.2-7.7-15.2-8.3-16.2c-5.3-9.3-12.3-10.2-16.5-10.2h-11.7c0,0,25.5,48.9,25.9,49.5
           c1.6,2.5,3.9,3.6,6.3,3.6c2.4,0,4.7-0.9,6.3-3.6l0,0l7.3-13.7C181.6,100.5,178,101.6,172.3,91.1"/>
   </g>
   <g>
       <path class="st7" d="M68.9,107.2c1.6,0,3.1,0.2,4.5,0.7c1.4,0.5,2.6,1.2,3.6,2.1c1,0.9,1.8,2,2.4,3.3c0.6,1.3,0.9,2.8,0.9,4.5
           c0,1.4-0.2,2.7-0.6,3.9c-0.4,1.2-1,2.4-1.7,3.5c-0.7,1.1-1.6,2.2-2.5,3.2c-0.9,1-2,2.1-3,3.2l-10,10.3c0.7-0.2,1.4-0.3,2.2-0.5
           c0.7-0.1,1.4-0.2,2.1-0.2h12.7c0.5,0,0.9,0.1,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2v2.9H55.7v-1.6c0-0.3,0.1-0.7,0.2-1
           c0.1-0.4,0.3-0.7,0.7-1l12.2-12.2c1-1,1.9-2,2.8-3c0.8-0.9,1.5-1.9,2.1-2.9c0.6-1,1-1.9,1.4-2.9c0.3-1,0.5-2,0.5-3.1
           c0-1.1-0.2-2.1-0.5-2.9c-0.4-0.8-0.8-1.5-1.5-2.1c-0.6-0.5-1.3-1-2.2-1.2c-0.8-0.3-1.7-0.4-2.7-0.4c-1,0-1.8,0.1-2.7,0.4
           c-0.8,0.3-1.5,0.7-2.2,1.2c-0.6,0.5-1.2,1.1-1.6,1.8c-0.4,0.7-0.7,1.5-0.9,2.3c-0.1,0.5-0.4,0.9-0.6,1.1c-0.3,0.2-0.7,0.3-1.1,0.3
           c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0l-2.5-0.4c0.2-1.7,0.7-3.3,1.4-4.6c0.7-1.3,1.6-2.5,2.7-3.4c1.1-0.9,2.3-1.6,3.7-2.1
           C65.7,107.4,67.3,107.2,68.9,107.2z"/>
       <path class="st7" d="M113.5,126.7c0,3.3-0.4,6.2-1.1,8.6s-1.7,4.4-2.9,6c-1.2,1.6-2.7,2.8-4.4,3.6c-1.7,0.8-3.5,1.2-5.4,1.2
           c-1.9,0-3.8-0.4-5.4-1.2c-1.7-0.8-3.1-2-4.4-3.6c-1.2-1.6-2.2-3.6-2.9-6c-0.7-2.4-1.1-5.3-1.1-8.6c0-3.3,0.4-6.2,1.1-8.7
           c0.7-2.4,1.7-4.5,2.9-6.1s2.7-2.8,4.4-3.6c1.7-0.8,3.5-1.2,5.4-1.2c1.9,0,3.7,0.4,5.4,1.2c1.7,0.8,3.2,2,4.4,3.6
           c1.2,1.6,2.2,3.6,2.9,6.1C113.1,120.4,113.5,123.3,113.5,126.7z M108.6,126.7c0-2.9-0.2-5.3-0.7-7.3c-0.5-2-1.1-3.6-2-4.8
           c-0.8-1.2-1.8-2.1-2.9-2.6c-1.1-0.5-2.2-0.8-3.4-0.8c-1.2,0-2.3,0.3-3.4,0.8c-1.1,0.5-2,1.4-2.8,2.6c-0.8,1.2-1.5,2.8-2,4.8
           c-0.5,2-0.7,4.4-0.7,7.3s0.2,5.3,0.7,7.3c0.5,2,1.1,3.6,2,4.8c0.8,1.2,1.8,2.1,2.8,2.6c1.1,0.5,2.2,0.8,3.4,0.8
           c1.2,0,2.3-0.3,3.4-0.8c1.1-0.5,2-1.4,2.9-2.6c0.8-1.2,1.5-2.8,2-4.8C108.3,132,108.6,129.6,108.6,126.7z"/>
   </g>
   <g>
       <path class="st7" d="M234.2,107.2c1.6,0,3.1,0.2,4.5,0.7c1.4,0.5,2.6,1.2,3.6,2.1c1,0.9,1.8,2,2.4,3.3c0.6,1.3,0.9,2.8,0.9,4.5
           c0,1.4-0.2,2.7-0.6,3.9c-0.4,1.2-1,2.4-1.7,3.5c-0.7,1.1-1.6,2.2-2.5,3.2c-0.9,1-2,2.1-3,3.2l-10,10.3c0.7-0.2,1.4-0.3,2.2-0.5
           c0.7-0.1,1.4-0.2,2.1-0.2h12.7c0.5,0,0.9,0.1,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2v2.9H221v-1.6c0-0.3,0.1-0.7,0.2-1
           c0.1-0.4,0.3-0.7,0.7-1l12.2-12.2c1-1,1.9-2,2.8-3c0.8-0.9,1.5-1.9,2.1-2.9c0.6-1,1-1.9,1.4-2.9c0.3-1,0.5-2,0.5-3.1
           c0-1.1-0.2-2.1-0.5-2.9c-0.4-0.8-0.8-1.5-1.5-2.1c-0.6-0.5-1.3-1-2.2-1.2c-0.8-0.3-1.7-0.4-2.7-0.4c-1,0-1.8,0.1-2.7,0.4
           c-0.8,0.3-1.5,0.7-2.2,1.2c-0.6,0.5-1.2,1.1-1.6,1.8c-0.4,0.7-0.7,1.5-0.9,2.3c-0.1,0.5-0.4,0.9-0.6,1.1c-0.3,0.2-0.7,0.3-1.1,0.3
           c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0l-2.5-0.4c0.2-1.7,0.7-3.3,1.4-4.6c0.7-1.3,1.6-2.5,2.7-3.4c1.1-0.9,2.3-1.6,3.7-2.1
           C231.1,107.4,232.6,107.2,234.2,107.2z"/>
       <path class="st7" d="M278.8,126.7c0,3.3-0.4,6.2-1.1,8.6c-0.7,2.4-1.7,4.4-2.9,6c-1.2,1.6-2.7,2.8-4.4,3.6
           c-1.7,0.8-3.5,1.2-5.4,1.2c-1.9,0-3.8-0.4-5.4-1.2c-1.7-0.8-3.1-2-4.4-3.6c-1.2-1.6-2.2-3.6-2.9-6c-0.7-2.4-1.1-5.3-1.1-8.6
           c0-3.3,0.4-6.2,1.1-8.7c0.7-2.4,1.7-4.5,2.9-6.1c1.2-1.6,2.7-2.8,4.4-3.6c1.7-0.8,3.5-1.2,5.4-1.2c1.9,0,3.7,0.4,5.4,1.2
           c1.7,0.8,3.2,2,4.4,3.6c1.2,1.6,2.2,3.6,2.9,6.1C278.5,120.4,278.8,123.3,278.8,126.7z M273.9,126.7c0-2.9-0.2-5.3-0.7-7.3
           c-0.5-2-1.1-3.6-2-4.8c-0.8-1.2-1.8-2.1-2.9-2.6c-1.1-0.5-2.2-0.8-3.4-0.8c-1.2,0-2.3,0.3-3.4,0.8c-1.1,0.5-2,1.4-2.8,2.6
           c-0.8,1.2-1.5,2.8-2,4.8c-0.5,2-0.7,4.4-0.7,7.3s0.2,5.3,0.7,7.3c0.5,2,1.1,3.6,2,4.8c0.8,1.2,1.8,2.1,2.8,2.6
           c1.1,0.5,2.2,0.8,3.4,0.8c1.2,0,2.3-0.3,3.4-0.8c1.1-0.5,2-1.4,2.9-2.6c0.8-1.2,1.5-2.8,2-4.8C273.7,132,273.9,129.6,273.9,126.7z"
           />
   </g>
   </svg>`
            } else {
                return '';
            }
    },
    badge2: (data) => {
        if (typeof data.badge2 !== "undefined" && data.badge2 === "yes"){
        return `<svg class="badge2 version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 180 180" style="enable-background:new 0 0 180 180;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#FFFFFF;}
            .st1{fill:#41B6E6;}
            .st2{fill:#012169;}
        </style>
        <g>
            <path class="st0" d="M90,1.8c-0.4,0-0.9,0-1.3,0C40.5,2.5,1.8,41.9,1.8,90c0,0.4,0,0.9,0,1.3c0.7,48.3,40,86.9,88.1,86.9
                c0.4,0,0.9,0,1.3,0c48.3-0.7,86.9-40.1,86.9-88.2c0-0.4,0-0.9,0-1.3C177.5,40.5,138.1,1.8,90,1.8 M90,146.1
                c-30.6,0-55.6-24.6-56-55.2c-0.4-31,24.3-56.4,55.2-56.9c0.3,0,0.6,0,0.8,0c30.6,0,55.6,24.6,56,55.2c0.4,31-24.3,56.4-55.2,56.9
                C90.5,146.1,90.3,146.1,90,146.1"/>
            <path class="st1" d="M90,3.6c-0.4,0-0.9,0-1.3,0C41.1,4.3,3,43.6,3.6,91.3c0.7,47.2,39.3,85.1,86.3,85.1c0.4,0,0.8,0,1.3,0
                c47.6-0.7,85.8-40,85.1-87.6c-0.3-23.1-9.6-44.6-26.2-60.7C133.9,12.3,112.6,3.6,90,3.6 M90,180c-49,0-89.3-39.5-90-88.7
                C-0.7,41.7,39.1,0.7,88.7,0c24.1-0.3,46.8,8.7,64,25.4s26.9,39.2,27.3,63.3c0.7,49.6-39.1,90.6-88.7,91.3C90.9,180,90.4,180,90,180
                "/>
        </g>
        <polygon class="st2" points="18.1,122.1 27.2,117.8 25.7,114.8 27.4,114 31.4,122.1 29.7,122.9 28.1,119.7 19,124 "/>
        <polygon class="st2" points="22.7,130.6 32.6,124 36.4,129.6 34.8,130.6 32.2,126.8 29.8,128.4 31.9,131.6 30.4,132.6 28.3,129.4 
            25.4,131.3 28.1,135.2 26.5,136.2 "/>
        <g>
            <path class="st2" d="M31.1,138.4c0.4,0.9,0.8,1.7,1.4,2.4c0.6,0.7,1.6,1.3,2.5,0.6c1.7-1.5-2.3-5,0.7-7.6c1.8-1.5,3.8-0.7,5.2,0.8
                c0.7,0.8,1.2,1.7,1.6,2.7l-1.8,0.7c-0.3-0.7-0.7-1.5-1.2-2.1c-0.6-0.6-1.4-1.1-2.2-0.5c-1.5,1.3,2.5,4.9-0.6,7.5
                c-1.8,1.6-4.2,0.7-5.6-0.9c-0.8-0.8-1.3-1.8-1.7-2.8L31.1,138.4z"/>
        </g>
        <polygon class="st2" points="39.3,149.8 45.8,142.1 43.2,140 44.4,138.6 51.4,144.3 50.2,145.8 47.4,143.5 41,151.1 "/>
        <polygon class="st2" points="47.1,155.6 53.4,145.6 59.2,149.1 58.2,150.6 54.2,148.3 52.7,150.7 56,152.7 55,154.3 51.7,152.3 
            49.9,155.1 54,157.6 53,159.2 "/>
        <g>
            <path class="st2" d="M59.9,160.5c0.4,0.3,0.8,0.5,1.2,0.6c2.4,1,4.5-0.3,5.5-2.7c0.9-2.3,0.2-4.2-2-5.1c-0.5-0.2-1-0.4-1.5-0.4
                L59.9,160.5z M61.7,150.6c1.1,0.2,2.3,0.6,3.3,1c3.4,1.4,5.1,4,3.6,7.7c-1.6,3.9-4.9,4.9-8.6,3.4c-1-0.4-1.9-0.8-2.8-1.4
                L61.7,150.6z"/>
            <path class="st2" d="M83.9,159.1c0.1-0.6-0.5-1-1-1.1c-0.6-0.1-1.3,0.3-1.3,1c-0.1,0.6,0.4,1.2,0.7,1.7
                C82.9,160.4,83.8,160,83.9,159.1 M81.5,162.9c-0.8,0.3-1.6,0.7-1.7,1.7c-0.1,1.1,0.8,1.9,1.8,2c0.8,0.1,1.5,0,2.1-0.5L81.5,162.9z
                 M85.8,168.8l-0.9-1.1c-1.1,0.7-2.3,0.9-3.6,0.8c-2-0.2-4-1.6-3.7-3.9c0.2-1.6,1.4-2.5,2.8-3c-0.5-0.7-0.9-1.6-0.8-2.6
                c0.2-1.8,1.8-2.7,3.5-2.5c1.5,0.2,2.9,1.4,2.7,3c-0.2,1.5-1.5,2.2-2.7,2.7l5,6.9L85.8,168.8z"/>
        </g>
        <polygon class="st2" points="101.3,168.2 99.8,158.4 96.4,158.9 96.2,157 105.2,155.7 105.5,157.5 101.9,158.1 103.4,167.9 "/>
        <g>
            <path class="st2" d="M111.1,159.5c0.3-0.1,0.6-0.1,0.9-0.2c1.2-0.4,2-1.3,1.5-2.6c-0.4-1.2-1.5-1.3-2.7-0.9
                c-0.3,0.1-0.6,0.2-0.9,0.4L111.1,159.5z M117,164.4l-3.5-3c-0.2-0.2-0.5-0.4-0.8-0.6c-0.1,0-0.2,0.1-0.3,0.1
                c-0.2,0.1-0.5,0.1-0.7,0.2l1.5,4.5l-2,0.6l-3.7-11c0.9-0.5,1.8-0.9,2.8-1.3c2.2-0.7,4.6-0.7,5.5,2c0.5,1.5-0.1,3.1-1.4,3.8l0,0
                c0.4-0.1,0.9,0.4,1.2,0.6l3.8,3.2L117,164.4z"/>
            <path class="st2" d="M124,148.2l1.9-1l3.8,6.8c1.4,2.5,0.2,4.7-2.1,5.9c-2.3,1.2-4.8,1-6.2-1.5l-3.8-6.8l1.9-1l3.7,6.7
                c0.8,1.5,2,1.8,3.5,1c1.4-0.8,1.9-1.9,1.1-3.4L124,148.2z"/>
            <path class="st2" d="M134.7,152.7c0.9-0.3,1.8-0.7,2.5-1.3s1.4-1.5,0.7-2.4c-1.5-1.8-5.2,2-7.7-1.1c-1.5-1.8-0.5-3.8,1.1-5
                c0.8-0.7,1.8-1.1,2.8-1.4l0.6,1.8c-0.8,0.3-1.5,0.6-2.2,1.1c-0.6,0.5-1.2,1.4-0.6,2.1c1.2,1.5,5.1-2.2,7.6,1
                c1.5,1.9,0.5,4.1-1.2,5.4c-0.9,0.7-1.9,1.2-3,1.6L134.7,152.7z"/>
        </g>
        <polygon class="st2" points="146.8,145.1 139.3,138.4 137,140.9 135.6,139.7 141.7,133 143.2,134.2 140.7,136.9 148.2,143.5 "/>
        <polygon class="st2" points="153.1,137.6 143.1,131.1 146.8,125.6 148.4,126.6 145.8,130.4 148.3,132 150.4,128.8 151.9,129.8 
            149.8,133 152.7,134.8 155.3,130.9 156.9,131.9 "/>
        <g>
            <path class="st2" d="M158.4,125.1c0.3-0.4,0.5-0.7,0.7-1.2c1.1-2.4-0.2-4.4-2.6-5.4c-2.3-1-4.2-0.3-5.2,1.9c-0.2,0.5-0.4,1-0.5,1.5
                L158.4,125.1z M148.4,123.1c0.2-1.1,0.6-2.2,1.1-3.2c1.5-3.3,4.2-4.9,7.9-3.4c3.9,1.7,4.9,5,3.3,8.6c-0.4,0.9-0.9,1.8-1.5,2.7
                L148.4,123.1z"/>
            <path class="st1" d="M131.2,63.2c-3.4-2.3-20.7-5-28.3,5.1c-13.8,18.1,5.6,39.9,5.6,39.9L131.2,63.2z"/>
            <path class="st2" d="M96.3,96.5c-4.4-7.8-10.3-19.1-11-20.3c-7-11.7-16.1-12.6-21.4-12.5l-15,0.3c0,0,34.2,61.6,34.6,62.4
                c2.1,3.2,5.1,4.5,8.2,4.4s6-1.3,7.9-4.8l0,0l8.8-17.8C108.5,108.2,103.9,109.7,96.3,96.5"/>
            <path class="st2" d="M106.1,126h0.4c0.5,0,0.9-0.2,0.9-0.6s-0.3-0.6-0.9-0.6c-0.2,0-0.4,0-0.5,0.1L106.1,126z M106.1,128.2h-0.9
                l-0.1-4c0.4-0.1,0.9-0.1,1.5-0.2c0.8,0,1.1,0.1,1.4,0.3c0.2,0.2,0.4,0.5,0.4,0.8c0,0.5-0.3,0.8-0.8,1l0,0c0.4,0.1,0.6,0.4,0.7,1
                s0.2,0.8,0.3,1h-1c-0.1-0.1-0.2-0.5-0.3-1c-0.1-0.4-0.3-0.6-0.8-0.6h-0.4L106.1,128.2z M103.6,126.2c0,1.8,1.4,3.1,3.2,3.1
                c1.7,0,3-1.5,3-3.2c0-1.8-1.4-3.2-3.2-3.1C104.9,123,103.6,124.5,103.6,126.2 M110.8,126c0.1,2.2-1.7,4.1-4,4.1
                c-2.3,0.1-4.1-1.7-4.2-3.9c-0.1-2.2,1.7-4,4-4.1C108.9,122.1,110.7,123.8,110.8,126"/>
            <path class="st1" d="M90,35.8c-0.3,0-0.5,0-0.8,0c-14.5,0.2-28,6-38.1,16.4S35.6,76.3,35.8,90.8s6,28,16.4,38.1
                c10.2,9.9,23.6,15.3,37.8,15.3c0.3,0,0.5,0,0.8,0c29.9-0.4,53.9-25.1,53.4-55C143.8,59.6,119.5,35.8,90,35.8 M90,147.9
                c-15.1,0-29.4-5.8-40.3-16.4c-11.1-10.8-17.3-25.2-17.5-40.7s5.6-30.1,16.4-41.2s25.2-17.3,40.7-17.5c0.3,0,0.6,0,0.9,0
                c31.5,0,57.4,25.4,57.9,57.1c0.5,31.9-25.1,58.3-57.1,58.7C90.6,147.9,90.3,147.9,90,147.9"/>
            <path class="st2" d="M16.9,86.6c-3.1,0.1-6.4,1.4-6.3,5.1c0.1,3.6,3.3,4.9,6.5,4.8c3.1,0,6.3-1.4,6.3-5
                C23.3,87.8,20,86.5,16.9,86.6 M29,86.7c-0.9,1.1-2.6,1.9-3,3.4c0.1,0.4,0.1,0.9,0.1,1.3c0.1,5.4-3.9,8.5-9,8.6
                c-5.2,0.1-9.3-2.7-9.4-8.3c-0.1-5.5,3.8-8.5,9.1-8.6c3.1-0.1,6.2,1,8,3.7c0.1-0.4,0.4-0.8,0.7-1.1l3.4-3.4L29,86.7z"/>
            <path class="st2" d="M12.2,63.9l0.9-3.1L24.4,64c4.2,1.2,5.3,4.8,4.1,8.7c-1.1,3.9-3.9,6.4-8.1,5.2L9.2,74.7l0.9-3.1l11.1,3.1
                c2.5,0.7,4-0.4,4.7-2.8s-0.1-4.1-2.6-4.8L12.2,63.9z"/>
        </g>
        <path class="st2" d="M24.1,49.1L24.1,49.1l4,5.2l2.5-4L24.1,49.1z M38.2,51.9L33.4,51l-3.6,5.8l2.9,3.9l-1.8,3L19.6,48l1.6-2.6
            l18.9,3.4L38.2,51.9z"/>
        <polygon class="st2" points="41.9,47.5 29.4,34.8 31.7,32.5 42.2,43.2 47.5,38 49.5,40 "/>
        <rect x="46.3" y="21.5" transform="matrix(0.8178 -0.5755 0.5755 0.8178 -8.7416 33.1363)" class="st2" width="3.3" height="17.8"/>
        <polygon class="st2" points="60.9,32.9 54.5,19.4 49.8,21.6 48.6,19.1 61.3,13.1 62.5,15.6 57.5,18 63.9,31.5 "/>
        <g>
            <path class="st2" d="M75.9,27.6l-1.4-7.4c-0.2-0.2-0.5-0.4-0.8-0.6l-7.9-8.2l3.8-0.8l5,5.5c0.3,0.3,0.6,0.7,0.9,1.1
                c0.1-0.4,0.2-0.9,0.4-1.3l2.7-7l3.7-0.7l-4.7,11.3l1.5,7.4L75.9,27.6z"/>
            <path class="st2" d="M99.7,17c0.5,0.2,1,0.3,1.5,0.3c1.9,0.3,3.5-0.5,3.8-2.5s-1-2.8-2.8-3.1c-0.5-0.1-1.1-0.1-1.6-0.1L99.7,17z
                 M94.9,26.1l2.9-17.4c1.6-0.1,3.3,0,4.9,0.3c3.4,0.6,6.3,2.7,5.7,6.5c-0.6,3.7-4,5.2-7.5,4.6c-0.5-0.1-1-0.2-1.5-0.4l-1.1,6.9
                L94.9,26.1z"/>
            <path class="st2" d="M116,21.1c0.5,0.3,0.8,0.5,1.3,0.7c1.8,0.7,3.6,0.4,4.4-1.4s-0.4-3-2.2-3.7c-0.5-0.2-1-0.3-1.5-0.5L116,21.1z
                 M118,32.5l-1-6.9c-0.1-0.5-0.2-1-0.4-1.4c-0.2-0.1-0.3-0.1-0.5-0.2c-0.4-0.2-0.7-0.3-1.1-0.5l-2.8,6.6l-3-1.3l6.8-16.2
                c1.6,0.3,3,0.7,4.5,1.3c3.2,1.4,6,3.8,4.3,7.7c-0.9,2.2-3.3,3.4-5.4,2.9l0,0c0.5,0.2,0.7,1.4,0.8,1.9l1.3,7.5L118,32.5z"/>
            <path class="st2" d="M138.6,35.9c2-2.5,2.9-5.8,0.1-8.1c-2.8-2.2-5.9-0.5-7.8,2c-1.9,2.4-2.9,5.8-0.1,8
                C133.6,40,136.7,38.3,138.6,35.9 M128.1,27.6c3.2-4.1,8-5.4,12.3-2s4.2,8.4,0.9,12.5c-3.2,4-8.1,5.3-12.3,2
                C124.8,36.6,124.9,31.6,128.1,27.6"/>
            <path class="st2" d="M146.4,59.9l12.3-8.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.2l-11.4,1.4c-0.7-1.1-0.7-1.8,0.3-3.5l4.6-7.8
                c0.1-0.2,0.3-0.4,0.4-0.5l0,0l-12.3,8.1l-1.8-2.7l14.8-9.8l2.7,4l-5.4,9l0,0c0.3-0.1,0.7-0.2,1.1-0.2l9.3-1.3l2.6,4l-14.8,9.8
                L146.4,59.9z"/>
        </g>
        <rect x="149.1" y="63.2" transform="matrix(0.9394 -0.3427 0.3427 0.9394 -12.6558 58.0724)" class="st2" width="17.8" height="3.3"/>
        <g>
            <path class="st2" d="M155.1,73.3c-0.2,1.4-0.4,2.9-0.1,4.4c0.2,1.4,1,3.1,2.7,2.8c3.4-0.6,1-8.4,7-9.5c3.4-0.6,5.4,2.3,5.9,5.3
                c0.3,1.6,0.2,3.3-0.1,4.9l-2.8-0.5c0.2-1.2,0.3-2.5,0.1-3.7c-0.2-1.3-0.9-2.7-2.4-2.4c-2.9,0.5-0.7,8.4-6.8,9.5
                c-3.6,0.6-5.8-2.5-6.4-5.7c-0.3-1.7-0.3-3.5,0.1-5.2L155.1,73.3z"/>
        </g>
        <polygon class="st2" points="153.7,88.5 171.5,89.4 170.9,99.8 168.1,99.7 168.5,92.5 164.1,92.3 163.8,98.3 161.1,98.1 161.4,92.2 
            156.3,91.9 155.9,99.2 153.1,99.1 "/>
        <g>
            <path class="st2" d="M153.6,167.6v1.1h-1.8v5h-1.3v-5h-1.8v-1.1H153.6z M157.8,170.9c0,0.1,0.1,0.2,0.1,0.3s0.1,0.2,0.1,0.3
                c0-0.1,0.1-0.2,0.1-0.3s0.1-0.2,0.1-0.3l1.7-3.1c0.1-0.1,0.1-0.1,0.2-0.2c0.1,0,0.1,0,0.2,0h1.1v6.1h-1.1V170l0.1-0.8l-1.9,3.5
                c-0.1,0.2-0.2,0.3-0.5,0.3h-0.2c-0.2,0-0.4-0.1-0.4-0.3l-1.9-3.4l0.1,0.7v3.7h-1.1v-6.1h1.1c0.1,0,0.2,0,0.2,0s0.1,0.1,0.2,0.2
                L157.8,170.9z"/>
        </g>
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
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=360&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 360px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=470&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 470px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=768&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 768px)">
        <source srcset="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1024&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" media="(max-width: 1024px)">
        <img src="https://s7.vitaminshoppe.com/is/image/VitaminShoppe/${data.imageName}?wid=1080&amp;fmt=pjpeg&amp;pscan=auto&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;iccEmbed=0" />
    </picture>`;
    },
    heroBannerCtaTemplate: (data) => {
        return `<a href="${data.url}"
        ${data.trackingCode}>
          <div class="hero-banner">
              <div class="hero-banner__backdrop">
              ${module.exports.badge1(data)}
              ${module.exports.badge2(data)}
                ${module.exports.heroImage(data)}
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                     
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
              ${module.exports.badge1(data)}
              ${module.exports.badge2(data)}
              ${module.exports.heroImage(data)}
                  <div class="hero-banner__main-text-wrapper">
                      <div class="hero-banner__main-text">
                  
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
            font-family: corisanderegular;
        }

        .site-wrapper .hero-banner img {
            width:100% !important;
        }
    
        .site-wrapper .hero-banner .mobile-only,
        .site-wrapper .hero-banner .mobile-only-inline {
            display: none !important;
        }
    
        .site-wrapper .hero-banner strong {
            font-family: lato, serif;
            font-weight:bold;
        }
    
        .site-wrapper .hero-banner p {
            line-height: 1;
            color: #002169;
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
            width: 40%;
            margin-left: auto;
            position: relative;
            text-align: left;
            margin-right: 2%;
            float: right;
        }
    
        .site-wrapper .hero-banner .hero-banner__main-text-wrapper {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translate(0, -50%);
            right: 0;
        }
    
        .site-wrapper .hero-banner .hero-banner__pre-header {
            font-family: lato, serif;
            font-weight:bold;
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
            font-size: 650%;    
    font-family: lato, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    line-height: .8;
    margin-bottom: 1%;
        }
    
        .site-wrapper .hero-banner .hero-banner__perc {
            font-family: lato, serif;
            font-weight:bold;
            font-size: 969%;
            line-height: 77%;
            padding-top: 23%;
        }
    
        .site-wrapper .hero-banner .hero-banner__off {
            font-family: lato, serif;
            font-weight:bold;
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
            font-size: 208%;
            line-height: 1.2;
            font-family: lato, serif;
            margin-top: 1%;
        }
    
        .site-wrapper .hero-banner .hero-banner__post-header-line-2 {
            font-size: 180%;
            font-family: lato, serif;
            font-weight:bold;
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
            font-family: lato, serif;
            font-weight:bold;
            border-radius: 5px;
            margin: 2%;
        }
    
        .site-wrapper .hero-banner .hero-banner__cta:hover {
            background-color: #07689b;
        }
    
        .badge1 {
            width: 10%;
            position: absolute;
            top: 8%;
            left: 5%;
        }
    
        .badge2 {
            width: 10%;
            position: absolute;
            top: 8%;
            right: 5%;
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
              
            }
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
    htmlAdGeneralStyles: () => {
        return `
        body {
            margin: 0;
            overflow: hidden;
            background: white;
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
    htmlAdsGenerator: (data, v) => {
        const fs = require('fs');

            if (!fs.existsSync(v)) {
                fs.mkdirSync(v);
            } else {
                return false;
            }
        
        let folderName = v,
        markup = '',
        styles = module.exports.htmlAdGeneralStyles();
        data.map((val) => {
            let fileName = val.name, 
            layoutWidth = val.width,
            layoutHeight = val.height,
            extraStyles = '';

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
    crossPromosGenerator: (data, v) => {
        const fs = require('fs');
        fs.mkdirSync(v);
        let folderName = v;
        data.map((val, i) => {
            // console.log(val)
            let fileName = val.name;
            let styles = module.exports.crossPromoStyles(val);
            let html = module.exports.crossPromoTemplate(val);
      
            html = styles + '\n' + html;
         
            fs.writeFile(`./${folderName}/${fileName}.html`, html, function (err) {
                if (err) throw err;

            });
           
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