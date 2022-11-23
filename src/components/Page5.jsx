import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page5 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-5", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>5. 어느색이 가장 마음에 드시나요?</strong>
      </div>
      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio className="qna1" value={2}>
              <div
                style={{ width: 200, height: 40, background: "#2264e6" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={4}>
              <div
                style={{ width: 200, height: 40, background: "#90b8ff" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={3}>
              <div
                style={{ width: 200, height: 40, background: "#1936ac" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={5}>
              <div
                style={{ width: 200, height: 40, background: "#4775cb" }}
              ></div>
            </Radio>
            <Radio className="qna1" value={1}>
              <div
                style={{ width: 200, height: 40, background: "#3640f3" }}
              ></div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page6">다음</Link>
        </Button>
      </div>
    </div>
  );
};
