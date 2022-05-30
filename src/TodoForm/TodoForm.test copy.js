import React from "react";
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  // 1
  it("has input and a button", () => {
    render(<TodoForm />);
    screen.getByPlaceholderText("할 일을 입력하세요.");
    screen.getByText("등록");
  });

  //   2
  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요.");

    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });

    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    // jest : mock 함수
    const onInsert = jest.fn();
    render(<TodoForm />);

    const input = screen.getByPlaceholderText("할 일을 입력하세요.");
    const button = screen.getByText("등록");

    // 수정
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });

    // 버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
