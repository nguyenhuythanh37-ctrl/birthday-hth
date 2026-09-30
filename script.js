/* =====================================================
   LẤY CÁC PHẦN TỬ
===================================================== */

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");


const startButton =
    document.getElementById("startButton");

const blowButton =
    document.getElementById("blowButton");

const nextButton =
    document.getElementById("nextButton");


const flame =
    document.getElementById("flame");

const message =
    document.getElementById("message");


const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


const photos = [

    document.getElementById("photo1"),

    document.getElementById("photo2"),

    document.getElementById("photo3"),

    document.getElementById("photo4")

];



/* =====================================================
   CHUYỂN TRANG
===================================================== */

function changePage(currentPage, nextPage) {


    currentPage.classList.add("fade-out");


    setTimeout(() => {


        currentPage.classList.add("hidden");

        currentPage.classList.remove("fade-out");


        nextPage.classList.remove("hidden");


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }, 600);

}



/* =====================================================
   TRANG 1 → TRANG 2
===================================================== */

startButton.addEventListener(
    "click",
    () => {


        /*
         * Trình duyệt điện thoại thường
         * không cho autoplay nhạc.
         *
         * Vì người dùng vừa bấm nút,
         * nên đây là thời điểm thích hợp
         * để bắt đầu nhạc.
         */

        music.play()
            .then(() => {

                musicButton.textContent = "🔊";

            })
            .catch(() => {

                console.log(
                    "Không thể phát nhạc."
                );

            });


        changePage(page1, page2);


    }
);



/* =====================================================
   BẬT / TẮT NHẠC
===================================================== */

musicButton.addEventListener(
    "click",
    () => {


        if (music.paused) {


            music.play()
                .then(() => {

                    musicButton.textContent =
                        "🔊";

                });


        } else {


            music.pause();

            musicButton.textContent =
                "🔇";

        }

    }
);



/* =====================================================
   THỔI NẾN
===================================================== */

blowButton.addEventListener(
    "click",
    () => {


        /*
         * Không cho bấm lại
         */

        blowButton.disabled =
            true;


        /*
         * Tạo hiệu ứng nút
         */

        blowButton.classList.add(
            "blowing"
        );


        message.textContent =
            "Đang thổi nến... 💨";



        /* ---------------------------------------------
           TẮT NẾN
        --------------------------------------------- */

        setTimeout(() => {


            flame.classList.add(
                "off"
            );


            blowButton.style.opacity =
                "0";


            blowButton.style.pointerEvents =
                "none";


            message.textContent =
                "Điều ước đã được gửi đi rồi... ❤️";


        }, 900);



        /* ---------------------------------------------
           HIỆN ẢNH
        --------------------------------------------- */

        photos.forEach(
            (photo, index) => {


                setTimeout(
                    () => {


                        photo.classList.add(
                            "show"
                        );


                    },

                    /*
                     * Ảnh 1:
                     * 1.8 giây
                     *
                     * Ảnh 2:
                     * 3 giây
                     *
                     * Ảnh 3:
                     * 4.2 giây
                     *
                     * Ảnh 4:
                     * 5.4 giây
                     */

                    1800 + index * 1200

                );

            }
        );



        /* ---------------------------------------------
           HIỆN NÚT TRANG 3
        --------------------------------------------- */

        setTimeout(
            () => {


                nextButton.classList.add(
                    "show"
                );


            },

            1800 +
            photos.length * 1200 +
            800

        );


    }
);



/* =====================================================
   TRANG 2 → TRANG 3
===================================================== */

nextButton.addEventListener(
    "click",
    () => {


        changePage(
            page2,
            page3
        );


    }
);