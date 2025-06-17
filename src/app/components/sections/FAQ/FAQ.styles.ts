import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const FAQSection = styled("section")({
    padding: "clamp(6rem, 10vw, 10rem) clamp(2rem, 4vw, 4rem) clamp(4rem, 8vw, 8rem)",
    color: "var(--text-primary)",
    position: "relative",
    zIndex: 1,
});

const HeaderContainer = styled(Box)({
    textAlign: "center",
    marginBottom: "clamp(3rem, 6vw, 4rem)",
});

const Title = styled(Typography)({
    fontFamily: "var(--font-inter) !important",
    fontSize: "clamp(1.8rem, 5vw, 2.5rem) !important",
    fontWeight: "700 !important",
    marginBottom: "1rem !important",
    color: "var(--text-primary)",
});

const Subtitle = styled(Typography)({
    fontSize: "clamp(1.1rem, 2vw, 1.25rem) !important",
    color: "var(--text-secondary)",
    opacity: 0.8,
});

const StyledAccordion = styled(Accordion)({
    background: "transparent !important",
    border: "none !important",
    borderRadius: "0 !important",
    marginBottom: "0 !important",
    boxShadow: "none !important",

    "&:last-child": {
        borderBottom: "none !important",
    },

    "&:before": {
        display: "none",
    },
});

const StyledAccordionSummary = styled(AccordionSummary)({
    padding: "clamp(1rem, 3vw, 1.5rem) 0 !important",
    minHeight: "auto !important",
    position: "relative",

    "&:hover": {
        "&::before": {
            content: '""',
            position: "absolute",
            top: "clamp(0.25rem, 1vw, 0.5rem)",
            bottom: "clamp(0.25rem, 1vw, 0.5rem)", 
            left: -10,
            right: 0,
            background: "rgba(255, 255, 255, 0.05)",
            pointerEvents: "none",
        },
    },

    "& .MuiAccordionSummary-content": {
        margin: "0 !important",
    },

    "& .MuiAccordionSummary-expandIconWrapper": {
        order: -1,
        marginRight: "1rem",
        marginLeft: 0,
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    padding: "0 0 clamp(1rem, 3vw, 1.5rem) 0 !important",
    paddingLeft: "calc(1.5rem + 1rem) !important",
});

const Question = styled(Typography)({
    fontFamily: "var(--font-open-sans) !important",
    fontSize: "clamp(0.9rem, 1.8vw, 1rem) !important",
    fontWeight: "600 !important",
    color: "var(--text-primary)",
    lineHeight: "1.4 !important",
});

const Answer = styled(Typography)({
    fontFamily: "var(--font-open-sans) !important",
    fontSize: "clamp(0.85rem, 1.6vw, 0.9rem) !important",
    color: "var(--text-secondary)",
    lineHeight: "1.6 !important",
});

const StyledIcon = styled("div")({
    color: "white !important",
    fontSize: "1.5rem !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
        fontSize: "1.5rem",
    },
});

const FAQGrid = styled(Grid)(({ theme }) => ({
    maxWidth: "100%",

    [theme.breakpoints.down("sm")]: {
        gap: "0 !important",
    },
}));

export { FAQSection, HeaderContainer, Title, Subtitle, StyledAccordion, StyledAccordionSummary, StyledAccordionDetails, Question, Answer, StyledIcon, FAQGrid };