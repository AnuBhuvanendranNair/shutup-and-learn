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
      },
      {
        id: "wetter", word: "Wetter", article: "das", type: "noun", level: "A1",
        meanings: ["weather"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Wie ist das Wetter heute?", en: "How's the weather today?" },
          { de: "Bei schlechtem Wetter bleiben wir zu Hause.", en: "In bad weather we stay home." }
        ]
      },
      {
        id: "regen", word: "Regen", article: "der", type: "noun", level: "A2",
        meanings: ["rain"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Der Regen hört bald auf.", en: "The rain will stop soon." },
          { de: "Ich mag den Geruch von Regen.", en: "I like the smell of rain." }
        ]
      },
      {
        id: "sonne", word: "Sonne", article: "die", type: "noun", level: "A1",
        meanings: ["sun"],
        grammar: { Plural: "die Sonnen" },
        examples: [
          { de: "Die Sonne scheint heute.", en: "The sun is shining today." },
          { de: "Wir sitzen gern in der Sonne.", en: "We like sitting in the sun." }
        ]
      },
      {
        id: "kalt", word: "kalt", type: "adjective", level: "A1",
        meanings: ["cold"],
        grammar: { Komparativ: "kälter", Superlativ: "am kältesten" },
        examples: [
          { de: "Es ist kalt draußen.", en: "It's cold outside." },
          { de: "Mir ist kalt.", en: "I'm cold." }
        ]
      },
      {
        id: "warm", word: "warm", type: "adjective", level: "A1",
        meanings: ["warm"],
        grammar: { Komparativ: "wärmer", Superlativ: "am wärmsten" },
        examples: [
          { de: "Das Wasser ist warm.", en: "The water is warm." },
          { de: "Zieh dich warm an!", en: "Dress warmly!" }
        ]
      },
      {
        id: "familie", word: "Familie", article: "die", type: "noun", level: "A1",
        meanings: ["family"],
        grammar: { Plural: "die Familien" },
        examples: [
          { de: "Meine Familie ist mir wichtig.", en: "My family is important to me." },
          { de: "Wir besuchen die Familie am Wochenende.", en: "We're visiting family on the weekend." }
        ]
      },
      {
        id: "kind", word: "Kind", article: "das", type: "noun", level: "A1",
        meanings: ["child"],
        grammar: { Plural: "die Kinder" },
        examples: [
          { de: "Das Kind spielt im Garten.", en: "The child is playing in the garden." },
          { de: "Sie haben zwei Kinder.", en: "They have two children." }
        ]
      },
      {
        id: "eltern", word: "Eltern", type: "noun", level: "A1",
        meanings: ["parents"],
        grammar: { Hinweis: "nur Plural" },
        examples: [
          { de: "Meine Eltern wohnen in Berlin.", en: "My parents live in Berlin." },
          { de: "Ich rufe meine Eltern jeden Sonntag an.", en: "I call my parents every Sunday." }
        ]
      },
      {
        id: "aufraeumen", word: "aufräumen", type: "verb", level: "A2",
        meanings: ["to tidy up", "to clean up"],
        grammar: { Präteritum: "räumte auf", Perfekt: "hat aufgeräumt" },
        examples: [
          { de: "Ich muss mein Zimmer aufräumen.", en: "I have to tidy up my room." },
          { de: "Wir räumen gemeinsam auf.", en: "We're tidying up together." }
        ]
      },
      {
        id: "putzen", word: "putzen", type: "verb", level: "A2",
        meanings: ["to clean"],
        grammar: { Präteritum: "putzte", Perfekt: "hat geputzt" },
        examples: [
          { de: "Ich putze am Samstag die Wohnung.", en: "I clean the apartment on Saturday." },
          { de: "Hast du dir die Zähne geputzt?", en: "Have you brushed your teeth?" }
        ]
      },
      {
        id: "kochen", word: "kochen", type: "verb", level: "A1",
        meanings: ["to cook"],
        grammar: { Präteritum: "kochte", Perfekt: "hat gekocht" },
        examples: [
          { de: "Ich koche heute Abend Nudeln.", en: "I'm cooking pasta tonight." },
          { de: "Kannst du gut kochen?", en: "Can you cook well?" }
        ]
      },
      {
        id: "nachbar", word: "Nachbar", article: "der", type: "noun", level: "A2",
        meanings: ["neighbor"],
        grammar: { Plural: "die Nachbarn" },
        examples: [
          { de: "Unser Nachbar ist sehr freundlich.", en: "Our neighbor is very friendly." },
          { de: "Ich habe die Nachbarn noch nicht kennengelernt.", en: "I haven't met the neighbors yet." }
        ]
      },
      {
        id: "zeit", word: "Zeit", article: "die", type: "noun", level: "A1",
        meanings: ["time"],
        grammar: { Plural: "die Zeiten" },
        examples: [
          { de: "Ich habe keine Zeit.", en: "I don't have time." },
          { de: "Nimm dir Zeit dafür.", en: "Take your time with that." }
        ]
      },
      {
        id: "frueh", word: "früh", type: "adjective", level: "A1",
        meanings: ["early"],
        grammar: { Komparativ: "früher", Superlativ: "am frühesten" },
        examples: [
          { de: "Ich stehe früh auf.", en: "I get up early." },
          { de: "Es ist noch früh.", en: "It's still early." }
        ]
      },
      {
        id: "spaet", word: "spät", type: "adjective", level: "A1",
        meanings: ["late"],
        grammar: { Komparativ: "später", Superlativ: "am spätesten" },
        examples: [
          { de: "Wir kommen spät nach Hause.", en: "We're coming home late." },
          { de: "Es ist schon spät.", en: "It's already late." }
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
      },
      {
        id: "buero", word: "Büro", article: "das", type: "noun", level: "A1",
        meanings: ["office"],
        grammar: { Plural: "die Büros" },
        examples: [
          { de: "Ich bin heute im Büro.", en: "I'm at the office today." },
          { de: "Das Büro ist im dritten Stock.", en: "The office is on the third floor." }
        ]
      },
      {
        id: "termin", word: "Termin", article: "der", type: "noun", level: "A2",
        meanings: ["appointment"],
        grammar: { Plural: "die Termine" },
        examples: [
          { de: "Ich habe einen Termin um zehn Uhr.", en: "I have an appointment at ten o'clock." },
          { de: "Können wir den Termin verschieben?", en: "Can we reschedule the appointment?" }
        ]
      },
      {
        id: "besprechung", word: "Besprechung", article: "die", type: "noun", level: "B1",
        meanings: ["meeting"],
        grammar: { Plural: "die Besprechungen" },
        examples: [
          { de: "Die Besprechung beginnt um neun.", en: "The meeting starts at nine." },
          { de: "Wir hatten eine lange Besprechung.", en: "We had a long meeting." }
        ],
        synonyms: ["Meeting"]
      },
      {
        id: "chef", word: "Chef", article: "der", type: "noun", level: "A2",
        meanings: ["boss"],
        grammar: { Plural: "die Chefs" },
        examples: [
          { de: "Mein Chef ist sehr streng.", en: "My boss is very strict." },
          { de: "Ich muss mit dem Chef sprechen.", en: "I need to talk to the boss." }
        ]
      },
      {
        id: "firma", word: "Firma", article: "die", type: "noun", level: "A2",
        meanings: ["company"],
        grammar: { Plural: "die Firmen" },
        examples: [
          { de: "Die Firma sucht neue Mitarbeiter.", en: "The company is looking for new employees." },
          { de: "Ich arbeite seit drei Jahren bei dieser Firma.", en: "I've worked at this company for three years." }
        ],
        synonyms: ["Unternehmen"]
      },
      {
        id: "arbeiten", word: "arbeiten", type: "verb", level: "A1",
        meanings: ["to work"],
        grammar: { Präteritum: "arbeitete", Perfekt: "hat gearbeitet" },
        examples: [
          { de: "Ich arbeite von zu Hause.", en: "I work from home." },
          { de: "Sie arbeitet als Ärztin.", en: "She works as a doctor." }
        ]
      },
      {
        id: "feierabend", word: "Feierabend", article: "der", type: "noun", level: "B1",
        meanings: ["end of the workday"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Endlich Feierabend!", en: "Finally, the workday's over!" },
          { de: "Ich mache um fünf Feierabend.", en: "I finish work at five." }
        ]
      },
      {
        id: "pause", word: "Pause", article: "die", type: "noun", level: "A1",
        meanings: ["break"],
        grammar: { Plural: "die Pausen" },
        examples: [
          { de: "Wir machen jetzt eine Pause.", en: "We're taking a break now." },
          { de: "Die Pause dauert fünfzehn Minuten.", en: "The break lasts fifteen minutes." }
        ]
      },
      {
        id: "frist", word: "Frist", article: "die", type: "noun", level: "B1",
        meanings: ["deadline"],
        grammar: { Plural: "die Fristen" },
        examples: [
          { de: "Die Frist läuft morgen ab.", en: "The deadline runs out tomorrow." },
          { de: "Wir müssen die Frist einhalten.", en: "We need to meet the deadline." }
        ]
      },
      {
        id: "vertrag", word: "Vertrag", article: "der", type: "noun", level: "B1",
        meanings: ["contract"],
        grammar: { Plural: "die Verträge" },
        examples: [
          { de: "Ich habe den Vertrag unterschrieben.", en: "I signed the contract." },
          { de: "Lies den Vertrag genau durch.", en: "Read the contract carefully." }
        ]
      },
      {
        id: "kuendigen", word: "kündigen", type: "verb", level: "B1",
        meanings: ["to quit", "to terminate"],
        grammar: { Präteritum: "kündigte", Perfekt: "hat gekündigt" },
        examples: [
          { de: "Er hat seinen Job gekündigt.", en: "He quit his job." },
          { de: "Sie will die Wohnung kündigen.", en: "She wants to terminate the apartment lease." }
        ]
      },
      {
        id: "bewerbung", word: "Bewerbung", article: "die", type: "noun", level: "B1",
        meanings: ["application (for a job)"],
        grammar: { Plural: "die Bewerbungen" },
        examples: [
          { de: "Ich habe meine Bewerbung abgeschickt.", en: "I sent off my application." },
          { de: "Die Bewerbung braucht einen Lebenslauf.", en: "The application needs a résumé." }
        ]
      },
      {
        id: "erledigen", word: "erledigen", type: "verb", level: "B1",
        meanings: ["to take care of", "to complete"],
        grammar: { Präteritum: "erledigte", Perfekt: "hat erledigt" },
        examples: [
          { de: "Ich muss noch etwas erledigen.", en: "I still have something to take care of." },
          { de: "Die Aufgabe ist erledigt.", en: "The task is done." }
        ]
      },
      {
        id: "urlaub", word: "Urlaub", article: "der", type: "noun", level: "A2",
        meanings: ["vacation", "leave"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Ich fahre im August in Urlaub.", en: "I'm going on vacation in August." },
          { de: "Wir brauchen dringend Urlaub.", en: "We really need a vacation." }
        ]
      },
      {
        id: "puenktlich", word: "pünktlich", type: "adjective", level: "A2",
        meanings: ["punctual", "on time"],
        grammar: { Komparativ: "pünktlicher", Superlativ: "am pünktlichsten" },
        examples: [
          { de: "Bitte sei pünktlich.", en: "Please be on time." },
          { de: "Der Zug kam pünktlich an.", en: "The train arrived on time." }
        ]
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
      },
      {
        id: "bahnhof", word: "Bahnhof", article: "der", type: "noun", level: "A1",
        meanings: ["train station"],
        grammar: { Plural: "die Bahnhöfe" },
        examples: [
          { de: "Wir treffen uns am Bahnhof.", en: "We're meeting at the train station." },
          { de: "Der Bahnhof ist nicht weit von hier.", en: "The train station isn't far from here." }
        ]
      },
      {
        id: "flughafen", word: "Flughafen", article: "der", type: "noun", level: "A1",
        meanings: ["airport"],
        grammar: { Plural: "die Flughäfen" },
        examples: [
          { de: "Ich hole dich vom Flughafen ab.", en: "I'll pick you up from the airport." },
          { de: "Der Flughafen ist sehr groß.", en: "The airport is very big." }
        ]
      },
      {
        id: "ticket", word: "Ticket", article: "das", type: "noun", level: "A1",
        meanings: ["ticket"],
        grammar: { Plural: "die Tickets" },
        examples: [
          { de: "Hast du das Ticket schon gekauft?", en: "Have you already bought the ticket?" },
          { de: "Ich brauche noch ein Ticket.", en: "I still need a ticket." }
        ],
        synonyms: ["Fahrkarte"]
      },
      {
        id: "hotel", word: "Hotel", article: "das", type: "noun", level: "A1",
        meanings: ["hotel"],
        grammar: { Plural: "die Hotels" },
        examples: [
          { de: "Wir übernachten in einem Hotel.", en: "We're staying at a hotel." },
          { de: "Das Hotel liegt am Meer.", en: "The hotel is by the sea." }
        ]
      },
      {
        id: "koffer", word: "Koffer", article: "der", type: "noun", level: "A1",
        meanings: ["suitcase"],
        grammar: { Plural: "die Koffer" },
        examples: [
          { de: "Ich muss noch meinen Koffer packen.", en: "I still need to pack my suitcase." },
          { de: "Der Koffer ist zu schwer.", en: "The suitcase is too heavy." }
        ]
      },
      {
        id: "ankommen", word: "ankommen", type: "verb", level: "A2",
        meanings: ["to arrive"],
        grammar: { Präteritum: "kam an", Perfekt: "ist angekommen" },
        examples: [
          { de: "Wann kommen wir an?", en: "When do we arrive?" },
          { de: "Der Zug ist pünktlich angekommen.", en: "The train arrived on time." }
        ]
      },
      {
        id: "abreisen", word: "abreisen", type: "verb", level: "B1",
        meanings: ["to depart", "to leave (on a trip)"],
        grammar: { Präteritum: "reiste ab", Perfekt: "ist abgereist" },
        examples: [
          { de: "Wir reisen morgen früh ab.", en: "We're leaving early tomorrow morning." },
          { de: "Sie ist schon abgereist.", en: "She's already left." }
        ]
      },
      {
        id: "grenze", word: "Grenze", article: "die", type: "noun", level: "B1",
        meanings: ["border"],
        grammar: { Plural: "die Grenzen" },
        examples: [
          { de: "Wir überqueren gleich die Grenze.", en: "We're about to cross the border." },
          { de: "Die Grenze ist nicht weit entfernt.", en: "The border isn't far away." }
        ]
      },
      {
        id: "pass", word: "Pass", article: "der", type: "noun", level: "A2",
        meanings: ["passport"],
        grammar: { Plural: "die Pässe" },
        examples: [
          { de: "Vergiss deinen Pass nicht.", en: "Don't forget your passport." },
          { de: "Mein Pass läuft bald ab.", en: "My passport expires soon." }
        ],
        synonyms: ["Reisepass"]
      },
      {
        id: "reservieren", word: "reservieren", type: "verb", level: "A2",
        meanings: ["to reserve"],
        grammar: { Präteritum: "reservierte", Perfekt: "hat reserviert" },
        examples: [
          { de: "Ich möchte einen Tisch reservieren.", en: "I'd like to reserve a table." },
          { de: "Das Zimmer ist schon reserviert.", en: "The room is already reserved." }
        ]
      },
      {
        id: "ausflug", word: "Ausflug", article: "der", type: "noun", level: "A2",
        meanings: ["excursion", "trip"],
        grammar: { Plural: "die Ausflüge" },
        examples: [
          { de: "Wir machen einen Ausflug ins Grüne.", en: "We're taking a trip into the countryside." },
          { de: "Der Ausflug war sehr schön.", en: "The excursion was really nice." }
        ]
      },
      {
        id: "sehenswuerdigkeit", word: "Sehenswürdigkeit", article: "die", type: "noun", level: "B1",
        meanings: ["sight", "attraction"],
        grammar: { Plural: "die Sehenswürdigkeiten" },
        examples: [
          { de: "Diese Sehenswürdigkeit müssen wir besuchen.", en: "We have to visit this sight." },
          { de: "Die Stadt hat viele Sehenswürdigkeiten.", en: "The city has many attractions." }
        ]
      },
      {
        id: "gleis", word: "Gleis", article: "das", type: "noun", level: "A2",
        meanings: ["platform", "track"],
        grammar: { Plural: "die Gleise" },
        examples: [
          { de: "Der Zug fährt von Gleis drei ab.", en: "The train departs from platform three." },
          { de: "Wir stehen am falschen Gleis.", en: "We're standing at the wrong platform." }
        ]
      },
      {
        id: "umsteigen", word: "umsteigen", type: "verb", level: "A2",
        meanings: ["to change (trains)", "to transfer"],
        grammar: { Präteritum: "stieg um", Perfekt: "ist umgestiegen" },
        examples: [
          { de: "Wir müssen in München umsteigen.", en: "We have to change trains in Munich." },
          { de: "Ich bin in den falschen Zug umgestiegen.", en: "I transferred onto the wrong train." }
        ]
      },
      {
        id: "reise", word: "Reise", article: "die", type: "noun", level: "A1",
        meanings: ["trip", "journey"],
        grammar: { Plural: "die Reisen" },
        examples: [
          { de: "Die Reise war anstrengend.", en: "The trip was exhausting." },
          { de: "Ich plane eine Reise nach Italien.", en: "I'm planning a trip to Italy." }
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
      },
      {
        id: "restaurant", word: "Restaurant", article: "das", type: "noun", level: "A1",
        meanings: ["restaurant"],
        grammar: { Plural: "die Restaurants" },
        examples: [
          { de: "Wir gehen heute ins Restaurant.", en: "We're going to a restaurant today." },
          { de: "Das Restaurant ist sehr beliebt.", en: "The restaurant is very popular." }
        ]
      },
      {
        id: "rechnung", word: "Rechnung", article: "die", type: "noun", level: "A2",
        meanings: ["bill", "check"],
        grammar: { Plural: "die Rechnungen" },
        examples: [
          { de: "Können wir die Rechnung haben?", en: "Can we have the check?" },
          { de: "Die Rechnung war höher als erwartet.", en: "The bill was higher than expected." }
        ]
      },
      {
        id: "getraenk", word: "Getränk", article: "das", type: "noun", level: "A1",
        meanings: ["drink", "beverage"],
        grammar: { Plural: "die Getränke" },
        examples: [
          { de: "Was möchten Sie trinken? Getränke sind inklusive.", en: "What would you like to drink? Drinks are included." },
          { de: "Das Getränk schmeckt sehr gut.", en: "The drink tastes really good." }
        ]
      },
      {
        id: "hunger", word: "Hunger", article: "der", type: "noun", level: "A1",
        meanings: ["hunger"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Ich habe großen Hunger.", en: "I'm very hungry." },
          { de: "Hast du auch Hunger?", en: "Are you hungry too?" }
        ]
      },
      {
        id: "speisekarte", word: "Speisekarte", article: "die", type: "noun", level: "A2",
        meanings: ["menu"],
        grammar: { Plural: "die Speisekarten" },
        examples: [
          { de: "Können wir die Speisekarte haben?", en: "Can we have the menu?" },
          { de: "Die Speisekarte ist auf Deutsch.", en: "The menu is in German." }
        ]
      },
      {
        id: "probieren", word: "probieren", type: "verb", level: "A2",
        meanings: ["to try", "to taste"],
        grammar: { Präteritum: "probierte", Perfekt: "hat probiert" },
        examples: [
          { de: "Willst du das mal probieren?", en: "Do you want to try this?" },
          { de: "Ich habe den Kuchen probiert.", en: "I tasted the cake." }
        ]
      },
      {
        id: "braten", word: "braten", type: "verb", level: "B1",
        meanings: ["to fry", "to roast"],
        grammar: { Präteritum: "briet", Perfekt: "hat gebraten" },
        examples: [
          { de: "Ich brate das Gemüse in der Pfanne.", en: "I'm frying the vegetables in the pan." },
          { de: "Der Fisch ist gut gebraten.", en: "The fish is nicely fried." }
        ]
      },
      {
        id: "schneiden", word: "schneiden", type: "verb", level: "A2",
        meanings: ["to cut"],
        grammar: { Präteritum: "schnitt", Perfekt: "hat geschnitten" },
        examples: [
          { de: "Kannst du die Zwiebeln schneiden?", en: "Can you cut the onions?" },
          { de: "Ich habe mich beim Schneiden verletzt.", en: "I cut myself while chopping." }
        ]
      },
      {
        id: "wuerzen", word: "würzen", type: "verb", level: "B1",
        meanings: ["to season"],
        grammar: { Präteritum: "würzte", Perfekt: "hat gewürzt" },
        examples: [
          { de: "Ich würze die Suppe mit Salz und Pfeffer.", en: "I season the soup with salt and pepper." },
          { de: "Das Gericht ist gut gewürzt.", en: "The dish is well seasoned." }
        ]
      },
      {
        id: "gericht", word: "Gericht", article: "das", type: "noun", level: "A2",
        meanings: ["dish"],
        grammar: { Plural: "die Gerichte" },
        examples: [
          { de: "Dieses Gericht ist mein Favorit.", en: "This dish is my favorite." },
          { de: "Wir haben drei Gerichte bestellt.", en: "We ordered three dishes." }
        ]
      },
      {
        id: "vegetarisch", word: "vegetarisch", type: "adjective", level: "A2",
        meanings: ["vegetarian"],
        grammar: { Hinweis: "meist attributiv" },
        examples: [
          { de: "Ich esse vegetarisch.", en: "I eat vegetarian." },
          { de: "Gibt es ein vegetarisches Gericht?", en: "Is there a vegetarian dish?" }
        ]
      },
      {
        id: "suess", word: "süß", type: "adjective", level: "A1",
        meanings: ["sweet"],
        grammar: { Komparativ: "süßer", Superlativ: "am süßesten" },
        examples: [
          { de: "Der Kuchen ist sehr süß.", en: "The cake is very sweet." },
          { de: "Mir ist das zu süß.", en: "That's too sweet for me." }
        ]
      },
      {
        id: "salzig", word: "salzig", type: "adjective", level: "A2",
        meanings: ["salty"],
        grammar: { Komparativ: "salziger", Superlativ: "am salzigsten" },
        examples: [
          { de: "Die Suppe ist zu salzig.", en: "The soup is too salty." },
          { de: "Ich mag salzige Snacks.", en: "I like salty snacks." }
        ]
      },
      {
        id: "fruehstueck", word: "Frühstück", article: "das", type: "noun", level: "A1",
        meanings: ["breakfast"],
        grammar: { Plural: "die Frühstücke" },
        examples: [
          { de: "Was gibt es zum Frühstück?", en: "What's for breakfast?" },
          { de: "Ich esse selten Frühstück.", en: "I rarely eat breakfast." }
        ]
      },
      {
        id: "abendessen", word: "Abendessen", article: "das", type: "noun", level: "A1",
        meanings: ["dinner"],
        grammar: { Plural: "die Abendessen" },
        examples: [
          { de: "Das Abendessen ist fertig.", en: "Dinner is ready." },
          { de: "Wir essen um sieben zu Abend.", en: "We're having dinner at seven." }
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
      },
      {
        id: "angst", word: "Angst", article: "die", type: "noun", level: "A2",
        meanings: ["fear"],
        grammar: { Plural: "die Ängste" },
        examples: [
          { de: "Ich habe Angst vor Spinnen.", en: "I'm afraid of spiders." },
          { de: "Keine Angst, das wird schon gut.", en: "Don't worry, it'll be fine." }
        ]
      },
      {
        id: "traurig", word: "traurig", type: "adjective", level: "A1",
        meanings: ["sad"],
        grammar: { Komparativ: "trauriger", Superlativ: "am traurigsten" },
        examples: [
          { de: "Der Film hat mich traurig gemacht.", en: "The movie made me sad." },
          { de: "Warum bist du so traurig?", en: "Why are you so sad?" }
        ]
      },
      {
        id: "wuetend", word: "wütend", type: "adjective", level: "B1",
        meanings: ["angry", "furious"],
        grammar: { Verwendung: "wütend auf + Akkusativ" },
        examples: [
          { de: "Er war wütend auf seinen Bruder.", en: "He was angry at his brother." },
          { de: "Sie wurde plötzlich wütend.", en: "She suddenly got furious." }
        ],
        synonyms: ["zornig"]
      },
      {
        id: "ueberrascht", word: "überrascht", type: "adjective", level: "A2",
        meanings: ["surprised"],
        grammar: { Grundform: "überraschen (Verb)" },
        examples: [
          { de: "Ich war total überrascht.", en: "I was totally surprised." },
          { de: "Sie sah überrascht aus.", en: "She looked surprised." }
        ]
      },
      {
        id: "nervoes", word: "nervös", type: "adjective", level: "A2",
        meanings: ["nervous"],
        grammar: { Komparativ: "nervöser", Superlativ: "am nervösesten" },
        examples: [
          { de: "Ich bin vor der Prüfung nervös.", en: "I'm nervous before the exam." },
          { de: "Werd nicht nervös!", en: "Don't get nervous!" }
        ]
      },
      {
        id: "freude", word: "Freude", article: "die", type: "noun", level: "A2",
        meanings: ["joy"],
        grammar: { Hinweis: "meist Singular" },
        examples: [
          { de: "Das macht mir große Freude.", en: "That brings me great joy." },
          { de: "Mit Freude helfe ich dir.", en: "I'm happy to help you." }
        ]
      },
      {
        id: "lieben", word: "lieben", type: "verb", level: "A1",
        meanings: ["to love"],
        grammar: { Präteritum: "liebte", Perfekt: "hat geliebt" },
        examples: [
          { de: "Ich liebe dich.", en: "I love you." },
          { de: "Sie liebt ihre Arbeit.", en: "She loves her job." }
        ]
      },
      {
        id: "hassen", word: "hassen", type: "verb", level: "A2",
        meanings: ["to hate"],
        grammar: { Präteritum: "hasste", Perfekt: "hat gehasst" },
        examples: [
          { de: "Ich hasse es, zu warten.", en: "I hate waiting." },
          { de: "Er hasst dieses Lied.", en: "He hates this song." }
        ]
      },
      {
        id: "sich-fuerchten", word: "sich fürchten", type: "verb", level: "B1",
        meanings: ["to be afraid"],
        grammar: { Verwendung: "sich fürchten vor + Dativ", Perfekt: "hat sich gefürchtet" },
        examples: [
          { de: "Ich fürchte mich vor der Dunkelheit.", en: "I'm afraid of the dark." },
          { de: "Du musst dich nicht fürchten.", en: "You don't have to be afraid." }
        ]
      },
      {
        id: "gelangweilt", word: "gelangweilt", type: "adjective", level: "B1",
        meanings: ["bored"],
        grammar: { Grundform: "langweilen (Verb)" },
        examples: [
          { de: "Die Kinder sind gelangweilt.", en: "The children are bored." },
          { de: "Er wirkte den ganzen Abend gelangweilt.", en: "He seemed bored all evening." }
        ]
      },
      {
        id: "verliebt", word: "verliebt", type: "adjective", level: "A2",
        meanings: ["in love"],
        grammar: { Verwendung: "verliebt in + Akkusativ" },
        examples: [
          { de: "Ich bin verliebt in dich.", en: "I'm in love with you." },
          { de: "Sie sind seit einem Jahr verliebt.", en: "They've been in love for a year." }
        ]
      },
      {
        id: "einsam", word: "einsam", type: "adjective", level: "B1",
        meanings: ["lonely"],
        grammar: { Komparativ: "einsamer", Superlativ: "am einsamsten" },
        examples: [
          { de: "Manchmal fühle ich mich einsam.", en: "Sometimes I feel lonely." },
          { de: "Das Dorf wirkt sehr einsam.", en: "The village seems very lonely." }
        ]
      },
      {
        id: "zufrieden", word: "zufrieden", type: "adjective", level: "A2",
        meanings: ["satisfied", "content"],
        grammar: { Verwendung: "zufrieden mit + Dativ" },
        examples: [
          { de: "Ich bin sehr zufrieden mit dem Ergebnis.", en: "I'm very satisfied with the result." },
          { de: "Sie wirkt zufrieden.", en: "She seems content." }
        ]
      },
      {
        id: "mutig", word: "mutig", type: "adjective", level: "B1",
        meanings: ["brave"],
        grammar: { Komparativ: "mutiger", Superlativ: "am mutigsten" },
        examples: [
          { de: "Das war eine mutige Entscheidung.", en: "That was a brave decision." },
          { de: "Sei mutig!", en: "Be brave!" }
        ]
      },
      {
        id: "schuechtern", word: "schüchtern", type: "adjective", level: "B1",
        meanings: ["shy"],
        grammar: { Komparativ: "schüchterner", Superlativ: "am schüchternsten" },
        examples: [
          { de: "Er ist ziemlich schüchtern.", en: "He's pretty shy." },
          { de: "Als Kind war ich sehr schüchtern.", en: "As a child I was very shy." }
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
      },
      {
        id: "gespraech", word: "Gespräch", article: "das", type: "noun", level: "A2",
        meanings: ["conversation"],
        grammar: { Plural: "die Gespräche" },
        examples: [
          { de: "Wir hatten ein langes Gespräch.", en: "We had a long conversation." },
          { de: "Das Gespräch war sehr interessant.", en: "The conversation was very interesting." }
        ]
      },
      {
        id: "anruf", word: "Anruf", article: "der", type: "noun", level: "A2",
        meanings: ["phone call"],
        grammar: { Plural: "die Anrufe" },
        examples: [
          { de: "Ich erwarte einen wichtigen Anruf.", en: "I'm expecting an important call." },
          { de: "Danke für deinen Anruf.", en: "Thanks for your call." }
        ]
      },
      {
        id: "nachricht", word: "Nachricht", article: "die", type: "noun", level: "A1",
        meanings: ["message"],
        grammar: { Plural: "die Nachrichten" },
        examples: [
          { de: "Ich habe dir eine Nachricht geschickt.", en: "I sent you a message." },
          { de: "Hast du meine Nachricht gelesen?", en: "Did you read my message?" }
        ]
      },
      {
        id: "anrufen", word: "anrufen", type: "verb", level: "A1",
        meanings: ["to call"],
        grammar: { Präteritum: "rief an", Perfekt: "hat angerufen" },
        examples: [
          { de: "Ich rufe dich später an.", en: "I'll call you later." },
          { de: "Sie hat mich gestern angerufen.", en: "She called me yesterday." }
        ]
      },
      {
        id: "fragen", word: "fragen", type: "verb", level: "A1",
        meanings: ["to ask"],
        grammar: { Präteritum: "fragte", Perfekt: "hat gefragt" },
        examples: [
          { de: "Darf ich dich etwas fragen?", en: "May I ask you something?" },
          { de: "Er hat nach dem Weg gefragt.", en: "He asked for directions." }
        ]
      },
      {
        id: "diskutieren", word: "diskutieren", type: "verb", level: "B1",
        meanings: ["to discuss"],
        grammar: { Präteritum: "diskutierte", Perfekt: "hat diskutiert" },
        examples: [
          { de: "Wir diskutieren über das Thema.", en: "We're discussing the topic." },
          { de: "Darüber lässt sich diskutieren.", en: "That's debatable." }
        ]
      },
      {
        id: "zuhoeren", word: "zuhören", type: "verb", level: "A2",
        meanings: ["to listen"],
        grammar: { Präteritum: "hörte zu", Perfekt: "hat zugehört" },
        examples: [
          { de: "Hör mir bitte zu.", en: "Please listen to me." },
          { de: "Er hat aufmerksam zugehört.", en: "He listened attentively." }
        ]
      },
      {
        id: "behaupten", word: "behaupten", type: "verb", level: "B1",
        meanings: ["to claim", "to assert"],
        grammar: { Präteritum: "behauptete", Perfekt: "hat behauptet" },
        examples: [
          { de: "Er behauptet, dass er unschuldig ist.", en: "He claims he's innocent." },
          { de: "Das kann ich nicht behaupten.", en: "I can't claim that." }
        ]
      },
      {
        id: "sich-beschweren", word: "sich beschweren", type: "verb", level: "B1",
        meanings: ["to complain"],
        grammar: { Verwendung: "sich beschweren über + Akkusativ", Perfekt: "hat sich beschwert" },
        examples: [
          { de: "Er beschwert sich über den Lärm.", en: "He's complaining about the noise." },
          { de: "Ich möchte mich beschweren.", en: "I'd like to make a complaint." }
        ]
      },
      {
        id: "vorstellen", word: "vorstellen", type: "verb", level: "A2",
        meanings: ["to introduce"],
        grammar: { Präteritum: "stellte vor", Perfekt: "hat vorgestellt" },
        examples: [
          { de: "Darf ich dir meinen Kollegen vorstellen?", en: "May I introduce my colleague to you?" },
          { de: "Sie stellte sich kurz vor.", en: "She introduced herself briefly." }
        ]
      },
      {
        id: "einladung", word: "Einladung", article: "die", type: "noun", level: "A2",
        meanings: ["invitation"],
        grammar: { Plural: "die Einladungen" },
        examples: [
          { de: "Danke für die Einladung.", en: "Thanks for the invitation." },
          { de: "Ich habe die Einladung noch nicht beantwortet.", en: "I haven't replied to the invitation yet." }
        ]
      },
      {
        id: "einladen", word: "einladen", type: "verb", level: "A2",
        meanings: ["to invite"],
        grammar: { Präteritum: "lud ein", Perfekt: "hat eingeladen" },
        examples: [
          { de: "Ich lade dich zum Essen ein.", en: "I'm inviting you to dinner." },
          { de: "Wir sind zur Party eingeladen.", en: "We're invited to the party." }
        ]
      },
      {
        id: "zustimmen", word: "zustimmen", type: "verb", level: "B1",
        meanings: ["to agree"],
        grammar: { Präteritum: "stimmte zu", Perfekt: "hat zugestimmt" },
        examples: [
          { de: "Ich stimme dir voll zu.", en: "I fully agree with you." },
          { de: "Sie hat dem Plan zugestimmt.", en: "She agreed to the plan." }
        ]
      },
      {
        id: "widersprechen", word: "widersprechen", type: "verb", level: "B2",
        meanings: ["to contradict"],
        grammar: { Präteritum: "widersprach", Perfekt: "hat widersprochen" },
        examples: [
          { de: "Das widerspricht sich.", en: "That's contradictory." },
          { de: "Niemand hat ihm widersprochen.", en: "No one contradicted him." }
        ]
      },
      {
        id: "ausrede", word: "Ausrede", article: "die", type: "noun", level: "B1",
        meanings: ["excuse"],
        grammar: { Plural: "die Ausreden" },
        examples: [
          { de: "Das ist doch nur eine Ausrede.", en: "That's just an excuse." },
          { de: "Er hatte immer eine Ausrede parat.", en: "He always had an excuse ready." }
        ]
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
      },
      {
        id: "gehen", word: "gehen", type: "verb", level: "A1",
        meanings: ["to go", "to walk"],
        grammar: { Präteritum: "ging", Perfekt: "ist gegangen" },
        examples: [
          { de: "Ich gehe jetzt nach Hause.", en: "I'm going home now." },
          { de: "Wie geht es dir?", en: "How are you?" }
        ]
      },
      {
        id: "kommen", word: "kommen", type: "verb", level: "A1",
        meanings: ["to come"],
        grammar: { Präteritum: "kam", Perfekt: "ist gekommen" },
        examples: [
          { de: "Kommst du mit?", en: "Are you coming along?" },
          { de: "Er kommt aus Spanien.", en: "He comes from Spain." }
        ]
      },
      {
        id: "machen", word: "machen", type: "verb", level: "A1",
        meanings: ["to do", "to make"],
        grammar: { Präteritum: "machte", Perfekt: "hat gemacht" },
        examples: [
          { de: "Was machst du gerade?", en: "What are you doing right now?" },
          { de: "Das macht nichts.", en: "That doesn't matter." }
        ]
      },
      {
        id: "sehen", word: "sehen", type: "verb", level: "A1",
        meanings: ["to see"],
        grammar: { Präteritum: "sah", Perfekt: "hat gesehen" },
        examples: [
          { de: "Ich sehe dich morgen.", en: "I'll see you tomorrow." },
          { de: "Hast du den Film schon gesehen?", en: "Have you already seen the movie?" }
        ]
      },
      {
        id: "nehmen", word: "nehmen", type: "verb", level: "A1",
        meanings: ["to take"],
        grammar: { Präteritum: "nahm", Perfekt: "hat genommen" },
        examples: [
          { de: "Ich nehme den Bus.", en: "I'm taking the bus." },
          { de: "Nimm dir noch etwas.", en: "Take some more." }
        ]
      },
      {
        id: "geben", word: "geben", type: "verb", level: "A1",
        meanings: ["to give"],
        grammar: { Präteritum: "gab", Perfekt: "hat gegeben" },
        examples: [
          { de: "Kannst du mir das geben?", en: "Can you give me that?" },
          { de: "Es gibt heute Pizza.", en: "There's pizza today." }
        ]
      },
      {
        id: "finden", word: "finden", type: "verb", level: "A1",
        meanings: ["to find"],
        grammar: { Präteritum: "fand", Perfekt: "hat gefunden" },
        examples: [
          { de: "Ich finde meinen Schlüssel nicht.", en: "I can't find my key." },
          { de: "Wie findest du das Buch?", en: "What do you think of the book?" }
        ]
      },
      {
        id: "anfangen", word: "anfangen", type: "verb", level: "A2",
        meanings: ["to begin", "to start"],
        grammar: { Präteritum: "fing an", Perfekt: "hat angefangen" },
        examples: [
          { de: "Der Film fängt gleich an.", en: "The movie is about to start." },
          { de: "Wann fangen wir an?", en: "When do we start?" }
        ],
        synonyms: ["beginnen"]
      },
      {
        id: "aufhoeren", word: "aufhören", type: "verb", level: "A2",
        meanings: ["to stop"],
        grammar: { Präteritum: "hörte auf", Perfekt: "hat aufgehört" },
        examples: [
          { de: "Hör auf damit!", en: "Stop that!" },
          { de: "Der Regen hat aufgehört.", en: "The rain has stopped." }
        ]
      },
      {
        id: "sich-beeilen", word: "sich beeilen", type: "verb", level: "A2",
        meanings: ["to hurry"],
        grammar: { Präteritum: "beeilte sich", Perfekt: "hat sich beeilt" },
        examples: [
          { de: "Wir müssen uns beeilen.", en: "We have to hurry." },
          { de: "Beeil dich!", en: "Hurry up!" }
        ]
      },
      {
        id: "sich-entscheiden", word: "sich entscheiden", type: "verb", level: "B1",
        meanings: ["to decide"],
        grammar: { Präteritum: "entschied sich", Perfekt: "hat sich entschieden" },
        examples: [
          { de: "Ich kann mich nicht entscheiden.", en: "I can't decide." },
          { de: "Sie hat sich für den Job entschieden.", en: "She decided on the job." }
        ]
      },
      {
        id: "verstehen", word: "verstehen", type: "verb", level: "A1",
        meanings: ["to understand"],
        grammar: { Präteritum: "verstand", Perfekt: "hat verstanden" },
        examples: [
          { de: "Ich verstehe das nicht.", en: "I don't understand that." },
          { de: "Verstehst du mich?", en: "Do you understand me?" }
        ]
      },
      {
        id: "versuchen", word: "versuchen", type: "verb", level: "A2",
        meanings: ["to try", "to attempt"],
        grammar: { Präteritum: "versuchte", Perfekt: "hat versucht" },
        examples: [
          { de: "Ich versuche mein Bestes.", en: "I'm trying my best." },
          { de: "Versuch es noch einmal.", en: "Try it again." }
        ]
      },
      {
        id: "gewinnen", word: "gewinnen", type: "verb", level: "B1",
        meanings: ["to win"],
        grammar: { Präteritum: "gewann", Perfekt: "hat gewonnen" },
        examples: [
          { de: "Wir haben das Spiel gewonnen.", en: "We won the game." },
          { de: "Sie will unbedingt gewinnen.", en: "She really wants to win." }
        ]
      },
      {
        id: "verlieren", word: "verlieren", type: "verb", level: "B1",
        meanings: ["to lose"],
        grammar: { Präteritum: "verlor", Perfekt: "hat verloren" },
        examples: [
          { de: "Ich habe meinen Schlüssel verloren.", en: "I lost my key." },
          { de: "Wir haben knapp verloren.", en: "We lost by a narrow margin." }
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
      },
      {
        id: "gross", word: "groß", type: "adjective", level: "A1",
        meanings: ["big", "tall"],
        grammar: { Komparativ: "größer", Superlativ: "am größten" },
        examples: [
          { de: "Das Haus ist sehr groß.", en: "The house is very big." },
          { de: "Wie groß bist du?", en: "How tall are you?" }
        ]
      },
      {
        id: "klein", word: "klein", type: "adjective", level: "A1",
        meanings: ["small"],
        grammar: { Komparativ: "kleiner", Superlativ: "am kleinsten" },
        examples: [
          { de: "Die Wohnung ist ziemlich klein.", en: "The apartment is pretty small." },
          { de: "Sie war schon als kleines Kind mutig.", en: "She was already brave as a small child." }
        ]
      },
      {
        id: "schnell", word: "schnell", type: "adjective", level: "A1",
        meanings: ["fast", "quick"],
        grammar: { Komparativ: "schneller", Superlativ: "am schnellsten" },
        examples: [
          { de: "Das Auto ist sehr schnell.", en: "The car is very fast." },
          { de: "Komm schnell her!", en: "Come here quickly!" }
        ]
      },
      {
        id: "langsam", word: "langsam", type: "adjective", level: "A1",
        meanings: ["slow"],
        grammar: { Komparativ: "langsamer", Superlativ: "am langsamsten" },
        examples: [
          { de: "Fahr bitte langsamer.", en: "Please drive slower." },
          { de: "Das Internet ist heute langsam.", en: "The internet is slow today." }
        ]
      },
      {
        id: "schwierig", word: "schwierig", type: "adjective", level: "A2",
        meanings: ["difficult"],
        grammar: { Komparativ: "schwieriger", Superlativ: "am schwierigsten" },
        examples: [
          { de: "Die Prüfung war sehr schwierig.", en: "The exam was very difficult." },
          { de: "Das ist eine schwierige Entscheidung.", en: "That's a difficult decision." }
        ],
        synonyms: ["schwer"]
      },
      {
        id: "einfach", word: "einfach", type: "adjective", level: "A1",
        meanings: ["simple", "easy"],
        grammar: { Komparativ: "einfacher", Superlativ: "am einfachsten" },
        examples: [
          { de: "Das ist ganz einfach.", en: "That's really simple." },
          { de: "Die Aufgabe war einfacher als gedacht.", en: "The task was easier than expected." }
        ]
      },
      {
        id: "freundlich", word: "freundlich", type: "adjective", level: "A2",
        meanings: ["friendly"],
        grammar: { Komparativ: "freundlicher", Superlativ: "am freundlichsten" },
        examples: [
          { de: "Die Leute hier sind sehr freundlich.", en: "The people here are very friendly." },
          { de: "Vielen Dank für die freundliche Hilfe.", en: "Thanks a lot for the friendly help." }
        ]
      },
      {
        id: "ehrlich", word: "ehrlich", type: "adjective", level: "A2",
        meanings: ["honest"],
        grammar: { Komparativ: "ehrlicher", Superlativ: "am ehrlichsten" },
        examples: [
          { de: "Sei ehrlich zu mir.", en: "Be honest with me." },
          { de: "Ehrlich gesagt, ich weiß es nicht.", en: "Honestly, I don't know." }
        ]
      },
      {
        id: "faul", word: "faul", type: "adjective", level: "A2",
        meanings: ["lazy"],
        grammar: { Komparativ: "fauler", Superlativ: "am faulsten" },
        examples: [
          { de: "Ich fühle mich heute faul.", en: "I feel lazy today." },
          { de: "Er ist manchmal ein bisschen faul.", en: "He's sometimes a bit lazy." }
        ]
      },
      {
        id: "fleissig", word: "fleißig", type: "adjective", level: "A2",
        meanings: ["hardworking", "diligent"],
        grammar: { Komparativ: "fleißiger", Superlativ: "am fleißigsten" },
        examples: [
          { de: "Sie ist eine fleißige Studentin.", en: "She's a hardworking student." },
          { de: "Er arbeitet immer sehr fleißig.", en: "He always works very diligently." }
        ]
      },
      {
        id: "selbstsicher", word: "selbstsicher", type: "adjective", level: "B2",
        meanings: ["confident", "self-assured"],
        grammar: { Komparativ: "selbstsicherer", Superlativ: "am selbstsichersten" },
        examples: [
          { de: "Sie tritt sehr selbstsicher auf.", en: "She comes across as very confident." },
          { de: "Mit der Zeit wurde er selbstsicherer.", en: "Over time he became more confident." }
        ]
      },
      {
        id: "bescheiden", word: "bescheiden", type: "adjective", level: "B1",
        meanings: ["modest"],
        grammar: { Komparativ: "bescheidener", Superlativ: "am bescheidensten" },
        examples: [
          { de: "Er ist trotz seines Erfolgs bescheiden geblieben.", en: "He stayed modest despite his success." },
          { de: "Sie lebt sehr bescheiden.", en: "She lives very modestly." }
        ]
      },
      {
        id: "neugierig", word: "neugierig", type: "adjective", level: "A2",
        meanings: ["curious"],
        grammar: { Komparativ: "neugieriger", Superlativ: "am neugierigsten" },
        examples: [
          { de: "Ich bin neugierig, wie es ausgeht.", en: "I'm curious how it turns out." },
          { de: "Kinder sind von Natur aus neugierig.", en: "Children are curious by nature." }
        ]
      },
      {
        id: "grosszuegig", word: "großzügig", type: "adjective", level: "B1",
        meanings: ["generous"],
        grammar: { Komparativ: "großzügiger", Superlativ: "am großzügigsten" },
        examples: [
          { de: "Das war sehr großzügig von dir.", en: "That was very generous of you." },
          { de: "Sie ist bekannt für ihre großzügige Art.", en: "She's known for her generous nature." }
        ]
      },
      {
        id: "geduldig", word: "geduldig", type: "adjective", level: "B1",
        meanings: ["patient"],
        grammar: { Komparativ: "geduldiger", Superlativ: "am geduldigsten" },
        examples: [
          { de: "Bitte sei geduldig mit mir.", en: "Please be patient with me." },
          { de: "Er erklärte alles sehr geduldig.", en: "He explained everything very patiently." }
        ]
      }
    ]
  }
};
