import React from "react";
import * as S from "./Body.styled";

export default function Body() {
  return (
    <S.BodyContainer>
      <h1>PactSafe Example with a Form</h1>
      <form id="myPageForm">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {/* <!-- Note the div container here! --> */}
        <div id="pactsafeContainer"></div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </S.BodyContainer>
  );
}
