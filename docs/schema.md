# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
first_name  | integer   | not null
last_name   | integer   | not null
birthday    | integer   | not null
gender      | integer   | not null

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_a_id   | integer   | not null
user_b_id   | integer   | not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile_id  | integer   | not null
author_id   | integer   | not null
content     | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null
author_id   | integer   | not null
content     | string    | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null
parent_type | integer   | not null
parent_id   | integer   | not null
created_at  | date      | not null

## activities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_a_id   | integer   | not null
user_b_id   | integer   | not null
type        | string    | not null
created_at  | date      | not null
