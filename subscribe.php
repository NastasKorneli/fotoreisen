<?php
// Включение отображения ошибок для диагностики
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Проверяем, был ли отправлен POST-запрос
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем имя и email из формы
    $name = htmlspecialchars($_POST['news-name']);
    $email = filter_var($_POST['news-email'], FILTER_VALIDATE_EMAIL);

    // Проверка на правильность введенных данных
    if ($email && $name) {
        // Подключаемся к базе данных с новыми данными
        $servername = "kornelinastas.lima-db.de";  // Внешний хост
        $username = "USER439644_pmapg";  // Имя пользователя
        $password = "424_VUi-qfBt7gH";  // Новый пароль
        $dbname = "db_439644_1";  // Имя базы данных

        // Создаем подключение
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Проверка на ошибку подключения
        if ($conn->connect_error) {
            die("Ошибка подключения: " . $conn->connect_error);
        }

        // Проверяем, существует ли уже такой email в базе данных
        $sql = "SELECT id FROM subscribers WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();

        // Если email уже существует, выводим сообщение
        if ($stmt->num_rows > 0) {
            echo "Этот email уже подписан!";
        } else {
            // Добавляем нового подписчика в базу данных
            $sql = "INSERT INTO subscribers (name, email) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('ss', $name, $email);
            if ($stmt->execute()) {
                echo "Спасибо за подписку, " . $name . "!";
            } else {
                echo "Ошибка при подписке, попробуйте позже.";
            }
        }

        // Закрываем соединение с базой данных
        $stmt->close();
        $conn->close();
    } else {
        echo "Неверный формат имени или email.";
    }
}


?>
