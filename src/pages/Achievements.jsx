import AchievementBadge from '../components/AchievementBadge.jsx';
import { achievements } from '../data/achievements.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
export default function Achievements({ state }) {
  const { language, t } = useLanguage();
  const unlocked = achievements.filter((a) => a.check(state)).length;
  return (
    <>
      <h1>{t('achievements')}</h1>
      <p className="muted">{unlocked} {t('of')} {achievements.length} {t('achievementUnlocked')}</p>
      <div className="grid">{achievements.map((a) => <AchievementBadge key={a.id} {...a}
        title={achievementText[a.id].title[language]} desc={achievementText[a.id].desc[language]} unlocked={a.check(state)} />)}</div>
    </>
  );
}

const achievementText = {
  A1: { title: { en: 'First Steps', my: 'ပထမခြေလှမ်း' }, desc: { en: 'Answer your first question correctly.', my: 'ပထမဆုံး မေးခွန်းကို မှန်အောင်ဖြေပါ။' } },
  A2: { title: { en: 'Sharp Shooter', my: 'တိကျသော ဖြေဆိုသူ' }, desc: { en: 'Answer 10 questions correctly.', my: 'မေးခွန်း ၁၀ ခုကို မှန်အောင်ဖြေပါ။' } },
  A3: { title: { en: 'Quiz Master', my: 'မေးခွန်းပညာရှင်' }, desc: { en: 'Answer 25 questions correctly.', my: 'မေးခွန်း ၂၅ ခုကို မှန်အောင်ဖြေပါ။' } },
  A4: { title: { en: 'Student', my: 'ကြိုးစားလေ့လာသူ' }, desc: { en: 'Complete 3 lessons.', my: 'သင်ခန်းစာ ၃ ခန်း ပြီးအောင် လေ့လာပါ။' } },
  A5: { title: { en: 'Problem Solver', my: 'ပြဿနာဖြေရှင်းသူ' }, desc: { en: 'Solve your first coding challenge.', my: 'ပထမဆုံး Code စိန်ခေါ်မှုကို ဖြေရှင်းပါ။' } },
  A6: { title: { en: 'Builder', my: 'တည်ဆောက်သူ' }, desc: { en: 'Solve all coding challenges.', my: 'Code စိန်ခေါ်မှုအားလုံးကို ဖြေရှင်းပါ။' } },
  A7: { title: { en: 'Level 3', my: 'အဆင့် ၃' }, desc: { en: 'Reach level 3.', my: 'အဆင့် ၃ ကို ရောက်အောင် လေ့လာပါ။' } },
  A8: { title: { en: 'Level 5', my: 'အဆင့် ၅' }, desc: { en: 'Reach level 5.', my: 'အဆင့် ၅ ကို ရောက်အောင် လေ့လာပါ။' } },
  A9: { title: { en: 'Syntax Rookie', my: 'Code ရေးသားမှု အစပြုသူ' }, desc: { en: 'Clear the Easy level of Syntax Master.', my: 'Code ရေးသားမှုမှာ လွယ်ကူတဲ့အဆင့်ကို အောင်ပါ။' } },
  A10: { title: { en: 'On Fire', my: 'အဖြေမှန် ဆက်တိုက်ဖြေသူ' }, desc: { en: 'Reach a 5-answer streak in Syntax Master.', my: 'Code မေးခွန်း ၅ ခုကို အဆက်မပြတ် မှန်အောင်ဖြေပါ။' } },
};
