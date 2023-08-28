-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 28 2023 г., 17:49
-- Версия сервера: 10.6.7-MariaDB
-- Версия PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `final_project`
--

-- --------------------------------------------------------

--
-- Структура таблицы `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `carts`
--

INSERT INTO `carts` (`id`, `created_at`, `updated_at`) VALUES
(30, '2023-08-28 09:00:41', '2023-08-28 09:00:41'),
(31, '2023-08-28 09:05:46', '2023-08-28 09:05:46');

-- --------------------------------------------------------

--
-- Структура таблицы `cart_customers`
--

CREATE TABLE `cart_customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `cart_customers`
--

INSERT INTO `cart_customers` (`id`, `cart_id`, `customer_id`, `created_at`, `updated_at`) VALUES
(35, 30, 15, '2023-08-28 09:00:59', '2023-08-28 09:00:59');

-- --------------------------------------------------------

--
-- Структура таблицы `cart_products`
--

CREATE TABLE `cart_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` tinyint(3) UNSIGNED NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `cart_products`
--

INSERT INTO `cart_products` (`id`, `cart_id`, `product_id`, `quantity`, `color`, `size`, `created_at`, `updated_at`) VALUES
(57, 30, 8, 1, 'pink', 'XL', '2023-08-28 09:00:41', '2023-08-28 09:00:41'),
(58, 30, 7, 2, 'green', 'L', '2023-08-28 09:00:48', '2023-08-28 09:00:52');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `code`, `created_at`, `updated_at`) VALUES
(2, 'Коктейльные платья', 'cocktail_dresses', '2023-08-22 09:30:27', '2023-08-22 09:41:22');

-- --------------------------------------------------------

--
-- Структура таблицы `colors`
--

CREATE TABLE `colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `color_white` tinyint(4) NOT NULL,
  `color_black` tinyint(4) NOT NULL,
  `color_green` tinyint(4) NOT NULL,
  `color_pink` tinyint(4) NOT NULL,
  `color_yellow` tinyint(4) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `colors`
--

INSERT INTO `colors` (`id`, `color_white`, `color_black`, `color_green`, `color_pink`, `color_yellow`, `product_id`, `created_at`, `updated_at`) VALUES
(3, 1, 1, 1, 0, 0, 3, '2023-08-22 09:31:40', '2023-08-22 09:31:40'),
(4, 1, 0, 1, 0, 1, 4, '2023-08-22 09:33:33', '2023-08-22 09:33:33'),
(5, 1, 1, 1, 0, 0, 5, '2023-08-22 09:34:37', '2023-08-22 09:34:37'),
(6, 0, 0, 1, 1, 1, 6, '2023-08-22 09:36:02', '2023-08-22 09:36:02'),
(7, 1, 1, 1, 1, 0, 7, '2023-08-22 09:38:26', '2023-08-22 09:46:10'),
(8, 1, 1, 0, 1, 0, 8, '2023-08-22 09:40:05', '2023-08-22 09:40:05'),
(9, 1, 1, 1, 1, 1, 9, '2023-08-22 09:42:43', '2023-08-22 09:42:43'),
(10, 1, 1, 0, 0, 1, 10, '2023-08-22 09:43:59', '2023-08-22 09:43:59'),
(11, 1, 0, 0, 1, 1, 11, '2023-08-22 09:45:10', '2023-08-22 09:45:10'),
(12, 1, 1, 0, 1, 1, 12, '2023-08-22 09:47:25', '2023-08-22 09:47:25');

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_number` smallint(6) NOT NULL,
  `apartment_number` smallint(6) NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `city`, `street`, `home_number`, `apartment_number`, `phone_number`, `delivery`, `payment`, `created_at`, `updated_at`) VALUES
(15, 'Рома', 'romansahar96@gmail.com', 'Минск', 'Острошицкая', 12, 6, '375293135839', 'europost', 'cash_on_delivery', '2023-08-28 09:00:59', '2023-08-28 09:00:59');

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`id`, `img_1`, `img_2`, `img_3`, `img_4`, `product_id`, `created_at`, `updated_at`) VALUES
(3, '1602CHERN_1.jpg', '1602CHERN_2.jpg', '1602CHERN_3.jpg', '1602CHERN_4.jpg', 3, '2023-08-22 09:31:40', '2023-08-22 09:31:40'),
(4, '1604BEL_1.jpg', '1604BEL_2.jpg', '1604BEL_3.jpg', '1604BEL_4.jpg', 4, '2023-08-22 09:33:33', '2023-08-22 09:33:33'),
(5, '1605BEL_1.jpg', '1605BEL_2.jpg', '1605BEL_3.jpg', '1605BEL_4.jpg', 5, '2023-08-22 09:34:37', '2023-08-22 09:34:37'),
(6, '1611FUC_1.jpg', '1611FUC_2.jpg', '1611FUC_3.jpg', '1611FUC_4.jpg', 6, '2023-08-22 09:36:02', '2023-08-22 09:36:02'),
(7, '2213SDM_1.jpg', '2213SDM_2.jpg', '', '', 7, '2023-08-22 09:38:26', '2023-08-22 09:38:26'),
(8, '2228CHERN_1.jpg', '2228CHERN_2.jpg', '2228CHERN_3.jpg', '2228CHERN_4.jpg', 8, '2023-08-22 09:40:05', '2023-08-22 09:40:05'),
(9, '2228MOLOCH_1.jpg', '2228MOLOCH_2.jpg', '2228MOLOCH_3.jpg', '2228MOLOCH_4.jpg', 9, '2023-08-22 09:42:43', '2023-08-22 09:42:43'),
(10, '2228SAL_1.jpg', '2228SAL_2.jpg', '2228SAL_3.jpg', '2228SAL_4jpg.jpg', 10, '2023-08-22 09:43:59', '2023-08-22 09:43:59'),
(11, '2229PUD_1.jpg', '2229PUD_2.jpg', '2229PUD_3.jpg', '2229PUD_4.jpg', 11, '2023-08-22 09:45:10', '2023-08-22 09:45:10'),
(12, '2302BEL_1jpg.jpg', '2302BEL_2.jpg', '2302BEL_3.jpg', '2302BEL_4.jpg', 12, '2023-08-22 09:47:25', '2023-08-22 10:03:16');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_07_26_115832_create_categories_table', 1),
(6, '2023_07_27_101058_create_products_table', 1),
(7, '2023_07_28_110416_create_sizes_table', 1),
(8, '2023_07_28_132712_create_images_table', 1),
(9, '2023_07_31_105017_create_colors_table', 1),
(10, '2023_08_02_124414_create_prices_table', 1),
(11, '2023_08_08_210804_create_reviews_table', 1),
(12, '2023_08_08_212815_create_product_reviews_table', 1),
(13, '2023_08_15_041208_create_carts_table', 1),
(14, '2023_08_15_051545_create_cart_products_table', 1),
(15, '2023_08_24_094139_create_customers_table', 2),
(16, '2023_08_24_101136_create_cart_customers_table', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `prices`
--

CREATE TABLE `prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `total_price` decimal(7,2) NOT NULL,
  `total_discount` decimal(7,2) DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `prices`
--

INSERT INTO `prices` (`id`, `price`, `discount`, `total_price`, `total_discount`, `product_id`, `created_at`, `updated_at`) VALUES
(3, '269.00', 30, '188.30', '80.70', 3, '2023-08-22 09:31:40', '2023-08-22 09:31:40'),
(4, '195.00', 15, '165.75', '29.25', 4, '2023-08-22 09:33:33', '2023-08-22 09:33:33'),
(5, '239.00', 5, '227.05', '11.95', 5, '2023-08-22 09:34:37', '2023-08-22 12:24:18'),
(6, '269.00', 40, '161.40', '107.60', 6, '2023-08-22 09:36:02', '2023-08-22 14:16:54'),
(7, '189.00', 20, '151.20', '37.80', 7, '2023-08-22 09:38:26', '2023-08-22 14:47:13'),
(8, '159.00', 30, '111.30', '47.70', 8, '2023-08-22 09:40:06', '2023-08-22 09:40:06'),
(9, '79.50', 0, '79.50', '0.00', 9, '2023-08-22 09:42:43', '2023-08-22 14:16:44'),
(10, '159.00', 0, '159.00', '0.00', 10, '2023-08-22 09:43:59', '2023-08-22 09:43:59'),
(11, '169.00', 10, '152.10', '16.90', 11, '2023-08-22 09:45:11', '2023-08-22 09:45:11'),
(12, '100.00', 25, '75.00', '25.00', 12, '2023-08-22 09:47:25', '2023-08-22 10:03:16');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `rating` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `rating`, `created_at`, `updated_at`) VALUES
(3, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 1602CHERN', '<p>Шикарное платье с характером! Трудно найти что-либо более притягательное, чем ажурные кружева и загадочная полупрозрачность. Рекомендуем!</p>', 2, NULL, '2023-08-22 09:31:40', '2023-08-22 09:31:40'),
(4, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 1604BEL', '<p>Платье в стиле бэби-долл не лишено очарования и непосредственности. Миниатюрные пуговицы, декоративная розовая кайма, перфорация в виде цветов- все эти элементы смотрятся гармонично и придают сарафану изюминку. В таком платье можно выгодно подчеркнуть изящную фигуру. Добавьте себе настроения и легкости!</p>', 2, NULL, '2023-08-22 09:33:33', '2023-08-22 09:33:33'),
(5, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 1605BEL', '<p>Платье-рубашка с поясом длины макси сделает ваш образ еще более женственным и загадочным. Главное преимущество такой модели в том, что она подойдет девушкам и женщинам с любым типом фигуры, визуально скорректирует проблемные места, благодаря свободному крою. \"И в пир, и в мир\"-это тоже про эту модель, на любом мероприятии вы будете выглядеть восхитительно.</p>', 2, NULL, '2023-08-22 09:34:37', '2023-08-22 09:34:37'),
(6, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 1611FUC', '<p>Оригинальное платье с воланами и открытой спиной притягивает восхищенные взгляды не только мужчин, но и женщин) Хочется рассматривать каждую деталь и любоваться образом в стиле фламенко. Смелое, головокружительное-оно станет фаворитом в вашем гардеробе!  </p>', 2, NULL, '2023-08-22 09:36:02', '2023-08-22 09:36:02'),
(7, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 2213BEL', '<p>Очаровательная модель длины миди, рукав 3/4, женственный силуэт с пышной юбкой—всё это сложилось в нежный образ, а базовая белая расцветка и красивый узор добавляют эстетического минимализма!  Будьте уверены, платье украсит не только будни, но и разделит с вами важные моменты вашей жизни.</p>', 2, NULL, '2023-08-22 09:38:26', '2023-08-22 09:38:26'),
(8, 'ПЛАТЬЕ 2228CHERN', '<p>Если бы нежность была платьем) Воздушное хлопковое мини со спущенным плечом, в меру объемными рукавами и завышенной талией. Для особого случая или без-оно идеально впишется в любое событие.</p>', 2, NULL, '2023-08-22 09:40:05', '2023-08-22 09:40:05'),
(9, 'ПЛАТЬЕ 2228MOLOCH', '<p>Если бы нежность была платьем) Воздушное хлопковое мини со спущенным плечом, в меру объемными рукавами и завышенной талией. Для особого случая или без-оно идеально впишется в любое событие.</p>', 2, '8.00', '2023-08-22 09:42:43', '2023-08-28 09:03:57'),
(10, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 2228SAL', '<p>Спущенные рукава буффы подчеркивают изящность женских плеч, длина мини создают легкий и игривый эффект, а расслабленный крой позволит сочетать это платье как с утончённым каблуком, так и на плоском ходу. Это платье вдохновляет на прогулки под музыку по солнечным улочкам города, на свидание на террасе, а также его удобно брать на отдых!</p>', 2, NULL, '2023-08-22 09:43:59', '2023-08-22 09:43:59'),
(11, 'КОКТЕЙЛЬНОЕ ПЛАТЬЕ 2229PUD', '<p>Платье на пуговичках в длине миди, с боковыми карманами и с объёмными рукавами - образ, в котором вы будете собирать комплименты. И не нужно искать повод, чтобы надеть красивое платье. Украшать этот мир нужно каждый день!</p>', 2, NULL, '2023-08-22 09:45:10', '2023-08-22 09:45:10'),
(12, 'ПЛАТЬЕ 2302BEL', '<p>Если бы нежность была платьем) Воздушное хлопковое мини со спущенным плечом, притягательным декольте, в меру объемными рукавами и завышенной талией. Для особого случая или без-оно идеально впишется в любое событие.</p>', 2, '5.67', '2023-08-22 09:47:25', '2023-08-28 09:03:20');

-- --------------------------------------------------------

--
-- Структура таблицы `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `review_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `product_id`, `review_id`, `created_at`, `updated_at`) VALUES
(6, 12, 6, '2023-08-24 10:10:41', '2023-08-24 10:10:41'),
(7, 12, 7, '2023-08-28 09:02:31', '2023-08-28 09:02:31'),
(8, 12, 8, '2023-08-28 09:03:20', '2023-08-28 09:03:20'),
(9, 9, 9, '2023-08-28 09:03:57', '2023-08-28 09:03:57');

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `detail`, `rating`, `user_id`, `created_at`, `updated_at`) VALUES
(6, 'Платье среднее', 6, 2, '2023-08-24 10:10:41', '2023-08-24 10:10:41'),
(7, 'Это платье просто великолепное!', 10, 3, '2023-08-28 09:02:31', '2023-08-28 09:02:31'),
(8, 'Честно говоря, платье ужасное', 1, 3, '2023-08-28 09:03:20', '2023-08-28 09:03:20'),
(9, 'Платье очень даже неплохое', 8, 3, '2023-08-28 09:03:57', '2023-08-28 09:03:57');

-- --------------------------------------------------------

--
-- Структура таблицы `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `s_size` tinyint(4) NOT NULL,
  `m_size` tinyint(4) NOT NULL,
  `l_size` tinyint(4) NOT NULL,
  `xl_size` tinyint(4) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sizes`
--

INSERT INTO `sizes` (`id`, `s_size`, `m_size`, `l_size`, `xl_size`, `product_id`, `created_at`, `updated_at`) VALUES
(3, 1, 0, 1, 0, 3, '2023-08-22 09:31:40', '2023-08-22 09:31:40'),
(4, 0, 1, 0, 1, 4, '2023-08-22 09:33:33', '2023-08-22 09:33:33'),
(5, 0, 0, 1, 1, 5, '2023-08-22 09:34:37', '2023-08-22 09:34:37'),
(6, 1, 1, 1, 0, 6, '2023-08-22 09:36:02', '2023-08-22 09:36:02'),
(7, 0, 0, 1, 1, 7, '2023-08-22 09:38:26', '2023-08-22 09:38:26'),
(8, 0, 0, 1, 1, 8, '2023-08-22 09:40:05', '2023-08-22 09:40:05'),
(9, 0, 0, 1, 1, 9, '2023-08-22 09:42:43', '2023-08-22 09:42:43'),
(10, 1, 0, 1, 0, 10, '2023-08-22 09:43:59', '2023-08-22 09:43:59'),
(11, 0, 0, 1, 1, 11, '2023-08-22 09:45:10', '2023-08-22 09:45:10'),
(12, 1, 0, 1, 0, 12, '2023-08-22 09:47:25', '2023-08-22 09:47:25');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_number` smallint(6) NOT NULL,
  `apartment_number` smallint(6) NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `city`, `street`, `home_number`, `apartment_number`, `phone_number`, `is_admin`) VALUES
(2, 'Таня', 'roma.rusak.96r@gmail.com', NULL, '$2y$10$VaGqEvTLZcOc3brBMv/HB.bT6Y28NtajLww7dzAvQ8rrSKfC9FNrG', NULL, '2023-08-24 10:10:15', '2023-08-24 10:10:15', 'Минск', 'Шугаева', 23, 85, '+375296511389', 0),
(3, 'Рома', 'romansahar96@gmail.com', NULL, '$2y$10$35BUOxvLFZWZ4.cvwrCCI.GYZgIGSfB/74nTrNBVdRXuONfUryYhG', NULL, '2023-08-28 09:00:06', '2023-08-28 09:00:06', 'Минск', 'Острошицкая', 12, 6, '+375293135839', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `cart_customers`
--
ALTER TABLE `cart_customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_customers_cart_id_foreign` (`cart_id`),
  ADD KEY `cart_customers_customer_id_foreign` (`customer_id`);

--
-- Индексы таблицы `cart_products`
--
ALTER TABLE `cart_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_products_cart_id_foreign` (`cart_id`),
  ADD KEY `cart_products_product_id_foreign` (`product_id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `colors_product_id_foreign` (`product_id`);

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_product_id_foreign` (`product_id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prices_product_id_foreign` (`product_id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Индексы таблицы `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_reviews_product_id_foreign` (`product_id`),
  ADD KEY `product_reviews_review_id_foreign` (`review_id`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`);

--
-- Индексы таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sizes_product_id_foreign` (`product_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT для таблицы `cart_customers`
--
ALTER TABLE `cart_customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT для таблицы `cart_products`
--
ALTER TABLE `cart_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `colors`
--
ALTER TABLE `colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `prices`
--
ALTER TABLE `prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `cart_customers`
--
ALTER TABLE `cart_customers`
  ADD CONSTRAINT `cart_customers_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_customers_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `cart_products`
--
ALTER TABLE `cart_products`
  ADD CONSTRAINT `cart_products_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `colors`
--
ALTER TABLE `colors`
  ADD CONSTRAINT `colors_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD CONSTRAINT `product_reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_reviews_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
