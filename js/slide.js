document.addEventListener("DOMContentLoaded", function () {
  function initCustomSlider(
    sliderSelector,
    options = {},
    prevSelector = null,
    nextSelector = null,
  ) {
    const sliderEl = document.querySelector(sliderSelector);
    if (!sliderEl) return;

    const slider = new Splide(sliderEl, options).mount();

    // Если переданы кастомные стрелки
    if (prevSelector) {
      const prevBtn = document.querySelector(prevSelector);
      if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
          e.preventDefault();
          slider.go("<");
        });
      }
    }

    if (nextSelector) {
      const nextBtn = document.querySelector(nextSelector);
      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.preventDefault();
          slider.go(">");
        });
      }
    }
  }

  initCustomSlider("#splide-videos", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "1.5rem",
    arrows: false,
    pagination: true,
    breakpoints: {
      630: { perPage: 3 },
      450: { perPage: 2 },
      380: { perPage: 1 },
    },
  });
  initCustomSlider(
    "#splide-featured",
    {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        768: { perPage: 2 },
        530: { perPage: 1, type: "slide" },
      },
    },
    ".arrow-prev",
    ".arrow-next",
  );
  initCustomSlider(
    "#splide-commintment",
    {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        1040: { perPage: 2 },
        530: { perPage: 1, pagination: true },
      },
    },
    ".arrow-prev-c",
    ".arrow-next-c",
  );
  initCustomSlider(
    "#splide-news",
    {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        1040: { perPage: 2 },
        530: { perPage: 1 },
      },
    },
    ".arrow-prev-c",
    ".arrow-next-c",
  );
  initCustomSlider("#splide-dial", {
    perPage: 3,
    perMove: 1,
    gap: "1.5rem",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: { perPage: 2 },
      
    },
  });
  initCustomSlider("#splide-clasp", {
    perPage: 3,
    perMove: 1,
    gap: "1.5rem",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: { perPage: 2 },
      530: { perPage: 1 },
    },
  });
  initCustomSlider("#splide-moment", {
    perPage: 3,
    perMove: 1,
    gap: "1.5rem",
    arrows: true,
    pagination: false,
    breakpoints: {
      768: { perPage: 2 },
      530: { perPage: 1 },
    },
  });
  initCustomSlider(
    "#splide-close",
    {
      perPage: 4,
      perMove: 1,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        768: { perPage: 3 },
        530: { perPage: 2 },
        400: { perPage: 1 },
      },
    },
    ".arrow-prev-c",
    ".arrow-next-c",
  );
  initCustomSlider("#splide-popup", {
    perPage: 1,
    perMove: 1,
    gap: "1.5rem",
    arrows: false,
    pagination: true,
    breakpoints: {},
  });
    initCustomSlider("#splide-popup-dial", {
    perPage: 1,
    perMove: 1,
    gap: "1.5rem",
    arrows: false,
    pagination: true,
    breakpoints: {},
  });
     initCustomSlider("#splide-popup-hand", {
    perPage: 1,
    perMove: 1,
    gap: "1.5rem",
    arrows: false,
    pagination: true,
    breakpoints: {},
  });
   initCustomSlider(
    "#splide-galery",
    {
      perPage: 4,
      perMove: 1,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        768: { perPage: 3 },
        530: { perPage: 2 },
        400: { perPage: 1 },
      },
    },
    ".arrow-prev",
    ".arrow-next",
  );
});
