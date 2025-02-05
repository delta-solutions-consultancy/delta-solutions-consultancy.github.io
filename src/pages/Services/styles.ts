import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding: 5rem 0;
`;

export const ContentWrapper = styled.div`
  padding: 2rem 0;

  h6 {
    font-size: 2.575rem;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #18216d;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 0;
  }
`;
