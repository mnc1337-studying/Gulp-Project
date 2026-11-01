# Gulp + SCSS проект

Демо: https://mnc1337-studying.github.io/Gulp-Project/

## Що робить Gulp

- компілює SCSS у CSS
- додає вендорні префікси (autoprefixer)
- створює читабельний `main.css` і мінімізований `main.min.css`
- автоматично оновлює сторінку в браузері при змінах (BrowserSync)

## Як запустити

Потрібен Node.js 18 або новіший.

```
git clone https://github.com/mnc1337-studying/Gulp-Project.git
cd Gulp-Project
npm install
npm start
```

Команда `npm start` збирає проект, запускає локальний сервер на http://localhost:3000 і стежить за змінами в `src/`.

Збірка проекту один раз, без сервера:

```
npm run build
```

## Структура проекту

```
src/
  index.html
  styles/        SCSS-файли (abstract, base, components, main.scss)
docs/            результат збірки, його роздає GitHub Pages
gulpfile.js
```

Редагувати потрібно лише файли в `src/`. Папку `docs/` генерує Gulp.

## Використані інструменти

Gulp, Sass, PostCSS, Autoprefixer, clean-css, BrowserSync