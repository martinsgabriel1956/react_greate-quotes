import { MainNavigation } from "./MainNavigation";

import { Container } from "./styles";

export function Layout({ children }, ...props) {
  return (
    <>
      <MainNavigation />
      <Container>{children}</Container>
    </>
  );
}
