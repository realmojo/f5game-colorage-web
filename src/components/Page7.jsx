import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page7 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-7", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>7. 맘에드는 물감색을 고르세요</strong>
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/question7.png"
          className="pt-2 w-full"
          alt="qna1"
        />
      </div>

      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio value={2}>A</Radio>
            <Radio value={4}>B</Radio>
            <Radio value={5}>C</Radio>
            <Radio value={1}>D</Radio>
            <Radio value={6}>E</Radio>
            <Radio value={3}>F</Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page8">다음</Link>
        </Button>
      </div>
    </div>
  );
};
