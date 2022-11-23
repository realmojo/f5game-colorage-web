import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import { Share } from "./Share";
import { AdsenseLoading } from "./adsense/loading";
import { AdsenseResult } from "./adsense/result";

export const Result = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResult, setIsResult] = useState(false);
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let score = 0,
      sum = 0;
    for (let i = 1; i <= 8; i += 1) {
      score = localStorage.getItem(`color-qna-${i}`)
        ? Number(localStorage.getItem(`color-qna-${i}`))
        : 1;
      sum += score;
    }
    setTotal(sum);
    if (7 <= sum && sum <= 12) {
      setAge("20세 이하");
      setText(
        "여권에 뭐라고 쓰여있는지는 중요하지 않아요. 마음걱정 하나 없는 청소년 입니다. 실제로 스무살이 넘으셨다면 축하합니다. 지금까지 인생에 대한 끊임없는 열정과 사랑을 간직해 오셨습니다. 앞으로도 계속 빛을 내시길 바랍니다."
      );
    } else if (13 <= sum && sum <= 20) {
      setAge("20 ~ 29세");
      setText(
        "활동적이고 창의적이고 생동감이 넘치지만 어른이라고 할 수 있습니다. 어린 시절과 10대 시절은 지났지만 좋은 것만 남기고 불필요한 것들은 모두 버렸습니다. 그렇다고 해서 재미가 없다는 건 아닙니다. 여러분의 삶을 예전만큼 흥미진진 합니다."
      );
    } else if (21 <= sum && sum <= 28) {
      setAge("30 ~ 39세");
      setText(
        "여전히 활동적이고 아이디어들의 호기심이 많지만 책임감과 사려가 깊어요. 생각해보면 그건 아이들의 삶에 대한 기쁨과 어른들의 독립 사이에 완벽한 균형이에요. 전성기를 누리고 있습니다."
      );
    } else if (29 <= sum && sum <= 35) {
      setAge("40 ~ 49세");
      setText(
        "성숙하고 경험이 많고 삶을 어떻게 살아야 하는지 정확히 알고 있습니다. 쓸데없는 일을 할 시간이 없고 단호하고 열심히 일을 합니다. 무엇을 원하고 어떻게 그것을 얻는지 알고 있습니다. 계속해서 주변의 모든 사람들에게 필요한 영감을 주시길 바랍니다."
      );
    } else if (36 <= sum) {
      setAge("50세 이상");
      setText(
        "전혀 나쁜뜻이 아닙니다. 반대로 여러분은 현명하고 침착합니다. 인생이 뭔지 알고 편안함을 높이 평가하는 시기입니다. 모든 사람이 조언을 구하는 상대 입니다. 게다가 언제나 믿을만 합니다. 요즘에는 찾아보기 힘든 장점이 있기 때문에 친구들은 무슨 수를 써더라도 여러분을 지켜야 해요."
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="">
      {!isResult ? (
        <>
          <h1 className="text-3xl text-center pt-16">
            결과를 기다리고 있습니다.
          </h1>
          {isLoading ? (
            <div className="text-center pt-4 mb-2">
              <Spin size="large" />
            </div>
          ) : (
            ""
          )}
          <AdsenseLoading />
          {isLoading ? (
            ""
          ) : (
            <div className="text-center">
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
                onClick={() => setIsResult(true)}
              >
                확인하기
              </Button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="pt-8">
            <div className="text-center text-2xl font-bold">
              당신의 정신연령 나이는?
            </div>

            <AdsenseResult />

            <div className="text-center pt-4 text-4xl">{age}</div>
            <div className="text-left pt-4 pb-4">{text}</div>
            {total >= 7 && total <= 12 ? (
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/10.jpg"
                className="w-full"
                alt="10"
              />
            ) : (
              ""
            )}
            {total >= 13 && total <= 20 ? (
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/20.jpg"
                className="w-full"
                alt="20"
              />
            ) : (
              ""
            )}
            {total >= 21 && total <= 28 ? (
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/30.jpg"
                className="w-full"
                alt="30"
              />
            ) : (
              ""
            )}
            {total >= 29 && total <= 35 ? (
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/40.jpg"
                className="w-full"
                alt="40"
              />
            ) : (
              ""
            )}
            {total >= 36 ? (
              <img
                src="https://tistory.s3.ap-northeast-2.amazonaws.com/50.jpg"
                className="w-full"
                alt="50"
              />
            ) : (
              ""
            )}
          </div>
          <Share />
          <div className="text-center">
            <div className="text-center pb-4 text-3xl">
              다른 테스트 하러가기
            </div>
            <div className="text-center pb-4">
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://f5game.co.kr">F5 Games</a>
              </Button>
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://mbti.f5game.co.kr">MBTI 검사 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://animal.f5game.co.kr">영적동물 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://color.f5game.co.kr">색맹 테스트</a>
              </Button>
              <Button
                className="mt-2 mb-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://play.google.com/store/apps/details?id=com.f5game.mbti">
                  MBTI 블라인드
                </a>
              </Button>
              <Button
                className="mt-2"
                style={{ width: 336 }}
                type="primary"
                size="large"
              >
                <a href="https://play.google.com/store/apps/details?id=com.f5game.today">
                  오늘의 운세
                </a>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
