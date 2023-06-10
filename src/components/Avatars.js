import React, { useState } from "react";
import "./Avatar.css";
import { Card, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { AiOutlineHeart } from "react-icons/ai";
import Users from "./Users";

const Avatars = (props) => {
  const userReceived = props.usersData;
  const user = userReceived;
  const [avatars, setAvatars] = useState(user);
  const [edit, setEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = (userId) => {
    const updatedAvatars = avatars.map((item) => {
      if (item.id === userId) {
        return { ...item, liked: !item.liked };
      }
      return item;
    });
    setAvatars(updatedAvatars);
  };

  const deleteHandle = (userId) => {
    const updatedAvatars = avatars.filter((item) => item.id !== userId);
    setAvatars(updatedAvatars);
  };
  const editHandle = (user) => {
    setEdit(user);
    setIsModalOpen(true);
  };
  const updateUserData = (updatedUser) => {
    const updatedData = avatars.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setAvatars(updatedData);
  };

  return (
    <div className="card-container">
      {avatars.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <Card
            style={{
              width: 300,
              borderRadius: 0,
                          
              
            }}
            cover={
              <img
                alt="example"
                src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
                style={{ backgroundColor: "#f5f5f5" }}
              />
            }
            actions={[
              item && item.liked ? (
                <div onClick={() => handleLike(item.id)}>
                  <HeartFilled
                    style={{
                      fontSize:  "20px",
                      color: "red",
                      overflow: "hidden",
                    }}
                  />
                </div>
              ) : (
                <div onClick={() => handleLike(item.id)}>
                  <AiOutlineHeart
                    key="heart"
                    style={{
                      fontSize:  "20px",
                      color: "red",
                      overflow: "hidden",
                    }}
                  />
                </div>
              ),

              <EditOutlined
                key="edit"
                style={{ fontSize: "20px" }}
                onClick={() => editHandle(item)}
              />,
              <DeleteFilled
                key="delete"
                style={{ fontSize: "20px" }}
                onClick={() => deleteHandle(item.id)}
              />,
            ]}
            className="custom-card"
          >
            <div className="users-item">
              <Typography>{item.name}</Typography>
            </div>
            <div className="users-item">
              <MailOutlined />
              <Typography>{item.email}</Typography>
            </div>
            <div className="users-item">
              <PhoneOutlined />
              <Typography>{item.phone}</Typography>
            </div>
            <div className="users-item">
              <GlobalOutlined />
              <Typography>{item.website}</Typography>
            </div>
          </Card>
        </div>
      ))}
      {edit && (
        <Users
          updateUserData={updateUserData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setEdit={setEdit}
          edit={edit}
        />
      )}
    </div>
  );
};

export default Avatars;
