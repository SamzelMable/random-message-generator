// Random data arrays
const actions = [
  "Take a leap of faith",
  "Work hard and push your limits",
  "Believe in yourself",
  "Step out of your comfort zone",
  "Keep moving forward"
];

const feelings = [
  "with confidence",
  "with determination",
  "with a positive mindset",
  "with gratitude",
  "with curiosity"
];

const settings = [
  "in the face of challenges",
  "towards your dreams",
  "in this journey of life",
  "even when the odds are against you",
  "to achieve greatness"
];

// Helper: get random index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Generate a random message
function generateRandomMessage() {
  const action = actions[getRandomIndex(actions)];
  const feeling = feelings[getRandomIndex(feelings)];
  const setting = settings[getRandomIndex(settings)];
  return `${action} ${feeling} ${setting}.`;
}

// DOM elements
const messageDiv = document.getElementById('message');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const copyStatus = document.getElementById('copyStatus');

// Generate a message on button click
generateBtn.addEventListener('click', () => {
  messageDiv.classList.remove('show');
  void messageDiv.offsetWidth; // Force reflow
  messageDiv.textContent = generateRandomMessage();
  messageDiv.classList.add('show');
  copyStatus.style.display = 'none';
});

// Copy to clipboard on button click
copyBtn.addEventListener('click', () => {
  const textToCopy = messageDiv.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      copyStatus.style.display = 'block';
      setTimeout(() => {
        copyStatus.style.display = 'none';
      }, 1500);
    })
    .catch(err => console.error('Failed to copy: ', err));
});
