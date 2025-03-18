using System;

class Program
{
    static void Main()
    {
        int score = 0;
Console.WriteLine("HBO neger Quiz");

 Console.WriteLine("Welkom bij onze quiz?");

  Console.Write("A)John pork  B) LEO  C) AMBER  D) Hitler\nJouw antwoord: ");
        string antwoord1 = Console.ReadLine()?.ToUpper();

        if (antwoord1 == "B")
        {
            Console.WriteLine("Good boy!");
            score++;
        }
        else
        {
            Console.WriteLine("Vekeerd het is B) B.");
        }
        


     Console.WriteLine("\nVraag 2: who killed john pork");
        Console.Write("A) oliver saric  B) jamal  C) jordan bout  D) kkr geen idee kkr slaaf\nJouw antwoord: ");
        string antwoord2 = Console.ReadLine()?.ToUpper();

        if (antwoord2 == "A")
        {
            Console.WriteLine("Good boy!");
            score++;
        }
        else
        {
            Console.WriteLine("Vekeerd het is C) C.");
        }

     Console.WriteLine("\nVraag 2: who killed john pork");
        Console.Write("A)John pork  B) LEO  C) AMBER  D) Hitler\nJouw antwoord: ");
        string antwoord3 = Console.ReadLine()?.ToUpper();

        if (antwoord3 == "B")
        {
            Console.WriteLine("Goedzo!");
            score++;
        }
        else
        {
            Console.WriteLine("Vekeerd het is B) B.");
        }
        


     Console.WriteLine("\nVraag 2: Wat is het verschill tussen een public cloud en een private cloud");
        Console.Write("A) Public cloud is only for government use, private cloud is for businesses  B) Public cloud is open to multiple users, private cloud is restricted to one organization  C)  Private cloud has no security, public cloud is highly secure\nJouw antwoord: ");
        string antwoord4 = Console.ReadLine()?.ToUpper();

        if (antwoord4 == "B")
        {
            Console.WriteLine("Geweldig ");
            score++;
        }
        else
        {
            Console.WriteLine("Vekeerd het is B) B.");
        }



     Console.WriteLine($"\nJe hebt {score} van de 4 vragen goed!");
         Console.WriteLine("bedankt voor het spelen");
    }
}
     