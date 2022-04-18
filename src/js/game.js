"use strict";

// 一開始進來自動亂數
// window.onload = function () {
//     for (let i = 0; i < swiper.length; i++) {
//         swiper[i].slideTo(Math.floor(Math.random() * 10));
//     }
// };

//rotation亂數
let rotation = document.getElementsByClassName('rotate')[0];
rotation.addEventListener("click", function (e) {
    // e.preventDefault();
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].slideTo(Math.floor(Math.random() * 10));
    }
});

// <!-- Initialize Swiper -->
let upperImgId = ""; // 紀錄上邊圖片ID
let lowerImgId = ""; // 紀錄下邊圖片ID
const swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    // slidesPerGroup: 4,
    // speed: 500,
    on: {
        init: function () {
            // console.log('swiper initialized');
        },
        slideChangeTransitionEnd: function (e) { // 圖片改變完後執行下面function
            let slides = e.slides; // 取得所有的圖片
            for (let i in slides) { //看圖片資訊
                if ("swiper-slide game swiper-slide-active" == slides[i].className) { //當圖片為當前圖片時
                    let elementId = slides[i].id; //取得圖片id
                    if (elementId.includes("_")) { // id裡面有_ 表示是下邊圖片
                        lowerImgId = elementId; //紀錄下面圖片
                    } else { // upper images
                        upperImgId = elementId; //紀錄上面圖片
                    }
                    let disappear = document.querySelectorAll(".swiper"); //獲獎後消失圖層
                    let appear = document.getElementsByClassName("congrats")[0]; //獲獎後應出現圖層
                    if (upperImgId != "" && lowerImgId != "" && lowerImgId.includes(upperImgId)) { //符合需求
                        // console.log(upperImgId, lowerImgId, lowerImgId.includes(upperImgId))
                        // alert("congrats!");
                        // Swal.fire('Congrats!');
                        Swal.fire({
                            title: 'Congrats!',
                            icon: 'success',
                            background: '#161829',
                            confirmButtonColor: '#F29966',
                            confirmButtonText: 'OK!',
                            timer: '2000',
                        });
                        for (let i = 0; i < disappear.length; i++) {
                            disappear[i].style = "display:none";
                        }
                        appear.style = "display:flex";
                    }
                }
            }
        }
    },

});

// discount("<strong>新增成功</strong>", "success");
//                         let reset = document.querySelector(".reset")
//                         reset.reset()
//                     } else {
//                         discount("<strong>請輸入內容</strong>", "warning");
//                     }