var questions = [
    {
        question: "Logo Hacktiv8 melambangkan hewan apa?",
        answer: ["Rubah", "Gajah", "Tikus", "Monyet"],
        trueAnswer: "Rubah"
    },
    {
        question: 'console.log("1"+1) = ?',
        answer: ["1", "111", "11", "1111"],
        trueAnswer: "11"
    },
    {
        question: "Siapakah buddy instruktur anda??",
        answer: ["Audrick", "Risan", "Ayu", "Bagas"],
        trueAnswer: "Bagas"
    },
    {
        question: "Apakah Bagas tampan?",
        answer: ["Banget", "Banget", "Banget", "Banget"],
        trueAnswer: "Banget"
    }
]

let checkQ = true


var question = document.createElement("p")
question.setAttribute("id", "p-question")
var text = document.createTextNode(questions[0].question)
question.appendChild(text)

var element = document.getElementById("box-question")
element.appendChild(question)

document.getElementById("answer1").value = questions[0].answer[0]
document.getElementById("answer2").value = questions[0].answer[1]
document.getElementById("answer3").value = questions[0].answer[2]
document.getElementById("answer4").value = questions[0].answer[3]

localStorage.setItem("question", 0)

function checkAnswer(num) {
    var ans = document.getElementById("answer" + num).value
    let noQuestion = parseInt(localStorage.getItem("question"))

    if (noQuestion === questions.length) {
        alert("Quiz Selesai!")
    } else {
        if (ans === questions[noQuestion].trueAnswer) {
            alert("Jawaban Benar")
            noQuestion++
            if (noQuestion === questions.length) {
                alert("Quiz Selesai!")
                var title = document.getElementById("quiz-title")
                title.remove()
                var newTitle = document.createElement("h1")
                newTitle.setAttribute("id", "quiz-title")
                var txtTitle = document.createTextNode("TERIMA KASIH!!")
                newTitle.appendChild(txtTitle)

                var newTitleDesc = document.createElement("h3")
                newTitleDesc.setAttribute("id", "quiz-title-desc")
                var txtTitleDesc = document.createTextNode("Refresh browser untuk mengulang quiz.")
                newTitleDesc.appendChild(txtTitleDesc)

                var elementTitle = document.getElementById("wrapper-title")
                elementTitle.appendChild(newTitle)
                elementTitle.appendChild(newTitleDesc)


            } else {
                localStorage.setItem("question", noQuestion)
                var pQuestion = document.getElementById("p-question")
                pQuestion.remove()

                var question = document.createElement("p")
                question.setAttribute("id", "p-question")
                var text = document.createTextNode(questions[noQuestion].question)
                question.appendChild(text)

                var element = document.getElementById("box-question")
                element.appendChild(question)

                document.getElementById("answer1").value = questions[noQuestion].answer[0]
                document.getElementById("answer2").value = questions[noQuestion].answer[1]
                document.getElementById("answer3").value = questions[noQuestion].answer[2]
                document.getElementById("answer4").value = questions[noQuestion].answer[3]
            }
        } else {
            alert("Jawaban Salah")
        }
    }


}
