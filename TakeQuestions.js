var QuestionsSet = [];
var QuestionNo =0;
var GetQuestion = function()
{
    QuestionsSet[QuestionNo]={};
    console.log(QuestionNo);
    QuestionsSet[QuestionNo].Topic=document.getElementById("QTopic").value;
    QuestionsSet[QuestionNo].Difficulty=document.querySelector('input[name="QDifficultyLevel"]:checked').value;
    QuestionsSet[QuestionNo].Question=document.getElementById("QText").value;
    QuestionsSet[QuestionNo].AnswerType=document.querySelector('input[name="AnswerType"]:checked').value;
    QuestionsSet[QuestionNo].NumOption=document.getElementById("NumOption").value;
    QuestionsSet[QuestionNo].NumCorrect=document.getElementById("NumCorrect").value;
    QuestionsSet[QuestionNo].Options={};
    for(let i=1;i<=QuestionsSet[QuestionNo].NumOption;i++)
    {
        QuestionsSet[QuestionNo].Options[i]=document.getElementById("OptionText"+[i]).value;
    }

    if(QuestionsSet[QuestionNo].AnswerType=="MCA")
    {
        QuestionsSet[QuestionNo].CorrectOpt=[];
        $.each($("input[name*=CheckRight]:checked"), function(){
            QuestionsSet[QuestionNo].CorrectOpt.push($(this).val())
        });
     }
     else
     {
        QuestionsSet[QuestionNo].CorrectOpt=document.querySelector('input[name="RadioRight"]:checked').value;
     }
    
    
    //console.log(QuestionsSet);
    $("#QText").val('');
    $("#NumOption").val('');
    $("#NumCorrect").val('1');
    $("#NumOption").val('');
    for(let i=1;i<=5;i++)
    {
        document.getElementById("OptionText"+[i]).value="";
    }
    if(QuestionsSet[QuestionNo].AnswerType=="MCQ")
    document.querySelector('input[name="RadioRight"]:checked').checked=false;
   else
   {
        $.each($("input[name*=CheckRight]:checked"), function(){
            $(this).prop('checked',false);
        });
   }
   QuestionNo++;
    console.log(QuestionNo)



    // var myJsonString = JSON.stringify(QuestionsSet);
    //     var blob = new Blob([myJsonString], {
    //         type: "application/json;charset=charset=utf-8"
    //     });
    //     saveAs(blob, "Question.txt");
  
}

var QuestionSubmit= function()
{
    GetQuestion();
    

    var myJsonString = JSON.stringify(QuestionsSet);
    console.log(myJsonString);
        var blob = new Blob([myJsonString], {
            type: "application/json;charset=charset=utf-8"
        });
        saveAs(blob, "Question.json");

        document.getElementById("QuestionForm").innerHTML="";
}

$(document).ready(function(){
$("#NumOption").blur(function(){
    
    let q=$(this).val();
    if(q>1 && q<6)
    {
        let temp = document.querySelector('input[name="AnswerType"]:checked').value;
        $("#OptionTable").addClass("collapse show");
   
        for(let i=1;i<=5;i++)
        {
        $("#OptionRow"+[i]).css("visibility", "hidden");
        $("#MCQ"+[i]).css("visibility", "hidden");
        $("#MCA"+[i]).css("visibility", "hidden");
        }
    
        for(let i=1;i<=q;i++)
        {
        $("#OptionRow"+[i]).css("visibility", "visible");
        $("#"+temp+[i]).css("visibility", "visible");
        }

    }
    else
    alert("Enter Val btwn 2-5")


});
});

$(document).ready(function(){
$("#NumCorrect").blur(function(){
    if(document.querySelector('input[name="AnswerType"]:checked').value=="MCA")
    {
        let q=$(this).val();
        if(q<2||q>6)
        alert("Enter Val btwn 2-5")
    }
    else
    {
        let q=$(this).val();
        if(q>1)
        alert("For MCQ You Can Have Only One Option")
    }
});
});


// $("#OptionText1").focusout(function(){
//   var temp = [($(this).val())]
//   console.log(temp)
  
//     $("#QText").val(temp)
// });

