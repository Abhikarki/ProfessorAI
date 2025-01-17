﻿namespace ProfessorAIAPI.Classes
{
    public class Question
    {
        public int Id { get; set; } = 0;
        public string QuestionText { get; set; } = string.Empty;
        public List<string> Options { get; set; } = new List<string>();
        public string CorrectAnswer { get; set; } = string.Empty;
    }
}
