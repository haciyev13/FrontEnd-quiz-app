let inputTheme = document.querySelector("#theme");
let body = document.querySelector("body");

let quizAnswer;
let questionContainer = document.querySelector(".question__one-lists");



inputTheme.addEventListener("click", function (e) {
     if (e.target.checked) {
          localStorage.setItem("theme", "dark")
     } else {
          localStorage.setItem("theme", "light")
     }
     body.classList.toggle("dark")
})

window.onload = function () {
     let pageTheme = localStorage.getItem("theme")
     if (pageTheme == "dark") {
          body.classList.add("dark");
          inputTheme.checked = true;
     } else {
          body.classList.remove("dark");
     }
}

let data = [
     {
          id: '1',
          img: "./assets/img/fluent_code-16-regular.png",
          name: 'HTML',
          questions: [
               {
                    id: '1',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
               {
                    id: '2',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
          ]
     },
     {
          id: '2',
          img: "./assets/img/fluent_paint-brush-16-regular.png",
          name: 'HTML',
          questions: [
               {
                    id: '1',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
               {
                    id: '2',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
          ]
     },
     {
          id: '3',
          img: "./assets/img/fluent_javascript-16-regular.png",
          name: 'HTML',
          questions: [
               {
                    id: '1',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
               {
                    id: '2',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
          ]
     },
     {
          id: '4',
          img: "./assets/img/fluent_accessibility-16-regular.png",
          name: 'HTML',
          questions: [
               {
                    id: '1',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
               {
                    id: '2',
                    text: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                    rightAnswer: '3',
                    answer: [
                         {
                              id: '1',
                              variant: "A",
                              text: "4.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.5 : 2"
                         }, {
                              id: '3',
                              variant: "C",
                              text: "2.5 : 3"
                         }, {
                              id: '4',
                              variant: "D",
                              text: "1.5 : 4"
                         },
                    ]
               },
          ]
     },
]


function handleAnswerClick(event) {
     quizAnswer.forEach(item => {
          item.classList.remove("selected");
     });
     event.target.classList.add("selected")
}

function getData(x) {
     let emptyHtml = '';

     x.map(item => {
          emptyHtml += `
          <div data-id=${item.id} class="question__one-item ">
                <div class="question__one-item-option">
                        <p>${item.variant}</p>
                </div>
                <div class="question__one-item-info">
                        <p>${item.text}</p>
                </div>
          </div>
          `
     })
     questionContainer.innerHTML = emptyHtml;
     quizAnswer = document.querySelectorAll(".question__one-item");
     quizAnswer.forEach(item => {
          item.addEventListener("click", handleAnswerClick)
     })
}
getData(data[0].questions[0].answer)