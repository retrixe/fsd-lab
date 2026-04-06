<?php 
include 'db.php'; 
$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $sql = "UPDATE student SET name='$name', email='$email', mobile='$mobile', department='$dept' WHERE id=$id";
    mysqli_query($conn, $sql);
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head><title>Edit Student</title></head>
<body>
    <h2>Update Student Details</h2>
    <form method="POST">
        <input type="text" name="name" value="<?php echo $row['name']; ?>" required><br><br>
        <input type="email" name="email" value="<?php echo $row['email']; ?>" required><br><br>
        <input type="text" name="mobile" value="<?php echo $row['mobile']; ?>" required><br><br>
        <input type="text" name="department" value="<?php echo $row['department']; ?>" required><br><br>
        <button type="submit" name="update">Update</button>
        <a href="index.php">Cancel</a>
    </form>
</body>
</html>
