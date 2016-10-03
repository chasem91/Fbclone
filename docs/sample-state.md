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
  profile: {
    user_id: 1,
    
  },
  notebooks: {
    1: {
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
