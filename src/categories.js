// stubWords are a dev fixture only, standing in for real provider-sourced
// vocabulary until Milestone 3+ wires up Wiktionary/OpenThesaurus discovery.
export const categories = {
  alltag: {
    slug: "alltag",
    name: "Alltag",
    topics: ["Haushalt", "Wetter", "Familie", "Zeit", "Wohnung"],
    stubWords: [
      {
        id: "morgen", word: "Morgen", article: "der", type: "noun", level: "A1",
        meanings: ["morning"],
        grammar: { Plural: "die Morgen" },
        examples: [
          { de: "Guten Morgen!", en: "Good morning!" },
          { de: "Ich stehe jeden Morgen früh auf.", en: "I get up early every morning." }
        ],
        synonyms: ["Vormittag"]
      },
      {
        id: "wichtig", word: "wichtig", type: "adjective", level: "A2",
        meanings: ["important"],
        grammar: { Komparativ: "wichtiger", Superlativ: "am wichtigsten" },
        examples: [
          { de: "Das ist mir wichtig.", en: "That's important to me." },
          { de: "Wir müssen ein wichtiges Thema besprechen.", en: "We need to discuss an important topic." }
        ],
        synonyms: ["bedeutend", "entscheidend"]
      },
      {
        id: "brauchen", word: "brauchen", type: "verb", level: "A1",
        meanings: ["to need"],
        grammar: { Präteritum: "brauchte", Perfekt: "hat gebraucht" },
        examples: [
          { de: "Ich brauche mehr Zeit.", en: "I need more time." },
          { de: "Brauchst du Hilfe?", en: "Do you need help?" }
        ],
        synonyms: ["benötigen"]
      },
      {
        id: "wohnung", word: "Wohnung", article: "die", type: "noun", level: "A2",
        meanings: ["apartment", "flat"],
        grammar: { Plural: "die Wohnungen" },
        examples: [
          { de: "Wir suchen eine neue Wohnung.", en: "We're looking for a new apartment." },
          { de: "Die Wohnung hat zwei Zimmer.", en: "The apartment has two rooms." }
        ],
        synonyms: ["Appartement"]
      },
      {
        id: "vergessen", word: "vergessen", type: "verb", level: "A2",
        meanings: ["to forget"],
        grammar: { Präteritum: "vergaß", Perfekt: "hat vergessen" },
        examples: [
          { de: "Ich habe meinen Schlüssel vergessen.", en: "I forgot my key." },
          { de: "Vergiss das nicht!", en: "Don't forget that!" }
        ]
      }
    ]
  },
  arbeit: {
    slug: "arbeit",
    name: "Arbeit",
    topics: ["Büro", "Meeting", "Aufgabe", "Termin", "Kollege", "Kommunikation"],
    stubWords: [
      {
        id: "schaffen", word: "schaffen", type: "verb", level: "B1",
        meanings: ["to manage", "to get done"],
        grammar: { Präteritum: "schaffte", Perfekt: "hat geschafft" },
        examples: [
          { de: "Ich schaffe das bis morgen.", en: "I'll get that done by tomorrow." },
          { de: "Hast du die Prüfung geschafft?", en: "Did you manage to pass the exam?" }
        ],
        synonyms: ["bewältigen"]
      },
      {
        id: "aufgabe", word: "Aufgabe", article: "die", type: "noun", level: "A2",
        meanings: ["task", "assignment"],
        grammar: { Plural: "die Aufgaben" },
        examples: [
          { de: "Das ist eine wichtige Aufgabe.", en: "That's an important task." },
          { de: "Ich habe viele Aufgaben heute.", en: "I have many tasks today." }
        ],
        synonyms: ["Tätigkeit"]
      },
      {
        id: "zustaendig", word: "zuständig", type: "adjective", level: "B1",
        meanings: ["responsible", "in charge"],
        grammar: { Verwendung: "zuständig für + Akkusativ" },
        examples: [
          { de: "Wer ist dafür zuständig?", en: "Who's responsible for that?" },
          { de: "Ich bin für dieses Projekt zuständig.", en: "I'm in charge of this project." }
        ],
        synonyms: ["verantwortlich"]
      },
      {
        id: "verschieben", word: "verschieben", type: "verb", level: "B1",
        meanings: ["to postpone", "to move"],
        grammar: { Präteritum: "verschob", Perfekt: "hat verschoben" },
        examples: [
          { de: "Wir müssen das Meeting verschieben.", en: "We need to postpone the meeting." },
          { de: "Er hat den Termin auf Freitag verschoben.", en: "He moved the appointment to Friday." }
        ],
        synonyms: ["verlegen"]
      },
      {
        id: "kollege", word: "Kollege", article: "der", type: "noun", level: "A2",
        meanings: ["colleague"],
        grammar: { Plural: "die Kollegen" },
        examples: [
          { de: "Mein Kollege hilft mir gern.", en: "My colleague likes to help me." },
          { de: "Ich habe nette Kollegen.", en: "I have nice colleagues." }
        ],
        synonyms: ["Mitarbeiter"]
      }
    ]
  },
  reisen: {
    slug: "reisen",
    name: "Reisen",
    topics: ["Bahnhof", "Flughafen", "Hotel", "Gepäck", "Ticket"],
    stubWords: [
      {
        id: "abfahrt", word: "Abfahrt", article: "die", type: "noun", level: "A2",
        meanings: ["departure"],
        grammar: { Plural: "die Abfahrten" },
        examples: [
          { de: "Die Abfahrt ist um acht Uhr.", en: "Departure is at eight o'clock." },
          { de: "Wir haben die Abfahrt verpasst.", en: "We missed the departure." }
        ],
        synonyms: ["Start"]
      },
      {
        id: "buchen", word: "buchen", type: "verb", level: "A2",
        meanings: ["to book"],
        grammar: { Präteritum: "buchte", Perfekt: "hat gebucht" },
        examples: [
          { de: "Ich möchte einen Flug buchen.", en: "I'd like to book a flight." },
          { de: "Hast du das Hotel schon gebucht?", en: "Have you already booked the hotel?" }
        ],
        synonyms: ["reservieren"]
      },
      {
        id: "gepaeck", word: "Gepäck", article: "das", type: "noun", level: "A2",
        meanings: ["luggage", "baggage"],
        grammar: { Hinweis: "nur Singular" },
        examples: [
          { de: "Mein Gepäck ist noch nicht da.", en: "My luggage isn't here yet." },
          { de: "Wie viel Gepäck darf ich mitnehmen?", en: "How much luggage can I bring?" }
        ],
        synonyms: ["Koffer"]
      },
      {
        id: "verspaetung", word: "Verspätung", article: "die", type: "noun", level: "B1",
        meanings: ["delay"],
        grammar: { Plural: "die Verspätungen" },
        examples: [
          { de: "Der Zug hat Verspätung.", en: "The train is delayed." },
          { de: "Wegen Verspätung habe ich den Anschluss verpasst.", en: "Because of the delay, I missed my connection." }
        ],
        synonyms: ["Verzögerung"]
      },
      {
        id: "unterwegs", word: "unterwegs", type: "adjective", level: "A2",
        meanings: ["on the way", "out and about"],
        grammar: { Hinweis: "unveränderlich, nur prädikativ" },
        examples: [
          { de: "Ich bin gerade unterwegs.", en: "I'm on my way right now." },
          { de: "Wir sind den ganzen Tag unterwegs gewesen.", en: "We were out and about all day." }
        ]
      }
    ]
  },
  essen: {
    slug: "essen",
    name: "Essen",
    topics: ["Restaurant", "Kochen", "Zutaten", "Getränke"],
    stubWords: [
      {
        id: "bestellen", word: "bestellen", type: "verb", level: "A2",
        meanings: ["to order"],
        grammar: { Präteritum: "bestellte", Perfekt: "hat bestellt" },
        examples: [
          { de: "Ich möchte die Suppe bestellen.", en: "I'd like to order the soup." },
          { de: "Hast du schon bestellt?", en: "Have you ordered yet?" }
        ]
      },
      {
        id: "rezept", word: "Rezept", article: "das", type: "noun", level: "A2",
        meanings: ["recipe", "prescription"],
        grammar: { Plural: "die Rezepte" },
        examples: [
          { de: "Das Rezept ist einfach.", en: "The recipe is simple." },
          { de: "Kannst du mir das Rezept geben?", en: "Can you give me the recipe?" }
        ]
      },
      {
        id: "lecker", word: "lecker", type: "adjective", level: "A1",
        meanings: ["tasty", "delicious"],
        grammar: { Komparativ: "leckerer", Superlativ: "am leckersten" },
        examples: [
          { de: "Das Essen ist lecker!", en: "The food is delicious!" },
          { de: "Das war ein leckeres Abendessen.", en: "That was a tasty dinner." }
        ],
        synonyms: ["köstlich"]
      },
      {
        id: "zutat", word: "Zutat", article: "die", type: "noun", level: "B1",
        meanings: ["ingredient"],
        grammar: { Plural: "die Zutaten" },
        examples: [
          { de: "Welche Zutaten brauchst du?", en: "Which ingredients do you need?" },
          { de: "Alle Zutaten sind frisch.", en: "All the ingredients are fresh." }
        ]
      },
      {
        id: "durst", word: "Durst", article: "der", type: "noun", level: "A2",
        meanings: ["thirst"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Ich habe großen Durst.", en: "I'm very thirsty." },
          { de: "Durst bekommt man bei Hitze schnell.", en: "You get thirsty quickly in the heat." }
        ]
      }
    ]
  },
  gefuehle: {
    slug: "gefuehle",
    name: "Gefühle",
    topics: ["Freude", "Angst", "Ärger", "Überraschung"],
    stubWords: [
      {
        id: "gluecklich", word: "glücklich", type: "adjective", level: "A2",
        meanings: ["happy"],
        grammar: { Komparativ: "glücklicher", Superlativ: "am glücklichsten" },
        examples: [
          { de: "Ich bin sehr glücklich.", en: "I'm very happy." },
          { de: "Das macht mich glücklich.", en: "That makes me happy." }
        ],
        synonyms: ["froh", "zufrieden"]
      },
      {
        id: "aergern", word: "ärgern", type: "verb", level: "B1",
        meanings: ["to annoy", "(sich ärgern) to be annoyed"],
        grammar: { Präteritum: "ärgerte", Perfekt: "hat geärgert" },
        examples: [
          { de: "Das ärgert mich wirklich.", en: "That really annoys me." },
          { de: "Ärgere dich nicht darüber.", en: "Don't be annoyed about it." }
        ],
        synonyms: ["nerven"]
      },
      {
        id: "stolz", word: "stolz", type: "adjective", level: "B1",
        meanings: ["proud"],
        grammar: { Verwendung: "stolz auf + Akkusativ" },
        examples: [
          { de: "Ich bin stolz auf dich.", en: "I'm proud of you." },
          { de: "Sie ist stolz auf ihre Arbeit.", en: "She's proud of her work." }
        ]
      },
      {
        id: "enttaeuscht", word: "enttäuscht", type: "adjective", level: "B1",
        meanings: ["disappointed"],
        grammar: { Grundform: "enttäuschen (Verb)" },
        examples: [
          { de: "Ich bin enttäuscht von dir.", en: "I'm disappointed in you." },
          { de: "Er war sehr enttäuscht über das Ergebnis.", en: "He was very disappointed about the result." }
        ]
      },
      {
        id: "erleichtert", word: "erleichtert", type: "adjective", level: "B2",
        meanings: ["relieved"],
        grammar: { Grundform: "erleichtern (Verb)" },
        examples: [
          { de: "Ich bin erleichtert, dass alles gut ging.", en: "I'm relieved that everything went well." },
          { de: "Sie atmete erleichtert auf.", en: "She sighed with relief." }
        ]
      }
    ]
  },
  kommunikation: {
    slug: "kommunikation",
    name: "Kommunikation",
    topics: ["Gespräch", "Anruf", "Nachricht", "Meinung"],
    stubWords: [
      {
        id: "erklaeren", word: "erklären", type: "verb", level: "A2",
        meanings: ["to explain"],
        grammar: { Präteritum: "erklärte", Perfekt: "hat erklärt" },
        examples: [
          { de: "Kannst du mir das erklären?", en: "Can you explain that to me?" },
          { de: "Sie erklärte den Weg.", en: "She explained the way." }
        ],
        synonyms: ["darlegen"]
      },
      {
        id: "meinung", word: "Meinung", article: "die", type: "noun", level: "A2",
        meanings: ["opinion"],
        grammar: { Plural: "die Meinungen" },
        examples: [
          { de: "Was ist deine Meinung dazu?", en: "What's your opinion on that?" },
          { de: "Meiner Meinung nach ist das richtig.", en: "In my opinion, that's correct." }
        ],
        synonyms: ["Ansicht"]
      },
      {
        id: "antworten", word: "antworten", type: "verb", level: "A1",
        meanings: ["to answer", "to reply"],
        grammar: { Präteritum: "antwortete", Perfekt: "hat geantwortet" },
        examples: [
          { de: "Bitte antworte mir bald.", en: "Please answer me soon." },
          { de: "Er hat nicht geantwortet.", en: "He didn't reply." }
        ],
        synonyms: ["erwidern"]
      },
      {
        id: "missverstaendnis", word: "Missverständnis", article: "das", type: "noun", level: "B2",
        meanings: ["misunderstanding"],
        grammar: { Plural: "die Missverständnisse" },
        examples: [
          { de: "Das war ein Missverständnis.", en: "That was a misunderstanding." },
          { de: "Um Missverständnisse zu vermeiden, frag nach.", en: "To avoid misunderstandings, ask." }
        ]
      },
      {
        id: "erwaehnen", word: "erwähnen", type: "verb", level: "B1",
        meanings: ["to mention"],
        grammar: { Präteritum: "erwähnte", Perfekt: "hat erwähnt" },
        examples: [
          { de: "Das hat sie nicht erwähnt.", en: "She didn't mention that." },
          { de: "Ich möchte kurz etwas erwähnen.", en: "I'd like to briefly mention something." }
        ],
        synonyms: ["nennen"]
      }
    ]
  },
  verben: {
    slug: "verben",
    name: "Verben",
    topics: ["häufige Verben", "trennbare Verben", "reflexive Verben"],
    stubWords: [
      {
        id: "sich-erinnern", word: "sich erinnern", type: "verb", level: "B1",
        meanings: ["to remember"],
        grammar: { Präteritum: "erinnerte sich", Perfekt: "hat sich erinnert" },
        examples: [
          { de: "Ich erinnere mich nicht daran.", en: "I don't remember that." },
          { de: "Erinnerst du dich an sie?", en: "Do you remember her?" }
        ]
      },
      {
        id: "aufwachen", word: "aufwachen", type: "verb", level: "A2",
        meanings: ["to wake up"],
        grammar: { Präteritum: "wachte auf", Perfekt: "ist aufgewacht" },
        examples: [
          { de: "Ich wache immer früh auf.", en: "I always wake up early." },
          { de: "Sie ist mitten in der Nacht aufgewacht.", en: "She woke up in the middle of the night." }
        ]
      },
      {
        id: "vorschlagen", word: "vorschlagen", type: "verb", level: "B1",
        meanings: ["to suggest", "to propose"],
        grammar: { Präteritum: "schlug vor", Perfekt: "hat vorgeschlagen" },
        examples: [
          { de: "Ich schlage vor, dass wir gehen.", en: "I suggest that we go." },
          { de: "Was schlägst du vor?", en: "What do you suggest?" }
        ],
        synonyms: ["empfehlen"]
      },
      {
        id: "gelingen", word: "gelingen", type: "verb", level: "B2",
        meanings: ["to succeed", "to work out (impersonal: es gelingt mir)"],
        grammar: { Präteritum: "gelang", Perfekt: "ist gelungen" },
        examples: [
          { de: "Es ist mir gelungen.", en: "I succeeded." },
          { de: "Der Plan ist ihr gelungen.", en: "Her plan worked out." }
        ]
      },
      {
        id: "sich-freuen", word: "sich freuen", type: "verb", level: "A2",
        meanings: ["to be happy/glad", "to look forward to"],
        grammar: { Präteritum: "freute sich", Perfekt: "hat sich gefreut" },
        examples: [
          { de: "Ich freue mich auf dich.", en: "I'm looking forward to seeing you." },
          { de: "Sie freut sich über das Geschenk.", en: "She's happy about the gift." }
        ]
      }
    ]
  },
  adjektive: {
    slug: "adjektive",
    name: "Adjektive",
    topics: ["Eigenschaften", "Beschreibungen"],
    stubWords: [
      {
        id: "beschaeftigt", word: "beschäftigt", type: "adjective", level: "A2",
        meanings: ["busy"],
        grammar: { Komparativ: "beschäftigter", Superlativ: "am beschäftigtsten" },
        examples: [
          { de: "Ich bin heute sehr beschäftigt.", en: "I'm very busy today." },
          { de: "Er ist ein beschäftigter Mann.", en: "He's a busy man." }
        ]
      },
      {
        id: "zuverlaessig", word: "zuverlässig", type: "adjective", level: "B1",
        meanings: ["reliable"],
        grammar: { Komparativ: "zuverlässiger", Superlativ: "am zuverlässigsten" },
        examples: [
          { de: "Sie ist sehr zuverlässig.", en: "She's very reliable." },
          { de: "Wir brauchen einen zuverlässigen Partner.", en: "We need a reliable partner." }
        ],
        synonyms: ["verlässlich"]
      },
      {
        id: "gruendlich", word: "gründlich", type: "adjective", level: "B2",
        meanings: ["thorough"],
        grammar: { Komparativ: "gründlicher", Superlativ: "am gründlichsten" },
        examples: [
          { de: "Das war eine gründliche Untersuchung.", en: "That was a thorough examination." },
          { de: "Er arbeitet sehr gründlich.", en: "He works very thoroughly." }
        ],
        synonyms: ["sorgfältig"]
      },
      {
        id: "gelassen", word: "gelassen", type: "adjective", level: "B2",
        meanings: ["calm", "composed"],
        grammar: { Komparativ: "gelassener", Superlativ: "am gelassensten" },
        examples: [
          { de: "Bleib gelassen!", en: "Stay calm!" },
          { de: "Sie reagierte ganz gelassen.", en: "She reacted quite calmly." }
        ],
        synonyms: ["ruhig"]
      },
      {
        id: "ruecksichtsvoll", word: "rücksichtsvoll", type: "adjective", level: "B2",
        meanings: ["considerate"],
        grammar: { Komparativ: "rücksichtsvoller", Superlativ: "am rücksichtsvollsten" },
        examples: [
          { de: "Er ist immer sehr rücksichtsvoll.", en: "He's always very considerate." },
          { de: "Das war nicht sehr rücksichtsvoll von dir.", en: "That wasn't very considerate of you." }
        ]
      }
    ]
  }
};
