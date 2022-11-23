import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page4 = () => {
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("color-qna-4", value);
  };
  return (
    <div>
      <div className="pt-2 text-2xl">
        <strong>4. 일몰 사진 하나를 고르세요</strong>
      </div>

      <div className="pl-2 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            <Radio className="qna4" value={3}>
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-a.png"
                className="pt-2 w-full"
                alt="qna4"
              />
            </Radio>
            <Radio className="qna4" value={2}>
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-b.png"
                className="pt-2 w-full"
                alt="qna4"
              />
            </Radio>
            <Radio className="qna4" value={4}>
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-c.png"
                className="pt-2 w-full"
                alt="qna4"
              />
            </Radio>
            <Radio className="qna4" value={1}>
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-d.png"
                className="pt-2 w-full"
                alt="qna4"
              />
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page5">다음</Link>
        </Button>
      </div>
    </div>
  );
};
