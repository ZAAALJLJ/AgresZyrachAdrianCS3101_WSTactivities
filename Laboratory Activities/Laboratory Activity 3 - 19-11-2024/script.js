const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCountDisplay');
const sentenceCountDisplay = document.getElementById('sentenceCountDisplay');

let typingTimer;
const doneTypingInterval = 1000 * 0.5;

function updateCounts() {
    const text = textInput.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    wordCountDisplay.textContent = `${wordCount === 1 ? 'Word' : 'Words'}: ${wordCount}`;
    const sentences = text.split(/(?<=[.!?])\s+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    sentenceCountDisplay.textContent = `${sentenceCount === 1 ? 'Sentence' : 'Sentences'}: ${sentenceCount}`;
}

textInput.addEventListener('input', () => {
    clearTimeout(typingTimer); 
    wordCountDisplay.textContent = `typing...`;
    sentenceCountDisplay.textContent = `typing...`;
    typingTimer = setTimeout(() => {
        updateCounts();
    }, doneTypingInterval);
});