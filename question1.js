// قم بحل السؤال الأول هنا

// قم بإنشاء مصفوفة باسم pets تتكون من أسماء الحيوانات الأليفة
  
let bets = ['cat','rabbit','monkey ','bird','chicken' ];
console.log(bets);




 //قم بإزالة اسم الحيوان الأخير من المصفوفة
 bets.pop();
 console.log(bets);

   // قم بإضافة اسم حيوان جديد في نهاية المصفوفة
   bets.push('fish');
   console.log(bets);
 
 //م بتغيير اسم الحيوان عند المؤشر 2
 bets[2]="sheep";
 console.log(bets);

// قم بإنشاء كائن (object) لقطة 🐈 أو أي حيوان آخر تختاره
 let cat = {
     name:'cat',
     Age:'3',
     Type:'mammals'
 }
 console.log(cat);
 console.log(`The cat Age ${cat.Age}`);
