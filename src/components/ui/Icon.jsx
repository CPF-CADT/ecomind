// src/components/ui/Icon.js
const Icon = ({ type, className = '' }) => {
  const icons = {
    brain: '🧠', leaf: '🌿', gear: '⚙️', data: '💾', energy: '⚡️',
    recycle: '♻️', compost: '🍂', trash: '🗑️', rocket: '🚀', wrench: '🔧',
    sadFish: '😟🐠', padlock: '🔒', check: '✔️', clock: '⏰', info: 'ℹ️',
    happyAI: '😊', concernedAI: '😟', neutralAI: '😐', thinkingAI: '🤔',
    lightbulb: '💡', warning: '⚠️','city':'🏙️',
  };
  return <span className={`icon ${className}`}>{icons[type] || type}</span>;
};

export default Icon;