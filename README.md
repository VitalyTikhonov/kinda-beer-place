# Kinda Beer Place
## A mock website I developed as a test task and to try NextJS

[To the **Russian** version below](#ru)

## En
- [Designed it in Figma](https://www.figma.com/file/sRD9OQffXTa3FoZS32cV2Y/KindaBeerPlace?node-id=0%3A1&t=fPqiUzvyvdAMhWY7-0)
- [Deployed it at Vercel](https://kinda-beer-place-wva9.vercel.app/)
- Using [punkapi.com](punkapi.com)
- Stack: NextJS (hence React), TypeScript, Redux, CSS Modules

### Functionality
Displays 50 "beers" from punkapi.com and allows you to filter them via a search field.

Each beer card links to the beer page with item details.

### Technical Notes
As this is my NextJS project "No. 1.5" ([No. 1 was the one](https://github.com/VitalyTikhonov/nextjs-blog) on their tutorial), I wanted to try using pre-rendering (static / server-side), although I am not 100% sure yet it is optimal in this case. The home page loads server-side-generated, and on the client side the beers get written to the Redux store.

I know there are some sophisticated suggestions on how to properly organize the use of Redux on the server and the client side in the same app. But I found learning them to be beyond my capacity for this test task, so for now I'm just relying on Redux in the browser.

And of course I feel it might be more savvy in such a simple app to do without Redux at all, but my point was also to demonstrate my work with it as such:)

The UX and styles are not ideal, but I hope it is excusable as I don't represent myself as a web-designer. In the absence of a more detailed design assignment it is not feasible to work on the styles any deeper.

But still I made some basic responsive design.

### (Theoretical) Ways To Improve
- Apply one of the approaches to utilize the same Redux state both server- and client-side.
- Solve the issue of ...module.scss files not properly accepted by the app despite the NextJS docs (didn't find working solutions at the first approach) and utilize SCSS (that I'm already quite familiar with – see my older projects).
- Reposition the logo for the narrow screen sizes without "position: absolute", but by adjusting the margins in the media queries.
- Improve the pagination.

## Plan and Timing
|||
|---|---|
| Design the general main layout | 1hr DONE |
| Revise NextJS | 1d DONE |
| Determine and set the project framework | 2hr DONE |
| Try calling the API to see the data available | 0.5hr DONE |
| Make the main page | 4hr DONE |
| Make API calling | 3hr DONE |
| Design the beer card layout | 1hr DONE |
| Make results display Pagination DONE Reset DONE | 4hr DONE |
| Design the beer page layout | 1hr DONE |
| Remake data fetching to use getStaticProps | 3hr DONE |
| Make the beer page | 2hr DONE |
| Deploy | 1hr DONE |
| General brush up | 1hr DONE |
| **Total time** | **~23hr** + 8 for learning and pre-practicing NextJS |

## Ru
## Тестовое задание. NextJS
- [Сделал дизайн в Figma](https://www.figma.com/file/sRD9OQffXTa3FoZS32cV2Y/KindaBeerPlace?node-id=0%3A1&t=fPqiUzvyvdAMhWY7-0)
- [Задеплоил в Vercel](https://kinda-beer-place-wva9.vercel.app/)
- Подключается к [punkapi.com](punkapi.com)
- Стек: NextJS (соответственно, React), TypeScript, Redux, CSS Modules

### Функционал
Отображает 50 карточек с марками пива из API punkapi.com. Позволяет фильтровать их через поле поиска. По клику на каждую карточку открывается страница марки пива.

### Технические примечания
Поскольку это у меня проект на NextJS "номер полтора" ([номер один был по руководству NextJS](https://github.com/VitalyTikhonov/nextjs-blog)), мне обязательно хотелось попробовать pre-rendering (static / server-side). Хотя я еще не уверен на 100%, что в данном случае это оптимально. Главная страница генерируется по SSR, а на клиенте полученные ей элементы ("пиво") записываются в Redux.

Я знаю, что есть хитроумные подходы к тому, как правильно организовать использование Redux на сервере и на клиенте в одном приложении. Но я посчитал, что осваивать их в рамках этого тестового задания будет для меня "оверхед", поэтому пока применяю Redux только в браузере.

И, конечно, в таком простом приложении можно было бы обойтись вообще без Ридакса. Но мне ещё хотелось показать работу собственно с ним.

UX и стили неидеальны, но надеюсь, это простительно, т. к. я не позиционирую себя как веб-дизайнер, а в отсутствие более детального задания от дизайнера нет смысла и заморачиваться.

Но базовую адаптацию под более узкие экраны я все же сделал.

### Пути доработки (в теории)
- Применить один из подходов для оптимизации использования одного и того же состояния Redux как на севере, так и на клиенте.
- Решить проблему: приложение отказывалось принимать файлы ...module.scss, хотя все вроде было сделано по документации NextJS (в первом приближении не нашел очевидных рабочих решений). Применить SCSS, который уже хорошо знаком (см. предыдущие проекты).
- На узких экранах спозиционировать логотип не с помощью "position: absolute", а изменяя марджины в медиазапросах.
- Усовершенствовать пагинацию.

## Планирование работ. Время
|||
|---|---|
| Сделать дизайн главной страницы | 1 ч DONE |
| Повторить NextJS | 1 день DONE |
| Определить и настроить общую структуру проекта | 2 ч DONE |
| Посмотреть, какие данные приходят с API – попробовать кидать запросы | 0.5 ч DONE |
| Сделать главную страницу | 4 ч DONE |
| Сделать код обращений к API | 3 ч DONE |
| Сделать дизайн карточки пива | 1 ч DONE |
| Сделать рендер результатов поиска (пагинацию, сброс) | 4 ч DONE |
| Сделать дизайн страницы пива | 1 ч DONE |
| Переделать получение данных на getStaticProps | 3 ч DONE |
| Сделать страницу пива | 2 ч DONE |
| Задеплоить | 1 ч DONE |
| Итоговые работы | 1 ч DONE |
| **Общее время** | **~23 ч** + 8 на повторение NextJS |
