let inputTheme = document.querySelector("#theme");
let body = document.querySelector("body");

let quizAnswer;
let answerOrCatagoryBlock = document.querySelector(".question__one-lists");



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
                              text: "44.5 : 1"
                         }, {
                              id: '2',
                              variant: "B",
                              text: "3.65 : 2"
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
          name: 'Css',
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
          name: 'Java Script',
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
          name: 'Accessibility',

     },
]
let params = generateSearch();

//! Action Functions

function updateUrlWithParams(newParams) {

     console.log(newParams);

     let url = new URL(window.location.href);

     if (newParams.catagoryID != null && newParams.questionID != null) {
          Object.entries(newParams).forEach(([key, value]) => url.searchParams.set(key, value))
     } else {
          alert("Hele Ki Suallarimiz Movcud Deyil")
     }

     
     window.history.back(url.searchParams.delete("catagoryID", "questionID"));



     window.history.replaceState({}, "", url)
     generateQuestionPage(newParams.catagoryID, newParams.questionID)
}



//! Get Functions
function getFirstQuestionIDbyCategory(catId) {
     let category = data.find(item => item.id == catId);

     if (category && category.questions && category.questions.length > 0) {
          return category.questions[0].id;
     } else {
          return null;
     }



}

function generateSearch() {
     let url = new URLSearchParams(window.location.search)
     let categoryID = url.get("categoryID");
     let questionID = url.get("questionID");
     return {
          catagoryID: categoryID,
          questionID: questionID
     }
}

function callAnswerOrCategory(type) {
     quizAnswer = document.querySelectorAll(".question__one-item");
     quizAnswer.forEach(item => {
          if (type == "category") {
               item.addEventListener("click", handleCategoryClick);
          } else {
               item.addEventListener("click", handleAnswerClick);
          }
     })
}


function getQuestionByIDs(catID, questionID) {

     let category = data.find(item => item.id == catID);
     let question = category.questions.find(a => a.id == questionID);


     if (category && category.questions && category.questions.length > 0) {
          return question;
     } else {
          return null;
     }


}

//! Click Functions 

function handleCategoryClick(event) {
     let catID = event.target.getAttribute("data-category-id");
     let firstQuestionID = getFirstQuestionIDbyCategory(catID);

     let newParams = {
          catagoryID: catID,
          questionID: firstQuestionID
     }
     updateUrlWithParams(newParams)
}

function handleAnswerClick(event) {
     quizAnswer.forEach(item => {
          item.classList.remove("selected");
     });
     event.target.classList.add("selected");
}


//! Generate Functions 

function generateAnswerData(x) {
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
     answerOrCatagoryBlock.innerHTML = emptyHtml;
     callAnswerOrCategory()
}

function generateCategoryData(x) {
     let emptyHtml = '';

     x.map(item => {
          emptyHtml += `
          <div data-category-id ="${item.id}" class="question__one-item start__menu-item ">
                    <div class="start__menu-item-img">
                         <img src="${item.img}" alt="Photo">
                    </div>
                    <p class="start__menu-item-info">
                         ${item.name}
                    </p>
          </div>
          `
     })
     answerOrCatagoryBlock.innerHTML = emptyHtml;
     callAnswerOrCategory("category");
}



function generateQuestionPage(catID, questionID) {
     let question = getQuestionByIDs(catID, questionID);
     generateAnswerData(question.answer);

     let questionBlock = document.querySelector(".question__one-desc");
     let questionBlockBtn = document.querySelector(".question__one-lists");
     console.log(questionBlock);

     questionBlock.innerHTML = `
     <div class="question__one-info">
               <p class="question-title">Question 6 of 10</p>
               <p class="question-info">
                    ${question.text}
               </p>
               <div class="quiz-block_progress">
                    <p style="width: 45%"></p>
               </div>
     </div>
     `
     questionBlockBtn.innerHTML += `
     <div class="question__one-btn">
                                   <a href="#">Submit Answer</a>
                              </div>
     `
     callAnswerOrCategory()

}




if (params.questionID && params.catagoryID) {
     generateQuestionPage(params.questionID, params.catagoryID)
} else {
     generateCategoryData(data);
}