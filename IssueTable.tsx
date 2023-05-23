import React from "react";
import { colors } from "@atlaskit/theme";
import styled from "styled-components";
import { IssueKey } from "./IssueKey";
import { IssueSummary } from "./IssueSummary";
import { Issue } from "./api";

const Container =styled.div`
background-color: #fff;
color: ${colors.N800};
  box-shadow: rgba(23, 43, 77, 0.2) 0px 1px 1px 0px,
  rgba(23, 43, 77, 0.2) 0px 0px 1px 0px;
  border-radius: 4px;
  padding-top: 1px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 14px;
  font-weight: 400px;
  line-height: 20px;
  min-width: 162px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #dfe1e6;
  border-spacing: 10px 0px;
  box-sizing: border-box;
  `

export interface Props {
    issueData: Issue
}

export const IssueTable = ({issueData} : Props): JSX.Element =>{
    let selectedMap = {};
    for (l)

    return (
         <Container>

         </Container> 
            
    )
}