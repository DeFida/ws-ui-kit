import type { Meta, StoryObj } from '@storybook/react';
import WSMarkdownRender from '../components/WSMarkdownRender/WSMarkdownRender';

const meta = {
  title: 'Example/WSMarkdownRender',
  component: WSMarkdownRender,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSMarkdownRender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarkdownRender: Story = {
  args: {
    content: "![This will be caption](https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=)\n В предыдущей статье мы рассмотрели, что такое языки программирования и языки разметки. Мы узнали, что HTML определяет структуру сайта, CSS отвечает за дизайн, а JavaScript - за функциональность.\n\nДавайте создадим пример кнопки, при `highlight\nHighlight\n$ws-description\nThis is its description, for which it is necessary to display and verify\n` на которую изменится ее цвет.\n\n```html\n<button>Изменить цвет</button>\n\n```\n\nЗдесь мы видим обычный HTML-элемент. Слово \"button\" указывает, что мы хотим создать кнопку. Если бы мы написали `img`, то получили бы изображение (img происходит от английского слова \"image\", что означает \"изображение\"). Обратите внимание, что во многих языках программирования и разметки используются английские слова, потому что английский язык широко распространен и был первым языком, на котором разрабатывались многие технологии. Поэтому знание английского языка важно для разработчиков. Внутри тега `button` мы написали текст \"Изменить цвет\", который будет отображаться на кнопке.\n\n```css\nbutton {\n\tcolor: orange;\n\tbackground-color: violet;\n\tpadding: 10px;\n}\n\n```\n\nТеперь давайте посмотрим на этот довольно большой код. Слово \"button\" зеленого цвета указывает, что это стили для кнопки, которую мы создали с помощью HTML. Затем в фигурных скобках мы указываем, какие свойства должны быть у этой кнопки. В данном случае `color: orange` означает, что мы хотим сделать текст кнопки оранжевым, а `background-color: violet` задает фон кнопки в фиолетовом цвете. Есть и другие свойства, но об этом мы поговорим позже. По мере продвижения в обучении вы будете понимать не только эти непонятные на данный момент слова, но и сможете создавать собственные стили!\n\nТеперь, когда у нас есть `highlight\nкнопка\n$ws-description\nbutton ещяк` и задан её дизайн, давайте добавим функциональность, чтобы при нажатии на кнопку происходила магия, а именно, менялся цвет фона кнопки на... скажем, зеленый.\n\n```jsx\n<button onclick=\"this.style.backgroundColor = 'green'\">Изменить цвет</button>\n\n```\n\nТеперь у вас есть три задачи:\n\n- Создайте кнопку с текстом \"Моя кнопка\".\n- Измените начальный фон кнопки на белый, а текст на черный цвет.\n- Напишите JavaScript-код, чтобы при нажатии на кнопку цвет фона становился черным, а текст становился белым. Подсказка: вы можете написать несколько команд внутри атрибута `onclick`, используя символ `;`. Например:\n```jsx\n<button onclick=\"this.style.backgroundColor = 'green'; this.style.color = 'red'\">Изменить цвет</button>\n\n```\n\nasdasfsdgsg sg dfh dghdf ghfghfghfjfhfj fghfgbdfd dgdfgd f `highlight\nHighlight\n$ws-description\nThis is its description, for which it is necessary to display and verify\n`",
    onPopupOpen: (src: string) => {alert(src)}
  }
};

export const TableRender: Story = {
  args: {
    content: "| Операция | Сипаттама | Мысал |\n| --- | --- | --- |\n| s2 in s | s2 ішкі жолының s ішінде екенін тексеру | 'm' in 'team' |\n| s2 not in s | s2  ішкі жолының not (s2 in s) сияқты s-те жоқ екенін тексеру | 'I' not in 'team' |\n| s + s2 | Конкатенация (жолдарды біріктіру), яғни алдымен s-ден барлық таңбалар, содан кейін s2-ден барлық таңбалар келетін жол | 'tea' + 'm' == 'team' |\n| s * k | k рет қайталанған s жолы | 'oo' * 3 = 'oooooo' |",
    onPopupOpen: (src: string) => {alert(src)}
  }
};

