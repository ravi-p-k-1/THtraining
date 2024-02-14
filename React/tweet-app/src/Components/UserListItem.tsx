import React, { useEffect, useState } from "react";
import { UserData } from "../Interfaces/ViewFollowUser";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../Store";
import { followUserAPI, getFollowingUsersAPI, unfollowUserAPI } from "../Services/APIservices";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { userActions } from "../Store/UserSlice";

export default function UserListItem({
  id,
  userName,
  firstName,
  lastName,
}: {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
}) {
  const dispatch = useDispatch();
  const user: UserData | null = useSelector(
    (state: IRootState) => state.user.userData
  );
  const [following, setFollowing] = useState<boolean>();
  const followingUsersData = useSelector(
    (state: IRootState) => state.user.followingUsersData
  );

  useEffect(() => {
    const isFollowing = followingUsersData.includes(id);
    setFollowing(isFollowing);
  }, [followingUsersData]);

  const handleUserFollowing = async () => {
    if (user) {
      const res: AxiosResponse = await followUserAPI({
        currentUserId: user.id,
        followedUserId: id,
      });
      dispatch(userActions.follow(id));
      setFollowing(true);
      if (res && res.data && res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
        });
      }
    }
  };

  const handleUserUnfollowing = async () => {
    if (user) {
      const res: AxiosResponse = await unfollowUserAPI({
        currentUserId: user.id,
        followedUserId: id,
      });
      dispatch(userActions.unfollow(id));
      setFollowing(false);
      if (res && res.data && res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="userlistitem">
      <div>
        User: {userName}
        <br />
        <small>{firstName + " " + lastName}</small>
      </div>
      {!following && (
        <button
          style={{
            alignItems: "center",
            justifySelf: "flex-end",
          }}
          className="btn btn-follow"
          onClick={handleUserFollowing}
        >
          Follow
        </button>
      )}
      {following && (
        <button
          style={{
            alignItems: "center",
            justifySelf: "flex-end",
          }}
          className="btn btn-unfollow"
          onClick={handleUserUnfollowing}
        >
          Unfollow
        </button>
      )}
    </div>
  );
}
