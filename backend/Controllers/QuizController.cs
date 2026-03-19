using HboQuiz.Api.Data;
using HboQuiz.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace HboQuiz.Api.Controllers;

[ApiController]
[Route("api/quiz")]
public class QuizController : ControllerBase
{
    [HttpGet("sections")]
    public IActionResult GetSections() => Ok(QuizData.Sections);

    [HttpGet("sections/{id}/questions")]
    public IActionResult GetQuestions(int id)
    {
        var section = QuizData.Sections.FirstOrDefault(s => s.Id == id);
        if (section is null) return NotFound();
        return Ok(QuizData.GetBySection(id));
    }

    [HttpPost("submit")]
    public IActionResult Submit([FromBody] SubmitRequest request)
    {
        var questions = QuizData.GetBySection(request.SectionId);
        if (questions.Count == 0) return NotFound();

        var results = new List<QuestionResult>();
        int score = 0;

        for (int i = 0; i < questions.Count; i++)
        {
            var q = questions[i];
            var selected = i < request.Answers.Count ? request.Answers[i] : -1;
            var isCorrect = selected == q.CorrectIndex;
            if (isCorrect) score++;

            results.Add(new QuestionResult
            {
                QuestionId = q.Id,
                SelectedIndex = selected,
                CorrectIndex = q.CorrectIndex,
                IsCorrect = isCorrect
            });
        }

        var pct = (int)Math.Round((double)score / questions.Count * 100);
        var message = pct >= 75 ? "Uitstekend gedaan!"
                    : pct >= 50 ? "Goed gedaan!"
                    : "Probeer het nog een keer!";

        return Ok(new SubmitResponse
        {
            Score = score,
            Total = questions.Count,
            Percentage = pct,
            Message = message,
            Results = results
        });
    }
}
