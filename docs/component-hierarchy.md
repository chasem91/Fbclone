## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**ProfileContainer**
 - ProfileHeader
  * ProfileIndex

**PostContainer**
 - PostHeader
  + PostIndex

**CommentContainer**
 - CommentHeader
 - CommentIndex


**LikeContainer**


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/profile/:id" | "ProfileContainer" |
| "/home/friend/:id/profile" | "ProfileContainer" |
| "/home/newsfeed" | "NewsfeedContainer" |
