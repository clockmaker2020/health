document.getElementById('calculate-btn').addEventListener('click', calculateBMI);
document.getElementById('reset-btn').addEventListener('click', resetFields);

function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) {
    alert('키와 몸무게를 입력하세요.');
    return;
  }

  const bmi = weight / (height * height);
  const bmiPrime = bmi / 25;

  document.getElementById('bmi').innerText = bmi.toFixed(1);
  document.getElementById('bmi-prime').innerText = bmiPrime.toFixed(2);

  const message = bmi < 18.5 ? '저체중' :
                  bmi < 24.9 ? '당신의 체중은 정상입니다.' :
                  bmi < 29.9 ? '과체중' : '비만';
  document.getElementById('message').innerText = message;

  document.getElementById('bmi-range').value = bmi;
  document.getElementById('bmi-label').innerText = bmi < 18.5 ? '저체중' :
                                          bmi < 24.9 ? '정상' :
                                          bmi < 29.9 ? '과체중' : '비만';
}

function resetFields() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('bmi').innerText = '--';
  document.getElementById('bmi-prime').innerText = '--';
  document.getElementById('message').innerText = '당신의 체중은 정상입니다.';
  document.getElementById('bmi-range').value = 24.2;
  document.getElementById('bmi-label').innerText = '정상';
}
