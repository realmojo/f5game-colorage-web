import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page8 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-8", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>8. 어느색이 가장 밝은가요?</strong>
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/question8.png"
          className="pt-2 w-full"
          alt="qna1"
        />
      </div>

      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio className="qna1" value={4}>
              <div
                style={{ width: 200, height: 40, background: "#305fee" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={2}>
              <div
                style={{ width: 200, height: 40, background: "#f98f49" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={1}>
              <div
                style={{ width: 200, height: 40, background: "#f61f2b" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={5}>
              <div
                style={{ width: 200, height: 40, background: "#ffd435" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={3}>
              <div
                style={{ width: 200, height: 40, background: "#a042bb" }}
              ></div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/result">다음</Link>
        </Button>
      </div>
    </div>
  );
};
