"use client";

import React, { useState } from "react";
import {
  FAQSection,
  HeaderContainer,
  Title,
  Subtitle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  Question,
  Answer,
  StyledIcon,
} from "./FAQ.styles";
import { faqs, FAQ as FAQType } from "./faqs";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Container, Box } from "@mui/material";

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const handleAccordionChange =
    (faqId: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (isExpanded) {
          newSet.add(faqId);
        } else {
          newSet.delete(faqId);
        }
        return newSet;
      });
    };

  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);

  const renderFAQColumn = (faqList: FAQType[]) => (
    <Box>
      {faqList.map((faq) => (
        <StyledAccordion
          key={faq.id}
          expanded={expandedItems.has(faq.id)}
          onChange={handleAccordionChange(faq.id)}
          disableGutters
          elevation={0}
        >
          <StyledAccordionSummary
            expandIcon={
              <StyledIcon>
                {expandedItems.has(faq.id) ? <RemoveIcon /> : <AddIcon />}
              </StyledIcon>
            }
          >
            <Question>{faq.question}</Question>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Answer>{faq.answer}</Answer>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );

  return (
    <FAQSection>
      <Container maxWidth="lg">
        <HeaderContainer>
          <Title variant="h2">Frequently Asked Questions</Title>
          <Subtitle variant="h6">
            Everything you need to know about UofTHacks 13
          </Subtitle>
        </HeaderContainer>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          <Box>{renderFAQColumn(leftColumnFaqs)}</Box>
          <Box>{renderFAQColumn(rightColumnFaqs)}</Box>
        </Box>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
