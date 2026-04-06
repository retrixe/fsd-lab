<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>
    <h2>Student Management System</h2>

    <form method="POST" action="">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="mobile" placeholder="Mobile" required>
        <input type="text" name="department" placeholder="Department" required>
        <button type="submit" name="submit">Add Student</button>
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        $dept = $_POST['department'];

        $sql = "INSERT INTO student (name, email, mobile, department) VALUES ('$name', '$email', '$mobile', '$dept')";
        mysqli_query($conn, $sql);
        header("Location: index.php");
    }
    ?>

    <hr>

    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>Actions</th>
        </tr>
        <?php
        $result = mysqli_query($conn, "SELECT * FROM student");
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['email']}</td>
                <td>{$row['mobile']}</td>
                <td>{$row['department']}</td>
                <td>
                    <a href='edit.php?id={$row['id']}'>Edit</a> | 
                    <a href='delete.php?id={$row['id']}' onclick='return confirm(\"Are you sure?\")'>Delete</a>
                </td>
            </tr>";
        }
        ?>
    </table>
</body>
</html>
