namespace HboQuiz.Api.Models;

public class QuizSection
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string HeroBackground { get; set; } = string.Empty;
    public int? NextSectionId { get; set; }
}

public class Question
{
    public int Id { get; set; }
    public int SectionId { get; set; }
    public string SectionLabel { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public List<string> Answers { get; set; } = new();
    public int CorrectIndex { get; set; }
    public string ImagePath { get; set; } = string.Empty;
}

public class SubmitRequest
{
    public int SectionId { get; set; }
    public List<int> Answers { get; set; } = new();
}

public class QuestionResult
{
    public int QuestionId { get; set; }
    public int SelectedIndex { get; set; }
    public int CorrectIndex { get; set; }
    public bool IsCorrect { get; set; }
}

public class SubmitResponse
{
    public int Score { get; set; }
    public int Total { get; set; }
    public int Percentage { get; set; }
    public string Message { get; set; } = string.Empty;
    public List<QuestionResult> Results { get; set; } = new();
}
