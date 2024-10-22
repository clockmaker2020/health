document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight) return;

  const bmi = weight / (height * height);
  const bmiPrime = bmi / 25;

  document.getElementById('bmi').innerText = bmi.toFixed(1);
  document.getElementById('bmi-prime').innerText = bmiPrime.toFixed(2);

  const message = bmi < 18.5 ? 'Underweight' :
                  bmi < 24.9 ? 'Your weight is healthy.' :
                  bmi < 29.9 ? 'Overweight' : 'Obesity';
  document.getElementById('message').innerText = message;

  document.getElementById('bmi-range').value = bmi;
  document.getElementById('bmi-label').innerText = bmi < 18.5 ? 'Underweight' :
                                          bmi < 24.9 ? 'Normal' :
                                          bmi < 29.9 ? 'Overweight' : 'Obesity';
}
