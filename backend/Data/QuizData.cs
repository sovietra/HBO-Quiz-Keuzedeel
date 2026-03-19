using HboQuiz.Api.Models;

namespace HboQuiz.Api.Data;

public static class QuizData
{
    public static readonly List<QuizSection> Sections = new()
    {
        new() { Id = 1, Title = "Sectie 1: Software Engineering", HeroBackground = "background.png",   NextSectionId = 2 },
        new() { Id = 2, Title = "Sectie 2: Beveiliging",          HeroBackground = "background-2.png", NextSectionId = 3 },
        new() { Id = 3, Title = "Sectie 3: C#",                   HeroBackground = "background.png",   NextSectionId = null },
    };

    public static readonly List<Question> Questions = new()
    {
        // ── Sectie 1: Software Engineering ──────────────────────────────────
        new()
        {
            Id = 1, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Wat is het hoofddoel van de Agile-methodologie in softwareontwikkeling?",
            Answers = new() {
                "Kosten verlagen door minder te testen",
                "Snel en iteratief werkende software leveren",
                "Alle eisen vooraf volledig vastleggen",
                "Alleen focussen op documentatie"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-1.jpg"
        },
        new()
        {
            Id = 2, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Welke van de volgende is GEEN levenscyclusmodel voor softwareontwikkeling?",
            Answers = new() { "Waterval", "Spiraal", "Blockchain", "V-model" },
            CorrectIndex = 2, ImagePath = "spirited-away-2.jpg"
        },
        new()
        {
            Id = 3, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Wat beschrijft het 'Open/Closed Principle' uit SOLID?",
            Answers = new() {
                "Klassen mogen nooit worden aangepast",
                "Software-entiteiten zijn open voor uitbreiding, maar gesloten voor wijziging",
                "Methoden mogen maximaal één parameter hebben",
                "Interfaces mogen niet worden geïmplementeerd"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-3.jpg"
        },
        new()
        {
            Id = 4, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Welk design pattern zorgt ervoor dat een klasse slechts één instantie heeft en wereldwijd toegankelijk is?",
            Answers = new() { "Factory", "Observer", "Singleton", "Decorator" },
            CorrectIndex = 2, ImagePath = "spirited-away-4.jpg"
        },
        new()
        {
            Id = 5, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Wat is de tijdscomplexiteit van binair zoeken in een gesorteerde array?",
            Answers = new() { "O(n)", "O(n²)", "O(log n)", "O(1)" },
            CorrectIndex = 2, ImagePath = "spirited-away-5.jpg"
        },
        new()
        {
            Id = 6, SectionId = 1, SectionLabel = "Sectie 1: Software Engineering",
            Text = "Wat test een unit test?",
            Answers = new() {
                "Het volledige systeem van begin tot eind",
                "De samenwerking tussen meerdere modules",
                "Één geïsoleerde functie of methode",
                "De gebruikersinterface van de applicatie"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-6.jpg"
        },

        // ── Sectie 2: Beveiliging ────────────────────────────────────────────
        new()
        {
            Id = 7, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Waar staat de CIA Triad in cybersecurity voor?",
            Answers = new() {
                "Vertrouwelijkheid, Integriteit, Beschikbaarheid",
                "Cryptografie, Intrusiedetectie, Authenticatie",
                "Controle, Onderzoek, Verzekering",
                "Certificering, Inspectie, Audit"
            },
            CorrectIndex = 0, ImagePath = "spirited-away-4.jpg"
        },
        new()
        {
            Id = 8, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Bij welke aanval wordt kwaadaardige SQL-code ingevoegd in een invoerveld om de database te manipuleren?",
            Answers = new() {
                "Cross-Site Scripting (XSS)",
                "Man-in-the-Middle",
                "SQL-injectie",
                "Brute Force"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-5.jpg"
        },
        new()
        {
            Id = 9, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Wat is het verschil tussen symmetrische en asymmetrische encryptie?",
            Answers = new() {
                "Symmetrisch gebruikt twee sleutels, asymmetrisch één",
                "Symmetrisch gebruikt dezelfde sleutel voor versleutelen en ontsleutelen, asymmetrisch gebruikt een sleutelpaar",
                "Symmetrisch is altijd veiliger dan asymmetrisch",
                "Er is geen verschil, het zijn synoniemen"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-6.jpg"
        },
        new()
        {
            Id = 10, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Welke van de volgende is een voorbeeld van multi-factor authenticatie (MFA)?",
            Answers = new() {
                "Alleen een sterk wachtwoord invoeren",
                "Inloggen met een wachtwoord én een eenmalige SMS-code",
                "Inloggen met alleen een e-mailadres",
                "Een beveiligingsvraag beantwoorden"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-1.jpg"
        },
        new()
        {
            Id = 11, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Wat is het doel van een 'salt' bij het hashen van wachtwoorden?",
            Answers = new() {
                "Het wachtwoord langer maken",
                "De hash sneller berekenen",
                "Voorkomen dat dezelfde wachtwoorden dezelfde hash produceren",
                "De hash versleutelen met AES"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-2.jpg"
        },
        new()
        {
            Id = 12, SectionId = 2, SectionLabel = "Sectie 2: Beveiliging",
            Text = "Wat beschrijft het principe van 'least privilege'?",
            Answers = new() {
                "Gebruikers krijgen toegang tot alle systemen voor maximale efficiëntie",
                "Gebruikers en processen krijgen alleen de minimale rechten die nodig zijn voor hun taak",
                "Adminrechten worden gedeeld tussen alle teamleden",
                "Wachtwoorden worden elke dag opnieuw ingesteld"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-3.jpg"
        },

        // ── Sectie 3: C# ────────────────────────────────────────────────────
        new()
        {
            Id = 13, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat is een 'delegate' in C#?",
            Answers = new() {
                "Een klasse die overerft van een abstracte klasse",
                "Een type dat verwijst naar een methode met een specifieke signatuur",
                "Een interface met slechts één methode",
                "Een sleutelwoord om variabelen te declareren"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-1.jpg"
        },
        new()
        {
            Id = 14, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat is het verschil tussen 'abstract class' en 'interface' in C#?",
            Answers = new() {
                "Een abstracte klasse kan implementaties bevatten; een interface (vóór C# 8) niet",
                "Een interface kan worden geïnstantieerd, een abstracte klasse niet",
                "Er is geen verschil, ze zijn uitwisselbaar",
                "Een abstracte klasse ondersteunt meervoudige overerving"
            },
            CorrectIndex = 0, ImagePath = "spirited-away-2.jpg"
        },
        new()
        {
            Id = 15, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat doet het 'async' en 'await' sleutelwoord in C#?",
            Answers = new() {
                "Het maakt code sneller door parallelle threads te starten",
                "Het blokkeert de UI totdat de taak klaar is",
                "Het maakt asynchrone code mogelijk zodat de thread niet geblokkeerd wordt tijdens wachten",
                "Het vervangt de noodzaak van try-catch blokken"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-3.jpg"
        },
        new()
        {
            Id = 16, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat is LINQ in C#?",
            Answers = new() {
                "Een database-systeem ingebouwd in .NET",
                "Een taal voor het schrijven van CSS-stijlen",
                "Een set query-operatoren waarmee je collecties, databases en XML kunt bevragen met C#-syntax",
                "Een netwerkbibliotheek voor HTTP-verzoeken"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-4.jpg"
        },
        new()
        {
            Id = 17, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat is het verschil tussen 'value types' en 'reference types' in C#?",
            Answers = new() {
                "Value types zijn altijd groter dan reference types",
                "Value types slaan data direct op (stack), reference types slaan een verwijzing op naar data op de heap",
                "Reference types kunnen niet null zijn",
                "Value types worden nooit garbage collected"
            },
            CorrectIndex = 1, ImagePath = "spirited-away-5.jpg"
        },
        new()
        {
            Id = 18, SectionId = 3, SectionLabel = "Sectie 3: C#",
            Text = "Wat doet het 'sealed' sleutelwoord in C#?",
            Answers = new() {
                "Het maakt een klasse thread-safe",
                "Het versleutelt de broncode van de klasse",
                "Het voorkomt dat een klasse als basisklasse wordt gebruikt voor overerving",
                "Het markeert een methode als niet-aanpasbaar door subklassen"
            },
            CorrectIndex = 2, ImagePath = "spirited-away-6.jpg"
        },
    };

    public static List<Question> GetBySection(int sectionId) =>
        Questions.Where(q => q.SectionId == sectionId).ToList();
}
