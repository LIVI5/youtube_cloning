// html��� �߿� �ش� ������ �Ҵ��Ŵ
const sub_btn = document.querySelector('.sub_btn');
const icons = document.querySelectorAll('.icon');
const down_btn = document.querySelector('#down_btn');
const video_title = document.querySelector('#video_title');

// �̺�Ʈ�� ó��
icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});
sub_btn.addEventListener('click', () => {
  sub_btn.classList.toggle('active'); // active�� ���ٸ� active/ active�� �ִٸ� ��
});

down_btn.addEventListener('click', () => {
  video_title.classList.toggle('active'); // active�� ���ٸ� active/ active�� �ִٸ� ��
});
