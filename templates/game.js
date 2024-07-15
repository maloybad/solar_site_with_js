const wonders = [
    "Пирамида Хеопса",
    "Висячие сады Семирамиды",
    "Статуя Зевса в Олимпии",
    "Храм Артемиды",
    "Мавзолей Мавсола",
    "Статуя Колосса Родосского",
    "Александрийский маяк"
];
let currentWonderIndex = 0;
const questions = [
    "Это чудо света находится в Египте?",
    "Это чудо света связано с водой?",
    "Это чудо света связано с богом Зевсом?",
    "Это чудо света находится в Азии?",
    "Это чудо света связано с мавзолеем?",
    "Это чудо света находится на острове Родос?",
    "Это чудо света связано с маяком?"
];
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function askQuestion() {
    if (currentWonderIndex >= wonders.length) {
        questionElement.textContent = "Я не знаю такого чуда света!";
        optionsElement.innerHTML = "";
        return;
    }
    questionElement.textContent = questions[currentWonderIndex];
    optionsElement.innerHTML = `
        <button onclick="answerQuestion(true)">Да</button>
        <button onclick="answerQuestion(false)">Нет</button>
    `;
}

function answerQuestion(answer) {
    if (answer) {
        questionElement.textContent = `Это чудо света - ${wonders[currentWonderIndex]}?`;
        optionsElement.innerHTML = `
            <button onclick="confirmWonder(true)">Да</button>
            <button onclick="confirmWonder(false)">Нет</button>
        `;
    } else {
        currentWonderIndex++;
        askQuestion();
    }
}

function confirmWonder(answer) {
    if (answer) {
        questionElement.textContent = `Я угадал! Это чудо света - ${wonders[currentWonderIndex]}!`;
        optionsElement.innerHTML = "";
    } else {
        currentWonderIndex++;
        askQuestion();
    }
}

askQuestion();