import React from "react";
import * as S from "./Loader.styles";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined spin />;

const Loader = () => {
  return <S.StyledLoader indicator={antIcon} />;
};

export default Loader;
