// html��� �߿� �ش� ������ �Ҵ��Ŵ
const icon = document.querySelector('.icon');
const sub_btn = document.querySelector('.sub_btn');
const down_btn = document.querySelector('#down_btn');
const video_title = document.querySelector('#video_title');

// �̺�Ʈ�� ó��
icon.addEventListener('click', () => {
  icon.classList.toggle('active'); // active�� ���ٸ� active/ active�� �ִٸ� ��
});

sub_btn.addEventListener('click', () => {
  sub_btn.classList.toggle('active'); // active�� ���ٸ� active/ active�� �ִٸ� ��
});

down_btn.addEventListener('click', () => {
  video_title.classList.toggle('active'); // active�� ���ٸ� active/ active�� �ִٸ� ��
});
