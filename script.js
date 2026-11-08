const morseAlphabet = {
  'A': '.-',     'B': '-...',   'C': '-.-.',   'D': '-..',    'E': '.',
  'F': '..-.',   'G': '--.',    'H': '....',   'I': '..',     'J': '.---',
  'K': '-.-',    'L': '.-..',   'M': '--',     'N': '-.',     'O': '---',
  'P': '.--.',   'Q': '--.-',   'R': '.-.',    'S': '...',    'T': '-',
  'U': '..-',    'V': '...-',   'W': '.--',    'X': '-..-',   'Y': '-.--',
  'Z': '--..',   ' ': '/',      '1': '.----',  '2': '..---',  '3': '...--',
  '4': '....-',  '5': '.....',  '6': '-....',  '7': '--...',  '8': '---..',
  '9': '----.',  '0': '-----'
};

const input = document.getElementById('text-input');
const output = document.getElementById('morse-output');
const convertBtn = document.getElementById('convert-btn');
const clearBtn = document.getElementById('clear-btn');

function translateToMorse() {
  if (!input || !output) return;
  const text = input.value.toUpperCase();
  const morse = text.split('')
    .map(char => morseAlphabet[char] || char)
    .join(' ');
  output.value = morse;
}

if (input) {
  input.addEventListener('input', translateToMorse);
}

if (convertBtn) {
  convertBtn.addEventListener('click', translateToMorse);
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (input) input.value = '';
    if (output) output.value = '';
  });
}