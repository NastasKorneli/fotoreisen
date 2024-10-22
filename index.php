<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <?php
        echo "<p>Сегодняшняя дата: " . date("Y-m-d") . "</p>";
    ?>

    <form method="POST" action="">
        <label for="email">Введите ваш email:</label>
        <input type="email" name="email" required>
        <input type="submit" value="Подписаться">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        if ($email) {
            // Подключение к базе данных
            $conn = new mysqli('localhost', 'username', 'password', 'database');
            if ($conn->connect_error) {
                die("Ошибка подключения: " . $conn->connect_error);
            }

            // Проверка, не существует ли уже email
            $sql = "SELECT id FROM subscribers WHERE email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                echo "<p>Этот email уже подписан!</p>";
            } else {
                // Вставка нового подписчика
                $sql = "INSERT INTO subscribers (email) VALUES (?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param('s', $email);
                if ($stmt->execute()) {
                    echo "<p>Спасибо за подписку!</p>";
                } else {
                    echo "<p>Ошибка при подписке, попробуйте позже.</p>";
                }
            }
            $stmt->close();
            $conn->close();
        } else {
            echo "<p>Неверный формат email.</p>";
        }
    }
    ?>

</body>
</html>
