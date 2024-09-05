// دالة لإرسال الأوامر للتحكم في الستارة
function sendCommand(command) {
  fetch('/' + command)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// دالة لحفظ إعدادات WiFi
function saveWifiSettings() {
  const ssid = document.getElementById('ssid').value;
  const password = document.getElementById('password').value;

  // إرسال بيانات WiFi إلى ESP8266
  fetch(`/setWifi?ssid=${encodeURIComponent(ssid)}&password=${encodeURIComponent(password)}`)
    .then(response => response.text())
    .then(data => alert('WiFi Settings Saved'))
    .catch(error => console.error('Error:', error));
}
