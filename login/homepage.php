<?php
session_start();
include("connect.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage - MindSpace</title>
    
    <!-- Google Fonts: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- External CSS -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #4CAF50; /* Green background */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #fff; /* Text color */
        }

        .container {
            text-align: center;
            background-color: #fff; /* White background for container */
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            width: 60%;
            max-width: 600px;
            color: #4CAF50; /* Green text inside container */
        }

        .container img {
            width: 120px;
            margin-top: 20px;
            transition: transform 0.3s ease;
        }

        .container img:hover {
            transform: scale(1.1);
        }

        .container h1 {
            font-size: 36px;
            margin-bottom: 10px;
            color: #4CAF50; /* Green heading */
        }

        .welcome-message {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        a {
            display: inline-block;
            text-decoration: none;
            font-size: 18px;
            background-color: #4CAF50; /* Green button */
            color: #fff; /* White text for button */
            padding: 12px 25px;
            border-radius: 25px;
            transition: background-color 0.3s ease;
        }

        a:hover {
            background-color: #43a047; /* Darker green on hover */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 30px;
                width: 80%;
            }

            .container h1 {
                font-size: 32px;
            }

            .welcome-message {
                font-size: 24px;
            }

            a {
                font-size: 16px;
            }
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, 
        <?php 
            if (isset($_SESSION['email'])) {
                $email = $_SESSION['email'];
                $query = mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
                while ($row = mysqli_fetch_array($query)) {
                    echo $row['firstName'] . ' ' . $row['lastName'];
                }
            }
        ?>! :)
        </h1>
        <p class="welcome-message">Welcome to MindSpace</p> 
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
