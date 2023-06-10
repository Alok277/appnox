import React, { useEffect, useState } from "react";
import "./Users.css";

import { Form, Input, Modal } from "antd";

const Users = ({ edit, isModalOpen, setIsModalOpen, setEdit , updateUserData }) => {
  const [nameValue, setNameValue] = useState(edit.name);
  const [emailValue, setEmailValue] = useState(edit.email);
  const [phoneValue, setPhoneValue] = useState(edit.phone);
  const [websiteValue, setWebsiteValue] = useState(edit.website);

  useEffect(() => {
    if (edit) {
      setNameValue(edit.name);
      setEmailValue(edit.email);
      setPhoneValue(edit.phone);
      setWebsiteValue(edit.website);
    }
  }, [edit]);

  const nameValueHandler = (e) => {
    setNameValue(e.target.value);
  };
  const emailValueHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const phoneValueHandler = (e) => {
    setPhoneValue(e.target.value);
  };
  const websiteValueHandler = (e) => {
    setWebsiteValue(e.target.value);
  };
 
  const handleOk = () => {
    const updatedEdit = {
      ...edit,
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      website: websiteValue,
    };
    setEdit(updatedEdit);    
    updateUserData(updatedEdit); 
    setNameValue("");
    setEmailValue("");
    setPhoneValue("");
    setWebsiteValue("");
    setIsModalOpen(false);
    setEdit(null);
  };
 
  const handleCancel = () => {
    setNameValue("");
    setEmailValue("");
    setPhoneValue("");
    setWebsiteValue("");
    setIsModalOpen(false);
    setEdit(null);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="custom-modal"
        bodyStyle={{ padding: "20px" }}
        width={620}
      >
        <Form>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Input
            defaultValue={nameValue}
            onChange={nameValueHandler}
            style={{ width: "300px" }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Input
            defaultValue={emailValue}
            onChange={emailValueHandler}
            style={{ width: "300px" }}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone!",
            },
          ]}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Input
            defaultValue={phoneValue}
            onChange={phoneValueHandler}
            style={{ width: "300px" }}
          />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "Please input your Website!",
            },
          ]}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Input
            defaultValue={websiteValue}
            onChange={websiteValueHandler}
            style={{ width: "300px" }}
          />
        </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
