import { useState } from "react";
import Accent from "./Accent";

const App = () => {
  const letters = [
    ["à", "á", "â", "ä"],
    ["è", "é", "ê", "ë"],
    ["ì", "í", "î", "ï"],
    ["ò", "ó", "ô", "ö"],
    ["ù", "ú", "û", "ü"],
  ];
  const [copied, setCopied] = useState("");

  return (
    <div id="total" className="relative bg-gray-700 pb-6 pl-4">
      <header id="title" className="mb-8 text-5xl text-red-700 font-bold">
        <u>Accents</u>
      </header>
      <main className="flex flex-row flex-wrap items-start gap-6">
        {letters.map((letter_list) => (
          <div className="w-full mb-6">
            {letter_list.map((letter) => (
              <Accent letter={letter} set={setCopied} />
            ))}
            {letter_list.map((letter) => (
              <Accent letter={letter.toUpperCase()} />
            ))}
          </div>
        ))}
      </main>
      {/* <footer className="relative left-0 text-red-700 font-semibold"> */}
      {/*   Copied: {copied} */}
      {/* </footer> */}
    </div>
  );
};

export default App;
