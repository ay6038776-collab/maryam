const $ = (id) => document.getElementById(id);
$('ringButton').addEventListener('click', () => {
  $('ringNote').classList.toggle('hidden');
  $('ringButton').textContent = $('ringNote').classList.contains('hidden') ? 'افتحي علبة الخاتم' : '💍 هدية من القلب';
});
$('openLetter').addEventListener('click', () => {
  const paper = $('letterPaper'); paper.classList.toggle('open');
  $('openLetter').textContent = paper.classList.contains('open') ? 'اقفلي الرسالة ♡' : 'افتحي الرسالة ♡';
  if (paper.classList.contains('open')) setTimeout(() => paper.scrollIntoView({behavior:'smooth',block:'center'}), 200);
});
