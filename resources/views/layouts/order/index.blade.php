<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/css/common/style.css">
    <link rel="stylesheet" href="/css/order/style.css">
</head>
<body>
    <div class="container">
        @yield('content')
    </div>

    <script src="/js/order/script.js"></script>
</body>
</html>