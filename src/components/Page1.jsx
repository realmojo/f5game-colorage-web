import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page1 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-1", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>1. 어느색이 가장 눈에 보이나요?</strong>
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/question1.png"
          className="pt-2 w-full"
          alt="qna1"
        />
      </div>

      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio className="qna1" value={4}>
              <div
                style={{ width: 200, height: 40, background: "#0d000c" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={5}>
              <div
                style={{ width: 200, height: 40, background: "#604164" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={1}>
              <div
                style={{ width: 200, height: 40, background: "#ad775d" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={2}>
              <div
                style={{ width: 200, height: 40, background: "#c0a77e" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={3}>
              <div
                style={{ width: 200, height: 40, background: "#423265" }}
              ></div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page2">다음</Link>
        </Button>
      </div>
    </div>
  );
};
