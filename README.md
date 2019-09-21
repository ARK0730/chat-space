## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false, unique: true|

### Association
- has_many:groups, through: :groups_users
- has_many:messages

## massegesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- belongs_to :user
- belongs_to :messege

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user