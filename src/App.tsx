import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, Copy, Check } from 'lucide-react';

// Large collection of pickup lines by category
const pickupLineDatabase = {
  attitude: [
    "I'm not a photographer, but I can definitely picture us together.",
    "I must be a snowflake, because I've fallen for you.",
    "I'm not usually this forward, but I'd regret not talking to the most captivating person here.",
    "Life's too short for regrets. That's why I had to come talk to you.",
    "I'm not trying to impress you, but I'm the reason the sun rises every morning.",
    "I don't need a map because I'm already lost in your eyes.",
    "I'm not a mind reader, but I know what you're thinking. Yes, I'm single.",
    "I'm not always this confident, but something about you brings out the best in me.",
    "I don't usually do this, but I'd kick myself later if I didn't ask for your number.",
    "Some people call it confidence, I call it knowing what I want. And right now, that's you.",
    "I'm not saying I'm Batman, but have you ever seen us in the same room together?",
    "I'm not trying to be forward, but if you were a fruit, you'd be a fine-apple.",
    "I don't believe in love at first sight, but I'm willing to make an exception for you.",
    "I'm not a genie, but I can make your wishes come true.",
    "I'm not saying I'm perfect, but I'm pretty close. The only thing missing is your number in my phone.",
    "I'm not a mathematician, but I'm pretty good with numbers. How about yours?",
    "I'm not a fortune teller, but I see us in my future.",
    "I'm not trying to brag, but they call me the heartbreaker. Want to find out why?",
    "I'm not saying we're meant to be, but the universe seems to think so.",
    "I'm not usually this direct, but life's too short to play games. Can I get your number?"
  ],
  flirty: [
    "If kisses were snowflakes, I'd send you a blizzard.",
    "Is it hot in here or is it just you?",
    "Your smile is so bright it's melting my heart faster than the sun melts snow.",
    "If you were a triangle, you'd be acute one.",
    "Are your legs tired? Because you've been running through my mind all day.",
    "Do you have a name, or can I call you mine?",
    "I must be a snowflake, because I've fallen for you.",
    "If I had a star for every time you brightened my day, I'd have a galaxy in my hand.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    "Do you believe in love at first sight, or should I walk by again?",
    "I'm not a photographer, but I can picture us together.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your dad a boxer? Because you're a knockout!",
    "I'm not a mathematician, but I'm pretty good with numbers. How about yours?",
    "If you were a fruit, you'd be a fine-apple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you."
  ],
  funny: [
    "Are you a parking ticket? Because you've got FINE written all over you.",
    "Do you like raisins? How about a date?",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you a bank loan? Because you have my interest!",
    "Do you have a name, or can I call you mine?",
    "If you were a fruit, you'd be a fine-apple.",
    "Are you a campfire? Because you're hot and I want s'more.",
    "Is your dad a boxer? Because you're a knockout!",
    "Do you like science? Because I've got my ion you.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Is your name Wifi? Because I'm feeling a connection.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Are you French? Because Eiffel for you.",
    "Is your name Autumn? Because I'm falling for you.",
    "Do you like Star Wars? Because Yoda one for me!"
  ],
  clever: [
    "Are you a 90-degree angle? Because you're looking right.",
    "According to the second law of thermodynamics, you're supposed to share your hotness with me.",
    "Are you a compound of beryllium and barium? Because you're a total BaBe.",
    "If I were a function, would you be my derivative? I'd like to lie tangent to your curves.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "If you were a triangle, you'd be acute one.",
    "Are you a carbon sample? Because I want to date you.",
    "If I had to rate you from 1 to 10, I'd give you a 9... because I'm the 1 you're missing.",
    "Are you a dictionary? Because you add meaning to my life.",
    "If you were a book, you'd be fine print.",
    "Are you a bank loan? Because you have my interest.",
    "If we were socks, we'd make a great pair.",
    "Are you a camera? Because every time I look at you, I smile.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you HTTP? Because without you, I'm just ://",
    "If you were words on a page, you'd be fine print.",
    "Are you a time traveler? Because I see you in my future.",
    "If you were a cat, you'd purr-fect.",
    "Are you made of dark matter? Because you're indescribable.",
    "If I were a cat, I'd spend all nine lives with you."
  ],
  cute: [
    "If you were a snowflake, you'd be the prettiest one of all.",
    "Is your name Winter? Because you've made my heart freeze at first sight.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "If stars fell every time I thought of you, the sky would be empty.",
    "Is your name Google? Because you're everything I've been searching for.",
    "Do you have a map? I keep getting lost in your eyes.",
    "If you were a star, you'd be the brightest one in the sky.",
    "Is your smile a magnet? Because it's pulling me towards you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "If happiness was a person, it would be you.",
    "Is your name Sunshine? Because you brighten up my day.",
    "Do you have a name, or can I call you mine?",
    "If you were a melody, you'd be the sweetest song I've ever heard.",
    "Is your heart taken, or is there room for me?",
    "Do you know what my shirt is made of? Boyfriend/girlfriend material.",
    "If I had a garden, I'd put your tulips and my tulips together.",
    "Is it just me, or did the room get brighter when you walked in?",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "If you were a tear in my eye, I would never cry for fear of losing you.",
    "Is your name Autumn? Because I'm falling for you."
  ],
  cheesy: [
    "Is your dad a baker? Because you're a cutie pie.",
    "Do you have a name, or can I call you mine?",
    "I must be a snowflake, because I've fallen for you.",
    "If you were a triangle, you'd be acute one.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is your dad a boxer? Because you're a knockout!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Wifi? Because I'm feeling a connection.",
    "Do you like raisins? How about a date?",
    "Is your smile a magnet? Because it's pulling me towards you.",
    "Do you have a sunburn, or are you always this hot?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you like Star Wars? Because Yoda one for me!",
    "Is your name Autumn? Because I'm falling for you.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your dad an artist? Because you're a masterpiece!",
    "Do you like coffee? Because I like you a latte!"
  ]
};

// Emoji mapping for each category
const categoryEmojis = {
  attitude: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png",
  flirty: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Hearts.png",
  funny: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png",
  clever: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zipper-Mouth%20Face.png",
  cute: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Two%20Hearts.png",
  cheesy: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Cheese%20Wedge.png"
};

// Function to get random unique items from an array
function getRandomUniqueItems(array, count) {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the first 'count' items
  return shuffled.slice(0, count);
}

function SnowAnimation() {
  return (
    <div className="snow-container absolute inset-0 pointer-events-none">
      <div className="snow snow-1 snow-y-1"></div>
      <div className="snow snow-2 snow-y-2"></div>
      <div className="snow snow-3 snow-y-3"></div>
      <div className="snow snow-4 snow-y-3"></div>
      <div className="snow snow-5 snow-y-2"></div>
      <div className="snow snow-6 snow-y-1"></div>
      <div className="snow snow-7 snow-y-1"></div>
      <div className="snow snow-8 snow-y-2"></div>
      <div className="snow snow-9 snow-y-3"></div>
      <div className="snow snow-10 snow-y-3"></div>
    </div>
  );
}

function App() {
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [usedLines, setUsedLines] = useState<Record<string, string[]>>({
    attitude: [],
    flirty: [],
    funny: [],
    clever: [],
    cute: [],
    cheesy: []
  });

  // Reset used lines when component mounts
  useEffect(() => {
    setUsedLines({
      attitude: [],
      flirty: [],
      funny: [],
      clever: [],
      cute: [],
      cheesy: []
    });
  }, []);

  const generateLines = () => {
    if (!selectedCategory) return;
    
    setLoading(true);
    setCopied(null);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      try {
        const category = selectedCategory as keyof typeof pickupLineDatabase;
        const allLines = pickupLineDatabase[category];
        const categoryUsedLines = usedLines[category] || [];
        
        // Filter out already used lines
        const availableLines = allLines.filter(line => !categoryUsedLines.includes(line));
        
        // If we've used most lines, reset the used lines for this category
        if (availableLines.length < 4) {
          setUsedLines(prev => ({
            ...prev,
            [category]: []
          }));
          
          // Get 4 random lines from all lines
          const newLines = getRandomUniqueItems(allLines, 4);
          setCurrentLines(newLines);
          
          // Mark these lines as used
          setUsedLines(prev => ({
            ...prev,
            [category]: newLines
          }));
        } else {
          // Get 4 random lines from available lines
          const newLines = getRandomUniqueItems(availableLines, 4);
          setCurrentLines(newLines);
          
          // Add these lines to the used lines
          setUsedLines(prev => ({
            ...prev,
            [category]: [...categoryUsedLines, ...newLines]
          }));
        }
      } catch (err) {
        console.error("Error generating lines:", err);
      } finally {
        setLoading(false);
      }
    }, 600); // 600ms delay to simulate processing
  };

  const copyToClipboard = (index: number, line: string) => {
    navigator.clipboard.writeText(line);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4 md:p-8 relative overflow-hidden">
      <SnowAnimation />
      <div className="max-w-2xl mx-auto relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-500 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Pickup Line Generator</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6">
            {Object.entries(categoryEmojis).map(([key, emoji]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-2 md:p-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  selectedCategory === key
                    ? 'bg-pink-500 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                <img src={emoji} alt={key} className="w-5 h-5 md:w-6 md:h-6" />
                <span className="capitalize text-sm md:text-base">{key}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4 mb-6">
            {currentLines.length > 0 ? (
              currentLines.map((line, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <p className="text-sm md:text-base text-gray-700 flex-1">{line}</p>
                  <button
                    onClick={() => copyToClipboard(index, line)}
                    className="shrink-0 bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copied === index ? (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-6 flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  {selectedCategory 
                    ? "Click generate to get pickup lines!" 
                    : "Select a category to start!"}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={generateLines}
            disabled={loading || !selectedCategory}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : selectedCategory ? (
              <>
                <img 
                  src={categoryEmojis[selectedCategory as keyof typeof categoryEmojis]} 
                  alt={selectedCategory} 
                  className="w-5 h-5" 
                />
                <span className="capitalize">Generate {selectedCategory} Lines</span>
              </>
            ) : (
              "Select a Category"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
