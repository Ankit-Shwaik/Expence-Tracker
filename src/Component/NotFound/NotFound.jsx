import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Result
      className="bg-white rounded-lg text-center"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/"> Back Home</Link>
        </Button>
      }
    />
  );
};
