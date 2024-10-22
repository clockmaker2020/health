document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const bmi = weight / (height * height);
  const bmiPrime = bmi / 25;

  document.getElementById('bmi').innerText = bmi.toFixed(1);
  document.getElementById('bmi-prime').innerText = bmiPrime.toFixed(2);

  const message = bmi < 18.5 ? '저체중' :
                  bmi < 24.9 ? '당신의 체중은 정상입니다.' :
                  bmi < 29.9 ? '과체중' : '비만';
  document.querySelector('.result-message p').innerText = message;
}
