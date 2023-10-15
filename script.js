const faqQuestion = document.querySelectorAll(".faq_question");
const answer = document.querySelectorAll(".answer");

for(let index = 0; index < faqQuestion.length; index++){
    faqQuestion[index].onclick = () => {
        const answer = faqQuestion[index].querySelector(".answer");
        const accordionIcon = faqQuestion[index].querySelector(".accordionIcon i");

        if(accordionIcon.getAttribute("class") == "fa-solid fa-plus"){
            accordionIcon.setAttribute("class","fa-solid fa-minus");
        }else{
            accordionIcon.setAttribute("class","fa-solid fa-plus");
        }
        
        answer.classList.toggle("showAnswer")
    }
}