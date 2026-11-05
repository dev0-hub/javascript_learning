import { useState } from 'react';
import QuizCard from '../components/QuizCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions, topics } from '../data/questions.js';
import { getQuestionContent } from '../data/questionTranslations.js';
import { extendedQuestions, getExtendedQuestionContent } from '../data/extendedQuestions.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function QuizArena({ state, actions, go }) {
  const { language, t } = useLanguage();
  const [quizType, setQuizType] = useState('multipleChoice');
  const [topic, setTopic] = useState(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const list = quizType === 'multipleChoice'
    ? questions.filter((q) => q.topic === topic)
    : extendedQuestions.filter((q) => q.type === quizType);
  const selectedTopic = topicLabels[topic]
    ? tAt(topic, language)
    : quizType === 'multipleChoice' ? topic : t(quizType);
  const start = (selection) => {
    setTopic(quizType === 'multipleChoice' ? selection : quizType);
    setIndex(0); setPicked(null); setScore(0); setFinished(false);
  };
  const selectType = (type) => {
    if (['fill', 'keyword', 'symbol', 'drag'].includes(type)) {
      actions.update({ syntax: { ...state.syntax, mode: type } });
      go('syntax');
      return;
    }
    setQuizType(type);
    setTopic(null);
  };

  if (!topic) {
    return (
      <>
        <h1>{t('quiz')}</h1>
        <p className="muted">{t('pickTopic')}</p>
        <h2>{t('quizTypes')}</h2>
        <div className="grid">
          {QUIZ_TYPES.map(([type, label]) => (
            <button key={type} className={`card mode ${quizType === type ? 'active' : ''}`}
              onClick={() => selectType(type)}>{t(label)}</button>
          ))}
        </div>
        {quizType === 'multipleChoice'
          ? <div className="grid">
            {topics.map((topicName) => {
              const all = questions.filter((q) => q.topic === topicName);
              const got = all.filter((q) => state.correct[q.id]).length;
              const translatedTopic = topicLabels[topicName] ? tAt(topicName, language) : topicName;
              return (
                <div className="card stack" key={topicName}>
                  <strong>{translatedTopic}</strong>
                  <ProgressBar value={got} max={all.length} />
                  <button className="btn" onClick={() => start(topicName)}>{t('start')}</button>
                </div>
              );
            })}
          </div>
          : ['trueFalse', 'guessOutput', 'findError'].includes(quizType)
            ? <div className="card stack">
              <strong>{t(quizType)}</strong>
              <ProgressBar value={extendedQuestions.filter((q) => q.type === quizType && state.correct[q.id]).length}
                max={extendedQuestions.filter((q) => q.type === quizType).length} />
              <button className="btn" onClick={() => start(quizType)}>{t('start')}</button>
            </div>
            : <p className="muted">{t('syntaxQuizInfo')}</p>}
        {quizType !== 'multipleChoice' && !['trueFalse', 'guessOutput', 'findError'].includes(quizType) && (
          <button className="btn top" onClick={() => go('syntax')}>{t('openSyntaxMaster')}</button>
        )}
      </>
    );
  }

  if (finished) {
    return (
      <div className="card stack">
        <h1>{selectedTopic} · {t('complete')}</h1>
        <p>{t('got')} {score} {t('of')} {list.length} {t('correctThisRound')}</p>
        <div className="row">
          <button className="btn" onClick={() => start(topic)}>{t('tryAgain')}</button>
          <button className="btn ghost" onClick={() => setTopic(null)}>{t('chooseTopic')}</button>
        </div>
      </div>
    );
  }

  const q = list[index];
  const content = quizType === 'multipleChoice'
    ? getQuestionContent(q, language)
    : getExtendedQuestionContent(q, language);
  return (
    <>
      <div className="row space"><h1>{selectedTopic}</h1><span className="muted">{t('question')} {index + 1} / {list.length}</span></div>
      <QuizCard key={q.id} q={q} picked={picked} isLast={index === list.length - 1} alreadyEarned={!!state.correct[q.id]}
        content={content}
        onPick={(i) => { if (actions.answer(q, i)) setScore((s) => s + 1); setPicked(i); }}
        onNext={() => { if (index === list.length - 1) setFinished(true); else { setIndex(index + 1); setPicked(null); } }} />
    </>
  );
}

const QUIZ_TYPES = [
  ['multipleChoice', 'multipleChoice'],
  ['trueFalse', 'trueFalse'],
  ['guessOutput', 'guessOutput'],
  ['findError', 'findError'],
  ['fill', 'fillBlanks'],
  ['keyword', 'missingKeywords'],
  ['symbol', 'operatorsSymbols'],
  ['drag', 'dragDrop'],
];
const topicLabels = { Variables: 'variables', 'Data Types': 'dataTypes', Operators: 'operators' };
const topicTranslations = {
  my: { variables: 'Variable များ', dataTypes: 'Data အမျိုးအစားများ', operators: 'Operator များ' },
  en: { variables: 'Variables', dataTypes: 'Data Types', operators: 'Operators' },
};
function tAt(topic, language) {
  return topicTranslations[language][topicLabels[topic]];
}
