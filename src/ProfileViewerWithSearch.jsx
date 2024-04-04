import { useEffect, useState } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";

const BASE_URL = "http://api.github.com/users";

function ProfileViewerWithSearch (){
  const [username, setUsername] = useState("colt");
  const [profile, setProfile] = useState({data: null, isLoading: true});

  useEffect(
    function fetchUserOnUsernameChange(){
      async function fetchUser(){
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({data: userResult.data, isLoading: false});
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({data:null, isLoading: true});
    setUsername(username);
  }
  
  if (profile.isLoading) return <i>Loading...</i>;

  return (
    <div>
    <ProfileSearchForm search={search}/>
      {profile.data && (
      <div>
        <b>{profile.data.name}</b>
        <img src={profile.data.avatar_url} />
      </div>)}
    </div>
  )
}

export default ProfileViewerWithSearch