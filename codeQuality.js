// level {2}


const getUser = async() => {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let [user,Profile,p]=[doc[0],doc[1].doc[2]]

  
    const userProfile = {
      user: user,
      profile: Profile,
      posts: p
    };
  
    return userProfile;
  }