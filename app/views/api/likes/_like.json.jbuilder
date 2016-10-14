json.id like.id
json.likeable do
  json.id like.likeable_id
  json.type like.likeable_type
end
json.liker do
  json.id like.liker.id
  json.full_name "#{like.liker.first_name} #{like.liker.last_name}"
end
