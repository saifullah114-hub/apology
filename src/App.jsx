import { useState } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

export default function App() {
  const [message, setMessage] = useState("I am really sorry! 😔");
  const [clicked, setClicked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setMessage("I never meant to hurt you! 💙");
    setTimeout(() => setShowHeart(true), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-300 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white p-6 rounded-2xl shadow-2xl max-w-md border border-gray-300"
      >
        <h1 className="text-2xl font-semibold text-gray-900">{message}</h1>
        <p className="text-gray-700 mt-2">I truly value you and our friendship. Hope you forgive me! 🙏</p>
        <p className="text-gray-600 italic mt-4 font-medium">
          "Na jaan bujh ke ki koi baat buri,
Main woh hoon jo dukh dene walon mein na ho shumar kabhi.
Aur agar bhool se chubh gaya ho koi shabd mera,
To maafi maangne ko hoon hamesha sabse pehla khada."
        </p>
        <p className="text-gray-800 mt-2 font-bold">- From Bunty</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4"
        >
          <button 
            className={`px-6 py-3 rounded-full font-bold shadow-md transition-all duration-300 ${clicked ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700 text-white'}`} 
            onClick={handleClick}
            disabled={clicked}
          >
            {clicked ? "❤️ Thank You!" : "Forgive Me?"}
          </button>
        </motion.div>
        {showHeart && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-4xl text-red-500 animate-bounce"
          >
            💖
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
