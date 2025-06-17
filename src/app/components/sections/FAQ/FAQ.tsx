"use client";

import React, { useState, useEffect } from "react";
import {
  FAQSection,
  HeaderContainer,
  Title,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  Question,
  Answer,
  StyledIcon,
  Subtitle,
} from "./FAQ.styles";
import { faqs, FAQ as FAQType } from "./faqs";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Container, Box } from "@mui/material";

const FAQ = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const fadeStart = windowHeight * 0.6;
      const fadeEnd = windowHeight * 0.8;

      if (scrollY <= fadeStart) {
        setBackgroundOpacity(0);
      } else if (scrollY >= fadeEnd) {
        setBackgroundOpacity(1);
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setBackgroundOpacity(fadeProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) {
    return (
      <FAQSection>
        <Container maxWidth="lg">
          <HeaderContainer>
            <Title variant="h4">Frequently Asked Questions</Title>
            <Subtitle variant="h6">
              Everything you need to know about UofTHacks 13
            </Subtitle>
          </HeaderContainer>
        </Container>
      </FAQSection>
    );
  }

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
            <Question>{faq.title}</Question>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Answer dangerouslySetInnerHTML={{ __html: faq.content }} />
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );

  return (
    <FAQSection>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: -1,
          pointerEvents: "none",
          opacity: backgroundOpacity,
          transition: "opacity 0.1s ease-out",
          transform: `translateY(-10%)`,
        }}
      >
      </div>
      <Container maxWidth="md">
        <HeaderContainer>
          <Title variant="h4">Frequently Asked Questions</Title>
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
