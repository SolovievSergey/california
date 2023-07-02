// элементы на странице
const slider = document.querySelector('#slider__show')
const prevButton = document.querySelector('.slider__btnPrev');
const nextButton = document.querySelector('.slider__btnNext');

// const sliderItems = slider.children; здесь можем на том этапе когда получаеи HTML коллекцию
// сразу же превратить её в массив.
const slides = Array.from(slider.children);

// Находим общее количество слайдов.
const slideCount = slides.length;

// Затем создаём переменную slideIndex и делаем её равной 0 — это индекс активного слайда.
let slideIndex = 0;

// Добавляем обработчики событий на кнопки, чтобы реагировать на клики пользователя.
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда.Когда пользователь нажимает на кнопку .prev-button,
// мы переключаемся на предыдущий слайд (если текущий слайд не первый)
// и обновляем отображение слайдера.

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда.Когда пользователь нажимает на кнопку .next-button,
// переключаемся на следующий слайд (если текущий слайд не последний)
// и обновляем отображение слайдера.

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера.Функция updateSlider()
// обновляет отображение слайдера, показывая только текущий слайд и скрывая остальные.

function updateSlider() {

    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        }  else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера.При загрузке страницы мы вызываем updateSlider(),
// чтобы отобразить первый слайд и настроить слайдер для начала работы.

updateSlider();
