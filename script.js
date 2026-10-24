const nav=document.querySelector('.nav');
document.querySelector('.menu-btn').addEventListener('click',()=>nav.classList.toggle('open'));

/* ---------- Case-study content (EN / AR) ---------- */
const content={
 en:{
  'student-project':`
  <span class="modal-tag">DATA INTEGRATION & WAREHOUSING</span>
  <h3>Student Performance Analysis</h3>
  <p>An academic project focused on analyzing factors affecting attendance and study habits while building a warehouse-ready analytical structure.</p>
  <ul>
    <li><strong>Data sources:</strong> multiple student datasets covering demographics, environment, attendance and study behavior.</li>
    <li><strong>Preparation:</strong> deduplication, type conversion, completeness checks and attribute standardization.</li>
    <li><strong>Integration:</strong> schema matching, conflict resolution and schema mapping.</li>
    <li><strong>Warehouse design:</strong> Star Schema with fact and dimension tables.</li>
    <li><strong>ETL:</strong> Extract → Transform → Load workflow for analytical querying.</li>
    <li><strong>Analysis:</strong> OLAP questions, dashboards and strategic recommendations.</li>
  </ul>
  <p><strong>Selected finding:</strong> the project dashboard reported a higher attendance rate for online classes (59.9%) than offline classes (52.9%).</p>
 `,
  'uniflow':`
  <span class="modal-tag">FLAGSHIP PROJECT · LIVE PROTOTYPE</span>
  <h3>UniFlow</h3>
  <p>A working prototype of a smart university assistant that combines academic planning, study analytics and personalized recommendations. Data is stored locally in the browser.</p>
  <ul>
    <li><strong>Smart Planner:</strong> organize courses, assignments and exams.</li>
    <li><strong>Study Analytics:</strong> visualize study time, task completion and productivity patterns.</li>
    <li><strong>Risk Scoring:</strong> estimates the likelihood of falling behind from overdue work, workload vs. study time, completion rate, focus and consistency, using a transparent weighted (logistic) model.</li>
    <li><strong>Study Assistant:</strong> rule-based daily guidance built from the student’s own data.</li>
    <li><strong>Goal:</strong> turn student activity data into practical, personalized decisions.</li>
  </ul>
  <p><strong>Next step:</strong> replace the weighted model with a trained ML model and add an AI chat assistant.</p>
  <p><a class="text-btn" href="uniflow.html" target="_blank" rel="noopener">Open the app ↗</a></p>
 `},
 ar:{
  'student-project':`
  <span class="modal-tag">تكامل البيانات ومستودعات البيانات</span>
  <h3>تحليل أداء الطلاب</h3>
  <p>مشروع أكاديمي يركّز على تحليل العوامل المؤثرة في الحضور وعادات المذاكرة، مع بناء هيكل تحليلي جاهز للمستودع.</p>
  <ul>
    <li><strong>مصادر البيانات:</strong> عدة مجموعات بيانات للطلاب تغطي الخصائص الديموغرافية والبيئة والحضور وسلوك المذاكرة.</li>
    <li><strong>التحضير:</strong> إزالة التكرار وتحويل الأنواع وفحص الاكتمال وتوحيد الخصائص.</li>
    <li><strong>التكامل:</strong> مطابقة المخططات وحل التعارضات وربط المخططات.</li>
    <li><strong>تصميم المستودع:</strong> Star Schema بجداول الحقائق وجداول الأبعاد.</li>
    <li><strong>ETL:</strong> مسار استخراج ← تحويل ← تحميل للاستعلامات التحليلية.</li>
    <li><strong>التحليل:</strong> أسئلة OLAP ولوحات معلومات وتوصيات استراتيجية.</li>
  </ul>
  <p><strong>نتيجة مختارة:</strong> أظهرت لوحة المشروع أن نسبة الحضور في الحصص عن بُعد (59.9%) أعلى منها في الحصص الحضورية (52.9%).</p>
 `,
  'uniflow':`
  <span class="modal-tag">مشروع رئيسي · نموذج أولي يعمل</span>
  <h3>UniFlow</h3>
  <p>نموذج أولي يعمل لمساعد جامعي ذكي يجمع التخطيط الأكاديمي وتحليلات المذاكرة والتوصيات المخصصة. تُحفظ البيانات محلياً في المتصفح.</p>
  <ul>
    <li><strong>المخطط الذكي:</strong> تنظيم المواد والواجبات والاختبارات.</li>
    <li><strong>تحليلات المذاكرة:</strong> عرض وقت المذاكرة وإنجاز المهام وأنماط الإنتاجية.</li>
    <li><strong>تقدير المخاطر:</strong> يقدّر احتمال التأخر الدراسي من المهام المتأخرة وحجم العمل مقابل وقت المذاكرة ونسبة الإنجاز والتركيز والانتظام، بنموذج موزون (logistic) شفاف.</li>
    <li><strong>مساعد الدراسة:</strong> توجيه يومي قائم على القواعد ومبني على بيانات الطالب نفسه.</li>
    <li><strong>الهدف:</strong> تحويل بيانات نشاط الطالب إلى قرارات عملية مخصصة.</li>
  </ul>
  <p><strong>الخطوة التالية:</strong> استبدال النموذج الموزون بنموذج تعلّم آلة مدرَّب، وإضافة مساعد ذكاء اصطناعي للمحادثة.</p>
  <p><a class="text-btn" href="uniflow.html" target="_blank" rel="noopener">فتح التطبيق ↗</a></p>
 `}
};

/* ---------- Arabic translations: [selector, [nth element → Arabic HTML | null]] ---------- */
const AR=[
 ['.nav-links a',['نبذة عني','المهارات','المشاريع','الشهادات','التواصل']],
 ['.hero-copy .eyebrow',['علوم البيانات · مكة المكرمة · جامعة أم القرى']],
 ['.hero h1',['نحوّل البيانات إلى<br><span>قرارات مفيدة.</span>']],
 ['.hero-text',['أنا <strong>ريوف الزهراني</strong>، طالب في السنة الثالثة بتخصص علوم البيانات في جامعة أم القرى. أستمتع باستكشاف البيانات وبناء الحلول التحليلية، وأتعلّم كيف تحلّ التقنية مشكلات حقيقية.']],
 ['.hero-copy .btn',['استعرض أعمالي','لنتواصل']],
 ['.mini-label',['التركيز الحالي']],
 ['.data-card h3',['البيانات · الذكاء الاصطناعي · التحليلات']],
 ['.stat-one small',['شهادات']],
 ['.stat-two small',['مشروع مميز']],
 ['.section-head .eyebrow',['01 / نبذة عني','02 / المهارات','03 / المشاريع','04 / الشهادات']],
 ['.section-head h2',['عقل فضولي،<br>مبني حول البيانات.','الأدوات التي أعمل بها.','أعمال مختارة.','التعلّم مستمر.']],
 ['.about-copy p',['أنا طالب علوم بيانات أحب تحويل المعلومات الفوضوية إلى رؤى واضحة وذات معنى. عرّفتني دراستي الأكاديمية على تحليل البيانات وتصويرها وتعلّم الآلة وتكامل البيانات ومستودعات البيانات.','أبني حالياً البروتفوليو الخاص بي حول مشاريع عملية تُظهر ما أعرفه، وأيضاً كيف أفكّر وأحلّل وأبتكر.']],
 ['.profile-panel span',['الاسم','التخصص','الجامعة','السنة','الموقع']],
 ['.profile-panel strong',['ريوف الزهراني','علوم البيانات','جامعة أم القرى','السنة الثالثة','مكة المكرمة، السعودية']],
 ['.skills-grid h3',['البرمجة','البيانات','تعلّم الآلة','تصوير البيانات','هندسة البيانات','سير العمل']],
 ['.skills-grid p',[null,'Pandas · NumPy · SQL · تنظيف البيانات',null,'Tableau · لوحات المعلومات · سرد البيانات','ETL · مطابقة المخططات · Star Schema · OLAP',null]],
 ['.project-feature:not(.reverse) .tag',['تكامل البيانات ومستودعات البيانات']],
 ['.project-feature:not(.reverse) h3',['تحليل أداء الطلاب']],
 ['.project-feature:not(.reverse) .project-info > p',['مشروع أكاديمي يحلّل العوامل المؤثرة في الحضور وعادات المذاكرة. يدمج المشروع عدة مجموعات بيانات للطلاب ويبني هيكلاً تحليلياً جاهزاً للمستودع.']],
 ['.project-feature:not(.reverse) .project-points span',['تنظيف البيانات ومعالجتها المسبقة','مطابقة المخططات وربطها','مسار ETL','Star schema مع OLAP','لوحات معلومات مرئية']],
 ['.project-feature:not(.reverse) .text-btn',['عرض دراسة الحالة ←']],
 ['.project-feature.reverse .tag',['مشروع رئيسي · نموذج أولي يعمل']],
 ['.project-feature.reverse .project-info > p',['تطبيق ويب يعمل لطلاب الجامعة، يجمع التخطيط الأكاديمي وتحليلات المذاكرة وتقدير مخاطر التأخر والتوجيه اليومي للدراسة في مكان واحد.']],
 ['.project-feature.reverse .project-points span',['مخطط أكاديمي ذكي','لوحة تحليلات المذاكرة','تقدير خطر التأخر الدراسي','مساعد دراسة قائم على القواعد']],
 ['.project-links .text-btn',['فتح التطبيق ↗','دراسة الحالة ←']],
 ['.coming-soon span',['المزيد من المشاريع']],
 ['.coming-soon p',['المزيد من المشاريع قادمة قريباً.']],
 ['.cert h3',['هياكل البيانات — دورة كاملة بالعربية','JAVA 101 — المستوى المبتدئ','JAVA 103 — المستوى المتقدم']],
 ['.cert p',['17 أكتوبر 2025 · KorsatCode','أكاديمية طويق / سطر · 5 ساعات · 18 يناير 2025','أكاديمية طويق / سطر · 7 ساعات · 16 مايو 2025']],
 ['.contact > div > .eyebrow',['05 / التواصل']],
 ['.contact h2',['لنبنِ شيئاً<br><span>ذا معنى مع البيانات.</span>']],
 ['.contact-card > p:first-child',['يسعدني التواصل والتعاون والتعلّم من خلال فرص جديدة.']],
 ['.contact-card .btn',['راسلني بالبريد','اتصل بي']],
 ['.footer span',['© 2026 ريوف الزهراني','علوم البيانات · مكة المكرمة']]
];
const META={
  en:{title:'Ryuf Alzahrani | Data Science Portfolio',desc:'Ryuf Alzahrani — Data Science student portfolio.',btn:'العربية',menu:'Open menu',sw:'Switch to Arabic'},
  ar:{title:'ريوف الزهراني | بروتفوليو علوم البيانات',desc:'ريوف الزهراني — بروتفوليو طالب علوم بيانات.',btn:'English',menu:'فتح القائمة',sw:'التحويل إلى الإنجليزية'}
};

let lang='en',curModal=null;
function setLang(l){
  lang=l;const ar=l==='ar';
  document.documentElement.lang=l;
  document.documentElement.dir=ar?'rtl':'ltr';
  AR.forEach(([sel,arr])=>document.querySelectorAll(sel).forEach((el,i)=>{
    if(arr[i]==null)return;
    if(el.dataset.en===undefined)el.dataset.en=el.innerHTML;
    el.innerHTML=ar?arr[i]:el.dataset.en;
  }));
  const m=META[l];
  document.title=m.title;
  document.querySelector('meta[name="description"]').content=m.desc;
  const b=document.getElementById('lang-btn');b.textContent=m.btn;b.setAttribute('aria-label',m.sw);
  document.querySelector('.menu-btn').setAttribute('aria-label',m.menu);
  if(curModal)openModal(curModal);
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.getElementById('lang-btn').addEventListener('click',()=>setLang(lang==='ar'?'en':'ar'));

function openModal(id){
  curModal=id;
  document.getElementById('modal-content').innerHTML=content[lang][id];
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden','false');
}
function closeModal(){
  curModal=null;
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal').setAttribute('aria-hidden','true');
}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

try{if(localStorage.getItem('lang')==='ar')setLang('ar')}catch(e){}
