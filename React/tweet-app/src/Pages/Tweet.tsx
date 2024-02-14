import React, { useState } from "react";
import { UserTweetObject } from "../Interfaces/UserTweet";
import { tweetPageRegex } from "../Utilities/Regex/TweetPage";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { uploadTweetAPI } from "../Services/APIservices";
import { useSelector } from "react-redux";
import { IRootState } from "../Store";

export default function Tweet() {
  const [tweetObject, setTweetObject] = useState<UserTweetObject>({
    title: "",
    description: "",
  });

  const user = useSelector((state: IRootState)=>state.user.userData);

  const handleTweetObjectChange = (name: string, value: string) => {
    setTweetObject({
      ...tweetObject,
      [name]: value,
    });
  };

  const tweetObjectValidation = () => {
    const { titlePattern, descriptionPattern } = tweetPageRegex;
    return (
      titlePattern.test(tweetObject.title) &&
      descriptionPattern.test(tweetObject.description)
    );
  };

  const submit=async()=>{
    if(user){
    const res: AxiosResponse = await uploadTweetAPI({...tweetObject, UserId: user.id});
    if(res){
        if(res.data && res.data.message && res.data.statusCode===200){
            toast.success(res.data.message, {
                position: "top-right",
            });
            setTweetObject({
                title: "",
                description: "",
            });
            return;
        }
        toast.error(res.data.message, {
            position: "top-right"
        });
        return;
    }}
  }

  const onSubmit = () => {
    const valid = tweetObjectValidation();
    if(valid){
        submit();
        return;
    }
    toast.warning('invalid title or description', {position: "top-right"});
    return;
  };

  return (
    <div className="tweet">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        Title:{" "}
        <input
          name="title"
          value={tweetObject.title}
          onChange={(e) =>
            handleTweetObjectChange(e.target.name, e.target.value)
          }
          type="text"
        />
      </div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          whiteSpace: "preserve",
        }}
      >
        Description:{" "}
        <textarea
          name="description"
          value={tweetObject.description}
          onChange={(e) =>
            handleTweetObjectChange(e.target.name, e.target.value)
          }
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <button
        onClick={onSubmit}
        style={{
          marginTop: 40,
          alignSelf: "center",
        }}
        className="btn btn-follow"
      >
        Upload
      </button>
    </div>
  );
}
