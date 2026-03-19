export const sections = [
  { id: 1, title: 'Sectie 1: Software Engineering', heroBackground: 'background.png',   nextSectionId: 2 },
  { id: 2, title: 'Sectie 2: Beveiliging',          heroBackground: 'background-2.png', nextSectionId: 3 },
  { id: 3, title: 'Sectie 3: C#',                   heroBackground: 'background.png',   nextSectionId: null },
]

export const questions = [
  // ── Sectie 1 ──────────────────────────────────────────────────────────────
  { id:1, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:'Wat is het hoofddoel van de Agile-methodologie in softwareontwikkeling?',
    answers:['Kosten verlagen door minder te testen','Snel en iteratief werkende software leveren','Alle eisen vooraf volledig vastleggen','Alleen focussen op documentatie'],
    correctIndex:1, imagePath:'spirited-away-1.jpg' },

  { id:2, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:'Welke van de volgende is GEEN levenscyclusmodel voor softwareontwikkeling?',
    answers:['Waterval','Spiraal','Blockchain','V-model'],
    correctIndex:2, imagePath:'spirited-away-2.jpg' },

  { id:3, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:"Wat beschrijft het 'Open/Closed Principle' uit SOLID?",
    answers:['Klassen mogen nooit worden aangepast','Software-entiteiten zijn open voor uitbreiding, maar gesloten voor wijziging','Methoden mogen maximaal één parameter hebben','Interfaces mogen niet worden geïmplementeerd'],
    correctIndex:1, imagePath:'spirited-away-3.jpg' },

  { id:4, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:'Welk design pattern zorgt ervoor dat een klasse slechts één instantie heeft en wereldwijd toegankelijk is?',
    answers:['Factory','Observer','Singleton','Decorator'],
    correctIndex:2, imagePath:'spirited-away-4.jpg' },

  { id:5, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:'Wat is de tijdscomplexiteit van binair zoeken in een gesorteerde array?',
    answers:['O(n)','O(n²)','O(log n)','O(1)'],
    correctIndex:2, imagePath:'spirited-away-5.jpg' },

  { id:6, sectionId:1, sectionLabel:'Sectie 1: Software Engineering',
    text:'Wat test een unit test?',
    answers:['Het volledige systeem van begin tot eind','De samenwerking tussen meerdere modules','Één geïsoleerde functie of methode','De gebruikersinterface van de applicatie'],
    correctIndex:2, imagePath:'spirited-away-6.jpg' },

  // ── Sectie 2 ──────────────────────────────────────────────────────────────
  { id:7, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:'Waar staat de CIA Triad in cybersecurity voor?',
    answers:['Vertrouwelijkheid, Integriteit, Beschikbaarheid','Cryptografie, Intrusiedetectie, Authenticatie','Controle, Onderzoek, Verzekering','Certificering, Inspectie, Audit'],
    correctIndex:0, imagePath:'spirited-away-4.jpg' },

  { id:8, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:'Bij welke aanval wordt kwaadaardige SQL-code ingevoegd in een invoerveld om de database te manipuleren?',
    answers:['Cross-Site Scripting (XSS)','Man-in-the-Middle','SQL-injectie','Brute Force'],
    correctIndex:2, imagePath:'spirited-away-5.jpg' },

  { id:9, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:'Wat is het verschil tussen symmetrische en asymmetrische encryptie?',
    answers:['Symmetrisch gebruikt twee sleutels, asymmetrisch één','Symmetrisch gebruikt dezelfde sleutel voor versleutelen en ontsleutelen, asymmetrisch gebruikt een sleutelpaar','Symmetrisch is altijd veiliger dan asymmetrisch','Er is geen verschil, het zijn synoniemen'],
    correctIndex:1, imagePath:'spirited-away-6.jpg' },

  { id:10, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:'Welke van de volgende is een voorbeeld van multi-factor authenticatie (MFA)?',
    answers:['Alleen een sterk wachtwoord invoeren','Inloggen met een wachtwoord én een eenmalige SMS-code','Inloggen met alleen een e-mailadres','Een beveiligingsvraag beantwoorden'],
    correctIndex:1, imagePath:'spirited-away-1.jpg' },

  { id:11, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:"Wat is het doel van een 'salt' bij het hashen van wachtwoorden?",
    answers:['Het wachtwoord langer maken','De hash sneller berekenen','Voorkomen dat dezelfde wachtwoorden dezelfde hash produceren','De hash versleutelen met AES'],
    correctIndex:2, imagePath:'spirited-away-2.jpg' },

  { id:12, sectionId:2, sectionLabel:'Sectie 2: Beveiliging',
    text:"Wat beschrijft het principe van 'least privilege'?",
    answers:['Gebruikers krijgen toegang tot alle systemen voor maximale efficiëntie','Gebruikers en processen krijgen alleen de minimale rechten die nodig zijn voor hun taak','Adminrechten worden gedeeld tussen alle teamleden','Wachtwoorden worden elke dag opnieuw ingesteld'],
    correctIndex:1, imagePath:'spirited-away-3.jpg' },

  // ── Sectie 3 ──────────────────────────────────────────────────────────────
  { id:13, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:"Wat is een 'delegate' in C#?",
    answers:['Een klasse die overerft van een abstracte klasse','Een type dat verwijst naar een methode met een specifieke signatuur','Een interface met slechts één methode','Een sleutelwoord om variabelen te declareren'],
    correctIndex:1, imagePath:'spirited-away-1.jpg' },

  { id:14, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:"Wat is het verschil tussen 'abstract class' en 'interface' in C#?",
    answers:['Een abstracte klasse kan implementaties bevatten; een interface (vóór C# 8) niet','Een interface kan worden geïnstantieerd, een abstracte klasse niet','Er is geen verschil, ze zijn uitwisselbaar','Een abstracte klasse ondersteunt meervoudige overerving'],
    correctIndex:0, imagePath:'spirited-away-2.jpg' },

  { id:15, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:"Wat doet het 'async' en 'await' sleutelwoord in C#?",
    answers:['Het maakt code sneller door parallelle threads te starten','Het blokkeert de UI totdat de taak klaar is','Het maakt asynchrone code mogelijk zodat de thread niet geblokkeerd wordt tijdens wachten','Het vervangt de noodzaak van try-catch blokken'],
    correctIndex:2, imagePath:'spirited-away-3.jpg' },

  { id:16, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:'Wat is LINQ in C#?',
    answers:['Een database-systeem ingebouwd in .NET','Een taal voor het schrijven van CSS-stijlen','Een set query-operatoren waarmee je collecties, databases en XML kunt bevragen met C#-syntax','Een netwerkbibliotheek voor HTTP-verzoeken'],
    correctIndex:2, imagePath:'spirited-away-4.jpg' },

  { id:17, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:"Wat is het verschil tussen 'value types' en 'reference types' in C#?",
    answers:['Value types zijn altijd groter dan reference types','Value types slaan data direct op (stack), reference types slaan een verwijzing op naar data op de heap','Reference types kunnen niet null zijn','Value types worden nooit garbage collected'],
    correctIndex:1, imagePath:'spirited-away-5.jpg' },

  { id:18, sectionId:3, sectionLabel:'Sectie 3: C#',
    text:"Wat doet het 'sealed' sleutelwoord in C#?",
    answers:['Het maakt een klasse thread-safe','Het versleutelt de broncode van de klasse','Het voorkomt dat een klasse als basisklasse wordt gebruikt voor overerving','Het markeert een methode als niet-aanpasbaar door subklassen'],
    correctIndex:2, imagePath:'spirited-away-6.jpg' },
]

export function getSection(id) {
  return sections.find(s => s.id === id)
}

export function getQuestions(sectionId) {
  return questions.filter(q => q.sectionId === sectionId)
}

export function calcResult(sectionId, answers) {
  const qs = getQuestions(sectionId)
  let score = 0
  const results = qs.map((q, i) => {
    const selected = answers[i] ?? -1
    const isCorrect = selected === q.correctIndex
    if (isCorrect) score++
    return { questionId: q.id, selectedIndex: selected, correctIndex: q.correctIndex, isCorrect }
  })
  const percentage = Math.round((score / qs.length) * 100)
  const message = percentage >= 75 ? 'Uitstekend gedaan!' : percentage >= 50 ? 'Goed gedaan!' : 'Probeer het nog een keer!'
  return { score, total: qs.length, percentage, message, results }
}
