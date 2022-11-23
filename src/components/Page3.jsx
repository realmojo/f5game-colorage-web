import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page3 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-3", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>3. 이 사진은 흑백일까요?</strong>
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/question3.png"
          className="pt-2 w-full"
          alt="qna3"
        />
      </div>

      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio value={5}>예</Radio>
            <Radio value={0}>아니오</Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page4">다음</Link>
        </Button>
      </div>
    </div>
  );
};
