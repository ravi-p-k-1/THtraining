import React, { useEffect, useState } from "react";
import {
  getFollowingUsersAPI,
  searchAllUserAPI,
} from "../Services/APIservices";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../Store";
import { UserData } from "../Interfaces/ViewFollowUser";
import { AxiosResponse } from "axios";
import UserListItem from "../Components/UserListItem";
import { userActions } from "../Store/UserSlice";

export default function View() {
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [usersArray, setUsersArray] = useState<UserData[] | []>([]);
  const user: UserData | null = useSelector(
    (state: IRootState) => state.user.userData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const res: AxiosResponse = await searchAllUserAPI({
          userName: searchBarText,
          currentUser: user.userName,
        });
        setUsersArray(res.data.usersArray);
      }
    };
    fetchData();
  }, [searchBarText]);

  useEffect(() => {
    const fetchData = async () => {
          if (user) {
            const res: AxiosResponse = await getFollowingUsersAPI({
              currentUserId: user.id,
            });
            dispatch(userActions.setFollowers(res.data.usersArray));
          }
        };
        fetchData();
  }, []);
  

  return (
    <div className="view">
      <input
        value={searchBarText}
        onChange={(e) => {
          setSearchBarText(e.target.value);
        }}
        type="text"
        className="search-bar"
      />
      <div className="user-list">
        {user &&
          usersArray.map((data, id, arr) => {
            return (
              <UserListItem
                key={id}
                id={data.id}
                userName={data.userName}
                firstName={data.firstName}
                lastName={data.lastName}
              />
            );
          })}
      </div>
    </div>
  );
}
