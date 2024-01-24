import { PageHeaderContainer } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function PageHeader({ title, subtitle, ...rest }) {
  const navigate = useNavigate();

  return (
    <PageHeaderContainer {...rest}>
      <div>
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </PageHeaderContainer>
  );
}
