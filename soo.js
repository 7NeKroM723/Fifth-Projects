/**
 * Функция срабатывает при наведении курсора мыши на карточку книги
 * @param {HTMLElement} selectedCard - Элемент .book-card, на который навели мышь
 */
function upDate(selectedCard) {
    // 1. Находим изображение (img) внутри текущей карточки
    const bookImage = selectedCard.querySelector('.book-cover');
    
    // 2. Находим текстовые элементы внутри карточки (Заголовок и Автор)
    const bookTitle = selectedCard.querySelector('.book-info h3').innerText;
    const bookAuthor = selectedCard.querySelector('.book-info .author').innerText;
    
    // 3. Получаем доступ к элементам Хедера, которые будем менять
    const headerElement = document.getElementById('dynamic-header');
    const headerTitle = document.getElementById('header-title');
    const headerDescription = document.getElementById('header-desc');
    
    // 4. Меняем фоновое изображение хедера на src текущей книги
    headerElement.style.backgroundImage = `url('${bookImage.src}')`;
    
    // 5. Меняем текст в шапке на информацию о выбранной книге
    headerTitle.innerText = bookTitle;
    headerDescription.innerText = `Автор произведения: ${bookAuthor} (Полноэкранный предпросмотр)`;
}

/**
 * Функция срабатывает, когда курсор мыши покидает область карточки книги
 * Возвращает шапку сайта в первоначальное дефолтное состояние
 */
function unDo() {
    // 1. Получаем ссылки на элементы хедера
    const headerElement = document.getElementById('dynamic-header');
    const headerTitle = document.getElementById('header-title');
    const headerDescription = document.getElementById('header-desc');
    
    // 2. Сбрасываем инлайн-стиль фонового рисунка (возвращается стандартный синий цвет из CSS)
    headerElement.style.backgroundImage = "none";
    
    // 3. Восстанавливаем исходные текстовые значения хедера
    headerTitle.innerText = "📚 Литературный Дневник";
    headerDescription.innerText = "Коллекция произведений, которые оставили след в моей жизни";
}