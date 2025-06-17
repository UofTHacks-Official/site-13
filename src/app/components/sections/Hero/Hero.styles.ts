import { styled } from "@mui/material/styles";

export const StyledHeroContainer = styled('div')({
    position: "relative",
    minHeight: "100vh",
});

export const StyledTitleSection = styled('div')({
    position: "relative",
    zIndex: 1,
    padding: "2rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    display: "flex",
    minHeight: "100vh",
});

export const StyledLowerHeroSection = styled('div')({
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    width: "100vw",
    height: "auto",
    pointerEvents: "none",
});