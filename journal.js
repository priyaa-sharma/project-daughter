const prompts = {
  hopeful: [
    "What dream are you quietly holding close to your heart today?",
    "When did you last feel a spark of light inside your chest?",
    "Describe a moment where you believed in something bigger than the sadness.",
    "What does healing feel like today?",
    "What part of you is still trying to grow back?",
    "What would you say to the version of yourself that almost gave up?",
    "Who or what reminds you that softness is strength?",
    "What future version of you are you writing for?",
    "What does love look like when it's safe?",
    "When did you surprise yourself with your strength?",
    "What do you want to feel when you wake up tomorrow?",
    "Write a letter to your future self who made it.",
    "What is a quiet moment that felt like a small miracle?"

  ],
  melancholic: [
    "What memory keeps playing in the background of your thoughts?",
    "If your sadness had a color, what would it look like today?",
    "What do you miss that you’re afraid to say out loud?",
    "What did you leave behind when you stopped loving them?",
    "When did silence feel louder than words?",
    "Describe the moment something inside you quietly broke.",
    "Whose voice do you still hear in empty rooms?",
    "What’s the thing you wish they’d asked you before they walked away?",
    "If your sadness had a shape, what would it look like today",
    "Write about a goodbye you never got to give.",
    "What secret are you carrying that feels too heavy for your chest?",
    "What’s a lie you’ve told yourself to survive?",
    "Who do you still write poems about in your mind?"


  ],
  nostalgic: [
    "Write about a room you once knew.",
    "What scent brings someone back to you?",
    "What piece of your childhood still whispers to you?",
    "Write about the way your bedroom felt when you were 15.",
    "What song unlocks a memory you didn’t know you buried?",
    "What does your younger self miss about you now?",
    "Describe the smell of someone you used to love.",
    "When did laughter stop feeling safe?",
    "What piece of clothing do you still keep for no reason?",
    "Who taught you to hold in your tears?",
    "What moment from your childhood haunts you in silence?",
    "What’s the photo you can’t delete, but can’t look at either?",
    "Who was your first heartbreak and how did it echo?"









  ],
  anxious: [
    "What thought keeps circling in your mind?",
    "If your fear could write you a letter, what would it say?",
    "What would calm feel like right now, if you could paint it?",
    "What memory replays at night when you’re trying to sleep?",
    "What if the worst thing you think about yourself isn’t true?",
    "Who do you pretend to be when you’re scared?",
    "What would it mean to be truly seen?",
    "If you could stop time, what moment would you freeze?",
    "What fear are you hiding behind your smile?",
    "What do you wish people understood when you go quiet?",
    "What truth do you avoid because it hurts too much?",
    "What would happen if you forgave yourself for the thing you hate?",
    "What are you running from that still finds you?"

  ],
  freewrite: []
};

function selectMood(mood) {
  const promptBox = document.getElementById('promptBox');
  const journalEntry = document.getElementById('journalEntry');

  if (!promptBox || !journalEntry) {
    console.log("PromptBox or journalEntry not found!");
    return;
  }

  if (mood === 'freewrite') {
    promptBox.textContent = "Take your time. Spill the silence you never learned to scream :)";
  } else {
    const promptList = prompts[mood];
    const randomPrompt = promptList[Math.floor(Math.random() * promptList.length)];
    promptBox.textContent = randomPrompt;
  }

  journalEntry.placeholder = "Start writing here...";
}
function toggleMenu(){
  const sidebar =
  document.getElementById("sidebar");
  if (sidebar.style.width === "250px"){
    sidebar.style.width="0";
  } else{
    sidebar.style.width = "250px";
  }
}