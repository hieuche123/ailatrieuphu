import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "1 + 1 = ?",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "0",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Hiểu có đẹp trai không ?",
      answers: [
        {
          text: "Quá là đẹp trai luôn,hết nước chấm",
          correct: true,
        },
        {
          text: "Như ma chơi",
          correct: false,
        },
        {
          text: "Âm binh cô hồn",
          correct: false,
        },
        {
          text: "Đẹp trai chừ cái mặt ",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Dung nên gọi Hiểu bằng gì ?",
      answers: [
        {
          text: "Em Hiểu",
          correct: false,
        },
        {
          text: "Sếp Hiểu",
          correct: false,
        },
        {
          text: "Đệ Hiểu",
          correct: false,
        },
        {
          text: "Anh Hiểu",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Hiểu sinh ra là để ?",
      answers: [
        {
          text: "Vứt só",
          correct: false,
        },
        {
          text: "Bỏ tử kính",
          correct: false,
        },
        {
          text: "Yêu thương",
          correct: true,
        },
        {
          text: "Nhém xuống ao",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Quả mít chín nhà hàng xóm xà sang vườn nhà mình thì ta sẽ làm gì ?",
      answers: [
        {
          text: "Báo lên cơ quan chức năng",
          correct: false,
        },
        {
          text: "Hái và mang sang cho bác",
          correct: false,
        },
        {
          text: "Lấy 1 nửa quả để ăn",
          correct: false,
        },
        {
          text: "Còn cái nịt",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Con gà bị gãy chân bạn sẽ làm gì ?",
      answers: [
        {
          text: "Đưa đến bác sĩ nối chân",
          correct: false,
        },
        {
          text: "Bẻ nốt chân kia cho có đôi có cặp",
          correct: false,
        },
        {
          text: "Đắp thuốc theo công thức:3 củ sả + 3 lá chanh + 3 hành khô + 2 thìa nước mắm",
          correct: true,
        },
        {
          text: "kệ bà nó",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Đàn ông lâu không yêu gọi là ?",
      answers: [
        {
          text: "Ế",
          correct: false,
        },
        {
          text: "Trụ trì",
          correct: false,
        },
        {
          text: "Cổ thụ",
          correct: false,
        },
        {
          text: "Thiếu nữ",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Nếu bạn có 1 tỷ đô anh ấy sẽ làm gì?",
      answers: [
        {
          text: "Hô mưa gọi gió",
          correct: false,
        },
        {
          text: "Mua cả thành phố mắc võng nằm chơi chơi",
          correct: false,
        },
        {
          text: "Mở một công ty thuê nhân viên 1 tháng đếm tiền được mấy tháng ấy lấy nấy",
          correct: false,
        },
        {
          text: "Tỉnh ngủ đi bạn ơi.không làm mà đòi có ăn có ăn c** ăn d**b***",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Ngoài đẹp trai Hiểu còn gì tar?",
      answers: [
        {
          text: "không những đẹp trai mà lại còn handsome",
          correct: false,
        },
        {
          text: "Chặt hết rừng lấy gỗ làm sách cũng không ghi hết được những thứ đẹp của Hiểu",
          correct: false,
        },
        {
          text: "Tất cả đều đúng",
          correct: true,
        },
        {
          text: "Đã bị đẹp trai lại còn bị dễ thương bẩm sinh",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Ai là người rửa bát?",
      answers: [
        {
          text: "Đàn ông",
          correct: false,
        },
        {
          text: "Phụ nữ",
          correct: false,
        },
        {
          text: "Bê đê",
          correct: false,
        },
        {
          text: "Máy rữa bát",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Dung ăn gì mà xinh vậy?",
      answers: [
        {
          text: "Ăn cơm mẹ nấu",
          correct: true,
        },
        {
          text: "Ăn chửi",
          correct: false,
        },
        {
          text: "Ăn kẻ nhớ kẻ trồng cây",
          correct: false,
        },
        {
          text: "Ăn 1 khế chả 1 cục vàng",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Làm thế nào để lợn ngừng kêu?",
      answers: [
        {
          text: "Nói chuyện thương lượng với nó",
          correct: false,
        },
        {
          text: "Cho nó ăn no",
          correct: false,
        },
        {
          text: "Cho nó đi chơi với ny",
          correct: true,
        },
        {
          text: "Thịt nó",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">GAMEOVER You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
