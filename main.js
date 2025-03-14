// html노드 중에 해당 변수에 할당시킴
const icon = document.querySelector('.icon');
const sub_btn = document.querySelector('.sub_btn');
const down_btn = document.querySelector('#down_btn');
const video_title = document.querySelector('#video_title');

// 이벤트를 처리
icon.addEventListener('click', () => {
  icon.classList.toggle('active'); // active가 없다면 active/ active가 있다면 끔
});

sub_btn.addEventListener('click', () => {
  sub_btn.classList.toggle('active'); // active가 없다면 active/ active가 있다면 끔
});

down_btn.addEventListener('click', () => {
  video_title.classList.toggle('active'); // active가 없다면 active/ active가 있다면 끔
});
