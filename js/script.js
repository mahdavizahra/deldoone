
document.addEventListener('DOMContentLoaded',function(){
const questions=[
{q:'وقتی خوشحال است، معمولاً چه چیزی بیشتر هیجان‌زده‌اش می‌کند؟',a:['تجربه‌های تازه و ماجراجویی','چیزهای زیبا و خاص','وقت گذراندن با آدم‌های مهم','یاد گرفتن و کشف کردن']},
{q:'سبک هدیه‌ای که بیشتر دوست دارد کدام است؟',a:['کاربردی و هوشمندانه','شخصی و خاطره‌انگیز','لوکس و چشم‌نواز','دست‌ساز و خلاقانه']},
{q:'یک روز عالی برای او چه شکلی است؟',a:['طبیعت‌گردی یا سفر کوتاه','کافه، کتاب و آرامش','مهمانی و معاشرت','ساختن یا انجام یک پروژه جدید']},
{q:'کدام جمله بیشتر شبیه اوست؟',a:['همیشه دنبال هیجانم','به جزئیات اهمیت می‌دهم','احساسات برایم مهم‌اند','کنجکاوم و عاشق یادگیری‌ام']},
{q:'دوست داری سورپرایزش چه حسی داشته باشد؟',a:['غافلگیرکننده و پرهیجان','ظریف و رمانتیک','صمیمی و پر از خاطره','متفاوت و خلاقانه']}
];
let current=0,answers=[];
const question=document.getElementById('question'), options=document.getElementById('answers'), next=document.getElementById('next'), back=document.getElementById('back'), count=document.getElementById('count'), bar=document.getElementById('progress'), result=document.getElementById('result'), quiz=document.getElementById('quiz-content');
function render(){
if(!question)return;
question.textContent=questions[current].q;count.textContent=(current+1)+' از '+questions.length;
bar.value=current+1;options.innerHTML='';
questions[current].a.forEach((v,i)=>{let b=document.createElement('button');b.type='button';b.className='answer btn text-end'+(answers[current]===i?' selected':'');b.textContent=v;b.onclick=()=>{answers[current]=i;render()};options.appendChild(b)});
back.disabled=current===0;next.textContent=current===questions.length-1?'دیدن پیشنهاد من':'سؤال بعدی';
}
if(question){render();next.onclick=()=>{if(answers[current]===undefined){alert('لطفاً یکی از گزینه‌ها را انتخاب کن.');return}if(current<questions.length-1){current++;render()}else{quiz.style.display='none';result.style.display='block';let counts=[0,0,0,0];answers.forEach((a)=>counts[a]++);let best=counts.indexOf(Math.max(...counts));let titles=['ماجراجوی دوست‌داشتنی','زیبایی‌شناس ظریف','آدمِ خاطره‌ها','ذهن خلاق و کنجکاو'];let desc=['برای او تجربه‌ای تازه، بلیت یک فعالیت هیجان‌انگیز یا یک وسیله کاربردی سفر انتخاب کن.','یک اکسسوری خاص، عطر، اثر هنری یا چیزی با طراحی چشم‌نواز می‌تواند خوشحالش کند.','هدیه‌ای شخصی‌سازی‌شده، آلبوم خاطرات یا یک قرار دونفره با برنامه‌ای فکرشده عالی است.','یک کیت خلاقیت، کتاب خاص، ابزار هنری یا وسیله‌ای برای سرگرمی موردعلاقه‌اش انتخاب کن.'];document.getElementById('result-title').textContent=titles[best];document.getElementById('result-desc').textContent=desc[best]}}};
if(back)back.onclick=()=>{if(current>0){current--;render()}};
const contact=document.getElementById('contact-form');if(contact)contact.onsubmit=function(e){e.preventDefault();document.getElementById('form-message').textContent='ممنون از پیامت! فرم نمایشی است و برای ارسال واقعی باید به سرویس ایمیل یا سرور متصل شود.';contact.reset()};
});
