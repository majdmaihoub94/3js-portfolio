import React from "react";

import styled from "styled-components";
import ExperinceTab from "./Tab";
import { workExperienceData } from "./data.js";

const TabsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex: 1;
`;
const TabsContent = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  flex: 2;
`;
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  width: 1200px;
`;

const List = styled.ul``;
const ListItem = styled.li`
  margin-top: 20px !important;
  list-style-type: disc; /* Set list item marker as a bullet point */
  margin-left: 20px; /* Add left margin to create indentation */
`;
const HeadlineWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffbd59;
  margin-bottom: 10px;
`;

const Company = styled.div`
  font-size: 18px;
  color: #ffffff;
`;

const Location = styled.div`
  font-size: 14px;
  color: #999;
`;

const Date = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

const Badge = styled.span`
  background-color: #ffbd59;
  align-items: center;
  cursor: default;
  display: inline-flex;
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  border-style: solid;
  border-width: 0;
  border-radius: 9999px;
  padding: 0.28rem 1rem;
  margin: 5px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffbd59;
  margin-right: 20px;
`;

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(
    workExperienceData[0].headLine
  );

  const handleActive = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <TabsContainer>
          {/* Generate tabs */}
          {workExperienceData?.map((tab, index) => (
            <span onClick={() => handleActive(tab.headLine)}>
              <ExperinceTab
                key={index}
                word={tab.headLine}
                active={activeTab}
              />
            </span>
          ))}
        </TabsContainer>

        <TabsContent>
          {workExperienceData?.map(
            (tab) =>
              tab.headLine === activeTab && (
                <React.Fragment key={tab.title}>
                  <HeadlineWrapper>{tab.title}</HeadlineWrapper>
                  <Company>{tab.company}</Company>
                  <Date>{tab.date}</Date>
                  <List>
                    {" "}
                    {/* Render the description property as bullet points */}
                    {tab.description.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </List>
                  <SubTitle>Skills</SubTitle>

                  <BadgeWrapper>
                    {tab.skills.map((skill, index) => (
                      <Badge>{skill}</Badge>
                    ))}
                  </BadgeWrapper>
                </React.Fragment>
              )
          )}
        </TabsContent>
      </Container>
    </>
  );
};
