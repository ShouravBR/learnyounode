Напишіть HTTP **сервер**, що приймає лише POST-запити, підносить всі символи тіла запиту до верхнього регістру та повертає їх клієнту.

Ваш сервер повинен слухати порт, котрий Ви отримаєте в якості першого аргументу командного рядка.

----------------------------------------------------------------------
## ІНФОРМАЦІЯ

Поки Ви не обмежені у використанні потокових можливостей об’єктів `request` та `response`, тож буде набагато легше, якщо Ви ними скористаєтесь.

В npm є дуже багато різних пакетів, які Ви можете використати для *"пристосування (transform)"* потоку данних. Для цієї задачі пакет `through2-map` надає найбільш простий АРІ.

`through2-map` дозволяє створювати *пристосований потік (transform stream)*, використовуючи лише одну функцію, котра приймає фрагмент даних, та повертає фрагмент даних. Це працює практично так само як `Array#map()`, тільки з потоками:

```js
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```
У прикладі вище, вхідні дані з `inStream` конвертуються в рядок (якщо вони досі не є рядком), символи переставляються у зворотньому порядку і результат спрямовується в `outStream`. Таким чином, ми зробили пристосовувач фрагментів даних у зворотньому порядку! Пам’ятайте, що розмір фрагментів данних визначається поза потоком, тому Ви слабо контролюєте розмір вхідних даних.

Для встановлення `through2-map` введіть:

```sh
$ npm install through2-map
```

Якщо у Вас відсутнє з’єднання з Інтернетом, просто створіть директорію `node_modules` та скопіюйте туди директорію з бібліотекою, котру Ви хочете використовувати з {appname}:

  {rootdir:/node_modules/through2-map}

Документацію до through2-map була встановлена разом з {appname}, тож Ви можете читати її, перейшовши у браузері сюди:

  {rootdir:/docs/through2-map.html}