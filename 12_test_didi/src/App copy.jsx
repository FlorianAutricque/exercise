import { useEffect, useState } from "react";

function App() {
  //do hangman

  const words = [
    "Abricot",
    "Baleine",
    "Camion",
    "Dentiste",
    "Étoile",
    "Fougère",
    "Girafe",
    "Hérisson",
    "Insecte",
    "Jument",
    "Kangourou",
    "Lanterne",
    "Moustique",
    "Navette",
    "Opéra",
    "Pastèque",
    "Quenouille",
    "Racine",
    "Serpent",
    "Tortue",
    "Urgence",
    "Vaisseau",
    "Wagon",
    "Xylophone",
    "Zèbre",
    "Ananas",
    "Baguette",
    "Chapeau",
    "Dauphin",
    "Escargot",
    "Flocon",
    "Goudron",
    "Hibou",
    "Igloo",
    "Jardin",
    "Klaxon",
    "Loup",
    "Miroir",
    "Neige",
    "Orchidée",
    "Parapluie",
    "Quiche",
    "Robot",
    "Singe",
    "Téléphone",
    "Uniforme",
    "Volcan",
    "Wagonnet",
    "Xylophage",
    "Zénith",
    "Acrobate",
    "Boussole",
    "Citrouille",
    "Dromadaire",
    "Encre",
    "Fumée",
    "Grenouille",
    "Horloge",
    "Internet",
    "Jus",
    "Koala",
    "Laitue",
    "Magicien",
    "Nuage",
    "Orange",
    "Pyramide",
    "Quincaillerie",
    "Rocher",
    "Sabre",
    "Tortillon",
    "Ustensile",
    "Vacarme",
    "Winch",
    "Xénon",
    "Zygomatique",
    "Artichaut",
    "Bouteille",
    "Coccinelle",
    "Diamant",
    "Écureuil",
    "Fourmi",
    "Glace",
    "Hippopotame",
    "Instrument",
    "Jonquille",
    "Klaxon",
    "Lapin",
    "Melon",
    "Noyau",
    "Otarie",
    "Pluie",
    "Quasar",
    "Rubis",
    "Soleil",
    "Trompette",
    "Ulcère",
    "Vache",
    "Whisky",
    "Xerophyte",
    "Zigzag",
  ];

  //afficher message qui dit bravo
  //compteur de cout

  const [count, setCount] = useState(0);
  const [newArray, setNewArray] = useState([]);

  const [randomWord, setRandomWord] = useState(() =>
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );

  const splitedWord = randomWord.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  useEffect(() => {
    setNewArray(new Array(randomWord.length).fill(false));
  }, [randomWord.length]);

  const handleClickAlphabet = (al, e) => {
    setCount(count + 1);

    if (!randomWord.includes(al)) {
      console.log("no bueno");
      return;
    } else {
      e.preventDefault();
      const updatedArray = newArray.map((value, i) =>
        splitedWord[i] === al ? true : value
      );
      setNewArray(updatedArray);
    }
  };

  return (
    <div className="flex justify-center flex-col gap-[4rem]">
      <div className="flex justify-center gap-2 mt-10">
        {splitedWord.map((letter, index) => (
          <p
            className="border bg-slate-400 w-8 h-8 flex items-center justify-center"
            key={index}
          >
            {newArray[index] === true ? letter : "_"}
          </p>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        {alphabet.map((al, index) => (
          <button
            type="button"
            onClick={e => handleClickAlphabet(al, e)}
            className="border w-8 h-8 hover:bg-cyan-400"
            key={index}
            disabled={count > 20}
          >
            {al}
          </button>
        ))}
      </div>

      <div> count: {count || 0}</div>

      <div>
        {newArray.every(i => i === true) ? (
          <p>Congratulations</p>
        ) : count > 20 ? (
          <p>You lost</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
