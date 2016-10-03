{
  currentUser: {
    id: 1,
    username: "chasem91",
    email: "chasemartin91@gmail.com",
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProfile: {errors: ["body can't be blank"]},
    createPost: {errors: ["body can't be blank"]},
    createComment: {errors: ["body can't be blank"]}
  },
  currentProfile: {
    id: 23,
    user_id: 14,
    first_name: "Chase",
    last_name: "Martin",
    gender: "male",
    birthday: "02-05-1991",
    posts: {
      1: {
        id: 1
        profile_id: 23,
        author_id: 3,
        content: "cool profile",
        comments: {
          7: {
            id: 7,
            post_id: 1,
            author_id: 56,
            content: "not really",
            likes: {
              126: {
                id: 126,
                author_id: 40,
                parent_type: "comment",
                parent_id: 7,
                created_at: "01-22-2016"
              }
            }
          }
        }
      },
      4: {
        id: 4,
        profile_id: 23,
        author_id: 4,
        content: "I agree"
      }
    }
  },
  newsFeed: {
    activities: {
      224: {
        id: 224,
        type: "friendship",
        user_a_id: 90,
        user_b_id: 34
      }
    }
  }
}
